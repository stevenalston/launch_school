class Practice
  attr_reader :self_count, :instance_count
  def initialize(name)
    @name = name
    @self_count = 0
    @instance_count = 0
  end

  def add_to_count()
    self.count += 1
  end

  def instance_add_to_count

  end
end

obj1 = Practice.new('object 1')
obj2 = Practice.new('object 2')

obj1.add_to_count