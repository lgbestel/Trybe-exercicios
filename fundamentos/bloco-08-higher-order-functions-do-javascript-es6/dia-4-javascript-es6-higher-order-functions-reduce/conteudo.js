const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  // console.log('acc is', accumulator); // 1 3 6 10
  // console.log('number is', number);
  return accumulator * number;
}

const sumNumbers = collection.reduce(getSum, 2);
// console.log(sumNumbers); // 15

const numbers = [50, 85, -30, 3, 15];

// const biggestNumber = (arr) => {
//   let currNumber = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (currNumber === 0) {
//       currNumber = arr[i]; 
//     }
//     if (currNumber < arr[i]) {
//       currNumber = arr[i];
//     }
//   }
//   return currNumber;
// }
// console.log(biggestNumber(numbers));

const getBigger = (bigger, number) => {
  if (bigger > number) {
    // console.log('number: ', number);
    // console.log('bigger returned: ', bigger);
    return bigger;
  } else {
    // console.log('number returned: ', number);
    // console.log('bigger: ', bigger)
    return number;
  }
}
const biggest = numbers.reduce(getBigger);
// console.log(biggest);

const isEven = (acc, num) => acc + num;

const sumEven = numbers.filter((number) => number % 2 === 0).reduce(isEven);
// console.log(sumEven);

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

// let newarr = estudantes.map((student) => ({
//   name: student.nome, 
//   materia: student.materias.sort((a, b) => b.nota - a.nota)[0].name 
// }));
// console.log(newarr);

let newarr = estudantes.map((student) => ({
  name: student.nome, 
  materia: student.materias.reduce((ac, cur) => ac.nota > cur.nota ? ac : cur).name
}));
console.log(newarr);