const repeatString = function (string, repetitions) {
  let result = "";
  if (repetitions < 0) return "ERROR";
  if (string == undefined) return "";
  for (i = 0; i < repetitions; i++) {
    result = result.concat(string);
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
