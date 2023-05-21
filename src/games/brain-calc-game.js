import getRandomInt from '../utils.js';
import gameLoop from '../index.js';

const computeExpression = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
};
const roundProcessing = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  const expressionResult = computeExpression(firstNumber, secondNumber, operator);

  return [expression, expressionResult.toString()];
};
export default () => {
  const question = 'What is the result of the expression?';
  gameLoop(question, roundProcessing);
};
