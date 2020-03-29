=begin
string_to_integer('4321') == 4321
string_to_integer('570') == 570

=end

def string_to_integer(str)
  # create a hash of digits. key must be a string so it evaluates below
  digits = { "0" => 0, "1" => 1, "2" => 2, "3" => 3, "4" => 4, "5" => 5, "6" => 6, "7" => 7, "8" => 8, "9" => 9 }
  sum = 0
  # create an array of digits and reverse it
  num_arr = str.split('').reverse
  # Ex. 4.times i # => 0, 1, 2, 3
  num_arr.length.times do |i|
    # get the digit value from a hash
    num_val = digits[num_arr[i]]
    # convert the number to base-10. This is why the string is reversed above
    num_base_ten = num_val * (10**i) # 10**0 # => 1
    sum += num_base_ten
  end
  sum
end

#LSchool Solution
DIGITS = {
    '0' => 0, '1' => 1, '2' => 2, '3' => 3, '4' => 4,
    '5' => 5, '6' => 6, '7' => 7, '8' => 8, '9' => 9,
    'A' => 10, 'B' => 11, "C" => 12, "D" => 13, "E" => 14, "F" => 15
}

def string_to_integer2(string)
  digits = string.chars.map { |char| DIGITS[char] }

  value = 0
  digits.each { |digit| value = 10 * value + digit }
  value
end

def hex_to_integer(str)
  digits = str.chars.map { |char| char.upcase ? DIGITS[char.upcase] : DIGITS[char] }
  val = 0
  # base-16 multiply values by 16
  digits.each { |digit| val = 16 * val + digit }
  val
end

p string_to_integer('4321') == 4321
p string_to_integer('570') == 570

p hex_to_integer('4D9f') == 19871
