require 'minitest/autorun'
require 'minitest/reporters'
require 'simplecov'
SimpleCov.start
Minitest::Reporters.use!

require_relative '../todolist'

class TodoListTest < MiniTest::Test
  def setup
    @todo1 = Todo.new("Buy milk")
    @todo2 = Todo.new("Clean room")
    @todo3 = Todo.new("Go to gym")
    @todos = [@todo1, @todo2, @todo3]

    @list = TodoList.new("Today's Todos")
    @list.add(@todo1)
    @list.add(@todo2)
    @list.add(@todo3)
  end

  def test_to_a
    assert_equal(@todos, @list.to_a)
  end

  def test_size
    assert_equal(3, @list.size)
  end

  def test_first
    assert_equal(@todo1, @list.first)
  end

  def test_last
    assert_equal(@todo3, @list.last)
  end

  def test_shift
    todo = @list.shift
    assert_equal(@todo1, todo)
    assert_equal([@todo2, @todo3], @list.to_a)
  end

  def test_pop
    todo = @list.pop
    assert_equal(@todo3, todo)
    assert_equal([@todo1, @todo2], @list.to_a)
  end

  def test_done?
    assert_equal(false, @list.done?)
  end

  def test_type_error
    assert_raises(TypeError) {@list.add(1)}
    assert_raises(TypeError) {@list.add('string')}
  end

  def test_shovel
    todo4 = Todo.new('testing')
    @list << todo4
    assert_includes(@list.to_a, todo4)
  end

  def test_add
    todo4 = Todo.new('testing')
    @list.add todo4
    assert_includes(@list.to_a, todo4)
  end

  def test_item_at
    assert_equal(@todo1, @list.item_at(0))
    assert_equal(@todo2, @list.item_at(1))
    assert_raises(IndexError) {@list.item_at(100)}
  end

  def test_mark_done_at
    assert_raises(IndexError) {@list.mark_done_at(100)}
    @list.mark_done_at(1)
    assert_equal(false, @todo1.done?)
    assert_equal(true, @todo2.done?)
    assert_equal(false, @todo3.done?)
  end

  def test_mark_undone_at
    assert_raises(IndexError) {@list.mark_undone_at(100)}
    @list.done!
    @list.mark_undone_at(1)
    assert_equal(true, @todo1.done?)
    assert_equal(false, @todo2.done?)
    assert_equal(true, @todo3.done?)
  end

  def test_done!
    @list.done!
    assert_equal(true, @todo1.done?)
    assert_equal(true, @todo2.done?)
    assert_equal(true, @todo3.done?)
    assert_equal(true, @list.done?)
  end

  def test_remove_at
    assert_raises(IndexError) {@list.remove_at(100)}
    @list.remove_at(1)
    assert_equal([@todo1, @todo3], @list.to_a)
  end

  def test_to_s
    output = <<~OUTPUT.chomp
---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to gym
    OUTPUT

    assert_equal(output, @list.to_s)

    @list.mark_done_at(1)
    output = <<~OUTPUT.chomp
---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to gym
    OUTPUT
    assert_equal(output, @list.to_s)

    @list.done!
    output = <<~OUTPUT.chomp
---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to gym
    OUTPUT
    assert_equal(output, @list.to_s)
  end

  def test_each
    result = []
    @list.each {|todo| result << todo}
    assert_equal([@todo1, @todo2, @todo3], result)

    assert_equal(@list, @list.each {|todo| 'Hi'})
  end

  # My select test
  def test_select
    @todo1.done!
    @todo3.done!
    result = @list.select {|todo| todo.done?}
    assert_equal([@todo1, @todo3], result.to_a)
  end

  # LSchool select test
  # def test_select
  #   @todo1.done!
  #   list = TodoList.new(@list.title)
  #   list.add(@todo1)
  #
  #   assert_equal(list.title, @list.title)
  #   assert_equal(list.to_s, @list.select{ |todo| todo.done? }.to_s)
  # end

end