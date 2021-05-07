=begin
PROBLEM:
  The diamond exercise takes as its input a letter, and outputs it in a diamond shape. Given a letter, it prints a diamond starting with 'A', with the supplied letter at the widest point.

  The first row contains one 'A'.
  The last row contains one 'A'.
  All rows, except the first and last, have exactly two identical letters.
  The diamond is horizontally symmetric.
  The diamond is vertically symmetric.
  The diamond has a square shape (width equals height).
  The letters form a diamond shape.
  The top half has the letters in ascending order.
  The bottom half has the letters in descending order.
  The four corners (containing the spaces) are triangles.

EXAMPLES:
Diamond for letter 'A'
A

Diamond for letter 'C
  A   
 B B
C   C
 B B
  A

Diamond for letter 'E'
    A
   B B
  C   C
 D     D
E       E
 D     D
  C   C
   B B
    A 

DATA:
  - Input(s): String letter character
  - Ouput: String

MENTAL MODEL:
  Get the charcode for the letter
  WxH dependent on letter. 'A' would be 1x1,'B' 3x3
  The examples are odd numbered
  'A' is always at the midpoint, the distance the (inputChar * 2) + 1
  letters following are idx + 1, and idx - 1

  Given the string 'B'
  #A#  1
  B#B  0,2
  #A#  1
  
  Given the string 'D'

  ###A###  3
  ##B#B##  2, 4
  #C###C#  1, 5
  D#####D  0, 6
  #C###C#  1, 5
  ##B#B##  2, 4
  ###A###  3

ALGORITHM:
  SET inputLetter = 65 - char_code + 1
  SET arr_size = inputLetter * 2 + 1
  SET arr = [' ', ' ', ' '].size == arr_size 
  SET mid = ceil arr_size'/' 2
  SET output = ''
   ITERATE arr_size
      ITERATE arr
        IF mid == arr_idx 
          outpit += letter
        ELSE IF mid + idx OR mid - arr_idx
          output += letter
      END ITERATION 
      output += newline
    END ITERATION
    RETURN output
  EMD
=end
require 'pry'

def diamond(character) 
  character.upcase!
  code = (character.ord - 65) + 1
  char_array = ('A'..character).to_a
  arr_size = code * 2 - 1
  array = Array.new(arr_size, ' ')
  mid = (arr_size.to_f / 2.to_f).floor
  
  output = ""
  increasing = true
 
  return character if code < 2

  arr_size.times do |size_idx|
    increasing ? idx = size_idx : idx = (arr_size - 1) - size_idx
    
    array.size.times do |i|
      if i == mid && idx == 0
        output << char_array[idx]
      elsif i == mid + idx or i == mid - idx
        output << char_array[idx]
      else
        output << array[i]
      end 
    end 

    increasing = !increasing if idx == mid
    output << "\n"
  end
  output
end

puts diamond('a')
puts diamond('B')
puts diamond('C')
puts diamond('D')
puts diamond('e')
