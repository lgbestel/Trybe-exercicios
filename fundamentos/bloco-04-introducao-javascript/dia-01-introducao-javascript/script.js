// // exercicio 1
// const a = 60;
// const b = 60;
// const c = -2;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// // exercicio 2
// if (a > b) {
//     console.log(a);
//     }
//     else {
//     console.log(b);
//     }

// // exercicio 3    
// if (a > b && a > c) {
//     console.log(a);
//     }
//     else if (b > c) {
//     console.log(b);
//     }
//     else {
//     console.log(c)
//     }

// // exercicio 4    
// if (a > 0) {
//     console.log("positive");
// }
// else if (a < 0) {
//     console.log("negative");
// }
// else {
//     console.log("zero");
// }

// //exercicio 5
// if ((a*b*c) < 0) {
//     console.log("invalido");
// }
// else if (a + b + c == 180) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// //exercicio 6
// let chessPiece = "xuxa";

// switch(chessPiece.toLowerCase()) {
//     case "bishop":
//         console.log("diagonals");
//         break;
//     case "horse":
//         console.log("L");
//         break;
//     case "king":
//         console.log("1 case, any direction");
//         break;
//     case "tower":
//         console.log("horizontal or vertical");
//         break;
//     default:
//         console.log("error");
//         break;
//     }

// //exercicio 7
// let nota = 40;

// if (nota > 100 || nota < 0) {
//     console.log("Erro")
// }
// else if (nota >= 90) {
//     console.log("A");
// }
// else if (nota >= 80) {
//     console.log("B");
// }
// else if (nota >= 70) {
//     console.log("C");
// }
// else if (nota >= 60) {
//     console.log("D");
// }
// else if (nota >= 50) {
//     console.log("E");
// }
// else if (nota < 50) {
//     console.log("F");
// }

// //exercicio 8
// const firstNumber = 1;
// const secondNumber = 2;
// const thirdNumber = 3;

// if (firstNumber % 2 == 0 || secondNumber % 2 == 0 || thirdNumber % 2 == 0) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// //exercicio 9
// const firstNumber = 1;
// const secondNumber = 2;
// const thirdNumber = 3;

// if (firstNumber % 2 !== 0 || secondNumber % 2 !== 0 || thirdNumber % 2 !== 0) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// //exercicio 10
const valorCusto = 1
const valorVenda = 2
let quantidade = 1000
let imposto = 0.20
let custoTotal = (valorCusto + (valorCusto * imposto)) * quantidade
let lucro = (valorVenda * quantidade) - custoTotal

if (valorCusto*valorVenda*quantidade*imposto <= 0) {
    console.log("Erro");
}
else {
    console.log(lucro);
}




