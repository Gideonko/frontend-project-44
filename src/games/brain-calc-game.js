import getRandomInt from '../utils.js';
import gameLoop from '../index.js';

const gameLogic = (str) => {
  let total = 0;
  const expressionStr = str.match(/[+−]*(\.\d+|\d+(\.\d+)?)/g) || [];
  while (expressionStr.length) {
    total += parseFloat(expressionStr.shift());
  }
  return total;
};
const askQuestion = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const expression = `${getRandomInt(1, 100)} ${operator} ${getRandomInt(1, 100)}`;
  const expressionResult = gameLogic(expression);

  return [`${expression}`, expressionResult.toString()];
};
export default () => {
  const question = 'What is the result of the expression?';
  gameLoop(question, askQuestion);
};
