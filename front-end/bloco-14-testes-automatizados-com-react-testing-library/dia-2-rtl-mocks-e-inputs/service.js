const randomNumber = () => {
  return Math.round(Math.random()*100);
}
console.log(randomNumber());

module.exports = { randomNumber };
