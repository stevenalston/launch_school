=begin
Rock, Paper, Scissors is a two-player game where each player chooses
one of three possible moves: rock, paper, or scissors. The chosen moves
will then be compared to see who wins, according to the following rules:

- rock beats scissors
- scissors beats paper
- paper beats rock

If the players chose the same move, then it's a tie.

Nouns: player, move, rule
Verbs: choose, compare

Player
 - choose
Move
Rule

- compare
=end
class Move
  VALUES = ['rock', 'paper', 'scissors', 'lizard', 'spock']

  attr_accessor :value
  attr_reader :move

  def initialize(value)
    @value = value
    @move = player_move(value)
  end

  def player_move(val)
    case val
    when 'rock' then Rock.new(val)
    when 'paper' then Paper.new(val)
    when 'scissors' then Scissors.new(val)
    when 'lizard' then Lizard.new(val)
    when 'spock' then Spock.new(val)
    end
  end

  # All the classes need method to the obj checks

  def rock?
    @value == 'rock'
  end

  def paper?
    @value == 'paper'
  end

  def scissors?
    @value == 'scissors'
  end

  def lizard?
    @value == 'lizard'
  end

  def spock?
    @value == 'spock'
  end

  def to_s
    @value
  end
end

class Rock < Move
  attr_reader :value

  def initialize(value)
    @value = value
  end

  def >(other_move)
    (rock? && (other_move.scissors? || other_move.lizard?))
  end

  def <(other_move)
    (rock? && (other_move.paper? || other_move.spock?))
  end
end

class Paper < Move
  attr_reader :value

  def initialize(value)
    @value = value
  end

  def >(other_move)
    (paper? && (other_move.rock? || other_move.spock?))
  end

  def <(other_move)
    (paper? && (other_move.scissors? || other_move.lizard?))
  end
end

class Scissors < Move
  attr_reader :value

  def initialize(value)
    @value = value
  end

  def >(other_move)
    (scissors? && (other_move.paper? || other_move.lizard?))
  end

  def <(other_move)
    (scissors? && (other_move.rock? || other_move.spock?))
  end
end

class Lizard < Move
  attr_reader :value

  def initialize(value)
    @value = value
  end

  def >(other_move)
    (lizard? && (other_move.spock? || other_move.paper?))
  end

  def <(other_move)
    (lizard? && (other_move.scissors? || other_move.rock?))
  end
end

class Spock < Move
  attr_reader :value

  def initialize(value)
    @value = value
  end

  def >(other_move)
    (spock? && (other_move.scissors? || other_move.rock?))
  end

  def <(other_move)
    (spock? && (other_move.lizard? || other_move.paper?))
  end
end

class Player
  attr_accessor :history, :name, :move

  def initialize
    set_name
    @history = []
  end

  def <<(other_obj)
    @history << other_obj
  end
end

class Human < Player
  def set_name
    n = ''
    loop do
      puts 'What\'s your name?'
      n = gets.chomp
      break unless n.empty?
      puts 'Sorry, you must enter a value'
    end
    self.name = n.capitalize
  end

  def choose
    choice = nil
    loop do
      puts " Please choose rock, paper, scissors, spock, or lizard: "
      choice = gets.chomp
      break if Move::VALUES.include? choice
      puts 'Sorry, invalid choice'
    end
    self.move = Move.new(choice).move
    @history << move.value
  end
end

class Computer < Player
  def set_name
    self.name = ['Chappie', 'R2D2', 'Hal', 'Johnny 5', 'Siri'].sample
  end

  def choose
    self.move = Move.new(Move::VALUES.sample).move
    @history << move.value
  end
end

class RPSGame
  attr_accessor :human, :computer, :score

  def initialize
    @human = Human.new
    @computer = Computer.new
    @score = [0, 0]
  end

  def display_welcome_message
    puts "Welcome to Rock, Paper, Scissors!"
  end

  def display_goodbye_message
    puts "Thanks for playing Rock, Paper, Scissors!"
  end

  def display_moves
    puts "#{human.name} chose #{human.move.value}"
    puts "#{computer.name} chose #{computer.move.value}"
  end

  def display_history
    puts '============================'
    puts "#{human.name} History:"
    human.history.each { |hum_mv| puts hum_mv.to_s }
    puts '============================'
    puts "#{computer.name} History:"
    computer.history.each { |cmp_mv| puts cmp_mv.to_s }
    puts '============================'
  end

  def display_round_winner
    if human.move > computer.move
      puts "#{human.name} won!"
      score[0] += 1
    elsif human.move < computer.move
      puts "#{computer.name} wins!"
      score[1] += 1
    else
      puts "It's a tie"
    end
  end

  def display_round_score
    puts "#{human.name} score: #{score[0]} | #{computer.name} score: #{score[1]}"
  end

  def check_game_winner(scr)
    if scr[0] == 3
      puts '============================'
      puts "#{human.name} wins the game!"
      play_again?
    elsif scr[1] == 3
      puts '============================'
      puts "#{computer.name} wins the game!"
      play_again?
    end
  end

  def clear_screen
    sleep(2)
    system 'clear'
  end

  def play_again?
    answer = nil
    loop do
      puts 'Would you like to play again? (y/n)'
      answer = gets.chomp
      break if ['y', 'n'].include? answer.downcase
      puts 'Sorry, must be y or n.'
    end
    answer == 'y' ? true : false
  end

  def play
    display_welcome_message
    loop do
      human.choose
      computer.choose
      display_moves
      display_round_winner
      break if check_game_winner(score)
      display_round_score
      display_history
      clear_screen
    end
    display_goodbye_message
  end
end

RPSGame.new.play
