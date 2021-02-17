/*
PROBLEM:
  Write a function named arraysEqual that takes two arrays as arguments. The function should return true if the arrays contain the same values, or false if they do not.

  Test the function with arrays that contain number, string, and boolean values. Don't worry about handling arrays that contain other Arrays or Objects.
  Implicit - Does order of values matter?
EXAMPLES:
  arraysEqual([1], [1]);                               // true
  arraysEqual([1], [2]);                               // false
  arraysEqual([1, 2], [1, 2, 3]);                      // false
  arraysEqual([1, 'hi', true], [1, 'hi', true]);       // true
  arraysEqual([1, 'hi', true], [1, 'hi', false]);      // false
  arraysEqual([1, 'hi', true], [1, 'hello', true]);    // false
  arraysEqual([1, 'hi', true], [2, 'hi', true]);       // false
DATA:
  Input(s): Array, Array
  Ouput: Boolean
Algoritm:
  START
    IF lengths NOT equal return false
    WHILE Array1
      IF Array1[index] == Array[2] index
      ELSE return false
    RETURN true
  END
*/

function arraysEqual(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let idx = 0; idx < arr1.length; idx++) {
      if (arr1[idx] !== arr2[idx]) return false;
    }

    return true
  }

  return false
}

console.log(arraysEqual([1], [1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false