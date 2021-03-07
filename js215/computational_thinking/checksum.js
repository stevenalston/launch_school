// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

// Counting from the rightmost digit and moving left, double the value of every second digit
// For any digit that thus become 10 or more, subtract 9 from the result
// 1111 becomes 2121
// 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
// Add all these digits together
// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
// If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

// Input: string
// Output: boolean

// AlGORITHM:

// SET digits =  ccString.match(/\D+/g).reverse()
// reduce digits
// IF digit

function checksum(ccString) {
  const digits = ccString.replace(/\D/g, '')
    .split('')
    .map(char => Number(char))
    .reverse();

  return digits.reduce((sum, digit, idx) => {
    if (idx % 2 !== 0) {
      digit *= 2
      if (digit >= 10) digit -= 9;
    }
    
    return sum + digit
  }, 0) % 10 === 0;
}

console.log(checksum('1111')); // '1111' -> 1 + 2 + 1 + 2 => '2121' false
console.log(checksum('8763')); // '8763' -> 3 + 3 + 7 + 7 => '7733' true 
console.log(checksum('2323 2005 7766 3554')); //true
console.log(checksum('2323_2005   _7766  /3554'));  //true
console.log(checksum('2323 2005 7765 3554')); //false


