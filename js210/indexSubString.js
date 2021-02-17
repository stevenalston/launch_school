/*
Problem: 
  Write two functions that each take two strings as arguments. Their expected behaviors are as follows:

  The indexOf function searches for the first instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

  The lastIndexOf function searches for the last instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

  Both functions return -1 if firstString does not contain the substring specified by secondString.

  Can't use JS built-in functions

Examples:
  function indexOf(firstString, secondString) {
  // statements
}

function lastIndexOf(firstString, secondString) {
  // statements
}

  indexOf('Some strings', 's');                      // 5
  indexOf('Blue Whale', 'Whale');                    // 5
  indexOf('Blue Whale', 'Blute');                    // -1
  indexOf('Blue Whale', 'leB');                      // -1

  lastIndexOf('Some strings', 's');                  // 11
  lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
  lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
Data:
  Inputs: String, String
  Ouput: Number
Algorithm:
  START
    SET allOccurrances = []
    SET chars = split first string on chars
    
    WHILE chars
      IF firstString[index] == secondString[index]
        THEN IF secondString[index] == secondString.length - 1
          push index to allOccurances
      ELSE continue

    firstIndex = allOccurances[0]
  END
*/

function indexOf(str, subString) {
  let result =  findOccurances(str, subString);
  return result.length === 0 ? -1 : result[0];
}

function lastIndexOf(str, subString) {
  let result =  findOccurances(str, subString);
  return result.length === 0 ? -1 : result.reverse()[0];
}

function findOccurances(str, subString) {
  const occurances =[];
  const strChars = str.split('');
  const subStringChars = subString.split('');
  let firstOccurance = null;

  strChars.forEach((char, index) => {
      if (char === subString[0]) {
        firstOccurance = index;
        subStringChars.forEach((c, subIndex) => {
          if (str[index + subIndex] !== c) return;
          if (subIndex === subString.length - 1) occurances.push(firstOccurance)
        })
      }
  });

  return occurances
}

console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1
console.log(indexOf('Some strings', 's'));                      // 5

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1