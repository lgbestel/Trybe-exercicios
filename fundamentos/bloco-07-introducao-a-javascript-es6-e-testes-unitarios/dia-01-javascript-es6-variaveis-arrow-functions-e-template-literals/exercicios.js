
//1.1
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

//1.2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const arraySort = (arr) => {
  const reversedArr = arr.sort((a, b) => a-b);
  return reversedArr;
}

console.log(`Os números ${arraySort(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

//2.1
const fatorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i += 1) {
    result *= i;
  }
  return result;
}
console.log(fatorial(4));

//2.2
const biggestWord = (string) => {
  const splittedString = string.split(' ');
  let word = '';

  for (let i = 0; i < splittedString.length; i += 1) {
    if (splittedString[i].length > word.length) {
      word = splittedString[i];
    }
  }
  return word;
}; 
console.log(biggestWord ('abaa aaca abac casasca a'));