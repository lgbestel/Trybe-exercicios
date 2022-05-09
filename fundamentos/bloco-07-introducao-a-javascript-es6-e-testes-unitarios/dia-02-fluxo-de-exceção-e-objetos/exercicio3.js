const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKeyValue = (obj, key, value) => {
  obj[key] = value;
}
addKeyValue(lesson2, 'turno', 'noite');

const objectKeys = (obj) => Object.keys(obj);
console.log(objectKeys(lesson1));

const objLength = (obje) => Object.keys(obje).length;
console.log(objLength(lesson1));