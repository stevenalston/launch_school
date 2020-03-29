=begin
When will I Retire?
Build a program that displays when the user will retire and how many years she has to work till retirement.
=end
year = 2020
puts 'What is your age?'
age = gets.chomp.to_i

puts 'What age would you like to retire?'
retire = gets.chomp.to_i

years_left = retire - age
retirement_year = year + years_left
puts "It's 2020. You will retire in #{retirement_year}"
puts "You only have #{years_left} years left of working!"