/*
Problem:
  Write a function named checkGoldbach that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument. The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". The function takes as its only parameter, an integer expectedSum, and logs all combinations of two prime numbers whose sum is expectedSum. Log the prime pairs with the smaller number first. If expectedSum is odd or less than 4, your function should log null.
Examples:
  checkGoldbach(3);
  // logs: null

  checkGoldbach(4);
  // logs: 2 2

  checkGoldbach(12);
  // logs: 5 7

  checkGoldbach(100);
  // logs:
  // 3 97
  // 11 89
  // 17 83
  // 29 71
  // 41 59
  // 47 53
Data Structures:
  - Inputs: Integer
  - Outputs String
Algorithm
  START
    - SET result = []
    - WHILE
      SET i = checkPrime(i)
        WHILE
          SET j = checkPrime(j)
          IF - j and i arePrime
            SET j and i to result[]
          ELSE notPrime
            CONTINUE
    - IF no primes exist
      PRINT null
    - ELSE
      PRINT result
  END

*/

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;

  for (let candidate = 2; candidate < n; candidate++ ) {
   if (n % candidate === 0) {
     return false;
   } else {
    continue;
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

function checkGoldbach(num) {
  const result = [];
  let output = "logs: \n";

  for (let x = 0; x < num; x++) {
    if(!isPrime(x)) continue;

    for(let y = 0; y <= num / 2; y++) {
      if(isPrime(x) && isPrime(y)) {
        if (x + y === num) result.push([x, y]);
      } else {
        continue;
      }
    }
  }

  if (result.length === 0) output += `${null}`;

  result.map(pair => {
    [x, y] = [...pair];
    output += `${x} ${y} \n`;
  })

  return output;
}

console.log(checkGoldbach(3));
// logs: null

console.log(checkGoldbach(4));
// logs: 2 2

console.log(checkGoldbach(12));
// logs: 5 7

console.log(checkGoldbach(100));