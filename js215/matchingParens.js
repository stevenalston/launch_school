/*
PROBLEM:
  Given a String return true if the parenthesis in the string match opening and closing. 
EXAMPLES: BELOW
DATA:
  Input(s): String
  Output: Boolean
ALGORITHM:
  The logic and structure follows the example from Stephen Grider's ES6 course
  START
   SET result = 0
   IF val === '('
    THEN result += 1
   ELSEIF val === ')'
    THEN result += 1
  
    IF result < 0 
      THEN return false

*/

function isBalanced(str) {
  let result = 0
  for (let val of str.split('')) {
    if (result < 0) return false;

    if (val === '(') {
      result += 1
    } else if (val === ')') {
      result -= 1
    } 
  }

  return result === 0
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false