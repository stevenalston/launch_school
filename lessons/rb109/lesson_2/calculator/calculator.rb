require 'yaml'
MESSAGES = YAML.load(File.read("messages.yml"))
def prompt(msg)
  puts "=> #{msg}"
end

def valid_number?(obj)
  obj = obj.to_s unless obj.is_a? String
  /\A[+-]?\d+(\.[\d]+)?\z/.match obj
end

def input_number

  loop do
    prompt MESSAGES[:enter_num]
    x = gets.chomp
    if valid_number?(x)
      return x
    else
      prompt MESSAGES[:valid_num]
    end
  end
end

def operation_message(opt)
  word = case opt
  when '1'
    'Adding'
  when '2'
    'Subtracting'
  when '3'
    'Multiplying'
  when '4'
    'Dividing'
  end
  return word
end

MESSAGES = YAML.load(File.read("messages.yml"))
prompt MESSAGES[:welcome]

name = ''
loop do
  name = gets.chomp
  if name.empty?
    prompt MESSAGES[:valid_name]
  else
    break
  end
end

x = nil
y = nil
prompt format((MESSAGES[:hello]), name: "#{name}")
loop do
  x = input_number
  y = input_number
  operator_prompt = <<-MSG
    What operation would you like to perform?
    1) add
    2) subtract
    3) multiply
    4) divide
  MSG
  prompt operator_prompt
  operator = ''
  loop do
    operator = gets.chomp
    if %w(1 2 3 4).include? operator
      break
    else
      prompt MESSAGES[:valid_op]
    end
  end
  prompt "#{operation_message(operator)}... the two numbers"
  result = case operator
           when '1'
             x.to_i + y.to_i
           when '2'
             x.to_i - y.to_i
           when '3'
             x.to_i * y.to_i
           when '4'
             x.to_f / y.to_f
           end

  prompt format(MESSAGES[:result], result: "#{result}")
  prompt MESSAGES[:perform_calc]
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt MESSAGES[:goodbye]
