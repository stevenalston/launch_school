=begin
  P: create a method which converts the minutes to time
      -military format -> 00:00 - 23:59
  E: 
    time_of_day(0) == "00:00"
    time_of_day(-3) == "23:57"
    time_of_day(35) == "00:35"
    time_of_day(-1437) == "00:03"
    time_of_day(3000) == "02:00"
    time_of_day(800) == "13:20"
    time_of_day(-4231) == "01:29"
  D: 
    Input: Integer
    Ouput: String "00:00"
  A: 
    SET - Placeholder for minutes and hours
    hours = time / 60
    minutes = time % 60
    return formatted String
=end

def time_of_day(minutes)
  hours = (minutes / 60) % 24
  "#{format_time(hours)}:#{format_time(minutes % 60)}"
end

def format_time(time)
  if time < 10
    "0#{time}"
  elsif time == 0 
    "00"
  else
    "#{time}"
  end
end

p time_of_day(0) == "00:00"
p time_of_day(-3) == "23:57"
p time_of_day(35) == "00:35"
p time_of_day(-1437) == "00:03"
p time_of_day(3000) == "02:00"
p time_of_day(800) == "13:20"
p time_of_day(-4231) == "01:29"

# LSchool solution
MINUTES_PER_HOUR = 60
HOURS_PER_DAY = 24
MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR

def time_of_day_ls(delta_minutes)
  delta_minutes =  delta_minutes % MINUTES_PER_DAY
  hours, minutes = delta_minutes.divmod(MINUTES_PER_HOUR)
  format('%02d:%02d', hours, minutes)
end
