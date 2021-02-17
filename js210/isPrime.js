function isPrime(n) {
  // check that number in not 0 or 1
  if (n < 2) return false
  // run a loop incrementing down from the number
  for(let i = n-1; i > 1; i--) {
    // if i is a multiple of n return false
    if (n % i === 0) {
      return false
    }
  }

  return true;
}

// console.log(isPrime(1));   // false
// console.log(isPrime(2));   // true
// console.log(isPrime(3));   // true
// console.log(isPrime(43));  // true
// console.log(isPrime(55));  // false
// console.log(isPrime(0));   // false

//xOR function
function isXor(a, b) {
  if (a) {
    if(b) {
      return false;
    }
    return true;
  }
  if (b) {
    if (a) {
      return false;
    }
    return true;
  }
  
  return false;
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false