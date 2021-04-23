/*
PROBLEM: 
  The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:
    F(1) = 1
    F(2) = 1
    F(n) = F(n - 1) + F(n - 2) where n > 2

EXAMPLES: 
  fibonacci(1);       // 1
  fibonacci(2);       // 1
  fibonacci(3);       // 2
  fibonacci(4);       // 3
  fibonacci(5);       // 5
  fibonacci(12);      // 144
  fibonacci(20);      // 6765

DATA: 
  INPUT(s): Integer
  OUTPUT(s): Integer
MENTAL MODEL: 
  Function(n - 1) + F(n - 2)
ALGORITHM: 
*/

function fibonacci(n) {
  if (n <= 2) return 1;
  
  return fibonacci(n - 1) + fibonacci(n - 2);
  
}

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765

/*
PROBLEM: 
  Fibonacci with memoization
EXAMPLES: 
  fibMemo(35) // 9227465
DATA: 
  INPUT(s): Number, Object
  OUTPUT(s): Number
MENTAL MODEL: 
  Need to set the default memo param to an empty object
  the object should save numbers and the value they represent
  can't save the value n - 1 or n - 2 to the memo because that could have a difference of 2, which would actaully return as one

ALGORITHM: 
*/
function fibMemo(n, memo={}) {
  if (n <= 2) return 1;


  if (!memo[n]) {
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
  } else {
    return memo[n];
  }

}

console.log(fibonacci(4) === 3);       // 3
console.log(fibMemo(35));
console.log(fibMemo(45));
console.log(fibMemo(50));