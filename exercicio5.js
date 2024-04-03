let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)//ve a quantidade de caracteres incluindo os espaços 

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)



//ex 2
const readlineSync = require('readline-sync');//cria uma variavel que vai referenciar uma biblioteca 

const frase = readlineSync.question("Digite uma frase: ");//faz uma pergunta para o usuario

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);//faz as letras ficarem em maiusculo, e troca todas as letras a por i 







//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//SUBI NUM ONIBUS EM MIRROCOS