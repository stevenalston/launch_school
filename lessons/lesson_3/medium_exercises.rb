# Exercise 1
10.times { |number| puts (" " * number) + "The Flintstones Rock!" }

# Exercise 2
puts "the value of 40 + 2 is " + (40 + 2).to_s
puts "the value of 40 + 2 is #{40 + 2}"

# Exercise 3
def factors(number)
  divisor = number
  factors = []
  loop do
    break if number == 0 || divisor == 0
    factors << number / divisor if number % divisor == 0
    divisor -= 1
  end
  # launch school answer:
  # while divisor > 0 do
  #  factors << number / divisor if number % divisor == 0
  #  divisor -= 1
  # end
  factors
end

p factors(25)
