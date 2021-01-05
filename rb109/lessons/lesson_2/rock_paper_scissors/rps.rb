# frozen_string_literal: true

VALID_CHOICES = %w[rock paper scissors lizard spock].freeze
def prompt(msg)
  puts "=> #{msg}"
end

def wins?(first, second)
  (first == 'rock' && second == 'scissors') ||
  (first == 'rock' && second == 'lizard') ||
  (first == 'scissors' && second == 'paper') ||
  (first == 'scissors' && second == 'lizard') ||
  (first == 'paper' && second == 'rock') ||
  (first == 'paper' && second == 'spock') ||
  (first == 'lizard' && second == 'spock') ||
  (first == 'lizard' && second == 'paper') ||
  (first == 'spock' && second == 'scissors') ||
  (first == 'spock' && second == 'rock')
end

def display_result(player, computer)
  if wins?(player, computer)
    prompt('You won!')
  elsif player == computer
    prompt('You tied!')
  else
    prompt('Computer wins!')
  end
end

prompt("============= #{VALID_CHOICES.join(' ').upcase} =============")

choice = ''

loop do
  loop do
    prompt("Choose one: #{VALID_CHOICES.join(', ')}")
    choice = gets.chomp.downcase
    break if VALID_CHOICES.include?(choice)

    prompt('Please enter a valid choice')
  end

  computer_choice = VALID_CHOICES.sample.downcase

  prompt("Your choice: #{choice} | Computer Choice: #{computer_choice}")
  display_result(choice, computer_choice)

  prompt('Would you like to play again? (Y/N)')
  answer = gets.chomp

  break unless answer.downcase.start_with?('y')
end
prompt("Thanks for Playing #{VALID_CHOICES.join(' ').upcase}")
