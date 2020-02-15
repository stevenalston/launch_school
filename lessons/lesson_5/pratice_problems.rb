books = [
    {title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967'},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925'},
    {title: 'War and Peace', author: 'Leo Tolstoy', published: '1869'},
    {title: 'Ulysses', author: 'James Joyce', published: '1922'}
]

p books.sort_by! {|hsh| hsh[:published].to_i}

arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]]
p arr1[2][1][3]
arr2 = [{first: ['a', 'b', 'c'], second: ['d', 'e', 'f']}, {third: ['g', 'h', 'i']}]
p arr2[1][:third][0]
arr3 = [['abc'], ['def'], {third: ['ghi']}]
p arr3[2][:third][0][0]
hsh1 = {'a' => ['d', 'e'], 'b' => ['f', 'g'], 'c' => ['h', 'i']}
p hsh1['b'][1]
hsh2 = {first: {'d' => 3}, second: {'e' => 2, 'f' => 1}, third: {'g' => 0}}
p hsh2[:third].key(0)

# Change 3 to 4
arr1 = [1, [2, 3], 4]
arr1[1][1] += 1
p arr1
arr2 = [{a: 1}, {b: 2, c: [7, 6, 5], d: 4}, 3]
arr2[2] += 1
p arr2
hsh1 = {first: [1, 2, [3]]}
hsh1[:first][2][0] += 1
p hsh1
hsh2 = {['a'] => {a: ['1', :two, 3], b: 4}, 'b' => 5}
hsh2[['a']][:a][2] += 1
p hsh2

munsters = {
    "Herman" => { "age" => 32, "gender" => "male" },
    "Lily" => { "age" => 30, "gender" => "female" },
    "Grandpa" => { "age" => 402, "gender" => "male" },
    "Eddie" => { "age" => 10, "gender" => "male" },
    "Marilyn" => { "age" => 23, "gender" => "female"}
}

total = 0
munsters.each do |_, v|
  total += v["age"] if v["gender"]== "male"
end

p total

[[1, 6, 7], [1, 4, 9], [1, 8, 3]].sort_by do |sub_arr|
  sub_arr.select {|el| el.odd?}
end

hsh1 = {
    'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
    'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
    'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
    'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
    'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
}

hsh1.each_with_object([]) do |(key, value), arr|
  arr << value[:size].upcase if value[:type] == 'vegetable'
  arr << value[:colors].map {|color| color.capitalize} if value[:type] == 'fruit'
  arr
end

arr4 = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]
arr4.select do |hsh|
  hsh.all? do |_, value|
    value.all? {|el| el.even?}
  end
end

def make_uuid()
  str = ""
  id_str = "1234567890abcdef"
  i = 0
  while i < 36
    if i == 8 || i == 13 || i == 18 || i == 23
      str += '-'
    else
      str += id_str[rand(id_str.size - 1)]
    end
    i += 1
  end
  str
end

p make_uuid

# Launch School method
def generate_UUID
  characters = []
  (0..9).each { |digit| characters << digit.to_s }
  ('a'..'f').each { |digit| characters << digit }

  uuid = ""
  sections = [8, 4, 4, 4, 12]
  sections.each_with_index do |section, index|
    section.times { uuid += characters.sample }
    uuid += '-' unless index >= sections.size - 1
  end

  uuid
end
