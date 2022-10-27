const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (numberArray) {
  if (!numberArray[0]) return 0;
  return numberArray.reduce((a, b) => a + b);
};

const multiply = function (numberArray) {
  return numberArray.reduce((a, b) => a * b);
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (num) {
  if ((num === 0) | (num === 1)) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
