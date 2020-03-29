=begin
Sum or Product of Consecutive Integers
Write a program that asks the user to enter an integer greater than 0, then asks if the user
wants to determine the sum or product of all numbers between 1 and the entered integer.
=end

puts 'Enter an integer greater than 0'
n = gets.chomp.to_i
puts 'Do you want the sum or product between 1 and you number (s | p)'
operation = gets.chomp.downcase
# total has to start at 1 in order to multiply
total = 1

# since total is initialized at 1, range starts at 2
(2..n).each { |num| operation == 's' ? total += num : total *= num }

puts total


