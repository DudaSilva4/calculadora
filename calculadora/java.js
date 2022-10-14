let visor = document.getElementById(`visor`);

let valorSalvo = null;
let operadorSalvo = null;

let btnNumero = document.getElementsByClassName(`botaoNumero`);
for (let botao of btnNumero) {
    botao.addEventListener("click", clique_numero);
}
function clique_numero(event) {
    if (isNaN(visor.innerHTML) === false) {
        visor.innerHTML = visor.innerHTML + event.target.innerHTML;
    } else {
        visor.innerHTML = event.target.innerHTML;
    }
}
let btnOperadores = document.getElementsByClassName(`botaoOperador`);
for (let botao of btnOperadores) {
    botao.addEventListener("click", clique_operador);
}
function clique_operador(event) {
    if (valorSalvo === null) {
        valorSalvo = Number(visor.innerHTML);
    } else {
        valorSalvo = executa_operacao(valorSalvo, operadorSalvo, Number(visor.innerHTML));
    }
    operadorSalvo = event.target.innerHTML;
    visor.innerHTML = event.target.innerHTML;
}
let botaoC = document.getElementById(`botaoC`);
botaoC.addEventListener("click", limpa_visor);
function limpa_visor(event) {
    visor.innerHTML = "";
}

igual.addEventListener(`click`, calcula_resultado);

function calcula_resultado(event) {
    if (valorSalvo != null && operadorSalvo != null && isNaN(visor.innerHTML) === false) {
       visor.innerHTML = executa_operacao(valorSalvo, operadorSalvo,Number (visor.innerHTML));
       valorSalvo = null;
       operadorSalvo = null;
    }
}
function executa_operacao(valor1, operador, valor2) {
    if (operador === `+`) {
        return valor1 + valor2;
    } else if (operador === `-`) {
        return valor1 - valor2;
    } else if (operador === `x`) {
        return valor1 * valor2
    } else if (operador === `:`) {
        return valor1 / valor2
    }
}
let Ponto = document.getElementById(`botaoPonto`);
Ponto.addEventListener(`click`, click_ponto);

function click_ponto(event){
    if(isNaN(visor.innerHTML) === true){
        visor.innerHTML = ".";
    }else if(isNaN (visor.innerHTML+".") === false)
    visor.innerHTML = visor.innerHTML + ".";

    
}


let body = document.getElementsByTagName(`body`)[0];
body.addEventListener(`keydown`, pressionou_tecla);

function pressionou_tecla(event) {
    if (event.key === "x") {
        document.getElementById(`multiplicacao`).click();
    } else if (event.key === ":") {
        document.getElementById(`divisao`).click();
    } else if (event.key === "+") {
        document.getElementById(`adicao`).click();
    } else if (event.key === "-") {
        document.getElementById(`subtracao`).click();
    }else if(event.key === "7"){
        document.getElementById(`botao7`).click();
    }else if(event.key === "8"){
        document.getElementById(`botao8`).click();
    }else if(event.key === "9"){
        document.getElementById(`botao9`).click();
    }else if(event.key === "4"){
        document.getElementById(`botao4`).click();
    }else if(event.key === "5"){
        document.getElementById(`botao5`).click();
    }else if(event.key === "6"){
        document.getElementById(`botao6`).click();
    }else if(event.key === "1"){
        document.getElementById(`botao1`).click();
    }else if(event.key === "2"){
        document.getElementById(`botao2`).click();
    }else if(event.key === "3"){
        document.getElementById(`botao3`).click();
    }else if(event.key === "0"){
        document.getElementById(`botao0`).click();
    }else if(event.key === "Escape"){
        document.getElementById(`botaoC`).click();
    }else if(event.key === "Enter"){
        document.getElementById(`igual`).click();
    }else if(event.key === "."){
        document.getElementById(`botaoPonto`).click(); 
    }       













}

