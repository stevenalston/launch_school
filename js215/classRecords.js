/*
PROBLEM:
  Take student scores object and return a class records Object
  Percent Grade	Letter Equivalent
  93 - 100	A
  85 - 92	B
  77 - 84	C
  69 - 76	D
  60 - 68	E
  0 - 59	F
  For example, let's assume a term with three exercises with maximum scores of [20, 30, 50]. A student got [90, 80, 95, 71] on her four exams, and [20, 15, 40] on her exercises. To determine her final grade, we follow these steps:

  Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
  Compute the student's total exercise score: 20 + 15 + 40 = 75
  Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
  Round the percent grade to the nearest integer: 81
  Lookup the letter grade in the table above: C
  Combine the percent grade and letter grade: "81 (C)"
EXAMPLES:
  {
    studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
    exams: [
      { average: 75.6, minimum: 50, maximum: 100 },
      { average: 86.4, minimum: 70, maximum: 100 },
      { average: 87.6, minimum: 60, maximum: 100 },
      { average: 91.8, minimum: 80, maximum: 100 },
    ],
  }
  round the average to the one digit decimal place
DATA:
  Input(s): Object
  Output: Object

ALGORITHM:
  Student avg Grade:
    student avg exam scores -> reduce averageScore(array) rounded to one digit decimal place
    total exercise scores -> reduce array totalScore
    apply weights to score and round to nearest integer -> map
    lookup letter grade -> switch
    combine percent grade and letter grade into an Array of Strings
  Exams: An Array of Arrays
    exam averageScore(array) rounded to one digit
    max - highest student score
    min - lowest student score per test 
*/


function generateClassRecordSummary(scores) {
  let weights = [0.65, 0.35]

  let studentGrades = objToArr(scores, student => {
    let exercises = student.scores.exercises;
    let examAverage = student.scores.exams;

    return getLetterGrade(applyWeights([totalScores(exercises), averageExamScore(examAverage)], weights));
  });

  let examObj = {}
  objToArr(scores, student => {
    student.scores.exams.forEach((exam, i) => {
      if (!examObj[String(i)]) {
        examObj[i] = [];
        examObj[i].push(exam);
      } else {
        examObj[i].push(exam);
      }
    });
  })

  const examScores = objToArr(examObj, studentScores => {
    let average = Math.round(averageExamScore(studentScores) * 10) / 10;
    let min = Math.min(...studentScores);
    let max = Math.max(...studentScores);
    return {
      average,
      min,
      max
    }
  });

  return {
    studentGrades,
    exams: examScores
  };
}

function objToArr(obj, fn) {
  return Object.keys(obj).map(key => fn(obj[key]));
}

function averageExamScore(array) {
  return (totalScores(array) / array.length);
}

function totalScores(array) {
  return array.reduce((acc, val) => acc + val, 0);
}

function applyWeights(scores, weights) {
  return Math.round(scores.reduce((acc, score, i) => acc + (score * weights[i]), 0));
}

function getLetterGrade(grade) {
  switch (true) {
    case grade >= 93:
      return `${grade} (A)`;
    case grade >= 85:
      return `${grade} (B)`;  
    case grade >= 77:
      return `${grade} (C)`;
    case grade >= 69:
      return `${grade} (D)`;
    default:
      return `${grade} (F)`;
  }
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(getLetterGrade(applyWeights([84, 75], [.65, .35])))
console.log(generateClassRecordSummary(studentScores));

/* returns:
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/

/* lschool solution - study high level of abstraction
function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  let lookupLetter = function (percentageGrade) {
    if (percentageGrade >= 93) {
      return 'A';
    } else if (percentageGrade >= 85 && percentageGrade < 93) {
      return 'B';
    } else if (percentageGrade >= 77 && percentageGrade < 85) {
      return 'C';
    } else if (percentageGrade >= 69 && percentageGrade < 77) {
      return 'D';
    } else if (percentageGrade >= 60 && percentageGrade < 69) {
      return 'E';
    } else {
      return 'F';
    }
  };

  let examsAvg = computeExamsAverage(scoreObj.exams);
  let exercisesAvg = computeExercisesScore(scoreObj.exercises);
  let percentageGrade = Math.round(examsAvg * 0.65 + exercisesAvg * 0.35);

  return String(percentageGrade) + ' (' + lookupLetter(percentageGrade) + ')';
}

function computeExamsAverage(exams) {
  return exams.reduce((total, score) => total + score) / exams.length;
}

function computeExercisesScore(exercises) {
  return exercises.reduce((total, score) => total + score);
}

function getExamSummary(examScoresPerStudent) {
  let scoresPerExam = transpose(examScoresPerStudent);

  return scoresPerExam.map(examScores => {
    return {
      average: parseFloat(getExamAverage(examScores)),
      minimum: getExamMinimum(examScores),
      maximum: getExamMaximum(examScores),
    };
  });
}

function transpose(array) {
  return array[0].map((col, columnIdx) => {
    return array.map(row => row[columnIdx]);
  });
}

function getExamAverage(scores) {
  return (scores.reduce((total, score) => total + score) / scores.length)
            .toFixed(1);
}

function getExamMinimum(scores) {
  return scores.reduce((min, score) => (min <= score ? min : score));
}

function getExamMaximum(scores) {
  return scores.reduce((max, score) => (max >= score ? max : score));
}
*/