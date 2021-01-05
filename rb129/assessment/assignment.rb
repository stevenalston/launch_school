module Delegatable
  def delegate
    'Delagating...'
  end
end

class Employee
  attr_reader :name, :serial_number, :desk

  def initialize(name, serial, desk)
    @name = name
    @serial_number = serial
    @desk = desk
  end

  def to_s
    "
    Name: #{self.name}
    Type: #{self.class}
    Serial number: #{self.serial_number}
    Desk: #{self.desk}"
  end
end

class FullTime < Employee
  attr_accessor :vacation_time

  def initialize(name, serial, desk='Cubicle Farm', v_time=10)
    super(name, serial, desk)
    @vacation_time = v_time
  end

  def take_vacation(days)
    self.vacation_time -= days
  end

  def to_s
    "
    Name: #{self.name}
    Type: #{self.class}
    Serial number: #{self.serial_number}
    Vacation Time: #{self.vacation_time}
    Desk: #{self.desk}"
  end
end

class Executive < FullTime
  include Delegatable

  def initialize(name, serial, desk='Corner office', vaca_time=20)
    super
  end
end

class Manager < FullTime
  include Delegatable

  def initialize(name, serial, desk='Private Office', vaca_time=14)
    super
  end
end

class PartTime < Employee
  def initialize(name, serial, desk='Open Area')
    super
  end
end

steve = Executive.new("Steve Alston", "1242345")
puts steve

rodger = Manager.new("Rodger Briggs", "1242346")
puts rodger

bobby = FullTime.new("Robert Allen", "1242347")
puts bobby

sal = PartTime.new("Sal Goldstein", "1242348")
puts sal

steve.take_vacation(5)
puts steve