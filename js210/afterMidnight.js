/*
PROBLEM: 
Given an integer, subtract or add the Number arg in minutes to set a string formatted to look like 'HH:MM'
Should use the Date object to do this. Reimplement the function below using the date object.

*/



// function timeOfDay(deltaMinutes) {
//   deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   if (deltaMinutes < 0) {
//     deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
//   }

//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR;

//   return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
// }

// function padWithZeroes(number, length) {
//   let numberString = String(number);

//   while (numberString.length < length) {
//     numberString = `0${numberString}`;
//   }

//   return numberString;
// }
const MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  const midnight = new Date('1/1/2021 00:00');
  const afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  const hours = paddZeros(String(afterMidnight.getHours()));
  const minutes = paddZeros(String(afterMidnight.getMinutes()));

  return hours + ':' + minutes;
}

function paddZeros(string) {
  let result = '';
  let counter = 0;

  if (string.length < 2) {
    while (counter < string.length) {
      result += `0${string[counter]}`;
      counter += 1;
    }
    return result;
  } else {
    return string;
  }
}
/*
console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
*/
/*
PROBLEM:
  use the Date object to reconigure the function
EXAMPLES: 
  afterMidnight('00:00');       // 0
  beforeMidnight('00:00');      // 0
  afterMidnight('12:34');       // 754
  beforeMidnight('12:34');      // 686
DATA:
  Input(s): String '00:00'
  Output - Integer
ALGORITHM
*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  const time = new Date(`1/1/2021 ${timeStr}`);
  const hours = new Date(time.getTime()).getHours();
  const minutes = new Date(time.getTime()).getMinutes();

  return hours * MINUTES_PER_HOUR + minutes;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686
