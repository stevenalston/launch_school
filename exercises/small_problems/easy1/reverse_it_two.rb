def reverse_it(words)
  result = []
  split_str = words.split(' ')
  split_str.each do |word|
    if word.size > 5
      word.reverse!
    end
    result << word
  end
  result.join(' ')
end

p reverse_it('Professional')
p reverse_it('Walk around the block')
p reverse_it('Launch School')