# Problem 1
flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]
hsh = {}
flintstones.each_with_index do |val, i|
  hsh[val] = i
end

p hsh

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
sum = 0
ages.values.each { |n| sum += n }
p sum

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
p ages.select {|k, v| v < 100}
p ages.values.min

flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
p flintstones.index {|x| x[0, 2] == "Be"}

p flintstones.map {|x| x[0, 3]}

statement = "The Flintstones Rock"
char_count = statement.split.each_with_object({}) do |word, hsh|
  word.chars.map do |key|
    count = 1
    if hsh.keys.include?(key)
      hsh[key] = count + 1
    else
      hsh[key] = count
    end
  end
end

p char_count

# Launch School Solution
result = {}
letters = ('A'..'Z').to_a + ('a'..'z').to_a
letters.each do |letter|
  letter_frequency = statement.scan(letter).count
  result[letter] = letter_frequency if letter_frequency > 0
end

munsters = {
    "Herman" => { "age" => 32, "gender" => "male" },
    "Lily" => { "age" => 30, "gender" => "female" },
    "Grandpa" => { "age" => 402, "gender" => "male" },
    "Eddie" => { "age" => 10, "gender" => "male" },
    "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.map do |key, val|
  val.keys.map do |k|
    if k == 'age'
      if val[k] < 18
        munsters[key]["age_group"] = "kid"
      elsif val[k] > 65
        munsters[key]["age_group"] = 'senior'
      else
        munsters[key]["age_group"] = 'adult'
      end
    end
  end
  # val.map do |k, v|
  #   puts "#{k} #{v}"

  # end
end

p munsters

# launchschool solution
munsters.each do |name, details|
  case details["age"]
  when 0...18
    details["age_group"] = "kid"
  when 18...65
    details["age_group"] = "adult"
  else
    details["age_group"] = "senior"
  end
end





