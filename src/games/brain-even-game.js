import gameLoop from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (number) => number % 2 === 0;
const roundProcessing = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};
export default () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameLoop(question, roundProcessing);
};
