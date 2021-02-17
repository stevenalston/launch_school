/*
PROBLEM:
  Write a function that returns a substring of a string based on a starting index and length.

Examples
  let string = 'hello world';

  substr(string, 2, 4);      // "llo "
  substr(string, -3, 2);     // "rl"
  substr(string, 8, 20);     // "rld"
  substr(string, 0, -20);    // ""
  substr(string, 0, 0);      // ""
Data:
  Input(s): String, Number, Number
  OutPut: String
Algorithm:
  START
   SET result = ''
   WHILE
    SET Iterator = startArg
    SET length = end
    
*/

function substr(str, start, end) {
  let result = '';

  if (end < 1) return result;

  if (start < 0) {
    start = str.length + start;
    end = (start + end) - 1;
  }

  for (let i = start; i <= end; i++) {
    let val = str[i];
    if (val) {
      result += val;
    } else {
      continue;
    }
  }
  return result;
}

let string = 'hello world';

// console.log(substr(string, 2, 4));      // "llo "
// console.log(substr(string, -3, 2));     // "rl"
// console.log(substr(string, 8, 20));     // "rld"
// console.log(substr(string, 0, -20));    // ""
// console.log(substr(string, 0, 0));      // ""
// console.log(substr(string, -5, 3));      // "wor"

/*
Problem:
  This practice problem is similar to the previous one. This time though, both arguments are indices of the provided string. The following rules apply:

  If both start and end are positive integers, start is less than end, and both are within the boundary of the string, return the substring from the start index (inclusive), to the end index (NOT inclusive).
  If the value of start is greater than end, swap the values of the two, then return the substring as described above.
  If start is equal to end, return an empty string.
  If end is omitted, the end variable inside the function isundefined. Return the substring starting at position start up through (and including) the end of the string.
  If either start or end is less than 0 or NaN, treat it as 0.
  If either start or end is greater than the length of the string, treat it as equal to the string length.
Example:
  let string = 'hello world';

  substring(string, 2, 4);    // "ll"
  substring(string, 4, 2);    // "ll"
  substring(string, 0, -1);   // ""
  substring(string, 2);       // "llo world"
  substring(string, 'a');     // "hello world"
  substring(string, 8, 20);   // "rld"
Data:
  Input(s): String, Number, Number
  Output: String
Algorithm:
  START
*/

function substring(str, start, end) {
  let result = '';
  
  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || Number.isNaN(start)) {
    start = 0;
  }

  if (end < 0 || Number.isNaN(end)) {
    end = 0;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  for (let i = start; i < end; i++) {
    result += str[i];
  }

  return result;
}

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"