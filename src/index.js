import readLineSync from 'readline-sync';

export default (question, roundProcessing) => {
  const roundsCount = 3;
  let isCorrect = false;
  console.log('Welcome to the Brain Games! ');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);

  for (let i = 0; i < roundsCount; i += 1) {
    const [roundQuestion, correctAnswer] = roundProcessing();

    console.log(`Question: ${roundQuestion}`);
    const answer = readLineSync.question('Your answer: ');

    if (answer.toLowerCase() !== correctAnswer) {
      isCorrect = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    isCorrect = true;
    console.log('Correct!');
  }
  if (isCorrect) {
    console.log(`Congratulations, ${name}!`);
  }
};
