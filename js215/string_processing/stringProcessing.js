function swapCase(str) {
  return str.replace(/[a-z]/gi, char => {
    if (/[A-Z]/.test(char)) {
      return char.toLowerCase();
    } else if (/[a-z]/.test(char)) {
      return char.toUpperCase();
    } else {
      return char;
    }
  })
}
// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

function staggeredCase(str) {
  return str.split('').reduce((acc, char, i) => {
    if (i % 2 === 0) {
      return acc + char.toUpperCase();
    } else if (i % 2 !== 0) {
      return acc + char.toLowerCase();
    } else {
      return char;
    }
  }, '')
}

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

function staggeredCase2(string) {
  let needUpper = true;
  let newChar;

  return string.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      if (needUpper) {
        newChar = char.toUpperCase();
      } else {
        newChar = char.toLowerCase();
      }

      // flips the boolean each time through the loop when the char is a letter
      needUpper = !needUpper;
      return newChar;
    } else {
      return char;
    }
  }).join('');
}

function wordLengths(str) {
  if (str) {
    return str.split(' ').map(word => word ? `${word} ${word.length}`: '');
  }
  return [];
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []