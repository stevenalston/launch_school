def sum(digit)
  total = 0
  arr = digit.to_s.split('')
  arr.each { |n| n.to_i != 0 ? total += n.to_i : continue }
  total
end

puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45