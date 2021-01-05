def reduce(arr, default=nil)
  acc = default ? default : arr[0]
  idx = default ? 0 : 1

  while idx < arr.size
    curr = arr[idx]
    acc = yield(acc, curr)
    idx += 1
  end
  acc
end


array = [1, 2, 3, 4, 5]

p reduce(array) { |acc, num| acc + num }                    # => 15
p reduce(array, 10) { |acc, num| acc + num }                # => 25
p reduce(array, 1) { |acc, num| acc + num }                # => 16
p reduce(['a', 'b', 'c']) { |acc, value| acc += value }     # => 'abc'
p reduce([[1, 2], ['a', 'b']]) { |acc, value| acc + value } # => [1, 2, 'a', 'b']