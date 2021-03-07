/*
  There must be one @ sign.
  The local part must contain one or more letters (A-Z, a-z) and/or digits (0-9). It may not contain any other characters.
  The domain part must contain two or more components with a single dot (.) between each component. Each component must contain one or more letters (A-Z, a-z) only.
*/

// function isValidEmail(email) {
//   let [local, domain] = email.split('@');
//   if (domain.split('.').length > 1) {
//     return !!local.match(/^[a-z0-9]+$/gi) &&
//       !!domain.split('.').every(str => str.match(/^[a-z]+$/gi))
//   }
//   return false;
// }

// lschool solution
function isValidEmail(email) {
  // 1. /^[a-z0-9]+@ -> string starts with one or more occurrences of letters or digits, followed by @
  // 2. ([a-z]+\.)+[a-z]+$ -> one or more occurances of letters, followed by a period '.'
  // 3. [a-z]+$ -> one or more occurrences of letters at the end of the String.
  // 4. /i -> make it case insensitive 
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false