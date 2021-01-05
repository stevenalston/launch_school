class Move
  attr_accessor :move
  def initialize(value)
    @value = value
    @move = set_move(value)
  end

  def set_move(val)
    case val
    when 'rock' then Rock.new(val)
    when 'scissors' then Scissors.new(val)
    when 'paper' then Paper.new(val)
    end
  end

end

class Rock
  attr_accessor :move
  def initialize(move)
    @move = move
  end

  def rock?
    move == 'rock'
  end

  def >(other_move)
    (rock? && other_move.scissors?)
  end
end

class Scissors
  attr_accessor :move
  def initialize(move)
    @move = move
  end

  def scissors?
    move == 'scissors'
  end

  def >(other_move)
    (scissors? && other_move.paper?)
  end
end

class Paper
  attr_reader :move
  def initialize(move)
    @move = move
  end

  def paper?
    move == 'paper'
  end

  def >(other_move)
    (paper? && other_move.rock?)
  end

  def <(other_move)
    (paper? && other_move.scissors?)
  end
end

move1 = Move.new('rock')

p move1.move.rock?



