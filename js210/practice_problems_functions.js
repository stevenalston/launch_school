// function average(totalSum) {
//     return sum(totalSum) / arguments.length
// }

// function sum(a, b, c) {
//     return a + b + c
// }

function sum(avgArr) {
    let total = 0
    for (let i = 0, n = avgArr.length; i < n; i++) {
        total += avgArr[i]
    }

    return total;
}

const temperatures = [93, 80, 82, 76, 95]
// console.log(average(temperatures));

const average = function (arr) {
    return sum(arr) / arr.length
}

function add(first, second) {
    return first + second;
  }
  
  function makeAdder(firstNumber) {
    return function(secondNumber) {
      return add(firstNumber, secondNumber);
    };
  }
  
  let addFive = makeAdder(5);
  let addTen = makeAdder(10);
  
  console.log(addFive);
  console.log(addFive(3));  // 8
  console.log(addFive(55)); // 60
  console.log(addTen(3));   // 13
  console.log(addTen(55));  // 65