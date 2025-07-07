const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

botao.addEventListener("click", segredo);

function segredo(){
mensagem.innerHTML = "Não importa quem você seja, Eu te desejo felicidade Eterna!"
}