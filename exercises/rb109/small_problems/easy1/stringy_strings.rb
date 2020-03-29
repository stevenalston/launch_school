def stringy(num)
  str = ''
  n = 0
  num.times do
    n.even? ? str += '1' : str += '0'
    n += 1
  end
  str
end

p stringy(6)