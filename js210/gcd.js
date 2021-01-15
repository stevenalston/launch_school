// create a program that finds the greatest common deminator of 2 positive integers

function gcd(num1, num2) {
  let largestDenominator = 1;
  let numArray = num1 > num2 ? [num1, num2] : [num2, num1];
  let [max, min] = [...numArray];

  if (num1 > 0 && num2 > 0) {
    for (let i = 1; i < max; i++) {
      if (i > min) break;
      
      if (max % i === 0 && min % i === 0) largestDenominator = i;
    }
    
    return largestDenominator;
  }
  console.log('Must enter 2 positive integers.')
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1