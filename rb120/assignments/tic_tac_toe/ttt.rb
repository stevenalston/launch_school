require 'pry'

class Board
  attr_reader :squares

  WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
                  [[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # cols
                  [[1, 5, 9], [3, 5, 7]]              # diagonals

  def initialize
    @squares = {}
    reset
  end

  def []=(num, marker)
    @squares[num].marker = marker
  end

  def unmarked_keys
    @squares.keys.select { |key| @squares[key].unmarked? }
  end

  def full?
    unmarked_keys.empty?
  end

  def someone_won?
    !!winning_marker
  end

  def winning_marker
    WINNING_LINES.each do |line|
      squares = @squares.values_at(*line)
      return squares.first.marker if three_identical_markers?(squares)
    end
    nil
  end

  def reset
    (1..9).each { |key| @squares[key] = Square.new }
  end

  def draw
    puts '     |     |'
    puts "  #{@squares[1]}  |  #{@squares[2]}  |  #{@squares[3]}"
    puts '     |     |'
    puts '-----+-----+-----'
    puts '     |     |'
    puts "  #{@squares[4]}  |  #{@squares[5]}  |  #{@squares[6]}"
    puts '     |     |'
    puts '-----+-----+-----'
    puts '     |     |'
    puts "  #{@squares[7]}  |  #{@squares[8]}  |  #{@squares[9]}"
    puts '     |     |'
  end
  # rubocop:enable Metrics/AbcSize

  private

  def three_identical_markers?(squares)
    markers = squares.select(&:marked?).collect(&:marker)
    return false if markers.size != 3
    markers.min == markers.max
  end
end

class Square
  INITIAL_MARKER = ' '.freeze

  attr_accessor :marker

  def initialize(marker = INITIAL_MARKER)
    @marker = marker
  end

  def to_s
    @marker
  end

  def unmarked?
    marker == INITIAL_MARKER
  end

  def marked?
    marker != INITIAL_MARKER
  end
end

class Player
  attr_reader :marker

  def initialize(marker)
    @marker = marker
  end
end

class TTTGame
  HUMAN_MARKER = 'X'
  COMPUTER_MARKER = 'O'
  FIRST_TO_MOVE = HUMAN_MARKER

  attr_reader :board, :human, :computer

  def initialize
    @board = Board.new
    @human = Player.new(HUMAN_MARKER)
    @computer = Player.new(COMPUTER_MARKER)
    @current_marker = FIRST_TO_MOVE
    @total_wins = [0, 0]
  end

  def play
    clear
    display_welcome_message

    loop do
      display_board

      loop do
        current_player_moves
        break if board.someone_won? || board.full?
        clear_screen_and_display_board if human_turn?
      end

      display_result
      @total_wins.each do |wins|
        if wins == 5
          break unless play_again?
        end
      end
      sleep 2
      reset
      display_play_again_message
    end

    display_goodbye_message
  end

  private

  def display_welcome_message
    puts 'Welcome to Tic Tac Toe!'
    puts ''
  end

  def display_goodbye_message
    puts 'Thanks for playing Tic Tac Toe! Goodbye!'
  end

  def clear_screen_and_display_board
    clear
    display_board
  end

  def human_turn?
    @current_marker == HUMAN_MARKER
  end

  def display_board
    puts "You're a #{human.marker}. Computer is a #{computer.marker}."
    puts ''
    board.draw
    puts ''
  end

  def joinor(sqrs, word='or', separator=' | ')
    new_sqrs = sqrs
    if new_sqrs.size > 1
      last_sqr = new_sqrs.pop
      new_sqrs << word
      "#{new_sqrs.join(separator)} #{last_sqr}"
    else
      new_sqrs[0]
    end
  end

  def human_moves
    puts "Choose a square (#{joinor(board.unmarked_keys, 'and', ', ')}): "
    square = nil
    loop do
      square = gets.chomp.to_i
      break if board.unmarked_keys.include?(square)
      puts "Sorry, that's not a valid choice."
    end
    board[square] = human.marker
  end

  def computer_moves
    square = defensive_comp_move || offensive_comp_move ||
             center_comp_move || default_comp_move
    board[square] = computer.marker
  end

  def offensive_comp_move
    Board::WINNING_LINES.each do |line|
      marked_sqrs = board.squares.values_at(*line).map(&:marker)
      if two_marks?(marked_sqrs, computer.marker)
        idx = marked_sqrs.index(Square::INITIAL_MARKER)
        return line[idx]
      end
    end
    nil
  end

  def defensive_comp_move
    Board::WINNING_LINES.each do |line|
      marked_sqrs = board.squares.values_at(*line).map(&:marker)
      if two_marks?(marked_sqrs, human.marker)
        idx = marked_sqrs.index(Squares.::INITIAL_MARKER)
        return line[idx]
      end
    end
    nil
  end

  def center_comp_move
    p 5 if board.unmarked_keys.include?(5)
  end

  def default_comp_move
    board.unmarked_keys.sample
  end

  def two_marks?(line, marker)
    line.count(marker) == 2 && line.count(Square::INITIAL_MARKER) == 1
  end

  def current_player_moves
    if human_turn?
      human_moves
      @current_marker = COMPUTER_MARKER
    else
      computer_moves
      @current_marker = HUMAN_MARKER
    end
  end

  def display_result
    clear_screen_and_display_board

    case board.winning_marker
    when human.marker
      @total_wins[0] += 1
      if @total_wins[0] == 5
        puts 'You win the game!'
      else
        puts 'You won the round!'
      end
    when computer.marker
      @total_wins[1] += 1
      if @total_wins[1] == 5
        puts 'Computer win the game!'
      else
        puts 'Computer won the round!'
      end
    else
      puts 'it\'s a tie!'
    end
  end

  def play_again?
    answer = nil
    loop do
      puts 'Would you like to play again? (y/n)'
      answer = gets.chomp.downcase
      break if %w(y n).include? answer
      puts 'Sorry, must be y or n'
    end

    answer == 'y'
  end

  def clear
    system 'clear'
  end

  def reset
    board.reset
    @current_marker = FIRST_TO_MOVE
    @total_wins = [0, 0]
    clear
  end

  def display_play_again_message
    puts "Let's play again!"
    puts ''
  end
end

game = TTTGame.new
game.play
