PLAYER = {
  name: "player",
  cards: [],
  first_deal: true,
  active: true,
  dealer: false
}

DEALER = {
  name: "dealer",
  cards: [],
  first_deal: true,
  active: false,
  dealer: true
}
# ==========================
#    METHODS
# ==========================
def prompt(msg)
  puts "=> #{msg}"
end

def initialize_players
  users = []

end

def initialize_deck(crds)
  dck = []
  [:❤, :◆, :♠︎, :♣].each_with_object({}) do |val, obj|
    obj[val] = crds
    dck << obj
  end
  dck
end

def initialize_cards
  cards = {}
  (2..10).each { |num| cards[num] = num }
  cards[:J] = 10
  cards[:Q] = 10
  cards[:K] = 10
  cards[:A] = 11
  cards
end

def select_card(dck, usr)
  syms = []
  vals = dck.each_with_object({}) do |suit, obj|
    suit.each do |sym, val|
      syms << sym
      val.each { |k, v| obj[k] = v }
    end
  end
  usr[:cards] << { syms.sample => vals.to_a.sample }
end

def display_cards(users)
  users.each do |usr|
    if usr[:name] == 'Dealer' && !usr[:active]
      usr[:cards].each_with_index { |card, i| prompt("dealer has #{card} of #{i}") }
    end
  end
end

def deal_cards(dck, users)
  users.each do |usr|
    if usr[:initial_deal]
      usr[:initial_deal]
      select_card(dck, usr)
      usr[:initial_deal] = false
    elsif usr[:active]
      select_card(dck, usr)
    end
    p usr
  end
end

# START
# the objective is for player to score 21 without going over. The player is allowed to see one card from the dealer
# based on the player's cards player can choose to hit or stay

# 1. Initialize the player and dealer get 2 cards each
# 2. player can choose to 'hit' or 'stay'
# 3. if player choice == 'hit'
#       player receives one random card from deck
#       if card total <= 21
#         go back to step 2
#      else, if card total > 21
#         bust
#    else, if choice == 'stay'
#     dealers turn
#
# 1. dealer reveal 2nd card
# 2. if dealer total > 16 and <= 21
#     check for winner
#   else
#     dealer receives random card
#     if dealer total > 21
#       bust
#   back to check total
# end

# ==========================
#    GAME LOOP
# ==========================
loop do
  players = initialize_players
  deck = initialize_deck(initialize_cards)
  # select_card(deck)
  deal_cards(deck, players)
  display_cards(players)
  break
end

