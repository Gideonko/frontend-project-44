import readLineSync from 'readline-sync';
import gameLoop from './index.js';
import { getRandomInt, checkAnswer } from './support-functions.js';

const askQuestion = (name) => {
  const number = getRandomInt(1, 100);
  console.log(`Question: ${number}`);

  const answer = readLineSync.question('Your answer: ');
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  if (checkAnswer(answer.toLowerCase(), correctAnswer, name) === false) {
    return false;
  }

  console.log('Correct!');
  return true;
};
export default () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameLoop(question, askQuestion);
};
