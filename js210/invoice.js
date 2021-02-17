function invoiceTotal(...amounts) {
  return amounts.reduce((sum, amount) => sum + amount, 0);
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?


function makeDoubler(caller) {
  return function(number) {
    console.log(`this function was called by ${caller}`);
    return number + number;
  }
}

const doubler = makeDoubler('Victor');
console.log(doubler(5));


/*
LOG:
  Welcome
  to
  the
  Matrix!
*/