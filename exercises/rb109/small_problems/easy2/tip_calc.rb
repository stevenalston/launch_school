=begin
Tip calculator
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate.
The program must compute the tip and then display both the tip and the total amount of the bill.
=end

puts 'What is the bill?'
bill = gets.chomp.to_f
puts 'What percentage would you like to tip?'
tip = gets.chomp.to_f / 100
tip_amt = (bill * tip).round(2)
final_bill = bill + tip_amt

puts "The tip is #{tip_amt}"
puts "The total bill is #{final_bill}"
