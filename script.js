//carne - 400gr pessoa + 6hrs 650
//cerveja 1200ml +6hrs 2000ml
//refrigerante/agua 1000ml +6hrs 1500

//crianças valem 0,5


let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let totalCerveja = cervejaPP(duracao) * adultos;
    let totalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);
    
    resultado.innerHTML = `<p>${totalCarne / 1000} Kg de Carne</p> `
    resultado.innerHTML += `<p>${ Math.ceil(totalCerveja / 350)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${totalBebida / 1000} Litros de Bebida</p>` 
}

function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    }else{
       return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6){
        return  2000;
    }else{
       return 1200;
    }}

function bebidaPP(duracao){
    if (duracao >=6){
        return 1500;
    }else{
        return 1000;

    }
}