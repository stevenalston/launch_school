=begin
What Century is That?
Write a method that takes a year as input and returns the century. The return value should be a string that begins with
the century number, and ends with st, nd, rd, or th as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901-2000 comprise the 20th century.

Examples:

century(2000) == '20th'
century(2001) == '21st'
century(1965) == '20th'
century(256) == '3rd'
century(5) == '1st'
century(10103) == '102nd'
century(1052) == '11th'
century(1127) == '12th'
century(11201) == '113th'
=end

def century(year)
  mil = year.to_s.length
  if mil == 4
    c = year / 100
    p c
  elsif  mil == 3
    c = year / 10
  elsif mil == 2
    c = year / 10
  else
    c = year
  end
  c.to_s.length >= 4  ? c.to_i + 1 : c.to_i
  case c
  when 1
    "#{c}st"
  when 2
    "#{c}nd"
  when 3
    "#{c}rd"
  else 4..9
    "#{c}th"
  end
end

p century(2001) == '21st'
p century(2000) == '20th'
p century(1965) == '20th'
p century(256) == '3rd'
p century(5) == '1st'
p century(10103) == '102nd'
p century(1052) == '11th'
p century(1127) == '12th'
p century(11201) == '113th'
