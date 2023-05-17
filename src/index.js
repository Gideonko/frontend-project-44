import readLineSync from 'readline-sync';

const getUserName = () => readLineSync.question('May I have your name? ');
export default (question, askQuestion) => {
  let isCorrect = false;
  const name = getUserName();
  console.log('Welcome to the Brain Games! ');
  console.log(`Hello, ${name}!`);
  console.log(question);

  for (let i = 0; i < 3; i += 1) {
    isCorrect = askQuestion(name);
    if (!isCorrect) {
      break;
    }
  }
  if (isCorrect) {
    console.log(`Congratulations, ${name}!`);
  }
};
