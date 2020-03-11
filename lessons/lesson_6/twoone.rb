def prompt(msg)
  puts "=> #{msg}"
end

# Initialize the cards
def initialize_cards
  cards = (2..10).each_with_object({}) do |card, obj|
    obj[card] = card
  end
  cards[:J] = 10
  cards[:Q] = 10
  cards[:K] = 10
  cards[:A] = 11
  cards
end

# Initialize the deck
def initialize_deck
  dck = []
  [:hearts, :diamonds, :spades, :clubs].each do |suit|
    dck << { suit => initialize_cards }
  end
  dck
end

def determine_ace_value(user)
  user[:score] + 11 > 21 ? 1 : 11
end

# randomly select a card from the deck
def select_card(dck)
  # sample the deck array, returns a suit return the value obj and sample
  card = dck.sample.each_with_object({}) do |suit, obj|
    crd = suit[1].to_a.sample
    suit = suit[0]
    obj[suit] = { crd[0] => crd[1] }

    # remove card from deck
    dck = dck.each do |val|
      val.each do |k, v|
        if k == suit
          # mutate the deck
          v.reject! { |key, _| key == crd[0] }
        end
      end
    end
  end
end

# initialized the player and dealer
def initialize_users
  users = {
    player: {
      cards: [],
      score: 0,
      initial_deal: true,
      active: true,
      busted: false
    },
    dealer: {
      cards: [],
      score: 0,
      initial_deal: true,
      active: false,
      busted: false
    }
  }
end

def deal_card(dck, users)
  users.each do |_, user|
    if user[:initial_deal]
      2.times { user[:cards] << select_card(dck) }
      user[:score] = calculate_score(user[:cards])
      user[:initial_deal] = false
    elsif user[:active]
      card = select_card(dck)
      if card.values[0].keys.include?(:A)
        user[:score] += determine_ace_value(user)
      end
      user[:cards] << card
      user[:score] = calculate_score(user[:cards])
    end
  end
  display_cards(users)
end

def calculate_score(cards)
  sum = 0
  cards.each do |card|
    card.each { |_, val| val.each { |_, v| sum += v } }
  end
  sum
end

def busted?(user)
  user[:active] = false if user[:score] > 21
end

def join_cards(cards, delimiter = ', ', word = ', and ')
  arr = []
  last_card = cards.pop
  arr << cards.join(delimiter) << last_card
  arr.join(word)
end

def display_cards(users)
  p_cards = []
  d_cards = []
  users.each do |username, user|
    user.each do |prop, val|
      if prop == :cards
        val.each do |card|
          card.each do |_, v|
            v.each do |k, _|
              if username == :player
                p_cards << k
              else
                d_cards << k
              end
            end
          end
        end
      end
    end
  end
  if !users[:dealer][:active]
    prompt "Dealer has #{d_cards[0].to_s} and unknown card."
  elsif users[:dealer][:active]
    prompt "Dealer has #{join_cards(d_cards)}"
  end
  prompt "You have #{join_cards(p_cards)}"
end

def player_turn(dck, users)
  loop do
    prompt 'hit | stay'
    choice = gets.chomp.downcase
    if choice == 'hit'
      deal_card(dck, users)
      users[:player][:score] = calculate_score(users[:player][:cards])
      if busted?(users[:player]) || !users[:player][:active]
        determine_winner(users)
        break
      end
    else
      users[:player][:active] = false
      dealer_turn(dck, users)
      break
    end

  end
end

def dealer_turn(dck, users)
  users[:dealer][:active] = true
  loop do
    if users[:dealer][:score] < 17
      deal_card(dck, users)
    elsif busted?(users[:dealer])
      break
    end
    determine_winner(users)
    break
  end
end

def determine_winner(users)
  if users[:player][:score] > users[:dealer][:score] && users[:player][:score] <= 21 || users[:dealer][:score] > 21
    prompt 'Player wins!'
  elsif users[:dealer][:score] > users[:player][:score] && users[:dealer][:score] <= 21 || users[:player][:score] > 21
    prompt 'Dealer wins!'
  else
    prompt "It's a draw"
  end
end

# ==========================
#       GAME LOOP
# ==========================

loop do
  deck = initialize_deck
  players = initialize_users
  deal_card(deck, players)
  player_turn(deck, players)
  break if busted?(players[:player])
  prompt 'Play again?(y/n)'
  answer = gets.chomp.downcase
  break unless answer == 'y'
end
