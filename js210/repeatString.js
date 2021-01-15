/*
Problem:
  Implement a function that takes a string and a number times as arguments. The function should return the string
    repeated times number of times. If times is not a number, return undefined. If it is a negative number, return
  undefined also. If times is 0, return an empty string. You may ignore the possibility that times is a number that
  isn't an integer.
Example:
  repeat('abc', 1);       // "abc"
  repeat('abc', 2);       // "abcabc"
  repeat('abc', -1);      // undefined
  repeat('abc', 0);       // ""
  repeat('abc', 'a');     // undefined
  repeat('abc', false);   // undefined
  repeat('abc', null);    // undefined
  repeat('abc', '  ');    // undefined
DATA:
  Inputs: String, Number
  Output: String
ALGORITHM:
  START
    SET result = ''
    SET counter = ''
    IF numberArg < 0 OR type NOT number return
    WHILE counter < numArg
      WHILE i < strArg length
        THEN result += strArg[i]
    OUTPUT result
  END
*/
function repeat(str, n) {
  let result = '';
  let counter = 0;

  if (n < 0 || typeof n !== 'number') return

  while (counter < n) {
    for (let i = 0; i < str.length; i++) {
      result += str[i];
    }
    counter++;
  }

  return result
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined

