// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

//mesma função refatorada:
//1
const soma = function (num1, num2) {
  return num1 + num2;
}
console.log(soma(2,2));
//2
function soma (num1, num2) {
  return num1 + num2;
}
console.log(soma(2,2));
//3
const soma = (num1, num2) => {
  return num1 + num2;
}
console.log(soma(2,2));
//4
const soma = (num1, num2) =>  num1 + num2;

console.log(soma(2,2));

//outra função
//1
function contaPalavras(frase) {
  return frase.split(' ').length;
}

console.log(contaPalavras('Fala tribo, beleza?'));
//2
const contaPalavras = frase => frase.split(' ').length;

console.log(contaPalavras('Fala tribo, beleza?'));

//outra função
//1
function objetoPessoa (nome, idade) {
  return {
    nome: nome,
    idade: idade
  }
}
console.log(objetoPessoa('Joaquim', 25));
//2
const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});

console.log(objetoPessoa('Joaquim', 25));