//Soma de Números Positivos: Crie um programa que imprima o resultado da soma de dois números, apenas se os dois números forem positivos.


function soma(a, b){
    let soma1 = a + b

if (a>=0){
    a = true
}if (b>=0){
    b = true
}

if(a&&b === true){
    return soma1
}}
console.log(soma(1,2))

//Multiplicação com Número Par: Crie um programa que imprima o resultado da multiplicação de dois números, apenas se pelo menos um dos números for par.

function multiplicao(a, b){
    let multiplicacao1 = a * b

if (a %2 ===0){
    a = true
}if (b %2 ===0){
    b = true
}

if(a&&b === true){
    return multiplicacao1
}}
console.log(multiplicao(1,1))

//Divisão por Não Zero: Crie um programa que imprima o resultado da divisão de dois números, apenas se o divisor não for zero.

function divisao(a, b){
    let divisao1 = a / b

if (b !== 0){

    return divisao1
}}
console.log(divisao(1,0))

//Array em Ordem Inversa: Escreva um programa que imprima um array em ordem inversa









