def select_fruit(obj)
  keys = obj.keys
  hsh = {}
  i = 0
  loop do
    break if i == keys.size

    if obj[keys[i]] == 'Fruit'
      hsh[keys[i]] = 'Fruit'
    end
    i += 1
  end
  hsh
end


produce = {
    'apple' => 'Fruit',
    'carrot' => 'Vegetable',
    'pear' => 'Fruit',
    'broccoli' => 'Vegetable'
}

p select_fruit(produce)

def double_numbers!(arr, n)
  i = 0
  loop do
    break if i == arr.size
    arr[i] *= n
    i += 1
  end
end

my_numbers = [1, 4, 3, 7, 2, 6]
double_numbers!(my_numbers, 4)
p my_numbers

# each_with_object is a similar to reduce in JS. It takes a method argument which is an object.
# the second arg in the block refers to the passed in method arg
{ a: "ant", b: "bear", c: "cat" }.each_with_object([]) do |pair, array|
  array << pair.last
end
# => ["ant", "bear", "cat"]

{ a: "ant", b: "bear", c: "cat" }.each_with_object({}) do |(key, value), hash|
  hash[value] = key
end
# => { "ant" => :a, "bear" => :b, "cat" => :c }

odd, even = [1, 2, 3].partition do |num|
  num.odd?
end

odd  # => [1, 3]
even # => [2]

# Even with a Hash the return value is always an array
long, short = { a: "ant", b: "bear", c: "cat" }.partition do |key, value|
  value.size > 3
end
# => [[[:b, "bear"]], [[:a, "ant"], [:c, "cat"]]]

long.to_h # => { :b => "bear" }
short.to_h  # => { :a => "ant", :c => "cat" }
