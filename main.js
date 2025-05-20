localStorage.setItem('theme', 'dark');
localStorage.getItem('theme');

var nome = document.getElementById("nome");
var email = document.getElementById("email");
var message = document.getElementById("message");
var telefone = document.getElementById("celular")

const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modalOverlay = document.getElementById('modalOverlay');

const toggle = document.getElementById('toggle');
const refresh = document.getElementById('refresh');


toggle.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
})

refresh.addEventListener('click', () => {
    window.location.reload();
})

window.onload = function(){
     var nome_Usuario = prompt("Insira seu nome: ")
     alert("Bem vindo " + nome_Usuario + ".")
}

function Enviar(){
    if (email.value === "" || nome.value === "" || message.value === ""){
        alert("Insira os campos requiridos.")
        return
    }

    alert('Obrigada ' + nome.value + ".\nSeu email: " + email.value + ".\nSeu telefone: " + telefone.value + ".\nE sua mensagem: " + message.value + ".\nForam enviadas com sucesso.")
}

openModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
})

closeModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
})

modalOverlay.addEventListener('click', (event)=> {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
})

telefone.addEventListener('input', function() {
    let numeros = this.value.replace(/\D/g, '');
    if (numeros.length > 11) {
        numeros.slice(0,11)
    }

    let numeroFormatado = '';

    numeroFormatado += `(${numeros.slice(0,2)}`
    numeroFormatado += `) ${numeros.slice(2,3)}`
    numeroFormatado += ` ${numeros.slice(3,7)}`
    numeroFormatado += `-${numeros.slice(7,11)}`

    this.value = numeroFormatado;
})
