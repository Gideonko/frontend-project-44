import gameLoop from '../index.js';
import getRandomInt from '../utils.js';

const gameLogic = (number) => {
  if (number === 1) {
    return true;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
const askQuestion = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = gameLogic(question) ? 'yes' : 'no';

  return [`${question}`, correctAnswer];
};
export default () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameLoop(question, askQuestion);
};
