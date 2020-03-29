=begin
Write another method that returns true if the string passed as an argument is a palindrome, false otherwise.
This time, however, your method should be case-insensitive, and it should ignore all non-alphanumeric characters.
If you wish, you may simplify things by calling the palindrome? method you wrote in the previous exercise.

Examples:

real_palindrome?('madam') == true
real_palindrome?('Madam') == true           # (case does not matter)
real_palindrome?("Madam, I'm Adam") == true # (only alphanumerics matter)
real_palindrome?('356653') == true
real_palindrome?('356a653') == true
real_palindrome?('123ab321') == false
=end

def palindrome?(str)
  str == str.reverse
end

def real_palindrome?(str)
  str = str.gsub(/[^0-9a-z]/i, '').downcase
  palindrome?(str)
end

p real_palindrome?('madam')
p real_palindrome?('Madam')         # (case does not matter)
p real_palindrome?("Madam, I'm Adam") # (only alphanumerics matter)
p real_palindrome?('356653')
p real_palindrome?('356a653')
p real_palindrome?('123ab321')
