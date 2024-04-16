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