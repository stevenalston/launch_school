/*
PROBLEM: 
  A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

  Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

  NOTE: The largest possible featured number is 9876543201.

EXAMPLES: 
  featured(12);           // 21
  featured(20);           // 21
  featured(21);           // 35
  featured(997);          // 1029
  featured(1029);         // 1043
  featured(999999);       // 1023547
  featured(999999987);    // 1023456987
  featured(9876543186);   // 9876543201
  featured(9876543200);   // 9876543201
  featured(9876543201);   // "There is no possible number that fulfills those requirements."

DATA: 
  INPUT(s): Integer
  OUTPUT(s): Integer || String
MENTAL MODEL: 
  find the next largest number that is odd, a multiple of 7, with all digits of this number occuring only once
  
ALGORITHM: 
  SET tmp = InputNum
  IF inputInt > largestFeaturedNum return 'not possible'

  increment up from the input int check whether the number meets 1st 2 requirements
  SET isSearching = true
  WHILE isSearching
    IF inputInt % 7 == 0 && inputInt % 2 != 0
      IF (checkDigitOccurances(inputNum) return InputNum

  
  checkDigitOccurances: n
    SET occurances = {}
    SET digits = n.split('')
    WHILE digits
      return occurances[n] ? false : true
*/

function featured(num) {
  if (num > 9876543200) return "There is no possible number that fulfills those requirements.";

  while(true) {
    num++;
    if (num % 7 === 0 && num % 2 !== 0) {
      if (checkDigitOccurances(num)) return num;
    }
  }

  function checkDigitOccurances(n) {
    const occurances = {};

    for(let digit of String(n)) {
      if (occurances[digit]) {
        return false;
      } else {
        occurances[digit] = digit
      }
    }
    
    return true;
  }
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."