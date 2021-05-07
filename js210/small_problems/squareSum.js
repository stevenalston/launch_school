/*
PROBLEM:
Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

EXAMPLES:
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

DATA:
  INPUT(s): Number
  OUTPUT(s): Number

MENTAL MODEL:
  compute the sum from 1 - input, then square it.
  subtract the computed sum from the input Factorial
ALGORITHM:

*/

function sumSquareDifference(num) {

  function squaredSum(n) {
    let sum = 0

    for (let i = 1; i <= n; i++) {
      sum += i ** 2
    }

    return sum
  }

  console.log(squaredSum(3))
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150