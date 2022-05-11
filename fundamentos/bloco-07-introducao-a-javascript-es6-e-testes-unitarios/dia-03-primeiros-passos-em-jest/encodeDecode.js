// Desafio 9 
function encode(stringLetters) {
  
  let switchVocals = "";
  
  for(let i = 0; i < stringLetters.length; i += 1) {
    if (stringLetters[i] === "a") {
      switchVocals += "1";
    }
    else if (stringLetters[i] === "e") {
      switchVocals += "2"
    }
    else if (stringLetters[i] === "i") {
      switchVocals += "3"
    }
    else if (stringLetters[i] === "o") {
      switchVocals += "4"
    }
    else if (stringLetters[i] === "u") {
      switchVocals += "5"
    }
    else {
      switchVocals += stringLetters[i];
    }
  }
  return switchVocals;
  }
  
  
  function decode(stringNumbers) {
    let switchNumbers = "";
  
  for(let i = 0; i < stringNumbers.length; i += 1) {
    if (stringNumbers[i] === "1") {
      switchNumbers += "a";
    }
    else if (stringNumbers[i] === "2") {
      switchNumbers += "e"
    }
    else if (stringNumbers[i] === "3") {
      switchNumbers += "i"
    }
    else if (stringNumbers[i] === "4") {
      switchNumbers += "o"
    }
    else if (stringNumbers[i] === "5") {
      switchNumbers += "u"
    }
    else {
      switchNumbers += stringNumbers[i];
    }
  }
  return switchNumbers;
  }

  module.exports = { encode, decode };