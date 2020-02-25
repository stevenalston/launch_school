# @!scope
#
a = 5
def scope_test
  6# undefined
end

puts scope_test

loop do
  puts a
  break
end

1.times do |b|
  puts a
end