function push(arr, val) {
  let index = arr.length;
  let newLength = arr.length + 1;
  arr[index] = val;

  return newLength;
}

function pop(arr) {
  if (arr.length > 0) {
    let newLength = arr.length - 1;
    let value = arr[newLength];
    arr.length = newLength;
    return value
  }
}

// let arr = [1, 2, 3, 4];
// pop(arr);
// console.log('poppedArr: ', arr);

function unshift(arr, val) {
  if ((arr || []).length > 0) {
    let newLength = arr.length + 1;

    for (let i = arr.length; i > 0; i--) {
      arr[i] = arr[i - 1];
    }

    arr[0] = val;
    return newLength;
  }
}

// let count = [1, 2, 3];
// console.log(unshift(count, 0));      // 4
// corner case - Array hasn't been created yet. Method won't raise error
// console.log(unshift(undefined, 2)); // return undefined
// console.log(count);                  // [ 0, 1, 2, 3 ]

function shift(arr) {
  let firstVal = arr[0]
  if((arr || []).length > 0) {
    

    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    
    arr.length = arr.length - 1;
    return firstVal;
  }
}

// let count = [1, 2, 3];
// console.log(shift(count));           // 1
// console.log(count);                  // [ 2, 3 ]

function indexOf(arr, n) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i]) {
      if (arr[i] === n) {
        return i;
      }
    }
  }
  return -1
}

// console.log(indexOf([1, 2, 3, 3], 3));         // 2
// console.log(indexOf([1, 2, 3], 4));            // -1

function lastIndexOf(arr, n) {
  let lastIndex = null;
  for (let i = 0, len = arr.length; i < len; i++) {
    let val = arr[i];
    
    if (val) {
      if (val === n) {
        lastIndex = i;
      }
    }
  }
  return !!lastIndex ? lastIndex : -1;
}

// console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
// console.log(lastIndexOf([1, 2, 3], 4));        // -1

/* Write a function named slice that accepts three arguments: an Array, a start index, and an end index. The function should return a new Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index. Do not modify the original Array. */

function slice(arr, start, end) {
  const result = [];
  
  for (let i = start; i < end; i++) {
    let val = arr[i];
    if (val) {
      push(result, val);
    }
  }
  return result;
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

/*
Problem:
  Write a function named splice that accepts three arguments: an Array, a start index, and the number of values to remove. The function should remove values from the original Array, starting with the first index and removing the specified number of values. The function should return the removed values in a new Array.
Examples:
  let count = [1, 2, 3, 4, 5, 6, 7, 8];
  splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
  count;   
Data:
  Input(s): Array, Number, Number
  Output: Array
Algorithm:
  START
    IF arr
      SET result = slice(arr, start, valsToRemove + 1)
    OUTPUT result
*/

function splice(arr, start, number) {
  let removedValues = [];
  for (let index = start; index < arr.length; index += 1) {
    if (index < start + number) {
      push(removedValues, arr[index]);
    }

    arr[index] = arr[index + number];
  }

  arr.length = arr.length - removedValues.length;
  return removedValues;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);

function concat(arr1, arr2) {
  let resultArr = [];

  for (let idx = 0; idx < arr1.length; idx++) {
    push(resultArr, arr1[idx]);
  }
  for (let idx = 0; idx < arr2.length; idx++) {
    push(resultArr, arr2[idx]);
  }

  return resultArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

function join(arr, seperator) {
  let resultString = '';

  for (let arrIdx = 0; arrIdx < arr.length; arrIdx++) {
    let val = String(arr[arrIdx]);

    for (let idx = 0; idx < val.length; idx++) {
      resultString += val[idx];
    }

    if(arrIdx !== arr.length - 1) resultString += seperator;
  }

  return resultString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'


// This required a bit more thought on how to achieve without the use of an object/hash
function uniqueElements(arr) {
  let uniques = [];
  let len = arr.length;

  for (let index = 0; index < len; index += 1) {
    // indexOf => -1 if value not found
    if (uniques.indexOf(arr[index]) === -1) {
      uniques.push(arr[index]);
    }
  }

  return uniques;
}