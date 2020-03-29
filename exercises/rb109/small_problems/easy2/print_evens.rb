=begin
Even Numbers
Print all even numbers from 1 to 99, inclusive. All numbers should be printed on separate lines.
=end

(1..99).each { |n| puts n if n.even? }