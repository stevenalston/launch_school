=begin
START
  ** Mortgage Calculator Formula: m = p * (j / (1 - (1 + j)**(-n)))

SET MESSAGES

READ welcome message
WHILE calculation
  WHILE
    GET loan amount
    SET amount
    IF valid number
      break
    ELSE
      READ number not valid
  WHILE
    GET annual percentage rate
    SET apr
    IF valid number
      convert to percentage
      break
    ELSE
      READ number not valid
  WHILE
    GET loan duration
    SET duration
    IF valid number
      break
    ELSE
      READ number not valid
=end
def valid_number?(num)
  /\d/.match(num) && /\d*\.?\d$/.match(num)
end

def gets_info(msg)
  loop do
    puts "#{msg}"
    num = gets.chomp
    if valid_number?(num)
      return num
    else
      puts 'Please enter a valid dollar amount'
    end
  end
end
def calc_percentage(num)
  (num.to_f / 12) / 100
end
def calc_payment(amt, mpr, dur)
  pymt = amt.to_f * (mpr.to_f / (1 - (1 + mpr.to_f)**(-dur.to_f)))
  pymt
end
loop do
  puts "=========== Car Payment Calculator ============"
  amt= gets_info('Enter the Loan Amount: ')
  mpr = calc_percentage(gets_info('Enter the Annual Percentage Rate'))
  dur = gets_info("Enter the term/duration of the loan in months")

  p "Monthly Payment: $#{calc_payment(amt, mpr, dur).round(2)}"
  puts "Do you want to calculate another monthly payment?(Y to continue)"
  answer = gets.chomp
  break unless answer.downcase == 'y'
end

puts "Goodbye... Thank you for using the Car Payment Calculator!"
