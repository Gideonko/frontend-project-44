import readLineSync from 'readline-sync';
import { getRandomInt, checkAnswer } from './support-functions.js';
import gameLoop from './index.js';

const gcd = ([firstNumber, secondNumber]) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return gcd([secondNumber, firstNumber % secondNumber]);
};
const askQuestion = (name) => {
  const numberPairs = [getRandomInt(1, 100), getRandomInt(1, 100)];
  console.log(`Question: ${numberPairs[0]} ${numberPairs[1]}`);

  const answer = readLineSync.question('Your answer: ');
  const expressionResult = gcd(numberPairs);

  if (checkAnswer(parseInt(answer, 10), parseInt(expressionResult, 10), name) === false) {
    return false;
  }

  console.log('Correct!');
  return true;
};
export default () => {
  const question = 'Find the greatest common divisor of given numbers.';
  gameLoop(question, askQuestion);
};
