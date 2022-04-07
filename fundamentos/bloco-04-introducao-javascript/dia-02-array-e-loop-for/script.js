let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // 1
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
// }

// 2
// let sumNumbers = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     sumNumbers += numbers[i];
// }
// console.log(sumNumbers);

// 3
// let sumNumbers = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     sumNumbers += numbers[i];
// }
// console.log(sumNumbers/numbers.length);

// 4
// let sumNumbers = 0;


// for (let i = 0; i < numbers.length; i += 1) {
//     sumNumbers += numbers[i];
// }
// let mediaAritmetica = sumNumbers / numbers.length;

// if (mediaAritmetica > 20) {
//     console.log("valor maior que 20");
// }
// else {
//     console.log("valor menor ou igual a 20");
// }

// 5
// let maiorNumero = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > maiorNumero){
//         maiorNumero = numbers[i];
//     }
// }
// console.log(maiorNumero);

// 6
// let numerosImpares = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 !== 0){
//         numerosImpares.push(numbers[i]);
//     }
// }
// if (numerosImpares.length == 0) {
//     console.log("nenhum valor ímpar encontrado");
// }
// else {
// console.log(numerosImpares.length);
// }  

// 7
// let menorNumero = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < menorNumero){
//         menorNumero = numbers[i];
//     }
// }
// console.log(menorNumero);

// 8
let arrayNumeros = [];

for (let i = 1; i <= 25; i += 1) {
    arrayNumeros.push(i);
}
console.log(arrayNumeros);

// 9
let arrayNumerosDivDois = [];

for (let i = 0; i < arrayNumeros.length; i += 1) {
    arrayNumerosDivDois.push(arrayNumeros[i]/2);
}
console.log(arrayNumerosDivDois);