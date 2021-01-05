require 'sinatra'
require 'sinatra/reloader'
require 'tilt/erubis'
require 'yaml'

before do
  @user_info = YAML.load(File.read('data/users.yaml'))
  @brand = 'Users and Interests'
  @name = nil
end

helpers do
  def users_interests
    hsh = {usr_cnt: 0, interests_cnt: 0}

    @user_info.each do |k, v|
      hsh[:usr_cnt] = hsh[:usr_cnt] + 1 if k
      v.each { |key, val| hsh[:interests_cnt] = hsh[:interests_cnt] + val.size if key == :interests }
    end

    hsh
  end

end
get '/' do
  redirect '/users'
end

get '/users' do
  @user_names = @user_info

  erb :"users/users"
end

get '/users/new' do
  erb :"users/new"
end

post '/users/new' do
  name, email, interests = params.values

  user = @user_info
  user[name.downcase.to_sym] = {
    email: email,
    interests: interests.gsub(/ /, '').split(',')
  }

  File.open('data/users.yaml', 'w') { |file| file.write(user.to_yaml) }
  redirect '/users'
end

get '/users/:user' do |user|
  @name = user

  @interests = @user_info[user.to_sym]
  
  erb :"users/show"
end

not_found do
  redirect '/'
end
