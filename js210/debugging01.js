// EXERCISE 01
function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  // needs a return statement
  return words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    // must invoke fn
    const greeting = randomGreeting();

    console.log(`${greeting}, ${name}!`);
  }
}

// console.log(greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian'));

// EXERCISE 02
function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    // Use strict equality
    if (element === false) {
      return true;
    }
  }

  return false;
}
                                                                  // returns:
// console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
// console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
// console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true

// EXERCISE 03

function placeABet(guess) {
  // removed parens. Wrapping a fn in parens makes it an function expression
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  };

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

// const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
// alert(placeABet(userGuess));

// EXERCISE 04

function wantToVisit(museum, city) {
  return (museum.includes('Computer')
      || museum.includes('Science'))
      || (( museum.includes('Modern') || museum.includes('Art') )
        && ( museum.includes('Andy Warhol')
        || city === 'Amsterdam' ));
}

// Tests (should all print 'true')

// console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
// console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
// console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
// console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
// console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
// console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
// console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
// console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
// console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);
// console.log(wantToVisit('Andy Warhol Museum', 'Melbourne') === false);

// EXERCISE 05

const transactionLog = [];

function processInput(input) {
  const numericalData = parseFloat(input);

  if (Number.isNaN(numericalData)) {
    throw (new Error('Data could not be converted to numerical amount.'));
  }

  return numericalData;
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  try {
    data = processInput(data);
    transactionLog.push(data);

    alert('Thank you. Data accepted.');
  } catch(error) { // catch requires an error arg
    alert(error.message);
  }
}

function transactionTotal() {
  let total = 0;

  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total;
}

// logTransaction();
// logTransaction();
// logTransaction();

// console.log(transactionTotal());

// EXERCISE 06

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let i = 0; i < species.length; i++) {
  const thisSpecies = species[i];
  let newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
      newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    // console.log(`Beware of the ${newSpecies}!`);
  }
}

// EXERCISE 07

// Roles (salary still to be determined)

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

// this needs to be dot notation or a string because the variables above are object
team.ceo = 'Kim';
team.scrumMaster = 'Alice';
team.developer = undefined;

const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

// Access the props with dot notation or the string literals
// console.log(`----{ ${company.name} }----`);
// console.log(`CEO: ${company.team.ceo}`);
// console.log(`Scrum master: ${company.team.scrumMaster}`);
// console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000

// EXERCISE 08

// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
let shoppingCart = [];

// Currently available products with prices.
const prices = {
  'notebook': 9.99,
  'pencil': 1.70,
  'coffee': 3.00,
  'smoothie': 2.10,
};

function price({name}) {
  return prices[name];
}

// Adding an item to the shopping cart.
// The amount is optional and defaults to 1.
// If the item is already in the cart, its amount is updated.
function updateCart(name, amount) {
  // 0 returns a falsy value if entered as amount
  if (amount !== 0) amount = amount || 1;

  let alreadyInCart = false;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }

  if (!alreadyInCart) {
    shoppingCart.push({ name, amount });
  }
}

// Calculating the price for the whole shopping cart.
function total() {
  let total = 0;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    total += (item.amount * price(item));
  }

  return total.toFixed(2);
}

function pay() {
  // omitted

  console.log(`You have been charged $${total()}`);
}

function checkout() {
  pay();
  shoppingCart = {};
}

// Example purchase.

updateCart('notebook');
updateCart('pencil', 2);
updateCart('coffee', 1);
// "Oh, wait, I do have pencils..."
updateCart('pencil', 0);

// console.log(checkout());
// You have been charged $14.69.

// EXERCISE 09

const totalPages = 364;
let energy = 100;
let currentPage = 1;

function read() {
  // when the continue reading condition is evaluate and read() is invoked it will reset the currentPage to 1 causing an stack overflow because the function never breaks.
  

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();