import gameLoop from '../index.js';
import getRandomInt from '../utils.js';

const gameLogic = (number) => number % 2 === 0;
const askQuestion = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = gameLogic(number) ? 'yes' : 'no';

  return [`${number}`, correctAnswer];
};
export default () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameLoop(question, askQuestion);
};
