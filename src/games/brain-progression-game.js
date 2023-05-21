import getRandomInt from '../utils.js';
import gameLoop from '../index.js';

const makeProgression = () => {
  const progressionStep = getRandomInt(1, 10);
  const progressionLength = getRandomInt(5, 9);
  const progression = [getRandomInt(1, 10)];
  const swapIndex = getRandomInt(0, progressionLength);

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  const swappedNumber = progression[swapIndex];
  progression[swapIndex] = '..';

  return [progression, swappedNumber];
};
const roundProcessing = () => {
  const [question, correctAnswer] = makeProgression();

  return [question.join(' '), correctAnswer.toString()];
};
export default () => {
  const question = 'What number is missing in the progression?';
  gameLoop(question, roundProcessing);
};
