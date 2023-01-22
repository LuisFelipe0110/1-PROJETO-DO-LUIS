/*

OBJTV 1 - quando o user clicar no botão de ver trailer, devemos abrir a modal com o trailer.

PASSO1 - dar um jeito de pegaro elemento que representa o botão na tela usando o JS.

PASSO2 - dar um jeito de identificar quando o user clicar no botão

PASSO3 - dar um jeito de pegar o elemento da modal no JS

PASSO4 - abrir a modal na tela

OBJTV 2 - quando o user clicar no X devemos fecha-lo

PASSO1 - dar um jeito de pegar o elemento de fechar a modal usando JS.

PASSO2 - dar um jeito de identificar quando o usuário clicar no X.

PASSO3 - fechar a modal

*/




const botaoFecharModal = document.querySelector(".fechar-modal");
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.scr;

function alternarModal(){
    modal.classList.toggle("aberto");
}
botaoTrailer.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src",linkDoVideo);

});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});
    









