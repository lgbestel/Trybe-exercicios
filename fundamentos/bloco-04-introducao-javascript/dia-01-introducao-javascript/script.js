// exercicio 1
const a = 60;
const b = 60;
const c = -2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// exercicio 2
if (a > b) {
    console.log(a);
    }
    else {
    console.log(b);
    }

// exercicio 3    
if (a > b && a > c) {
    console.log(a);
    }
    else if (b > c) {
    console.log(b);
    }
    else {
    console.log(c)
    }

// exercicio 4    
if (a > 0) {
    console.log("positive");
}
else if (a < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}

//exercicio 5
if ((a*b*c) < 0) {
    console.log("invalido");
}
else if (a + b + c == 180) {
    console.log(true);
}
else {
    console.log(false);
}