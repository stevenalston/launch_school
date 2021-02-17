/*
PROBLEM:
  Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:

  For each character in the original String:

  If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet. Thus, a becomes n. If you reach the end of the alphabet, return to the beginning. Thus, o becomes b.
  Letter transformations preserve case. A becomes N while a becomes n.
  Don't modify characters that are not letters.
  Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.
EXAMPLES:
  console.log(rot13('Teachers open the door, but you must enter by yourself.'));

  // logs:
  Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
  It's worth noting that rot13 applied twice results in the original string:

  Copy Code
  console.log(rot13(rot13('Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.')));

  // logs:
  Teachers open the door, but you must enter by yoursel
DATA:
  Input(s): String
  Output: String
ALGORITHM:
  START

    WHILE - iterate over stringArg
      SET asciiCode = char.charCodeAt(0)
      IF asciiCode 65 through 77 OR 97 through 109
        THEN result += String.fromCharCode((asciiCode + 13))
      ELSE IF asciiCode 78 through 90 OR 110 through 122
        THEN result = String.fromCharCode((asciiCode + 13))
      ELSE
        result += char
    OUTPUT result

  END

*/

function rot13(str) {
  let result = '';

  for (let i = 0, n = str.length; i < n; i++) {
    let char = str[i];
    let asciiCode = char.charCodeAt(0);

    if ((asciiCode >= 65 && asciiCode<= 77) || (asciiCode >= 97 && asciiCode <= 109)) {
      result += String.fromCharCode((asciiCode + 13));
    } else if ((asciiCode >= 78 && asciiCode<= 90) || (asciiCode >= 110 && asciiCode <= 122)) {
      result += String.fromCharCode((asciiCode - 13));
    } else {
      result += char;
    }
  }

  return result;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// logs: Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// logs: Teachers open the door, but you must enter by yourself.