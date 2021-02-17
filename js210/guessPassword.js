const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const PASSWORD = 'password';
let guessTotal = 0;

function guessPassword() {

  rl.question('What is the password?', password => {
    if (guessTotal === 3) rl.close(); 
    if (password !== PASSWORD) {
      console.log(password, guessTotal)
      guessTotal++;
      guessPassword()
    } else {
      console.log('You have successfully logged in')
      rl.close();
    }
  })

  console.log('You have been denied access.');
  rl.close();
  rl.on("close", function() {
    console.log("\nTry again later!");
    process.exit(0);
  });
}

guessPassword();