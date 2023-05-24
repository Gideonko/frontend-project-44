import readLineSync from 'readline-sync';

export default (description, getRound) => {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games! ');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getRound();

    console.log(`Question: ${question}`);
    const answer = readLineSync.question('Your answer: ');

    if (answer.toLowerCase() !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return false;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
