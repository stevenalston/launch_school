/*
PROBLEM: 
  Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

EXAMPLES: 
  star(7);
  // logs
  *  *  *  *$$*$$*
   * * *   $*$*$*$
    ***    $$***$$
  *******
    ***
   * * *
  *  *  *
star idx_position 1st row: 0, 3, 6   space idx_position 1st row: 1, 2, 4, 5
                  2nd row: 1, 3, 5                      2nd row: 0, 2, 4, 6 
                  3rd row: 2, 3, 4                      3rd row: 0, 1, 5, 6
  star(9);
  // logs
  *   *   *
   *  *  *
    * * *
     ***
  *********
     ***
    * * *
   *  *  *
  *   *   *

DATA: 
  INPUT(s): Integer
  OUTPUT(s): String of stars

MENTAL MODEL: 
  - stars are at the center position of every row
  - star_idx + 1 at left row, star_idx - 1 at right row
  - middle row all stars
  - split rows into halves
    - left have iterate 0 through end
    - right have iterates in reverse

ALGORITHM: 
  SET 2D array grid
  SET increasing boolean

  WHILE input_int
    WHILE star_idx < left_half
      IF input_int_inx PRINT star
      ELSE PRINT space
      IF left_half last El PRINT star
    END WHILE
    
    WHILE star_idx < right_half
      IF right_half_last - input_idx PRINT star
      ELSE print space
    END WHILE

    IF upperHalf_last_row PRINT stars

    ITERATE through left_half in reverse
    ITERATE right_half 0 to end
  END WHILE

  RETURN 2D_arr join with star


*/

function star(n) {
  let rowIdx = 0;
  let result = [];
  let increasing = true;

  if (n >= 7) {
    while (rowIdx < n) {
      let lft = new Array(Math.floor(n / 2)).fill(' ');
      let rgt = new Array(Math.floor(n / 2)).fill(' ');
      let rgtIdx = rgt.length - 1;
      let middleRow = Math.floor(n / 2);
      
      if (increasing && rowIdx !== middleRow) {
        lft[rowIdx] = '*';
        rgt[rgtIdx - rowIdx] = '*';
        result.push(lft.concat(['*', ...rgt]).join(''));
      } else if (!increasing && rowIdx !== middleRow) {
        lft[n - (rowIdx + 1)] = '*';
        rgt[rowIdx - (rgtIdx + 2)] = '*';
        result.push(lft.concat(['*', ...rgt]).join(''));
      } else {
        let middle = new Array(n).fill('*').join('');
        result.push(middle);
        increasing = !increasing;
      }
  
      rowIdx++;
    }
    return result.join('\n');
  }

  return 'Star size must be a minimum of 7'

}


// console.log(star(7));
console.log(star(9));
// console.log(star(11));