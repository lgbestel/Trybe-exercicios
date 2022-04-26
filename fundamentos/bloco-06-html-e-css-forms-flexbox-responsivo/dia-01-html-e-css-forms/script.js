let btnLimpar = document.querySelector('#limpar');

function limpar () {
    let nomeCompleto = document.querySelector('#nome-completo');
    let eMail = document.querySelector('#e-mail');
    let resposta = document.querySelector('#resposta');
    let data = document.querySelector('#data');

    nomeCompleto.value = '';
    eMail.value = '';
    resposta.value = '';
    data.value = '';
}

btnLimpar.addEventListener('click', limpar());

let btnEnviar = document.querySelector('#enviar');

function getValues (event) {
    event.preventDefault();
    
} btnEnviar.addEventListener('click', getValues);