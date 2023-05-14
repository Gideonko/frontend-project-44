export default (name, question, askQuestion) => {
  let isCorrect = false;
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
