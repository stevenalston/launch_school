/*
PROBLEM: 
  Write a function that displays a four-pointed diamond in an nxn grid, where n
  is an odd integer supplied as an argument to the function. You may assume that
  the argument will always be an odd integer.
EXAMPLES: 
diamond(1);
  // logs
  . * .
  diamond(3);
  // logs
  . * .
  * * *
  . * .
  diamond(9);
  // logs
      *
     ***
    *****
   *******
  *********
   *******
    *****
     ***
      *
      
DATA: 
  INPUT(s): Odd Integer
  OUTPUT(s): String
MENTAL MODEL: 
  - total columns equals inputInt
  - spaces are even, subsitute symbol in place of spaces
  - stars increase by two each row until it reaches inputInt
  - after width == inputInt, stars decrease
  - height and width equal
  - loop through rows backwards
  $*    $$*     $$***
  ***   $***    $*****
  $*    *****   *******
        $***
        $$*


ALGORITHM: 
  SET spaces = 0
  SET starsCount = n
  SET result = ''
  WHILE spaces < n
    WHILE spaces > 0
      PRINT space
    END WHILE

    WHILE starCount > 0
      PRINT star
    END WHILE

    spaces++
    starCount -= 2
  END WHILE

  RETURN result
    


*/

function diamond(n) {
  let result = '';
  let spaces = n !== 1 ? Math.floor(n / 2) : 1;
  let starCount = 1;
  let counter = 0;
  let increasing = false;

  while (counter < n) {
    for (let len = spaces; len > 0; len--) {
      result += ' ';
    }

    for (let len = starCount; len > 0; len--) {
      result += '*';
    }

    result += '\n';

    spaces === 0 ? increasing = !increasing : increasing
   
    if (increasing) {
      spaces++;
      starCount -= 2;
    } else {
      spaces--;
      starCount += 2;
    }

    counter++;
  }

  return result
}

console.log(diamond(1));
console.log(diamond(5));
console.log(diamond(9));
console.log(diamond(13));
