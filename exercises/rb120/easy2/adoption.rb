class Owner
  attr_reader :name
  attr_reader :pets

  def initialize(name, pets=[])
    @name = name
    @pets = pets
  end

  def number_of_pets
    @pets.size
  end

end

class Pet
  attr_reader :type, :name
  def initialize(type, name)
    @type = type
    @name = name
  end
end

class Shelter
  attr_reader :adoptions
  def initialize(adoptions=[])
    @adoptions = adoptions
  end

  def adopt(owner, pet)
    owner.pets << pet
    @adoptions << owner if !(adoptions.include?(owner))
  end

  def print_adoptions
    adoptions.each do |a|
      puts "#{a.name} has adopted the following pets:"
      a.pets.each {|pet| puts "a #{pet.type} named #{pet.name}"}
    end
  end
end

butterscotch = Pet.new('cat', 'Butterscotch')
pudding      = Pet.new('cat', 'Pudding')
darwin       = Pet.new('bearded dragon', 'Darwin')
kennedy      = Pet.new('dog', 'Kennedy')
sweetie      = Pet.new('parakeet', 'Sweetie Pie')
molly        = Pet.new('dog', 'Molly')
chester      = Pet.new('fish', 'Chester')

phanson = Owner.new('P Hanson')
bholmes = Owner.new('B Holmes')

shelter = Shelter.new
shelter.adopt(phanson, butterscotch)
shelter.adopt(phanson, pudding)
shelter.adopt(phanson, darwin)
shelter.adopt(bholmes, kennedy)
shelter.adopt(bholmes, sweetie)
shelter.adopt(bholmes, molly)
shelter.adopt(bholmes, chester)
shelter.print_adoptions
puts "#{phanson.name} has #{phanson.number_of_pets} adopted pets."
puts "#{bholmes.name} has #{bholmes.number_of_pets} adopted pets."