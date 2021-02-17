/*
 Problem :
  Convert a string to a number
 
 Examples:  
        stringToInteger('4321');      // 4321
        stringToInteger('570');       // 570    

 Data:
        Input - String
        Output - Number
Algorithm:
        initialize a conversion table object
        convert string to an array
*/

const LOOKUP_TABLE = {
  "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9
}

function stringToInteger(str) {
  let splitStr = str.split('').reverse();
  let total = 0;

  for (let i = 0, n = splitStr.length; i < n; i++) {
    val = splitStr[i]
    total += (10 ** i) * LOOKUP_TABLE[val]
  }

  return total;
}

console.log(stringToInteger("4321"));
console.log(stringToInteger('570'));

// String to signed Integer
/*
function stringToSignedInteger(str) {
  chars = str.split('').reverse();
  let signedInt = 0
  if (str[0] === '-') {
    for (let i = 0, n = chars.length; i < n; i++) {
      val = chars[i]
      if (val === '-') {
        continue;
      } else {
        signedInt -= (10 ** i) * LOOKUP_TABLE[val]
      }  
    } 
  } else {
    for (let i = 0, n = chars.length; i < n; i++) {
      val = chars[i]
      if (val === '+') {
        continue;
      } else {
        signedInt += (10 ** i) * LOOKUP_TABLE[val]
      }  
    } 
  }
  return signedInt
}
*/


// lschool solution - much more elegant * remember it's okay to reuse other exercise fns

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-': return -stringToInteger(string.slice(1));
    case '+': return stringToInteger(string.slice(1));
    default:  return stringToInteger(string);
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100