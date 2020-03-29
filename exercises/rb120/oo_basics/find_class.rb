puts "Hello".class.name
puts 5.class.name
puts [1, 2, 3].class.name


module Walkable
  def walk
    'Let\'s go for a walk!'
  end
end

class Cat
  include Walkable
  attr_accessor :name
  @@cat_instances = 0
  def initialize(name)
    @name = name
    @@cat_instances += 1
  end

  def greeting
    "Hello! my name is #{name}"
  end

  def to_s
    name
  end

  def self.total
    @@cat_instances
  end
end

scratchy = Cat.new('Scratchy')
kitty = Cat.new('Kitty')
p scratchy.greeting
scratchy.name = 'Luna'
p scratchy.greeting
p scratchy.walk
p Cat.total