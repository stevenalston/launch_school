/*
  PROBLEM: 
    Write a function that takes two arguments:

    1. a string to be split
    2. a delimiter character
    The function logs the split strings to the console, as shown below:
  EXAMPLES:
    splitString('abc,123,hello world', ',');
    // logs:
    // abc
    // 123
    // hello world
  DATA:
    input: String, String
    output: String
  ALGORITHM
    START
      SET tmpString = ''
      SET result = ''
      WHILE 
        SET val = str[i]
        IF val = delimiter 
          THEN concat result AND tmpString
          SET = tmpString = ''
        ELSE 
          tmpString + val
      OUTPUT result
    END
*/
function splitString(str, delimiter) {
  let tmpString = '';
  let result = '';

  if (typeof delimiter === 'undefined') return 'ERROR: must specify a delimiter';
  
  for (let i = 0, n = str.length; i < n; i++) {
    let val = str[i];
    if (delimiter === '') {
      result += `\n${val}`;
    } else if (val === delimiter) {
      result += `\n${tmpString}`;
      tmpString = '';
    } else {
      tmpString += val;
    }

    if (i === str.length - 1) {
      result += `\n${tmpString}`
    }
  }
  
  return result;
}

console.log(splitString('abc,123,hello world', ','));
    // logs:
    // abc
    // 123
    // hello world
console.log(splitString('hello'));
// logs:
// ERROR: No delimiter

console.log(splitString('hello', ''));
// logs:
// h
// e
// l
// l
// o

console.log(splitString('hello', ';'));
// logs:
// hello

console.log(splitString(';hello;', ';'));
