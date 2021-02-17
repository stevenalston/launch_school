/*
PROBLEM:
Reconfigure the function below to convert the time to 'HR:MIN' using the DATE Object
EXAMPLES:
  timeOfDay(0);          // "00:00"
  timeOfDay(-3);         // "23:57"
  timeOfDay(35);         // "00:35"
  timeOfDay(-1437);      // "00:03"
  timeOfDay(3000);       // "02:00"
  timeOfDay(800);        // "13:20"
  timeOfDay(-4231);      // "01:29"
DATA:
  Input(s) - Integer/Number
  Output - String ("hh:mm")
ALGORITHM
*/
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

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
  const midnight = new Date('1/1/2000 00:00');
  const afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  const hours = padWithZeroes(afterMidnight.getHours(), 2);
  const minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

  return `${hours}:${minutes}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"

/*
PROBLEM:
  use the date object to reconfigure the function
  How many hours have elapsed after or before midnight '00:00'
  get hours and minutes based of input String
EXAMPLES:
  afterMidnight('00:00');       // 0
  beforeMidnight('00:00');      // 0
  afterMidnight('12:34');       // 754
  beforeMidnight('12:34');      // 686
DATA:
  Input(s): String
  Output: Number
ALGORITHM:
  SET time = new Date('1/1/2021 ${inputString}).getTime()
  SET hours = time.getHours() * 60
  SET minutes = time.getMinutes
*/
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  // const timeComponents = timeStr.split(':');
  // const hours = parseInt(timeComponents[0], 10);
  // const minutes = parseInt(timeComponents[1], 10);

  // return hours * MINUTES_PER_HOUR + minutes;
  const time = new Date(`1/1/2021 ${timeStr}`).getTime();
  const 
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}