/*
PROBLEM:
  Write a function that returns a string converted to lowercase.

  To convert a single uppercase character to a lowercase character, get its ASCII numeric representation from the ASCII
  table, add 32 to that number, then convert the number back to a character using the same ASCII table. You can use the
  String.fromCharCode and the String.charCodeAt methods for these operations. For example:
EXAMPLES:
  let string = 'A';
  let asciiNumeric = string.charCodeAt(0);         // 65
  let asciiNumeric += 32;
  string = String.fromCharCode(asciiNumeric);

  toLowerCase('ALPHABET');    // "alphabet"
  toLowerCase('123');         // "123"
  toLowerCase('abcDEF');      // "abcdef"
DATA:
  Input(s): String
  Output: String
ALGORITHM:
  START
    SET result = ''
    WHILE i < str.length
      CONVERT char
    OUTPUT result
  END
*/

function toLowerCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let ascii = char.charCodeAt(0) > 96 ? char.charCodeAt(0) : char.charCodeAt(0) + 32 ;
    if (typeof char === 'string' && ascii > 96) {
      result += String.fromCharCode(ascii);
    } else {
      result += char;
    }
  }

  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
