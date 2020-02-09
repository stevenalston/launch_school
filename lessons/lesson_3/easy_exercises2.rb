# exercise 1
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
ages.select {|k|  k == "Spot"}
puts ages.include?('Lily')
puts ages.member?('Herman')
puts ages.key?('Spot')

# exercise 2
munsters_description = "The Munsters are creepy in a good way."
puts munsters_description.swapcase
puts munsters_description.capitalize
puts munsters_description.downcase
puts munsters_description.upcase

# exercise 3
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10 }
additional_ages = { "Marilyn" => 22, "Spot" => 237 }
ages.merge!(additional_ages)
puts ages

# exercise 4
advice = "Few things in life are as important as house training your pet dinosaur."
puts advice.match?('dino')
puts advice.split.include?('dino')
puts advice.split.include?('house')

# exercise 5 6 7
flintstones = %w[Fred Wilma Barney Betty BamBam Pebbles]
flintstones << 'Dino'
flintstones.concat(%w[Limes Hoppy])
p flintstones

# exercise 8
advice.slice!(0, advice.index('house'))
puts advice

# exercise 9
statement = "The Flintstones Rock!"
puts statement.count('t')

# exercise 10 - center title on a 40 character wide table
title = "Flintstone Family Members"
spaces = (40 % title.length)
puts title.rjust(spaces, ' ') # rjust integer arg not working as a variable?
# launchschool answer
puts title.center(40)
