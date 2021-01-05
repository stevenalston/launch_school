=begin

  P:
  convert a signed number to a string without using to_s or Kernel#format etc.
  include negative numbers
  E:
    signed_integer_to_string(4321) == '+4321'
    signed_integer_to_string(-123) == '-123'
    signed_integer_to_string(0) == '0'
  D:

    Input: Integer

    Output: String

  A:


  C:

=end

DIGITS = {
  0 => '0', 1 => '1', 2 => '2', 3 => '3', 4 => '4',
  5 => '5', 6 => '6', 7 => '7', 8 => '8', 9 => '9'
}.freeze

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

def signed_integer_to_string(num)
  if num < 0
    "-#{integer_to_string(num * -1)}"
  elsif num > 0
    "+#{integer_to_string(num)}"
  else
    "#{num}"
  end
end

p signed_integer_to_string(-4321) == '-4321'
p signed_integer_to_string(-123) == '-123'
p signed_integer_to_string(0) == '0'

# Lschool solution
def signed_integer_to_string_ls(number)
  case number <=> 0
  when -1 then "-#{integer_to_string(-number)}"
  when +1 then "+#{integer_to_string(number)}"
  else         integer_to_string(number)
  end
end
