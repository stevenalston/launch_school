/*
PROBLEM:
  Compare 2 arrays to see whether they share the same elements

EXAMPLES:
  areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
  areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
  areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
  areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
  areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
  areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
  areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
  areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false
  areArraysEqual([1, 1, 1], [1, 1]);                     // false
  areArraysEqual([1, 1], [1, 1]);                        // true

DATA: 
  Input(s): Array, Array
  Output: Boolean
ALGORITHM:
  START
    SET containedValues = {}
    WHILE array1
      SET containedValues[array1[i]] = false
    WHILE array2
      IF containedValues[array2[i]]
       THEN containedValues[array2[i]] = !containedValues[array2[i]] 
      ELSE
        return false
    return true
  END
 */

const areArraysEqual = (arr1, arr2) => {
  const sortedArray1 = arr1.sort();
  const sortedArray2 = arr2.sort();

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < sortedArray1.length; i += 1) {
    if (sortedArray1[i] !== sortedArray2[i]) {
      return false;
    } 
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true


