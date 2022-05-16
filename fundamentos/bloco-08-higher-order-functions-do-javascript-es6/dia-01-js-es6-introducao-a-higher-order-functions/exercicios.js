//1
const generateEmail = (name) => {
  let email = `${name.replace(' ', '_').toLowerCase()}@trybe.com`;
  return { name, email }
};
// console.log(generateEmail('Luiz Guilherme'));

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
// console.log(newEmployees(generateEmail));

//2
const numeroSorteado = (betNumber, number) => betNumber === number;

function generateNumber(betNumber, callback) {
  let number = Math.round(Math.random() * (5 - 1)) + 1;
  // let number = 5;
  return callback(betNumber, number) ? "Parabéns você ganhou" : "Tente novamente";
}
console.log(generateNumber(5, numeroSorteado));

//3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkScore = (currentCorrectAnswer, currentStudentAnswer) => {
  if (currentStudentAnswer === 'N.A') {
    return 0;
  }
  if (currentCorrectAnswer === currentStudentAnswer) {
    return 1;
  }
  if (currentCorrectAnswer !== currentStudentAnswer) {
    return -0.5;
  }
}

const score = (correctAnswersArr, studentAnswersArr, callback) => {
  let scoreCount = 0;
  for (let index = 0; index < correctAnswersArr.length; index += 1) {
    currentCorrectAnswer = correctAnswersArr[index];
    currentStudentAnswer = studentAnswersArr[index];
    let currentScore = callback(currentCorrectAnswer, currentStudentAnswer);
    scoreCount += currentScore;
  }
  return `O score é: ${scoreCount}.`
}

console.log(score(RIGHT_ANSWERS, STUDENT_ANSWERS, checkScore));
