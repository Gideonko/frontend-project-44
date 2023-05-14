import readLineSync from 'readline-sync';
import gameLoop from './gameloop.js';
import { getUserName, getRandomArbitrary } from './support-functions.js';

const primeCheck = (number) => {
  if (number === 1) {
    return 'yes';
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};
const checkAnswer = (userAnswer, question, userName) => {
  const correctAnswer = primeCheck(parseInt(question, 10));

  if (userAnswer.toLowerCase() !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }

  return true;
};
const askQuestion = (name) => {
  const question = getRandomArbitrary(1, 100);
  console.log(`Question: ${question}`);

  const answer = readLineSync.question('Your answer: ');

  if (checkAnswer(answer, question, name) === false) {
    return false;
  }

  console.log('Correct!');
  return true;
};
export default () => {
  const name = getUserName();
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameLoop(name, question, askQuestion);
};
