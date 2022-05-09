// let clickCount = 0;

const button = document.querySelector('button');
const p = document.querySelector('p');
let clickCount = 0;

const clicar = () => p.innerHTML = clickCount += 1;

button.addEventListener('click', clicar);
