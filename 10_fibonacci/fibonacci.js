const fibonacci = function (num) {
  result = [1];
  if (num < 0) return "OOPS";
  for (let i = 0; i < num - 1; i++) {
    if (result.length == 1) result.push(1);
    else result.push(parseInt(result.slice(-1)) + parseInt(result.slice(-2)));
  }
  return parseInt(result.slice(-1));
};

// Do not edit below this line
module.exports = fibonacci;
