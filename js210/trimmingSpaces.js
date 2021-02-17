/*
Problem:
  Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces.
  Cannot use built-in methods
Examples:
  trim('  abc  ');  // "abc"
  trim('abc   ');   // "abc"
  trim(' ab c');    // "ab c"
  trim(' a b  c');  // "a b  c"
  trim('      ');   // ""
  trim('');         // ""
Data:
  Input(s): String
  Output: String
Algorithm:
  Spaces are only removed when coming before or after alpha numeric characters
  START
    SET firstHalf = str.split
    SET secondHalf = str.splice(str.length / 2))

    WHILE iterate over max half
      IF space shift
      IF alpha char break
    WHILE iterate over min half backwards
      IF space pop
      IF alpha char break
    SET result join arrays
  END

*/

function trim(str) {
  let firstHalfOfString = str.split('');
  let secondHalfOfString = firstHalfOfString.splice(str.length / 2);
  let result = ''

  for (let i = 0, n = firstHalfOfString.length; i < n; i++) {
    // the array is changing size each time a value is shifted
    let val = firstHalfOfString[0]
    if (val === ' ') {
      firstHalfOfString.shift();
    } else {
      break;
    }
   
  }
  for (let i = secondHalfOfString.length - 1; i > -1; i--) {
    // the array is changing size each time a value is popped
    let val = secondHalfOfString[secondHalfOfString.length - 1]
    if (val === ' ') {
      secondHalfOfString.pop();
    } else {
      break;
    }
    
  }

  firstHalfOfString = firstHalfOfString.join('')
  secondHalfOfString = secondHalfOfString.join('')

  return firstHalfOfString + secondHalfOfString;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""