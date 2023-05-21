import getRandomInt from '../utils.js';
import gameLoop from '../index.js';

const gameLogic = () => {
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
const askQuestion = () => {
  const [question, correctAnswer] = gameLogic();

  return [`${question}`, correctAnswer.toString()];
};
export default () => {
  const question = 'What number is missing in the progression?';
  gameLoop(question, askQuestion);
};
