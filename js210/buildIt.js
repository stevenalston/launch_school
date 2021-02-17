// Build the Array methods

// forEach
function myForEach(array, fn) {
  for (let i = 0; i < array.length; i += 1) {
    fn(array[i], i, array);
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
// console.log(min);    //3

// filter

function myFilter(array, func) {
  const result = [];

  array.forEach(value => {
    if(func(value)) result.push(value);
  });

  return result;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

// console.log(myFilter([{ a: 3, b: 4,  c: 5 },
//           { a: 5, b: 12, c: 13 },
//           { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

// map

function myMap(array, func) {
  const result = [];

  array.forEach((val) => result.push(func(val)));

  return result;
}

let plusOne = n =>n + 1;
// console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]

// reduce

function myReduce(array, func, initial) {
  initial = initial ? initial : array[0];

  array.forEach(val => {
    if (typeof initial === 'string' || typeof initial === 'number') {
      initial = func(initial, val)
    } else {
      console.log('sorry, only accepts a String or Number for initial arg.')
    }
  })
  return initial;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

// console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
// console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

// every

function myOwnEvery(array, func) {
  for (let val of array) {
    if (!func(val)) return false;
  }
  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
console.log(myOwnEvery(['a', 3, '1abc'], isAString));       // false