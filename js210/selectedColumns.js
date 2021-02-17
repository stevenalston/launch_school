/*
 PROBLEM:
  The getSelectedColumns function selects and extracts specific columns to a new array. Currently, the function
  is not producing the expected result. Go over the function and the sample runs shown below. What do you think
  the problem is? 

  The existing solution never loops through the arg1 arrays, only iterates over each array

  LS Solution: We were initially declaring a length variable declared with var, so upon entering the second loop length was being reassigned
  since var doesn't adhere to block scope.

EXAMPLES:
  getSelectedColumns(array1, [0]);     // [[1]];            expected: [[1, 4, 7]]
  getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
  getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]
DATA:
  Input(s): Array, Array
    Implicit
    - the first arg is an array of arrays
    - the second arg is an array of the columns to grab values from 
  Output: Array of Arrays
ALGORITHM:
  START
    SET result = []
    WHILE arg1 iterate each array
      WHILE arg1[index] iterate through values of array
        IF !result[col[j]]
          THEN SET result[col[j]] = []
        IF arg[1] index
 */
function getSelectedColumns(numbers, cols) {
  var result = [];

  for (let i = 0; i < cols.length; i += 1) {
    if (!result[i]) {
      result[i] = [];
    }
    for (let j = 0; j < numbers.length; j += 1) {
      result[i][j] = numbers[j][cols[i]]
    }
  }

  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

