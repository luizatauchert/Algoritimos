//crie uma variavel que vai refernciar a biblioteca
const readlineSync = require("readline-sync");

//fazendo peruntas e armazenando as respostas 
const nome = readlineSync.question("qual o seu nome?");
const idade = readlineSync.question("qual a sua idade?");
const cidade = readlineSync.question("qual a sua cidade?");

//exibindo as respostas
console.log("nome:" + nome);
console.log("idade:" + idade);
console.log("cidade:" + cidade);



