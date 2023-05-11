import readLineSync from 'readline-sync';

const whatsYourName = () => {
  const name = readLineSync.question('May i have your name?');

  console.log(`Hello, ${name}`);
  return name;
};
const checkAnswer = (userAnswer, questionNumber, userName) => {
  const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

  if (userAnswer.toLowerCase() !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }

  return true;
};
const askQuestion = (number, name) => {
  console.log(`Question: ${number}`);

  const answer = readLineSync.question('Your answer: ');

  if (checkAnswer(answer, number, name) === false) {
    return false;
  }

  console.log('Correct!');
  return true;
};
export default () => {
  const name = whatsYourName();
  const questions = [15, 6, 7];
  let isCorrect = false;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // eslint-disable-next-line no-restricted-syntax
  for (const question of questions) {
    isCorrect = askQuestion(question, name);
    if (!isCorrect) {
      break;
    }
  }
  if (isCorrect) {
    console.log(`Congratulations, ${name}!`);
  }
};
