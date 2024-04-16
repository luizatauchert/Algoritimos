
//mostrar os numeros de 1 a 10  
for(contagem = 1; contagem < 11; contagem++){
    console.log(contagem);
}


//mostrar os numeros pares de 1 a 10
for(numerosPares = 0; numerosPares <= 10; numerosPares += 2){
    console.log(numerosPares)
}


//mostrar a tabuada do 5 ate 5 * 10
for(tabuada = 1; tabuada <= 10; tabuada++){
    console.log(tabuada * 5)
}


//somar os numeros de 1 a 10 
for(soma = 1; soma <= 11; soma++){
    console.log(soma + soma)
}



//mostrar os numeros pares de 1  20, mas pular os multiplos de 3
for(numerosPares = 1; numerosPares <= 20; numerosPares += 2){
    if(numerosPares % 3 !== 0)
    console.log(numerosPares )
}


//soma os numeros impares de 1 a 100
let somaImpares = 0
for(soma = 1; soma <= 20; soma = soma + 2){
    somaImpares = somaImpares + soma
    console.log(somaImpares)
}

//mostrar os numeros de 1 a 100, mas substitua os multiplos de 3 por "Fizz", os multiplos de 5 por "Buzz", e os multiplod de 3 e 5 por "FizzBuzz"

const readlineSync = require('readline-sync')
for(let i = 0 ; i <= 100; i++)
if(i % 3 && i % 5 === 0){
    console.log("FizzBuzz")
    } else if (i % 5 === 0){
        console.log("Buzz")
    } else if(i % 3 === 0){
            console.log("Fizz")
    } else 
        console.log(i)


//Ler 10 números do usuário e mostrar o maior e o menor número digitado:

const readlineSync = require('readline-sync')
nMaior = 0
nMenor = 9999999999999
 for(let i = 1; i <= 10;i++){
    pergunta = Number(readlineSync.question(`fale o numero: `))
    if (pergunta > nMaior){
        nMaior = pergunta
       
    } 
    if (pergunta < nMenor ){
        nMenor = pergunta
        
    }
}

console.log("O maior numero é",nMaior)
console.log("O menor numero é",nMenor)


//Calcular a fatorial de um número

let fatorial = 1
for(i = 1; i <= 10; i++){
    fatorial = fatorial*i
    console.log(fatorial)
}


//soma do resultado com o antecessor 
let fibonacci = 1
for (i = 1; i <= 10, i++){
fibonacci = num1 + num2 = resultado * num2 

}









/*Gerar um número aleatório entre 1 e 100 e pedir ao usuário para adivinhar o
número: Utilize um loop while para gerar um número aleatório entre 1 e 100 e
pedir ao usuário para adivinhar o número. Dê dicas ao usuário se o chute for maior
ou menor que o número aleatório.*/
const readlineSync = require("readline-sync");

const numero = Math.floor(Math.random()*100) +1;
let pergunta

while(pergunta !== numero){
    pergunta = Number(readlineSync.question("adivinhe o numero!"))
if(pergunta<numero){
    console.log("o numero é maior")

}else if (pergunta>numero){
    console.log("o numero é menor")

}

}
console.log("parabens você acertou!")

