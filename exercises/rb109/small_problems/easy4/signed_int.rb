=begin
Convert a String to a Signed Number!
In the previous exercise, you developed a method that converts simple numeric strings to Integers. In this exercise,
you're going to extend that method to work with signed numbers.

Write a method that takes a String of digits, and returns the appropriate number as an integer. The String may have
a leading + or - sign; if the first character is a +, your method should return a positive number; if it is a -, your
method should return a negative number. If no sign is given, you should return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in Ruby, such as String#to_i, Integer(), etc. You may,
however, use the string_to_integer method from the previous lesson.

Examples

string_to_signed_integer('4321') == 4321
string_to_signed_integer('-570') == -570
string_to_signed_integer('+100') == 100
=end
DIGITS = {
    "0" => 0, "1" => 1, "2" => 2, "3" => 3, "4" => 4,
    "5" => 5, "6" => 6, "7" => 7, "8" => 8, "9" => 9
}

def string_to_signed_integer(str)
  sign = ''
  if str.start_with?('-')
    sign = '-'
    str = str.delete('-')
  elsif str.start_with?('+')
    str = str.delete('+')
  end
  digits = str.chars.map { |char| DIGITS[char] }
  val = 0
  if sign == '-'
    digits.each { |digit| val = 10 * val - digit }
  else
    digits.each { |digit| val = 10 * val + digit }
  end
  val
end

# LSchool solution involves calling the previous string_to_integer method
# The most interesting aspect of this method is the use of string[1..-1] to obtain the remainder of the string
# after a leading + or -. This notation simply means to extract the characters starting at index 1 of the string
# (the second character) and ending with the last character (index -1).
def string_to_signed_integer2(string)
  case string[0]
  when '-' then -string_to_integer(string[1..-1]) # Apparently below you can prefix the minus symbol to the method.
  when '+' then string_to_integer(string[1..-1])
  else          string_to_integer(string)
  end
end

p string_to_signed_integer('4321') == 4321
p string_to_signed_integer('-570') == -570
p string_to_signed_integer('+100') == 100