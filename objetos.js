//objetos

/*const aluno = {
    nome: "Luiza",//string
    idade: 18,//number
    tarefas:['ver a aula','estudar']//array
    email:'luiza@gmail.com'
    contarPiada: function(){//function
        console.log("é pa vê ou pa comê?")
    }

}
console.log(professor.idade)

aluno.nome = "laura"
aluno.['luiza@gmail.com']*/


/*const filme = {
    nome: "How To Lose A Guy In 10 Days",
    diretor: "donald petrie",
    duração: " 1 hora e 50 minutos",
    lancamento: 2003,
    elenco: ['Kate Hudson','Matthew McConaughey','Adam Goldberg'],
    jaAssistiu: "true"

    
}
console.log(filme.nome)
console.log(filme.diretor)
console.log(filme.duração)
console.log(filme["lancamento"])
console.log(filme["elenco"])
console.log(filme["jaAssitiu"])


const pessoa = {
    nome:"Laura",
    idade:"dezoito",
    generoMusical:"acustico"

}
console.log("o nome da pessoa é ", pessoa.nome, " sua idade é ", pessoa.idade, " E seu genero musical favorito é ",pessoa.generoMusical)

const donoDoPet = {
    nome: "luiza",
    pet:{
        nomeDoPet:"Zoe",
        raca:"york",
        idade:1

    }
}
donoDoPet.nome = "adriana"
console.log(donoDoPet.pet.nomeDoPet)

//funcoes dentro de um objeto são chamadas de metodo.


const filme = {
    nome: "How To Lose A Guy In 10 Days",
    diretor: "donald petrie",
    duração: " 1 hora e 50 minutos",
    lancamento: 2003,
    elenco: ['Kate Hudson','Matthew McConaughey','Adam Goldberg'],
    jaAssistiu: "true"
}

    console.log(filme.elenco[0])// chama o array o numero é o indice que ele vai imprimir

const professores = [
    {nome: "andrei" , modulo: 1}
    {nome:"vitor", modulo:2}
    {nome: "mina", modulo: 3}
]
console.log(professores[1].nome)

//adicionar propriedades
const curso = {
    nome: "frontend",
    linguagens: ["js", "css", "html"]
}
curso.numeroEstudantes = 50 
console.log(curso)


const filme = {
    nome: "How To Lose A Guy In 10 Days",
    diretor: "donald petrie",
    duração: " 1 hora e 50 minutos",
    lancamento: 2003,
    elenco: ['Kate Hudson','Matthew McConaughey','Shalom Harlow'],
    jaAssistiu: true
}

filme.personagens = ["Andie", "Beijamin", "Judy"]
console.log(filme)

console.log("O ator ",filme.elenco[0],"interpreta o personagem", filme.personagens [0])
console.log("O ator ",filme.elenco[1],"interpreta o personagem", filme.personagens [1])
console.log("O ator ",filme.elenco[2],"interpreta o personagem", filme.personagens [2])

filme.elenco[0] = "xuxa"
console.log (filme.elenco)

console.log (filme)

const usuario = {
    nome: "Leticia",
    idade: 15,
    email: "letiele@gmail.com.br",
    cadade: "sao leopolo"

}

const novoUsuario = {
    ...usuario, 
    nome:"João",
    idade: "28"
}

console.log(novoUsuario)
    
const listaDeNomes = ["mika", "PAula", "Vitor"]
const copiandoListaDeNomes = [...listaDeNomes]

console.log(copiandoListaDeNomes)*/
/*const pessoa = {
    nome: "Laura",
    idade:"dezoito",
    generoMusical:"acustico"
}

function exer4(objeto){
    




const novaPessoa = {
    ...objeto,
    comidasPreferidas: ["lasanha", "sopa", "feijao", "pizza"],
    melhorAmigo:"João",
    idade: "28"

}
    console.log("o nome da pessoa é ", novaPessoa.nome, " suas comidas preferidas são ", novaPessoa.comidasPreferidas, " E seu melhor amigo é  ",novaPessoa.melhorAmigo, "e tem",novaPessoa.idade, "anos.")   


}
exer4(pessoa)*/



const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//a) O que vai ser impresso no console? matheus nachtergaele, vai imprimir todos os nomes presentes no elenco
//e por ultimo vai imprimir o canal "globo", horario "14h"


/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)*/

//a) O que vai ser impresso no console?
//o objeto cachorro, o objeto gato e o objeto tartaruga.
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto
//ele puxa o que tem dentro do objeto que voce chamou


/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*/


//a) O que vai ser impresso no console?
//false e undefined
//b) Explique o valor impresso no console. Você sabe por que isso aconteceu? porque o valor da altura não foi criado

// Exemplo de entrada
/*const pessoa = {
    nome: "Luiza Tauchert Scholl", 
    apelidos: ["lu", "iza", "lulu"]
 }
 
console.log ("Eu sou" ,pessoa.nome, "mas pode me chamar de:", pessoa.apelidos)
 // Exemplo de saída
"Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"

const apelidoPessoa = {
    ...pessoa,
    apelidosNovos: ["luli", "nsei", "lsd"]

}

console.log(apelidoPessoa)*/

const primeiro = {
    nome: "luiza",
    idade: 18,
    profissao: "estudante"
}
function atividade(objeto){
const resultado = []

resultado.push(objeto.nome)

}