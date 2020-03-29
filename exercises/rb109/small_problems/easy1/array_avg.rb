def array_avg(arr)
  sum = 0
  arr.each {|val| sum += val}
  sum /= arr.size
end

p array_avg([1, 5, 87, 45, 8, 8]) == 25
p array_avg([9, 47, 23, 95, 16, 52]) == 40