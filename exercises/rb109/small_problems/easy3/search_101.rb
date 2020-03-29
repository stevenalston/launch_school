=begin
Searching 101
Write a program that solicits 6 numbers from the user, then prints a message that
describes whether or not the 6th number appears amongst the first 5 numbers.
=end

puts 'Enter the 1st number: '
first_num = gets.chomp.to_i
puts 'Enter the 2nd number: '
second_num = gets.chomp.to_i
puts 'Enter the 3rd number: '
third_num = gets.chomp.to_i
puts 'Enter the 4th number: '
fourth_num = gets.chomp.to_i
puts 'Enter the 5th number: '
fifth_num = gets.chomp.to_i
puts 'Enter the last number: '
last_num = gets.chomp.to_i

numbers = [first_num, second_num, third_num, fourth_num, fifth_num]
puts numbers.include?(last_num) ? "The number #{last_num} appears in #{numbers}" : "The number #{last_num} does not appear in #{numbers}"
