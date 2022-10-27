const palindromes = function (string) {
  let sentence = string.replace(/[,!.]/g, "").split(" ").join("").toLowerCase();
  return sentence === sentence.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
