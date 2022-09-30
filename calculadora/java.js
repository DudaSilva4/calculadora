let btnNumero = document.getElementByClassName(`botaoNumero`);
for(let botao of btnNumero){
    botao.addEventListener(`click`, clique_numero);

}
function clique_numero(event){
    botao.innerHTML = botao.innerHTML + event.target.innerHTML;
}