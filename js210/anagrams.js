/*
PROBLEM:
  Given a String, find all the Strings in an Array that have the same letters
EXAMPLES:
  anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
  anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]
DATA:
  Input(s): String, Array of Strings
  Output: Array
ALGORITHM:
  split the string into characters
  sort the characters
  IF every char matches
    THEN push the original String that matchs into a new Array

*/


function anagram(word, list) {
  word = word.split('').sort();

  return list.filter(val => {
    if (val.length === word.length) {
      let splitStr = val.split('').sort();
      return splitStr.every((char, i) => char === word[i])
    } else {
      return false;
    }
  })
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]