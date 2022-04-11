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

// 2
function maiorValor(arrayDeInteiros) {
    let valorAtual = 0;

    for(let number in arrayDeInteiros) {
        valorAtual = arrayDeInteiros[number];
        if(valorAtual > number){
            
        }
    }


}
console.log(maiorValor([1, 2, 3, 4 ,6, 5]));