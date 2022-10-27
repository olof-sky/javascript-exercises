const sumAll = function (first, last) {
  if (
    first < 0 ||
    last < 0 ||
    typeof first !== "number" ||
    typeof last !== "number"
  )
    return "ERROR";
  let arr = [first, last];
  let result = [];
  arr.sort().push(arr[1] - arr[0]);
  for (i = 0; i < arr[2] + 1; i++) {
    result.push(arr[0] + i);
  }
  return result.reduce((partialSum, a) => partialSum + a, 0);
};

// Do not edit below this line
module.exports = sumAll;
