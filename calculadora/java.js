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
    }
}