import readLineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * max);
const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getUserName = () => readLineSync.question('May I have your name? ');

export { getRandomInt, getRandomArbitrary, getUserName };
