require 'sinatra'
require 'sinatra/reloader' if development?
require 'sinatra/content_for'
require 'tilt/erubis'
require 'redcarpet'
require 'yaml'
require 'bcrypt'

configure do
  enable :sessions
  set :session_secret, 'secret'

  set :erb, escape_html: true
end

before do
  @files = session[:files] = Dir.glob('*.*', base: data_path)
  @markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
end

def valid_credentials?(username, password)
  credentials = load_user_credentials

  if credentials.key?(username)
    bcrypt_password = BCrypt::Password.new(credentials[username])
    bcrypt_password == password
  else
    false
  end
end

def data_path
  if ENV['RACK_ENV'] == 'test'
    File.expand_path('test/data', __dir__)
  else
    File.expand_path('data', __dir__)
  end
end

def load_user_credentials
  credentials_path = if ENV['RACK_ENV'] == 'test'
                       File.expand_path('test/data/users.yaml', __dir__)
                     else
                       File.expand_path('data/users.yaml', __dir__)
  end
  YAML.load(File.read(credentials_path))
end

def locate_file(file)
  if @files.include? file.to_s
    File.read("#{data_path}/#{file}")
  else
    session[:message] = "#{file} does not exist!"
    redirect '/'
  end
end

def filename_error(name) 
  # using include? would check each method
  if !(1..100).cover? name.size
    "A name is required"
  elsif (name.split('.').last !=  'txt') && (name.split('.').last != 'md')
    "File must include an extension of .txt or .md"
  elsif session[:files].any? {|file| file == name}
    "File name must be unique"
  end
end

def create_document(name, content = '')
  File.open(File.join(data_path, name), 'w') do |file|
    file.write(content)
  end
end

def get_user(username)
  user_info = load_user_credentials
  user = user_info[username.to_sym] if user_info.keys.include? username.to_sym
end

def user_signed_in?
  session.key?(:user)
end

def require_signed_in_user
  unless user_signed_in?
    session[:message] = 'You must be signed in to do that.'
    redirect '/'
  end
end

# Routes
get '/' do
  @filenames = @files.select { |file| file.split('.').last != 'yaml' }.sort
  erb :files, layout: :layout
end

get '/users/sign_in' do
  erb :sign_in, layout: :layout
end

post '/users/sign_in' do
  password = params[:password]
  username = params[:username]

  user = get_user(username)

  if valid_credentials?(username, password)
    session[:user] = user
    session[:message] = "Signed in as #{session[:user][:username]}"
    redirect '/'
  else
    session[:message] = "Invalid credentials"
    status 422
    erb :sign_in, layout: :layout
  end
end

get '/users/sign_out' do
  session[:message] = "#{session[:user][:username]} has been signed out"
  session[:user] = nil
  redirect '/'
end

get '/new' do
  require_signed_in_user
  erb :new_file, layout: :layout
end

post '/create' do
  require_signed_in_user

  @filename = params[:filename]

  error = filename_error(@filename)
  if error
    session[:message] = error
    status 422
    erb :new_file, layout: :layout
  else
    create_document @filename
    session[:message] = "#{@filename} has been created"
    redirect '/'
  end
end

post '/:filename/destroy' do 
  require_signed_in_user

  name = params[:filename]
  file = File.open(File.join(data_path, name))

  if !file.nil? && File.exist?(file)
    file.close unless file.closed?
    File.delete(file)
    session[:message] = "#{name} was successfully deleted"
  end

  redirect '/'
end

get '/:filename' do
  
  filename = params[:filename]
  headers['Content-Type'] = 'text/html;charset=utf-8'
  
  @file = locate_file(filename)
  erb :file, layout: :layout
end

get '/:filename/edit' do
  require_signed_in_user
  @filename = params[:filename]
  @file = locate_file(@filename)
  @content = locate_file(@filename)

  erb :edit, layout: :layout
end

post '/:filename' do
  require_signed_in_user

  filename = params[:filename] 
  file_path = "#{data_path}/#{filename}"
  content = params[:content]

  File.write(file_path, content)

  session[:message] = "#{filename} was successfully updated"
  redirect "/"
end

not_found do
  redirect '/'
end
