import getRandomInt from '../utils.js';
import gameLoop from '../index.js';

const gameLogic = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return gameLogic(secondNumber, firstNumber % secondNumber);
};
const askQuestion = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const correctAnswer = gameLogic(firstNumber, secondNumber);

  return [`${firstNumber} ${secondNumber}`, correctAnswer.toString()];
};
export default () => {
  const question = 'Find the greatest common divisor of given numbers.';
  gameLoop(question, askQuestion);
};
