import readLineSync from 'readline-sync';

const whatsYourName = () => {
  const name = readLineSync.question('May i have your name?');

  console.log(`Hello, ${name}`);
};

// eslint-disable-next-line import/prefer-default-export
export { whatsYourName };
