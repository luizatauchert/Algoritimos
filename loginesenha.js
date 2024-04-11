const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
 let senha
function user(usuario){
 if (usuario == 'luiza'){
    senha == '123'
 } else {
    console.log('usuario nao encontrado')
 }
}rl.question("Digite o nome do usuario:", (nome) =>
{
if (nome == 'luiza') {
    console.log("Bem vinda Luiza")
}else {
console.log("nome não registrado")
}
})



