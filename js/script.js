// Declaração de variaves do visualizador da senha
let btnLoginSenha = document.querySelector('.fa-eye');
let btnCadastroSenha = document.querySelector('#verSenha');
let btnCadastroConfirma = document.querySelector('#verConfirmaSenha');


// Declaração de variaves da Validação do cadastro
let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

let senha = document.querySelector('#senhaCadastro');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmaSenha = document.querySelector('#confirmaSenha');
let labelSenhaConfirma = document.querySelector('#labelSenhaConfirma');
let validConfirmaSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

//Validando eventos e labels no formulario
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 4) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome *Insira no minimo 4 caracteres';
        nome.setAttribute('style', 'border-color: red');
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'Nome';
        nome.setAttribute('style', 'border-color: green');
        validNome = true;
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'Usuario *Insira no minimo 4 caracteres';
        usuario.setAttribute('style', 'border-color: red');
        validUsuario = false;
    } else {
        labelUsuario.setAttribute('style', 'color: green');
        labelUsuario.innerHTML = 'Usuario';
        usuario.setAttribute('style', 'border-color: green');
        validUsuario = true;
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 6) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres';
        senha.setAttribute('style', 'border-color: red');
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha';
        senha.setAttribute('style', 'border-color: green');
        validSenha = true;
    }
})

confirmaSenha.addEventListener('keyup', () => {
    if(senha.value != confirmaSenha.value) {
        labelSenhaConfirma.setAttribute('style', 'color: red');
        labelSenhaConfirma.innerHTML = 'Confirmar Senha *As senhas não conferem';
        confirmaSenha.setAttribute('style', 'border-color: red');
        validConfirmaSenha = false;
    } else {
        labelSenhaConfirma.setAttribute('style', 'color: green');
        labelSenhaConfirma.innerHTML = 'Confirmar Senha';
        confirmaSenha.setAttribute('style', 'border-color: green');
        validConfirmaSenha = true;
    }
})

function cadastrar() {
    if(validNome && validUsuario && validSenha && validConfirmaSenha) {

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Cadastrando usúario...</strong>'
        msgError.setAttribute('style', 'display: nome');
        msgError.innerHTML = '';

        setTimeout(() => {
            window.location.href = 'http://127.0.0.1:5500/login.html'
        }, 3000);

    } else {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar!</strong>'
        msgSuccess.innerHTML = '';
        msgSuccess.setAttribute('style', 'display: none');
    }
}

// Tratamento visualização senha e campo confirma senha Login/Cadastro
btnLoginSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
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
