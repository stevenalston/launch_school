/*
PROBLEM: 
  Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

  The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

EXAMPLES: 
  // simple shift
  caesarEncrypt('A', 0);       // "A"
  caesarEncrypt('A', 3);       // "D"

  // wrap around
  caesarEncrypt('y', 5);       // "d"
  caesarEncrypt('a', 47);      // "v"

  // all letters
  caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
  // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
  caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
  // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

  // many non-letters
  caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
  // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

DATA: 
  INPUT(s): String, Number -> Integer
  OUTPUT(s): String 0f any char

MENTAL MODEL: 
  - The function takes a string and shifts the letter-char inputNum characters (increasing)?
    - can it take negative numbers
    - what if the second input isn't a Number?
  - Lowercase letters should be shifted to lowercase letters
  - Uppercase (65 - 90) | Lowercase (97 - 122)
  - if the inputNumber is larger than 25 the number should loop around to the beginning, cognisent of case
    - subtask loop num back to beginning
      - if inputNumber > 25 use modulo? inputNum % 25

ALGORITHM: 
  set cipherText = ''
  if (inputNum > 25) -> use modulo operator to set inputNum
  loop through plainText
    - if (charCode > 64 && charCode < 91) OR (charcode > 96 && charcode < 122)
      - get letter for (charcode + inputNum) -> String.fromCharCode()
      - cipherText += char
    - else cipherText += char

  return cipherText
      
*/

function caesarEncrypt(plainText, n) {
  let cipherText = '';

  if (n > 25) {
    n = n % 26;
  }

  for (let i = 0, len = plainText.length; i < len; i++) {
    let char = plainText[i];
    let charCode = char.charCodeAt();
    let tmpLen = n;

    if (charCode >= 65 && charCode <= 90) {
      if (charCode + tmpLen > 90) {
        tmpLen = tmpLen - (90 - charCode);
        cipherText += String.fromCharCode(64 + tmpLen);
      } else {
        cipherText += String.fromCharCode(charCode + tmpLen);
      }
    } else if (charCode >= 97 && charCode <= 122) {
      if (charCode + tmpLen > 122) {
        tmpLen = tmpLen - (122 - charCode);
        cipherText += String.fromCharCode(96 + tmpLen);
      } else {
        cipherText += String.fromCharCode(charCode + tmpLen);
      }
    } else {
      cipherText += char;
    }
  }

  return cipherText;
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('Y', 5));       // "D"
console.log(caesarEncrypt('a', 47));      // "v"
console.log(caesarEncrypt('A', 47));      // "V"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"