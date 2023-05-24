import getRandomInt from '../utils.js';
import play from '../index.js';

const makeProgression = (step, length, progressionStart, swapIndex) => {
  const progression = progressionStart;

  for (let i = 0; i < length; i += 1) {
    progression.push(progression[i] + step);
  }

  const swappedNumber = progression[swapIndex];
  progression[swapIndex] = '..';

  return [progression, swappedNumber];
};
const getRound = () => {
  const step = getRandomInt(1, 10);
  const length = getRandomInt(5, 9);
  const progressionStart = [getRandomInt(1, 10)];
  const swapIndex = getRandomInt(0, length);
  const [question, correctAnswer] = makeProgression(step, length, progressionStart, swapIndex);

  return [question.join(' '), correctAnswer.toString()];
};
export default () => {
  const question = 'What number is missing in the progression?';
  play(question, getRound);
};
