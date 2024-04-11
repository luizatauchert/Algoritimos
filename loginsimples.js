const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
const senhaArmazenada = "1234";
rl.question("digite a senha: ",(senha) => {
        if(senha == senhaArmazenada) {
        console.log('login bem sucedido')
        
        }else{
        console.log("senha incorreta")
         }
    rl.close();
    });
