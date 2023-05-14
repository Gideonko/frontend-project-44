import readLineSync from 'readline-sync';
import { getUserName, getRandomInt } from './support-functions.js';
import gameLoop from './gameloop.js';

const gcd = ([firstNumber, secondNumber]) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return gcd([secondNumber, firstNumber % secondNumber]);
};
const checkAnswer = (userAnswer, pairs, userName) => {
  const expressionResult = gcd(pairs);

  if (parseInt(userAnswer, 10) !== parseInt(expressionResult, 10)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expressionResult}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }

  return true;
};
const askQuestion = (name) => {
  const numberPairs = [getRandomInt(99), getRandomInt(99)];
  console.log(`Question: ${numberPairs[0]} ${numberPairs[1]}`);

  const answer = readLineSync.question('Your answer: ');

  if (checkAnswer(answer, numberPairs, name) === false) {
    return false;
  }

  console.log('Correct!');
  return true;
};
export default () => {
  const name = getUserName();
  const question = 'Find the greatest common divisor of given numbers.';
  gameLoop(name, question, askQuestion);
};
