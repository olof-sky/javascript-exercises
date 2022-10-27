const removeFromArray = function (values, ...removeValue) {
  return values.filter((value) => !removeValue.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
