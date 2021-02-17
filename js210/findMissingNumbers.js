/*
PROBLEM: 
  Write a function that takes a sorted array of integers as an argument, and returns an array that includes all the missing integers (in order) between the first and last elements of the argument.
EXAMPLES: 
  missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
  missing([1, 2, 3, 4]);                    // []
  missing([1, 5]);                          // [2, 3, 4]
  missing([6]);                             // []
DATA STRUCTURES:
  Input(s): Array
  Output: Array
ALGORITHM:
  START
    SET missingNumbers = []
    WHILE arr
      SET val, nxtVal
      IF val + 1 != nxtVal
        WHILE SET val <= nxtVal
          push val
          val++
      OUPUT missingNumbers
    END
          
*/

function missing(arr) {
  let missingNumbers = [];

  for (let idx = 0; idx < arr.length; idx++) {
    let val = arr[idx], nxtVal = arr[idx + 1];

    if (val + 1 !== nxtVal) {
      let missing = val + 1;
      while (missing < nxtVal) {
        missingNumbers.push(missing);
        missing++;
      }
    }
  }

  return missingNumbers
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []