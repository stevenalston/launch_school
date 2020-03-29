module Swimmable
  def swim
    'Swimming!'
  end
end

module Fetchable
  def fetch
    'fetching!' if bool
  end
end

class Animal
  def run
    'running!'
  end

  def jump
    'jumping!'
  end

end

class Dog < Animal
  include Swimmable
  include Fetchable

  def speak
    'bark!'
  end

end

teddy = Dog.new
puts teddy.speak           # => "bark!"
puts teddy.swim

class Bulldog < Dog
  def swim
    'can\'t swim!'
  end
end

benny = Bulldog.new
p benny.speak
p benny.swim

class Cat < Animal
  def speak
    'Meow1'
  end
end

kitty = Cat.new
p kitty.jump
p kitty.swim

