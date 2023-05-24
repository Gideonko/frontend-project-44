import getRandomInt from '../utils.js';
import play from '../index.js';

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
};
const getRound = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  const expressionResult = calculate(firstNumber, secondNumber, operator);

  return [expression, expressionResult.toString()];
};
export default () => {
  const question = 'What is the result of the expression?';
  play(question, getRound);
};
