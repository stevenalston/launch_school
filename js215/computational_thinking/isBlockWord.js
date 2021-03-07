// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// implicit - You can't use both letters so inherently you can't use the block twice
// implicit - All letters are in the block

// can words include any special characters

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise.
// You can consider the letters to be case-insensitive when you apply the rules.

// Examples:
// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true
// isBlockWord('bow');       // false

// DATA
  // Input(s): String
  // Output Boolean

// ALGORITHM
//   SET blocks = {}
//   SET blockUseCount = {}
//   Iterate word
//     SET char = word[i].upcase
//     IF !blockUseCount[char] 
//       blockUsed[char] = true
//         IF BLOCKS keys contain char
//           blockUsed[BLOCKS[char]] = true
//         IF BLOCKS values contain char
//           blockUsed[subTask] = true
//       return true
//     ELSE return false




const SPELLING_BLOCKS = {
  B:'O', X:'K', D:'Q', C:'P', N:'A',
  G:'T', R:'E', F:'S', J:'W', H:'U',
  V:'I', L:'Y', Z:'M'
}

function isBlockWord(word) {
  const blockUsed = {};
  
  return word.match(/[a-z]/gi).map( char => {
    char = char.toUpperCase();

    if (!blockUsed[char]) {
      blockUsed[char] = true;

      if (Object.keys(SPELLING_BLOCKS).includes(char)) blockUsed[SPELLING_BLOCKS[char]] = true;
      if (Object.values(SPELLING_BLOCKS).includes(char)) blockUsed[getKeyByValue(SPELLING_BLOCKS, char)] = true;

      return true
    } else {
      return false
    }
  }).every(match => match);
}

function getKeyByValue(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value)
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));  // -> J {j: 1}  E = {j: true, e: 1}   // true
console.log(isBlockWord('crest'));  // -> C blockUse[C] = 1     // false
