=begin
Greeting a user
Write a program that will ask for user's name. The program will then greet the user.
If the user writes "name!" then the computer yells back to the user.
=end

puts 'What is your name?'
name = gets.chomp

response = name.end_with?('!') ? "HELLO #{name.upcase}. WHY ARE WE SCREAMING?" : "Hello #{name.capitalize}"

puts response