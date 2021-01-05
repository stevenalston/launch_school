ENV['RACK_ENV'] = 'test'

require 'minitest/autorun'
require 'rack/test'
require 'fileutils'

require_relative '../cms'

class AppTest < Minitest::Test
  include Rack::Test::Methods

  def setup
    FileUtils.mkdir_p(data_path)
  end

  def teardown
    FileUtils.rm_rf(data_path)
  end

  def app
    Sinatra::Application
  end

  def session
    last_request.env["rack.session"]
  end

  def admin_session
    { 'rack.session' => { user: { username: 'admin', password: 'secret'} } }
  end

  def test_index
    create_document 'about.md'
    create_document 'changes.txt'
    create_document 'history.txt'

    get '/'
    
    assert_equal 200, last_response.status
    assert_equal 'text/html;charset=utf-8', last_response['Content-Type']
    assert_includes last_response.body, 'about.md'
    assert_includes last_response.body, 'changes.txt'
    assert_includes last_response.body, 'history.txt'
  end

  def test_viewing_text_document
    create_document 'history.txt', 'Ruby 0.95 released'

    get '/history.txt'

    assert_equal 200, last_response.status
    assert_equal 'text/html;charset=utf-8', last_response['Content-Type']
    assert_includes last_response.body, 'Ruby 0.95 released'
  end

  def test_document_not_found
    get '/notafile.ext' # Attempt to access a nonexistent file

    assert_equal 302, last_response.status # Assert that the user was redirected

    get last_response['Location'] # Request the page that the user was redirected to

    assert_equal 200, last_response.status
    assert_includes last_response.body, 'notafile.ext does not exist'

    get '/' # Reload the page
    refute_includes last_response.body, 'notafile.ext does not exist' # Assert that our message has been removed
  end

  # test/cms_test.rb
  def test_viewing_markdown_document
    create_document 'about.md', '# About Ruby'

    get '/about.md'
   
    assert_equal 200, last_response.status
    assert_equal 'text/html;charset=utf-8', last_response['Content-Type']
    assert_includes last_response.body, '<h1>About Ruby</h1>'
  end

  def test_editing_document
    create_document 'changes.md'

    get '/changes.md/edit', {}, admin_session

    assert_equal 200, last_response.status
    assert_includes last_response.body, '<textarea'
    assert_includes last_response.body, '<button type="submit"'
  end

  def test_editing_document_signed_out
    create_document 'changes.txt'

    get '/changes.txt/edit'

    assert_equal 302, last_response.status
    assert_equal 'You must be signed in to do that.', session[:message]
  end

  def test_updating_document
    create_document 'changes.md', 'previous content'

    post '/changes.md', {content: 'new content'}, admin_session

    assert_equal 302, last_response.status

    get last_response['Location']

    assert_includes last_response.body, 'changes.md was successfully updated'

    get '/changes.md'
    assert_equal 200, last_response.status
    assert_includes last_response.body, 'new content'
  end

  def test_updating_document_signed_out
    post '/changes.txt', { content: 'new content' }

    assert_equal 302, last_response.status
    assert_equal 'You must be signed in to do that.', session[:message]
  end

  def test_view_new_document_form
    get '/new', {}, admin_session

    assert_equal 200, last_response.status
    assert_includes last_response.body, '<input'
    assert_includes last_response.body, '<button type="submit"'
  end

  def test_view_new_document_form_signed_out
    get '/new'

    assert_equal 302, last_response.status
    assert_equal 'You must be signed in to do that.', session[:message]
  end

  def test_create_new_document
    post '/create', { filename: 'test.txt' }, admin_session
    assert_equal 302, last_response.status

    get last_response['Location']
    assert_includes last_response.body, 'test.txt has been created'

    get '/'
    assert_includes last_response.body, 'test.txt'
  end

  def test_create_new_document_signed_out
    post '/create', { filename: 'test.txt' }

    assert_equal 302, last_response.status
    assert_equal 'You must be signed in to do that.', session[:message]
  end

  def test_create_new_document_without_filename
    post '/create', { filename: '' }, admin_session
    assert_equal 422, last_response.status
    assert_includes last_response.body, 'A name is required'
  end

  def test_delete_document
    create_document('test.txt', '')

    post '/test.txt/destroy', {}, admin_session
    assert_equal 302, last_response.status
    get last_response['Location']
    assert_includes last_response.body, 'test.txt was successfully deleted'
    
    get '/'
    refute_includes last_response.body, 'test.txt'
  end

  def test_deleting_document_signed_out
    create_document('test.txt')

    post '/test.txt/destroy'
    assert_equal 302, last_response.status

    assert_equal 'You must be signed in to do that.', session[:message]
  end

  def 

  def test_signin_form
    get '/users/sign_in'

    assert_equal 200, last_response.status
    assert_includes last_response.body, '<input'
    assert_includes last_response.body, '<button type="submit"'
  end

  def test_signin

    post '/users/sign_in', username: 'admin', password: 'secret'
    assert_equal 302, last_response.status
    assert_equal "admin", session[:user][:username]
    assert_equal "Signed in as admin", session[:message]

    get last_response['Location']
    assert_includes last_response.body, 'Signed in as admin'
    assert_includes last_response.body, 'Sign Out admin'
  end

  def test_signin_with_bad_credentials
    post '/users/sign_in', username: 'guest', password: 'shhhh'
    assert_equal 422, last_response.status
    assert_includes last_response.body, 'Invalid credentials'
  end

  def test_signout
    get '/', {}, admin_session
    assert_includes last_response.body, 'Signed in as admin'

    
    get '/users/sign_out'
    assert_equal "admin has been signed out", session[:message]
    get last_response['Location']
    assert_nil session[:user]

    assert_includes last_response.body, 'Sign In'
  end
end
