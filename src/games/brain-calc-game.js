import getRandomInt from '../utils.js';
import gameLoop from '../index.js';

const gameLogic = (firstNumber, secondNumber, operator) => {
  let answer = firstNumber;
  switch (operator) {
    case '+':
      answer += secondNumber;
      break;
    case '-':
      answer -= secondNumber;
      break;
    default:
      answer *= secondNumber;
  }

  return answer;
};
const askQuestion = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  const expressionResult = gameLogic(firstNumber, secondNumber, operator);

  return [`${expression}`, expressionResult.toString()];
};
export default () => {
  const question = 'What is the result of the expression?';
  gameLoop(question, askQuestion);
};
