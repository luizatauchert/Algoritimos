/*const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
rl.question("Qual a sua idade?", (idade) => (
    console.log("Sua idade é:", idade);
    rl.close();
));*/


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
rl.question("Digite o primeiro numero",(numero1) =>{
    rl.question("Digite o segundo numero",(numero2) =>{
    const resultado = Number(numero1) + Number(numero2);
    console.log(`A soma de ${numero1} e ${numero2} e ${resultado}`);
    
    rl.close();
});
});










