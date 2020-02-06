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
require 'yaml'
MSG = YAML.load(File.read("messages.yml"))
def valid_number?(obj)
  obj = obj.to_s unless obj.is_a? String
  /\A[+-]?\d+(\.[\d]+)?\z/.match obj
end

def gets_info(msg, type)
  loop do
    puts "#{msg}"
    num = gets.chomp
    if valid_number?(num)
      return num
    else
      puts format((MSG[:reenter]), type: "#{type}")
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
  puts MSG[:welcome]
  amt= gets_info(MSG[:loan], 'dollar')
  mpr = calc_percentage(gets_info(MSG[:mpr], 'number'))
  dur = gets_info(MSG[:duration], 'number')
  puts <<-MSG
  Enter term in Months or Years
  m) Months
  y) Years
  MSG
  term_type = gets.chomp
  term_result = term_type.downcase == 'y' ? dur.to_i * 12 : dur

  3.times do
    puts "calculating..."
    sleep(1)
  end

  p "Monthly Payment: $#{calc_payment(amt, mpr, term_result).round(2)}"
  puts MSG[:again]
  answer = gets.chomp
  break unless answer.downcase == 'y'
end

puts MSG[:bye]
