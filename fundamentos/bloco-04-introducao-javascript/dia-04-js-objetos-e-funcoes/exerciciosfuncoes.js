// // 1

// function palindromo(palavra) {

//     let palavraSplit = [];
//     let palavraReverse = [];
//     let palavraJoin = "";

//     palavraSplit = palavra.split("");
//     palavraReverse = palavraSplit.reverse();
//     palavraJoin = palavraReverse.join('');

//     if (palavraJoin == palavra) {
//         return true;
//     } else {
//         return false;
//     }

// }

// console.log(palindromo("alala"));


// // 1 com for
// function palindromo(string) {

//     let reversedString = "";

//     for(let i = string.length - 1; i >= 0; i -= 1) {
//     reversedString += string[i];
//     console.log(reversedString);
//     }

// }
// if (reversedString == string) {
//     return true;
// } else {
//     return false;
// }

// console.log(palindromo("casa"));
// console.log(reversedString);
// // 2

// function biggerValue(arrayInteiros) {
//     let currentIndex = 0;

//     for(let index in arrayInteiros) {
//         if (arrayInteiros[index] > arrayInteiros[currentIndex]){
//         currentIndex = index
//         }
//     }
//     return currentIndex;
// }

// console.log(biggerValue([2, 3, 6, 7, 10, 1]));
