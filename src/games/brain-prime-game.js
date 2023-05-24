import play from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
const getRound = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};
export default () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  play(question, getRound);
};
