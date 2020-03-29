puts 'Enter the length of the room in meters: '
len = gets.chomp.to_f
puts 'Enter the width of the room in meters: '
width = gets.chomp.to_f

area = (len * width).round(2)

puts "The area of the room is #{area} meters (#{(area * 10.7639).round(2)} square feet)."
