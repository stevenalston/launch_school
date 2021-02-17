/*
Problem:
  Write a function that takes two arguments:

  a string to be split
  a delimiter character
  The function logs the split strings to the console, as shown below:
Example: 
  splitString('abc,123,hello world', ',');
  // logs:
  // abc
  // 123
  // hello world

  splitString('hello');
  // logs:
  // ERROR: No delimiter

  splitString('hello', '');
  // logs:
  // h
  // e
  // l
  // l
  // o

  splitString('hello', ';');
  // logs:
  // hello

  splitString(';hello;', ';');
  // logs:
  //  (this is a blank line)
  // hello
DATA:
  input(s): String, String
  output: String with new lines
Algorithm:
  START
    WHILE index != -1
      IF dilimiter
        IF resultString length > 0
          push resultString to resultsArray
        continue to next word
      ELSE add characters to output
    JOIN resultArray elements with new line

    RETURN JOIN result
  END
*/

function splitString(str, delimiter) {
  let resultString = '';
  const resultArray = [];

  if (typeof delimiter === undefined) return 'ERROR: no delimiter';

  for (let i = 0, n = str.length; i < n; i++) {
    let val = str[i];
   
    if (delimiter === '') {
      resultArray.push(`${val}\n`)
    } else if (val === delimiter) {
      resultArray.push(`${resultString}\n`);
      resultString = '';
    } else {
      resultString += val
    }
  }

  return resultArray.join('');
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
  // logs:
  //  (this is a blank line)
  // hello