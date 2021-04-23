/*
PROBLEM: 
  A triangle is classified as follows:

  Equilateral: All three sides are of equal length.
  Isosceles: Two sides are of equal length, while the third is different.
  Scalene: All three sides are of different lengths.
  To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

  Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

EXAMPLES: 
  triangle(3, 3, 3);        // "equilateral"
  triangle(3, 3, 1.5);      // "isosceles"
  triangle(3, 4, 5);        // "scalene"
  triangle(0, 3, 3);        // "invalid"
  triangle(3, 1, 1);        // "invalid"

DATA: 
  INPUT(s): Number, Number, Number
  OUTPUT(s): String
MENTAL MODEL: 
ALGORITHM: 
*/

function triangle(...sides) {
  let perimeter = sides.reduce((acc, val) => acc + val, 0)

  if (Math.min(...sides) < 1 || perimeter <= Math.max(...sides) * 2 ) return 'invalid'

  let i = 0;
  let j = 1;
  let count = 0;

  while (j < sides.length) {
    if (sides[i] === sides[j]) {
      count++;
      j++;
    } else {
      i++
      j++
    }
    
  }

  return count === 2 ? 'equilateral' : count === 1 ? 'isosceles' : 'scalene'
  
}

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

/*
PROBLEM: 
  A triangle is classified as follows:

  Right: One angle is a right angle (exactly 90 degrees).
  Acute: All three angles are less than 90 degrees.
  Obtuse: One angle is greater than 90 degrees.
  To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

  Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

  You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

EXAMPLES: 
  triangle(60, 70, 50);       // "acute"
  triangle(30, 90, 60);       // "right"
  triangle(120, 50, 10);      // "obtuse"
  triangle(0, 90, 90);        // "invalid"
  triangle(50, 50, 50);       // "invalid"

DATA: 
  INPUT(s): ...Number
  OUTPUT(s): String

MENTAL MODEL: 
 
ALGORITHM: 
*/

function triAngle(...angles) {
  if (invalid(angles)) return 'invalid';

  return angles.find(angle => angle === 90) ? 'Right' :
    angles.every(angle => angle < 90) ? 'Acute' : 'Obtuse';


  function invalid(args) {
    const sum = args.reduce((acc, el) => acc + el, 0);
    return sum !== 180 ||
      args.filter(el => el < 1).length !== 0;
  }
}

console.log(triAngle(60, 70, 50));       // "acute"
console.log(triAngle(30, 90, 60));       // "right"
console.log(triAngle(120, 50, 10));      // "obtuse"
console.log(triAngle(0, 90, 90));        // "invalid"
console.log(triAngle(50, 50, 50));       // "invalid"