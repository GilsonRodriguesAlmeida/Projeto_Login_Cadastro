let btnLoginSenha = document.querySelector('.fa-eye');
let btnCadastroSenha = document.querySelector('#verSenha');
let btnCadastroConfirma = document.querySelector('#verConfirmaSenha');


btnLoginSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnCadastroSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senhaCadastro');

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnCadastroConfirma.addEventListener('click', () => {
    let inputSenha = document.querySelector('#confirmaSenha');

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})