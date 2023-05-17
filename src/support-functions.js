const getRandomInt = (min, max) => {
  const minPrep = Math.ceil(min);
  const maxPrep = Math.floor(max);
  return Math.floor(Math.random() * (maxPrep - minPrep + 1) + minPrep);
};
// eslint-disable-next-line no-eval
const getExpressionResult = (expressionForEval) => eval(`(${expressionForEval})`);
const checkAnswer = (userAnswer, correctAnswer, userName) => {
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }

  return true;
};

export {
  getRandomInt, getExpressionResult, checkAnswer,
};
