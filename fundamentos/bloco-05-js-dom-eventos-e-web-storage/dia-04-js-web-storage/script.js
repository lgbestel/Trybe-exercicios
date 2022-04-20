
function createButton(buttonInnerText, buttonID) {
    let button = document.createElement('button');
    button.innerText = buttonInnerText;
    button.id = buttonID
    let header = document.querySelector('header');
    header.appendChild(button);
}

createButton('Dark Mode', 'dark-mode-button');

function darkModeButton () {
    let dMButton = document.querySelector('#dark-mode-button');
    
    dMButton.addEventListener('click', function(){
        let body = document.body;

        body.classList.toggle('dark-mode');
                     
    })
}
darkModeButton ();

function bodyColor () {
    let select = document.querySelector('select');
    select.addEventListener('change', function() {
        let selected = select.selectedOptions[0];
        document.body.style.color = selected.value;

        localStorage.setItem('5.4-color', selected.value);
    })
}
bodyColor ();

let inputHeader = document.querySelector('input[name="font-size"]');
inputHeader.addEventListener('change', function(){
    let p = document.querySelector('p');
    let ulContent = document.querySelector('ul');
    p.style.fontSize = /*inputHeader.value + 'px'*/`${inputHeader.value}px`;
    ulContent.style.fontSize = /*inputHeader.value + 'px'*/`${inputHeader.value}px`;

    localStorage.setItem('5.4-font-size', /*(inputHeader.value + 'px')*/`${inputHeader.value}px`);
})

let savedColor = localStorage.getItem('5.4-color');
document.body.style.color = savedColor;

let savedFontSize = localStorage.getItem('5.4-font-size');
let p = document.querySelector('p');
let ulContent = document.querySelector('ul');
p.fontSize = savedFontSize;
ulContent.fontSize = savedFontSize;