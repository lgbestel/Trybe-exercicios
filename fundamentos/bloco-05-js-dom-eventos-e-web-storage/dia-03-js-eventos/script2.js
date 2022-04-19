function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// 1

function createDaysOfTheMonth() {

    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysUl = document.getElementById('days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        const days = dezDaysList[i];
        const dayListItem = document.createElement('li');
        dayListItem.className = 'day';
        dayListItem.innerHTML = days;

        if (days == 24 || days == 31) {
            dayListItem.className = 'day holiday';
        }
        else if (days == 4 || days == 11 || days == 18) {
            dayListItem.className = 'day friday';
        }
        else if (days == 25) {
            dayListItem.className = 'day holiday friday';
        }

        daysUl.appendChild(dayListItem);
    }
}

    createDaysOfTheMonth ();
  
// 2

function feriados (string) {

    let btnContainer = document.querySelector('.buttons-container');
    let createBtnHoliday = document.createElement('button');
    createBtnHoliday.innerText = "Feriados";
    createBtnHoliday.id = 'btn-holiday';
    btnContainer.appendChild(createBtnHoliday);

}

    feriados ();

// 3

function setHolidays () {

    let btnHoliday = document.getElementById('btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    let newColor = 'white';
    let standardColor = 'rgb(238,238,238)';

    btnHoliday.addEventListener('click', function(){
    
        for(let i = 0; i < holidays.length; i += 1) {
            if (holidays[i].style.backgroundColor === newColor) {
                holidays[i].style.backgroundColor = standardColor;
            } else {
                holidays[i].style.backgroundColor = newColor;
            }
        }
    })
}

setHolidays ();

// 4
function sextaFeira (string) {

    let btnContainer = document.querySelector('.buttons-container');
    let createBtnFriday = document.createElement('button');
    createBtnFriday.id = 'btn-friday';
    createBtnFriday.innerText = 'Sexta-Feira';
    btnContainer.appendChild(createBtnFriday);

}
    sextaFeira ();

// 5

function setFridays (fridaysArray) {

    let btnFriday = document.getElementById('btn-friday');
    let fridays = document.querySelectorAll('.friday');
    let newText = 'Sextou';
    
    btnFriday.addEventListener('click', function(){
    
        for(let i = 0; i < fridays.length; i += 1) {
            if (fridays[i].innerHTML !== newText) {
                fridays[i].innerHTML = newText;
            } else {
                fridays[i].innerHTML = fridaysArray[i];
            }
        }
    })
}

let dezFridays = [4, 11, 18, 25];
setFridays (dezFridays);

// 6

let days = document.querySelectorAll('.days');

for (let i of days) {
    i.addEventListener('mouseover', ZoomIn);
}

for (let i of days) {
    i.addEventListener('mouseout', ZoomOut);
}

function ZoomIn (event) {
    event.target.style.fontSize = '40px';
}

function ZoomOut (event) {
    event.target.style.fontSize = '20px';
}
// function daysMouseOver () {

//     let days = document.querySelector('#days');
    
//     days.addEventListener('mouseover', function(event) {
//         event.target.style.fontSize = '35px';
//         event.target.style.fontWeight = '900';
//     } 
//     )
// }

// function daysMouseOut() {

//     let days = document.querySelector('#days');

//     days.addEventListener('mouseout', function(event) {

//         event.target.style.fontSize = 'unset';
//         event.target.style.fontWeight = 'unset';
//     } 
//     )
// }

// daysMouseOver ();
// daysMouseOut();

// 7 

function adicionarTarefa (string) {

    let span = document.createElement('span');
    span.innerText = string;
    document.getElementsByClassName('my-tasks')[0].appendChild(span);

}
adicionarTarefa ('cozinhar');