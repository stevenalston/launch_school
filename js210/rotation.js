/*
PROBLEM:
  Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

  If the input is not an array, return undefined.
  If the input is an empty array, return an empty array.
EXAMPLE:
  rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
  rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
  rotateArray(['a']);                    // ["a"]
  rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
  rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
  rotateArray([]);                       // []

  // return `undefined` if the argument is not an array
  rotateArray();                         // undefined
  rotateArray(1);                        // undefined


  // the input array is not mutated
  const array = [1, 2, 3, 4];
  rotateArray(array);                    // [2, 3, 4, 1]
  array;                                 // [1, 2, 3, 4]
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return;
  if (arr.length === 0 && Object.keys(arr).length === 0) return arr;

  const result = [...arr];
  let [firstEl] = result.splice(0, 1);
  result.push(firstEl);

  return result
}

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// the input array is not mutated
// const array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]


/*
PROBLEM: 
  Rotate the digits from the end
EXAMPLES:
  rotateRightmostDigits(735291, 1);      // 735291
  rotateRightmostDigits(735291, 2);      // 735219
  rotateRightmostDigits(735291, 3);      // 735912
  rotateRightmostDigits(735291, 4);      // 732915
  rotateRightmostDigits(735291, 5);      // 752913
  rotateRightmostDigits(735291, 6);      // 352917
DATA:
  Input(s): Array, Number
  Output: Number
ALGO:
  convert the digit to a string
  target the element to remove
*/
function rotateRightmostDigits(digits, n) {
  const arr = String(digits).split('');
  let targetEl = arr.length - n;

  let removedEl = arr.splice(targetEl, 1);
  arr.push(removedEl);
  
  return Number(arr.join(''));

}

// console.log(rotateRightmostDigits(735291, 1));
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917

/*
PROBLEM:
  Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

  Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.
EXAMPLES:
  maxRotation(735291);          // 321579
  maxRotation(3);               // 3
  maxRotation(35);              // 53
  maxRotation(105);             // 15 -- the leading zero gets dropped
  maxRotation(8703529146);      // 7321609845
DATA:
  Input(s): Number
  Output: Number
ALGO:
  START
    SET array of digits
    WHILE digits.length > 0
      rotateRightmost(digits, i)
  use the iterator as n argument to the function above
*/

function maxRotation(digits) {
  const arr = String(digits).split('');

  for (let n = arr.length; n > 0; n -= 1) {
    digits = rotateRightmostDigits(digits, n);
  }

  return digits;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845