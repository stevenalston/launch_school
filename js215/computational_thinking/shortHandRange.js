// You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

// PROBLEM:
// Given a range, the numbers must increase from the leftmost digit to the rightmost digit
// After the separator get the smallest number that can be placed to the left of current number to make it larger than the previous number
// the ',' represents a move to the next number ensuring that the number is greater than the previous
// Other seperators mean to count from the digit to the left of the separator, up to, and including the number to the right of the separator
// Some inputs have both a ',' and one of the other separators
// Need the separators to be included in the output, in order to preserve order of ops
// Need a way of keeping track of the previous Number
// If the char is a separator, need a way of comparing the previous number with the Next Number

// DATA:
//   Input(S): String
//   Output: Array of numbers

// ALGORITHM
// Remove whitespace
// parse string to include only digits and separators
// find matches for consecutive digits OR separator(s)
// SET prevNum;
// SET separator;
// "1, 3, 7, 2, 4, 1" => [1, ] prevNum = 1
// Reduce matches

//  IF isNaN(match)
//     separator = match
//  ELSE IF separator 
//    IF match === ','
//      IF prevNum <= match
//        WHILE Number(prevNum) <= Number(match)
//          prevNum = i + prevNum
//      acc.push(Number(prevNum))
//      separator = false 
//    ELSE IF match == ':' || '-' || '..'
//      prevNum = Number(prevNum)
//      WHILE prevNum <= Number(match)
//        prevNum += i
//        acc.push(prevNum)
//      separator = false 
//  ELSE
//    prevNum = match 
//    acc.push(match)
//     
// checkSeparator--
//   IF match === ','
//     getGreaterNum()
//   ELSE
//     countUpToNumber()
// END


function convertRange(range) {
  const matches = range.match(/\d+|\,|\:|\-|\.\./g);
  let prevNum;
  let separator;

  return matches.reduce((acc, match) => {
    if (!isNaN(match)) {
      if (separator) {
        if (separator === ',') {
            if (match <= prevNum) {
              let nextInt = findNextInteger(match, prevNum);
              prevNum = nextInt;
              acc.push(nextInt);
            } else {
              prevNum = match
              acc.push(match);
            }
            separator = false;
        } else if (separator === ':' || separator === '-' || separator === '..') {
          if (match <= prevNum) {
            let nextInt = findNextInteger(match, prevNum);
            match = nextInt;
          } 
          incrementRange(match, prevNum, acc);
          prevNum = match; 
          separator = false;
        }
       
      } else {
        prevNum = match;
      }
    } else {
      separator = match;
    }
    return acc;
  }, [])
}

function findNextInteger(num, previousNumber) {
  let tmp = num;
  
  for (let i = 1; num <= previousNumber; i += 1) {
    num = tmp
    num = Number(i + String(num))
  }
  return Number(num);
}

function incrementRange(num, prev, arr) {
  for(prev; prev <= num; prev += 1) {
    arr.push(prev);
  } 
}

console.log(convertRange("1, 3, 7, 2, 4, 1"));
console.log(convertRange("1-3, 1-2")); // 1, 2, 3, 11, 12
console.log(convertRange("1:5:2")); // 1, 2, 3, 4, 5, 6, ... 12
console.log(convertRange("104-2")); // 104, 105, ... 112
console.log(convertRange("104-02")); // 104, 105, ... 202
console.log(convertRange("545, 64:11")); // 545, 564, 565, .. 611