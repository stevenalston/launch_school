=begin
Convert a Number to a String!
In the previous two exercises, you developed methods that convert simple numeric strings to signed Integers. In this
exercise and the next, you're going to reverse those methods.

Write a method that takes a positive integer or zero, and converts it to a string representation.

You may not use any of the standard conversion methods available in Ruby, such as Integer#to_s, String(), Kernel#format,
etc. Your method should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

Examples

integer_to_string(4321) == '4321'
integer_to_string(0) == '0'
integer_to_string(5000) == '5000'
=end
DIGITS = {
    0 => '0', 1 => '1', 2 => '2', 3 => '3', 4 => '4',
    5 => '5', 6 => '6', 7 => '7', 8 => '8', 9 => '9'
}

def integer_to_string(num)
  str = ''
  loop do
    digit = num % 10
    num /= 10
    str += DIGITS[digit]
    break if num <= 0
  end
  str.reverse!
end

# LSchool solution
def integer_to_string2(number)
  result = ''
  loop do
    number, remainder = number.divmod(10)
    result.prepend(DIGITS[remainder])
    break if number == 0
  end
  result
end

p integer_to_string(4321) == '4321'
p integer_to_string(0) == '0'
p integer_to_string(5000) == '5000'

=begin
Give us your feedback
Convert a Signed Number to a String!
In the previous exercise, you developed a method that converts non-negative numbers to strings. In this exercise,
you're going to extend that method by adding the ability to represent negative numbers as well.

Write a method that takes an integer, and converts it to a string representation.

You may not use any of the standard conversion methods available in Ruby, such as Integer#to_s, String(), Kernel#format,
etc. You may, however, use integer_to_string from the previous exercise.

Examples

signed_integer_to_string(4321) == '+4321'
signed_integer_to_string(-123) == '-123'
signed_integer_to_string(0) == '0'
=end

def signed_integer_to_string(num)
  case num
  when num < 0 then p "-#{integer_to_string(num)}"
  when num > 0 then "+++#{integer_to_string(num)}"
  else
    p integer_to_string(num)
  end
end

p signed_integer_to_string(4321) == '+4321'
p signed_integer_to_string(-123) == '-123'
p signed_integer_to_string(0) == '0'


