/*
PROBLEM: 
  A collection of spelling blocks has two letters per block, as shown in this list:

  B:O   X:K   D:Q   C:P   N:A
  G:T   R:E   F:S   J:W   H:U
  V:I   L:Y   Z:M

  This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

  Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

EXAMPLES: 
  isBlockWord('BATCH');      // true
  isBlockWord('BUTCH');      // false
  isBlockWord('jest');       // true
DATA: 
  INPUT(s): String of letters
  OUTPUT(s): Boolean

MENTAL MODEL: 
  - implicit:
    - words only consist of letters -> clean string?
  - exclicit:
    - if a letter from the set is used, the other letter from that set cannot be used
    - lowercase the letters

ALGORITHM: 
  set a blockUsed empty obj
  create a 2D array of the blocks
  split the word string and loop through the characters
  iterate through the blocks, check if current letter/char is included in that array
    - if included check whether key exists in the blockUsed obj
      - if exists return false
    - else add the block to the blockUsed obj
  return true
*/

function isBlockWord(wordStr) {
  wordStr = wordStr.replace(/\s/g, '').toUpperCase();
  
  const blocks = [
    ["B", 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
    ['G', 'T'], ['R','E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
    ['V','I'], ['L', 'Y'], ['Z', 'M']
  ];

  const blocksUsed = {}

  wordStr.split('').forEach((char) => {
    blocks.forEach((block, blockIdx) => {
      if (block[0] === char || block[1] === char) {
        if (blocksUsed[blockIdx]) {
          blocksUsed[blockIdx] = false
        } else {
          blocksUsed[blockIdx] = true;
        }
      }
    })
  }, []);

  return Object.values(blocksUsed).every(val => val);

}

console.log(isBlockWord('BATCH This B'));      // false
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('dine'));       // true
console.log(isBlockWord('dineR'));       // false