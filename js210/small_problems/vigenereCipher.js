/*
PROBLEM:
  The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

  Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

EXAMPLES:
  plaintext: Pineapples don't go on pizzas!
  keyword: meat

  Applying the Vigenere Cipher for each alphabetic character:
  plaintext : Pine appl esdo ntgo onpi zzas
  shift     : meat meat meat meat meat meat
  ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

  result: Bmnxmtpeqw dhz'x gh ar pbldal!

DATA: 
  INPUT(s): plainText String, cipherKeyword String
  OUTPUT(s): CipherText String

MENTAL MODEL: 
  - the plaintext is split into groups of the length of the keyword text
      - split plainText into an array of keyLen letters
  - each plainLetter is shifted according to the indexed keyLetter it aligns with
  - non-letters are ignored while iterating plainLetters
  - keyword letters are 0 - 25
    - the keyword can be uppercase to convert to 0-25 
  really all that changes from the ceasarCipher is n
ALGORITHM: 
  SET letterGroups = plainText into array
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

function vigenereEncrypt(plaintext, keyword) {
  keyword = keyword.toUpperCase();

  const regex = new RegExp(`[a-z]{1,${keyword.length}}`,"gi");
  const textGrps = plaintext.replace(/\s|\W/g, '').match(regex);

  let encryptedLetters = textGrps.reduce((acc, group, idx) => {
    for (let idx = 0; idx < group.length; idx += 1) {
      let letter = group[idx];
      let n = keyword[idx].charCodeAt() - 65;
      acc += caesarEncrypt(letter, n);
    }
    return acc;
  }, '');
    
  return formatText(plaintext, encryptedLetters)
}

function formatText(formattedText, unformattedText) {
  let orgChar, newChar;
  let output = '';
  let n = formattedText.length;

  for(let i = 0, j = 0; i < n; i += 1) {
    orgChar = formattedText[i]
    newChar = unformattedText[j];
    if (/[a-z]/gi.test(orgChar)) {
      output += newChar
      j += 1;
    } else {
      output += orgChar
    }
  }

  return output;
}



console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat')); // Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereEncrypt("ABC DEF GHI JKL MNO PQR STU VWX YZ!", 'z')); // "ZAB CDE FGH IJK LMN OPQ RST UVW XY!"
console.log(vigenereEncrypt("3.2.1. 'ADD'!!!", 'Dad')); // 3.2.1. 'DDH
console.log(vigenereEncrypt("A_", 'e')); // D_