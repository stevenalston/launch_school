def calc_bonus(n, bool)
  bool ? bonus = n /= 2 : bonus = 0
end

puts calc_bonus(2800, true) == 1400
puts calc_bonus(1000, false) == 0
puts calc_bonus(50000, true) == 25000