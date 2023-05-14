import readLineSync from 'readline-sync';
import { getRandomInt, getUserName } from './support-functions.js';
import gameLoop from './gameloop.js';

// eslint-disable-next-line no-eval
const getExpressionResult = (expressionForEval) => eval(`(${expressionForEval})`);
const checkAnswer = (userAnswer, expression, userName) => {
  const expressionResult = getExpressionResult(expression);

  if (parseInt(userAnswer, 10) !== parseInt(expressionResult, 10)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expressionResult}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }

  return true;
};
const askQuestion = (name) => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const expression = `${getRandomInt(99)} ${operator} ${getRandomInt(99)}`;
  console.log(`Question: ${expression}`);

  const answer = readLineSync.question('Your answer: ');

  if (checkAnswer(answer, expression, name) === false) {
    return false;
  }

  console.log('Correct!');
  return true;
};
export default () => {
  const name = getUserName();
  const question = 'What is the result of the expression?';
  gameLoop(name, question, askQuestion);
};
