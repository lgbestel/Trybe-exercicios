// 1
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
// console.log(flatten());

// 2
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
function reduceNames() {
  // escreva seu código aqui
  // books.reduce((acc, curr) => acc.author.name + curr.author.name);
  return books.reduce((acumulador, elemento) => `${acumulador} ${elemento.author.name},`, '')
}
// console.log(reduceNames());

// 3
function averageAge() {
  // escreva seu código aqui
  return books.reduce((accumulator, element) => accumulator + (element.releaseYear - element.author.birthYear) / books.length, 0).toFixed(0)
}
// console.log(averageAge());

// 4 revisar
function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((acc, curr) => {
    if (acc.name.length > curr.name.length) {
      return acc;
    }
    return curr;
  })
}
// console.log(longestNamedBook());

// 5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, palavra) => {
    for(letra of palavra.toLowerCase()) {
      if (letra === 'a') {
        acc += 1
      }
    }
    return acc;
  },0)
}
// console.log(containsA());

// 6 revisar**********
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  return grades.map((grade, i) => {
    return {name: students[i], average: grade.reduce((acc, curr) => (acc + curr))/grade.length}
  })
}
// console.log(studentAverage());