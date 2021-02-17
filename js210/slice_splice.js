// implement the slice and splice function
// PROBLEM:
// extract els for the begin up to, but not including, the end var
// Slice the values of begin and end will always be ints greater than or equal to 0
// if the begin or end vars are greater than the length of array set equal to array length

//INPUT(s) : String, Number, Number
// OUTPUT: Array


// ALGO:
// START
let slice = (array, begin, end) => {
  if (begin > array.length) begin = array.length;
  if (end > array.length) end = array.length;
  
	return array.filter((el, i) => {
		if (i >= begin && i < end) return el;
  });
};

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

/* Implement the SPLICE fn
PROBLEM:
  extract els starting at the start index  and remove the delete count
  start deleteCount ints >= 0
  start > array.length SET start = array.length
  IF deleteCount > array.length - start SET deleteCount = deleteCount - (array.length - start)
  Take 2 optional args to add to result array
  return Array containing removed Els
  Mutates original orray, inserting new values where the old values at the index that old values started being removed.

DATA: 
  Input(s): Array, Number, Number, Array
  Output: new Array
ALGORITHM:
  START
    SET length = array.length
    SET result = []
    IF deleteCount >= 0 AND start >= 0
      WHILE index >= start AND index < start + deletcount
        push el to result
    ELSE 
      IF start > length 
        SET start = length
      IF deleteCount > (length - start)
        SET deleteCount = length - start
*/
const splice = (array, start, deleteCount, ...args) => {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  const arrayCopy = slice(array, 0, array.length);
  const elementCount = args.length;
  const newLength = array.length + elementCount - deleteCount;
  array.length = newLength;

  for (let i = 0; i < elementCount; i += 1) {
    array[start + i] = args[i];
  }

  let copyBackCount = arrayCopy.length - (start + deleteCount);
  for (let i = 0; i < copyBackCount; i += 1) {
    array[start + elementCount + i] = arrayCopy[start + deleteCount + i];
  }

  return slice(arrayCopy, start, start + deleteCount);
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]
