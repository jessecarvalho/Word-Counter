//Captura o texto digitado pelo usuário
const text = document.querySelector("#text");
//Captura o contador de carácteres digitado pelo usuário
const caracteres = document.querySelector("#caracteres");
//Adiciona o evento keypress no texto digitado. Esse evento será disparado toda vez que uma tecla for pressionada
text.addEventListener("keypress", (e)=>{
    //Conta os carácteres digitados pelo usuário
    caracteres.innerHTML = (text.value.length + 1);
});