=begin
Test Cases

banner = Banner.new('To boldly go where no one has gone before.')
puts banner
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
banner = Banner.new('')
puts banner
+--+
|  |
|  |
|  |
+--+
=end

class Banner
  attr_reader :message
  def initialize(message)
    @message = message
  end

  def to_s
    [horizontal_rule, empty_line, message_line, empty_line, horizontal_rule].join("\n")
  end

  def print_line(output, msg, char)
    line_end = output.reverse
    msg.length.times { |_| output += char}
    output += line_end
  end
  private

  def horizontal_rule
    print_line('+-', @message, '-')
  end

  def empty_line
    print_line('| ', @message, ' ')
  end

  def message_line
    "| #{@message} |"
  end
end

banner = Banner.new('To boldly go where no one has gone before.')
puts banner
banner = Banner.new('')
puts banner

# LSchool Solution - this was much simpler than my solution
# apparently you can multiply a character. This is a new construct for me. *Remember
class Banner
  def initialize(message)
    @message = message
  end

  def to_s
    [horizontal_rule, empty_line, message_line, empty_line, horizontal_rule].join("\n")
  end

  private

  def empty_line
    "| #{' ' * (@message.size)} |"
  end

  def horizontal_rule
    "+-#{'-' * (@message.size)}-+"
  end

  def message_line
    "| #{@message} |"
  end
end