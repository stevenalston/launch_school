def select(arr)
  idx = 0
  result = []
  while idx < arr.size
    val = yield(arr[idx])
    result << arr[idx] if val
    idx += 1
  end
  result
end

array = [1, 2, 3, 4, 5]

select(array) { |num| num.odd? }
select(array) { |num| puts num }
select(array) { |num| num + 1 }