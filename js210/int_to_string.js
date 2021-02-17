/*
Problem: 
  Convert to a string representation of an integer
Examples:
  integerToString(4321);      // "4321"
  integerToString(0);         // "0"
  integerToString(5000);      // "5000"
Data:
  input - number
  output- string
*/

const LOOKUP_TABLE = {
  0: "0",  1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 
  6: "6", 7: "7", 8: "8", 9: "9"
}

function integerToString(n) {
  arr = [];
  if (n < 2) {
    arr.push(n)
  }
  while (n > 2) {
    let val = n % 10
    arr.push(val)
    n = Math.floor(n / 10)
  }
  return arr.reverse().join('')
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"