import readLineSync from 'readline-sync';

export default () => {
  const name = readLineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
};
