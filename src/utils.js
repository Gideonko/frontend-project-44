const getRandomInt = (min, max) => {
  const minPrep = Math.ceil(min);
  const maxPrep = Math.floor(max);
  return Math.floor(Math.random() * (maxPrep - minPrep + 1) + minPrep);
};

export default getRandomInt;
