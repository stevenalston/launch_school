/*
Problem: 
  Similar to the mario challenge
*/

function patternGenerator(n) {
  let output = '';

  for (let i = n - 1 ; i >= 0; i--) {
    output += printNumbers(n-i);
    output += printStars(i)
    output += '\n'
  }

  return output
}

function printNumbers(n) {
  let output = '';
  for (let i = 1; i <= n; i++) {
    output += `${i}`
  }

  return output;
}

function printStars(n) {
  let output = '';
  for (let i = 0; i < n; i++) {
    output += '*';
  }

  return output;
}

console.log(patternGenerator(7));
console.log(patternGenerator(10));