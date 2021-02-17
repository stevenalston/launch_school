// Sum of digits

function sum(n) {
  return String(n).split('').reduce((acc, val) => acc + Number(val), 0);
}

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45

// Alphabetical Numbers
const LOOKUP_ARRAY = [
  'zero', 'one', 'two', 'three', 'four', 'five',
  'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
  'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

function alphabeticNumberSort(array) {
  return array.sort((a, b) => {
    if (LOOKUP_ARRAY[a] > LOOKUP_ARRAY[b]) {
      return 1 
    } else if (LOOKUP_ARRAY[b] > LOOKUP_ARRAY[a]) {
      return -1;
    } else {
      return 0
    }
  });
}

// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// Multiply all pairs

function multiplyAllPairs(arr1, arr2) {
  return arr1.map(val => arr2.map(val2 => val * val2)).flat().sort((a, b) => a - b);
}

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// sumOfSums

function sumOfSums(array) {
  let result = array.map((val, i) => array.slice(0, (i + 1)));

  return result.reduce((sum, arr) => sum + arr.reduce((acc, val) => acc + val), 0);
}

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

// Leading SubStrings

function leadingSubstrings(str) {
  let array =  str.split('')
  return array.map((char, i) => str.slice(0, i + 1))
    .sort(val => val.length)
}

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// all substrings

function substrings(str) {
  return str.split('').map((char, idx, array) => {
    return leadingSubstrings(array.join('').substring(idx));
  })
}

console.log(substrings('abcde'));

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/