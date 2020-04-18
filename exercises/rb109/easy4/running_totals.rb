=begin
Running Totals
Write a method that takes an Array of numbers, and returns an Array with the same number of elements, and each
element has the running total from the original Array.

Examples:

running_total([2, 5, 13]) == [2, 7, 20]
running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
running_total([3]) == [3]
running_total([]) == []
=end

def running_total(arr)
  sum = 0
  arr.map { |n| sum += n }
end

def running_total2(arr)
  sum = 0
  arr.inject([]) { |result, n| result << sum += n }
end

p running_total2([2, 5, 13]) == [2, 7, 20]
p running_total2([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
p running_total2([3]) == [3]
p running_total2([]) == []

