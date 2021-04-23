/*
PROBLEM: 
  Write a function that takes a string and returns an object containing the following three properties:

  the percentage of characters in the string that are lowercase letters
  the percentage of characters that are uppercase letters
  the percentage of characters that are neither
  You may assume that the string will always contain at least one character.
EXAMPLES: 
  letterPercentages('abCdef 123');
  // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

  letterPercentages('AbCd +Ef');
  // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

  letterPercentages('123');
  // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
DATA: 
  INPUT(s): String
  OUTPUT(s): Object { String, String, String }
MENTAL MODEL: 
  get the char code to determine whether the char is lower, upper, or other
  divide number/string.length * 100 

ALGORITHM: 
  SET lcCount
  SET ucCount
  SET otherCount

  WHILE inputStr
    IF (char-code > 64 || char-code < 91)
      ucCount++
    IF (char-code > 96 || char-code < 123)
      lcCount++
    ELSE other
      otherCount++

  RETURN {lowercase: (lcCount / input-length) * 100}
*/

function letterPercentages(str) {
  let n = str.length;
  let lcCount = 0;
  let ucCount = 0;
  let otherCount = 0;

  for (let c of str) {
    c = c.charCodeAt(0);
   
    if (c > 64 && c < 91) {
      ucCount++;
    } else if (c > 96 && c < 123) {
      lcCount++;
    } else {
      otherCount++;
    }
  }

  return {
    lowercase: ((lcCount / n) * 100).toFixed(2),
    uppercase: ((ucCount / n) * 100).toFixed(2),
    neither: ((otherCount / n) * 100).toFixed(2),
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }