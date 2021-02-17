// Write a program to determine a student’s grade based on the average of three scores you get from the user. Use these rules to compute the grade:

function studentGrade() {
  let scoreOne = Number(prompt('Enter first score: '));
  let scoreTwo = Number(prompt('Enter second score: '));
  let scoreThree = Number(prompt('Enter third score: '));

  let avgScore = (scoreOne + scoreTwo + scoreThree) / 3

  switch (true) {
    case avgScore > 89:
      console.log(`Based on the average score of ${avgScore}, your letter grade is A`);
      break;
    case avgScore > 69:
      console.log(`Based on the average score of ${avgScore}, your letter grade is B`);
      break;
    case avgScore > 49:
      console.log(`Based on the average score of ${avgScore}, your letter grade is C`);
      break;
    default:
      console.log(`Based on the average score of ${avgScore}, your letter grade is F`);
  }
  
}

studentGrade();