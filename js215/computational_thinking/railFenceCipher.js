/*
PROBLEM:
Implement encoding and decoding for the rail fence cipher.
The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.
In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

Then reads off:
WECRLTEERDSOEEFEAOCAIVDEN

To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.
? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

The first row has seven spots that can be filled with "WECRLTE".
W . . . E . . . C . . . R . . . L . . . T . . . E
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

Now the 2nd row takes "ERDSOEEFEAOC".
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

Leaving "AIVDEN" for the last row.
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

You can now read the original message
2 rails:
W . A . E . I . C . V . R . D . L . E . T . N . E
. E . R . D . S . O . E . E . F . E . A . O . C .

4 rails?
W . . . . . I . . . . . R . . . . . E . . . . . E
. E . . . D . S . . . E . E . . . E . A . . . C .
. . A . E . . . C . V . . . D . L . . . T . N . .
. . . R . . . . . O . . . . . F . . . . . O . . .

3 rails, 'we are'?
W . . . E
. E . R .
. . A . .

DATA:
Using 3 'rails' and the message "WE ARE DISCOVERED FLEE AT ONCE"
  Input(s) - Number -> RAILS, String -> characters
    - Message written downwards in successive rows
      - string is cleaned to remove whitespace
      - whitespace is not counted in calculating this length
      - Each row has a length that is as long as the non-whitespace chars
    - First Line when using 3 rails:
      - space are not included in the cipher
      - 1. offset 0, prints first char in chars group,
      - 2. Add a period for the next {3} (pattern coincides with the number of rails) non-whitespace chars
      - 3. Add 4th non-whitespace char
      - 4. repeat step 2
    - Second Line using 3 rails:
      - 1. offset 1, print first char in chars group.
      - 2. letters need to be printed the space immediately follwing a letter from the line above
      - 3. letters need to be printed the space immediately preceding a letter from the line above
    Output: A String of rows

  PATTERNS:
    the offest is equal to the index if one where to loop through the rails
    if the letter above is at index 0, the letter below is at 1 if the next letter from line 1 is at
    index 6, the letter below is at index 5
    spaces = length / rails 
    if char == start = railsIdx || char == end = spaces - railsIdx between the top row
    else char == '. '
    


ALGORITHM
  takes to params: rails, inputString
  clean the inputString
  SET railLength = inputString.length
  SET spaces = (rails - 1) * 2
  SET railIdx = 0

  WHILE railIdx < rails
    SET sumOfSpace = 0
    WHILE strIdx < railLength
      SET char = cleanedStr[strIdx]
      IF strIdx == railIdx || strIdx == spaces - railIdx
        PRINT char
      ELSE
        PRINT '. '
      sumOfSpace += spaces
    PRINT '/n'
  END
END
3 rails, 'we are'?
W . . . E
. E . R .
. . A . .
*/

function railFenceCipher(rails, inputStr) {
  let cleanStr = inputStr.replace(/\s/g, '').toUpperCase();
  let result = '';
  let spaces = (rails - 1) * 2;

  for (let railIdx = 0; railIdx < rails; railIdx += 1) {

    for(let strIdx = 0, n = cleanStr.length; strIdx < n; strIdx += 1) {
      let letter = cleanStr[strIdx];
      if (strIdx === spaces + railIdx || strIdx === spaces - railIdx) {
        result += `${letter} `;
        spaces += strIdx;
      } else {
        result += '. ';
      }
    }
    result += '\n';
  }

  return result;
}

console.log(railFenceCipher(3, 'we are discovered flee at once'));