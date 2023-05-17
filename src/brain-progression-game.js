import readLineSync from 'readline-sync';
import {
  getRandomInt, checkAnswer,
} from './support-functions.js';
import gameLoop from './index.js';

const getProgression = () => {
  const d = getRandomInt(1, 10);
  const progressionLength = getRandomInt(5, 9);
  const progression = [getRandomInt(1, 10)];
  const swapNumber = getRandomInt(0, progressionLength);

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[i] + d);
  }

  const swappedNumber = progression[swapNumber];
  progression[swapNumber] = '..';

  return [progression, swappedNumber];
};
const askQuestion = (name) => {
  const [question, correctAnswer] = getProgression();
  console.log(`Question: ${question.join(' ')}`);

  const answer = readLineSync.question('Your answer: ');

  if (checkAnswer(parseInt(answer, 10), parseInt(correctAnswer, 10), name) === false) {
    return false;
  }

  console.log('Correct!');
  return true;
};
export default () => {
  const question = 'What number is missing in the progression?';
  gameLoop(question, askQuestion);
};
