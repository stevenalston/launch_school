const signedIntegerToString = (() => {
  "use strict";

  let lookupArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  return integer => {
    let absInteger = Math.abs(integer);
    let result = '';

    if (absInteger === 0) return '0';

    while (absInteger > 1) {
      let digit = Math.floor(absInteger % 10);
      result += lookupArray[digit];
      absInteger /= 10;
    }
  
    result = result.split('').reverse().join('');
    
    return integer < 0 ? `-${result}` : result;
  }
})()

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"

function reverse(inputForReversal) {
  let result;
  let n = inputForReversal.length;
  
  if (Array.isArray(inputForReversal)) {
    result = [];
    for (let i = n - 1; i >= 0; i -= 1) {
      result.push(inputForReversal[i]);
    }

    
  } else {
    result = '';
    for (let i = n - 1; i >= 0; i -= 1) {
      result += inputForReversal[i]
    }
  }

  return result;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]