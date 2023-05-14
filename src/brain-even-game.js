import readLineSync from 'readline-sync';
import gameLoop from './gameloop.js';
import { getUserName, getRandomArbitrary } from './support-functions.js';

const checkAnswer = (userAnswer, questionNumber, userName) => {
  const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

  if (userAnswer.toLowerCase() !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }

  return true;
};
const askQuestion = (name) => {
  const number = getRandomArbitrary(0, 100);
  console.log(`Question: ${number}`);

  const answer = readLineSync.question('Your answer: ');

  if (checkAnswer(answer, number, name) === false) {
    return false;
  }

  console.log('Correct!');
  return true;
};
export default () => {
  const name = getUserName();
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameLoop(name, question, askQuestion);
};
