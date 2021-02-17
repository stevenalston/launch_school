/*
PROBLEM:
  convert an octal number base 8, to decimal number base 10
EXAMPLES:
   233                         // decimal
  = 2*10^2 + 3*10^1 + 3*10^0
  = 2*100  + 3*10   + 3*1

    233                          // octal
  = 2*8^2 + 3*8^1 + 3*8^0
  = 2*64  + 3*8   + 3*1
  = 128   + 24    + 3
  = 155                          // decimal
DATA:
  Input(s): String
  Output: Number
*/

function octalToDecimal(numberString) {
  const numberArray = numberString.split('').reverse();
  return numberArray.reduce((acc, val, idx) => Number(acc) + (Number(val) * 8 ** idx), 0)
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9