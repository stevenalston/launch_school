# advice = "Few things in life are as important as house training your pet dinosaur."
# advice['important'] = 'urgent'
# advice.gsub!('important', 'urgent')

# numbers = [1, 2, 3, 4, 5]
# numbers.delete_at(1) # => [1, 3, 4, 5]
# numbers.delete(1) # => [2, 3, 4, 5]

# Programmatically determine if 42 lies between 10 and 100.
# (10..100).include?(42)
# (10..100).cover?(42)

# famous_words = "seven years ago..."
# puts "four scores and " + famous_words
# puts famous_words.prepend("Four score and ") # Mutates string
# puts famous_words.split.unshift("four scores and").join(' ')

flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["BamBam", "Pebbles"]]
flintstones.flatten! # => ["Fred", "Wilma", "Barney", "Betty", "BamBam", "Pebbles"]

flintstones = { "Fred" => 0, "Wilma" => 1, "Barney" => 2, "Betty" => 3, "BamBam" => 4, "Pebbles" => 5 }
# Turn a hash into an array containing Barney key and number
p flintstones.assoc('Barney')
