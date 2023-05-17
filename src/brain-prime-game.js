import readLineSync from 'readline-sync';
import gameLoop from './index.js';
import { getRandomInt, checkAnswer } from './support-functions.js';

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
const askQuestion = (name) => {
  const question = getRandomInt(1, 100);
  console.log(`Question: ${question}`);

  const answer = readLineSync.question('Your answer: ');
  const correctAnswer = primeCheck(question);

  if (checkAnswer(answer.toLowerCase(), correctAnswer, name) === false) {
    return false;
  }

  console.log('Correct!');
  return true;
};
export default () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameLoop(question, askQuestion);
};
