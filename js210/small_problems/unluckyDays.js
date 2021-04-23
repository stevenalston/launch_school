/*
PROBLEM: 
EXAMPLES: 
  fridayThe13ths(1986);      // 1
  fridayThe13ths(2015);      // 3
  fridayThe13ths(2017);      // 2

DATA: 
  INPUT(s): Integer
  OUTPUT(s): Integer
MENTAL MODEL: 
  need to convert the year into a Date object
  loop through the months (0 - 11)
  get the 13th
  if getDay = 5
ALGORITHM: 
*/
function fridayThe13ths(year) {
  let count = 0;
  const d = new Date(0);

  for (let month = 0; month < 12; month++) {
    d.setFullYear(year, month, 13)
    if (d.getDay() === 5) count++;
  }

  return count
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2