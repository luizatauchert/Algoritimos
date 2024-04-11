const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
rl.question("Escolha um numero ",(numero) => {
        if(numero < 0) {
        console.log('Seu numero é negativo')
        }else if(numero > 0){
        console.log("seu numero é positivo")
        }else{
        console.log("seu numero é igual a zero")
         }
    rl.close();
    });
