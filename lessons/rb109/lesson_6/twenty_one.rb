# =======================
#     METHODS
# =======================

def determine_ace(score)
  if score > 10
    return 11
  else
    return 1
  end
end

def initialize_cards
  cards = {}
  (2..10).each { |num| cards[num] = num}
  cards[:J] = 10
  cards[:Q] = 10
  cards[:K] = 10
  cards[:A] = 11
  cards
end

def draw_card

end

def deal_card(user)
  if user[:initial_deal]
    2.times { user[:cards] << draw_card}
  else
    user[:cards] << draw_card
  end
  user[:initial_deal] = false
end

# =======================
#     CONSTANTS
# =======================
DECK = [
    { hearts: initialize_cards },
    { diamonds: initialize_cards },
    { spades: initialize_cards },
    { clubs: initialize_cards }
]
DEALER = { cards: [], score: 0, initial_deal: true, active: false }
PLAYER = { cards: [], score: 0, initial_deal: true, active: true }

p DECK