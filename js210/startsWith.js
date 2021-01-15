/*
PROBLEM:
  Implement a function that determines whether a string begins with another string. If it does, the function should
  return true, or false otherwise.
EXAMPLES:
  let str = 'We put comprehension and mastery above all else';
  startsWith(str, 'We');              // true
  startsWith(str, 'We put');          // true
  startsWith(str, '');                // true
  startsWith(str, 'put');             // false

  let longerString = 'We put comprehension and mastery above all else!';
  startsWith(str, longerString);      // false
DATA:
  Input(s): String, String
  Output: Boolean
ALGORITHM:
  START
    
*/
function startsWith(str, searchStr) {
  let result = '';

  for (let i = 0, n = searchStr.length; i < n; i++) {
    let val = str[i];
    let searchVal = searchStr[i];

    if (searchVal === val) {
      result += val;
    } else { 
      return false;
    }
  }

  return result === searchStr;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
