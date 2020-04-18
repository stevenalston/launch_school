=begin
Multiples of 3 and 5
Write a method that searches for all multiples of 3 or 5 that lie between 1 and some other number, and then
computes the sum of those multiples. For instance, if the supplied number is 20,
the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Examples

multisum(3) == 3
multisum(5) == 8
multisum(10) == 33
multisum(1000) == 234168
=end

def multisum(num)
  sum = 0
  (1..num).each do |n|
    sum += n if n % 3 == 0 || n % 5 == 0
  end
  sum
end

def reducesum(num)
  # first had a sum + n if n % 3 ==  0 || n % 5 == 0
  # when the condition did not evaluate to true, nil was returned
  # this caused an error when trying to perform the addition method
  (1..num).inject(0) { |sum, n| n % 3 == 0 || n % 5 == 0 ? sum + n : sum }
end

# p multisum(3) == 3
# p multisum(5) == 8
# p multisum(10) == 33
# p multisum(1000) == 234168

p reducesum(3) == 3
p reducesum(5) == 8
p reducesum(10) == 33
p reducesum(1000) == 234168

# LSchool solution
def multiple?(number, divisor)
  number % divisor == 0
end

def multisum2(max_value)
  sum = 0
  1.upto(max_value) do |number|
    if multiple?(number, 3) || multiple?(number, 5)
      sum += number
    end
  end
  sum
end