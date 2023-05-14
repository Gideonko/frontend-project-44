import readLineSync from 'readline-sync';
import { getRandomInt, getRandomArbitrary, getUserName } from './support-functions.js';
import gameLoop from './gameloop.js';

const getProgression = () => {
  const d = getRandomArbitrary(1, 10);
  const progressionLength = getRandomArbitrary(5, 10);
  const progression = [getRandomInt(10)];
  const swapNumber = getRandomArbitrary(0, progressionLength);

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[i] + d);
  }

  const swappedNumber = progression[swapNumber];
  progression[swapNumber] = '..';

  return [progression, swappedNumber];
};
const checkAnswer = (userAnswer, correctAnswer, userName) => {
  if (parseInt(userAnswer, 10) !== parseInt(correctAnswer, 10)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }

  return true;
};
const askQuestion = (name) => {
  const [question, correctAnswer] = getProgression();
  console.log(`Question: ${question.join(' ')}`);

  const answer = readLineSync.question('Your answer: ');

  if (checkAnswer(answer, correctAnswer, name) === false) {
    return false;
  }

  console.log('Correct!');
  return true;
};
export default () => {
  const name = getUserName();
  const question = 'What number is missing in the progression?';
  gameLoop(name, question, askQuestion);
};
