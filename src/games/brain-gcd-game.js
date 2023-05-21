import getRandomInt from '../utils.js';
import gameLoop from '../index.js';

const computeGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return computeGCD(secondNumber, firstNumber % secondNumber);
};
const roundProcessing = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const correctAnswer = computeGCD(firstNumber, secondNumber);

  return [`${firstNumber} ${secondNumber}`, correctAnswer.toString()];
};
export default () => {
  const question = 'Find the greatest common divisor of given numbers.';
  gameLoop(question, roundProcessing);
};
