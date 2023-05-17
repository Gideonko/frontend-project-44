import readLineSync from 'readline-sync';
import {
  getRandomInt, getExpressionResult, checkAnswer,
} from './support-functions.js';
import gameLoop from './index.js';

const askQuestion = (name) => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const expression = `${getRandomInt(1, 100)} ${operator} ${getRandomInt(1, 100)}`;
  console.log(`Question: ${expression}`);

  const answer = readLineSync.question('Your answer: ');
  const expressionResult = getExpressionResult(expression);

  if (checkAnswer(parseInt(answer, 10), parseInt(expressionResult, 10), name) === false) {
    return false;
  }

  console.log('Correct!');
  return true;
};
export default () => {
  const question = 'What is the result of the expression?';
  gameLoop(question, askQuestion);
};
