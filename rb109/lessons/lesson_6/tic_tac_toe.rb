WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
        [[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # cols
        [[1, 5, 9], [3, 5, 7]].freeze # --- # diagonals
INITIAL_MARKER = ' '.freeze
PLAYER_MARKER = 'X'.freeze
COMPUTER_MARKER = 'O'.freeze
WINS = [0, 0]

def prompt(msg)
  puts "=> #{msg}"
end

def display_board(brd)
  system 'clear'
  puts "Player mark: #{PLAYER_MARKER}. Computer mark: #{COMPUTER_MARKER}"
  puts ''
  puts '     |     |'
  puts "  #{brd[1]}  |  #{brd[2]}  |  #{brd[3]}"
  puts '     |     |'
  puts '-----+-----+-----'
  puts '     |     |'
  puts "  #{brd[4]}  |  #{brd[5]}  |  #{brd[6]}"
  puts '     |     |'
  puts '-----+-----+-----'
  puts '     |     |'
  puts "  #{brd[7]}  |  #{brd[8]}  |  #{brd[9]}"
  puts '     |     |'
  puts ''
end

def initialize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = INITIAL_MARKER }
  new_board
end

def empty_squares(brd)
  brd.keys.select { |num| brd[num] == INITIAL_MARKER }
end

def joinor(arr, delimiter = ', ', word = ', or ')
  new_arr = []
  last_sqr = arr.pop
  new_arr << arr.join(delimiter) << last_sqr
  new_arr.join(word)
end

# appended '!' means this is a destructive method
def player_mark!(brd)
  square = ''
  loop do
    prompt("Choose a square to place a piece (#{joinor(empty_squares(brd), ', ', ' and ')})")
    square = gets.chomp.to_i
    break if empty_squares(brd).include?(square)
    prompt('Not a valid selection. Please choose again: ')
  end
  brd[square] = PLAYER_MARKER
end

def strategic_move(brd, marker)
  square = nil
  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(marker) == 2
      square = brd.select { |key, val| line.include?(key) && val == INITIAL_MARKER}.keys.first
    end
  end
  square
end

def defensive_move(brd)
  strategic_move(brd, PLAYER_MARKER)
end

def offensive_move(brd)
  strategic_move(brd, COMPUTER_MARKER)
end

def center_move(brd)
  square = brd.select { |key, val| key == 5 && val == INITIAL_MARKER }.keys.first
end

def computer_mark!(brd)
  square = defensive_move(brd) || offensive_move(brd) || center_move(brd) || empty_squares(brd).sample
  brd[square] = COMPUTER_MARKER
end

def best_of_five(brd, scores)
  if someone_won?(brd)
    if detect_winner(brd) == 'Player'
      scores[0] += 1
    else
      scores[1] += 1
    end
    if scores[0] >= 5
      "Player wins it all!"
    elsif scores[1] >= 5
      'Computer is the first to 5 '
    end
  end
end

def detect_winner(brd)
  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(PLAYER_MARKER) == 3
      return 'Player'
    elsif brd.values_at(*line).count(COMPUTER_MARKER) == 3
      return 'Computer'
    end
  end
  nil
end

def someone_won?(brd)
  !!detect_winner(brd)
end

def board_full?(brd)
  empty_squares(brd).empty?
end

loop do
  board = initialize_board

  loop do
    display_board(board)

    player_mark!(board)
    break if someone_won?(board) || board_full?(board)

    computer_mark!(board)
    break if someone_won?(board) || board_full?(board)
  end

  display_board(board)

  if someone_won?(board)
    if best_of_five(board, WINS)
      prompt best_of_five(board, WINS).to_s
      break
    end
    prompt "#{detect_winner(board)} wins!"
  else
    prompt "It's a tie!"
  end

  prompt 'Play again? (y or n)'
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt 'Thanks for playing Tic Tac Toe... Goodbye!'
