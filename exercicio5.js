/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log (minhaFuncao(2))
console.log(minhaFuncao(10)) 

/*a) O que vai ser impresso no console?
10 e 50
b) O que aconteceria se retirasse os dois console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
quando retirado o console.log o codigo não aprece no terminal.*/
 
/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


/*a. Explique o que essa função faz e qual é sua utilidade
Essa função ve se a palavra cenoura está presente na frase e deixra as palavras minusculas
b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`  eu gosto de cenoura  true
     ii.  `CENOURA é bom pra vista` cenoura é bom para vista  true
     iii. `Cenouras crescem na terra`  cenouras crescem na terra  false*/

function ex1(nome,idade,cidade,sn){
if("sim"===sn){
console.log('Eu sou',nome,', tenho ',idade,' anos, moro em ',cidade,' e sou estudante.')
}else{
    console.log('Eu sou',nome,', tenho ',idade,' anos, moro em ',cidade,' e nao sou estudante.')
}
}
ex1('luiza', 18, 'sao leo','nao')


