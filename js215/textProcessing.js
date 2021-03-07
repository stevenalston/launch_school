// acronym 

function acronym(str) {
  // use the basic matching regex expression as the split arg.
  // another option was to use the replace method to replace hyphen with strings
  return str.split(/-| /).reduce((acc, word) => acc + word[0].toUpperCase(),"")
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"