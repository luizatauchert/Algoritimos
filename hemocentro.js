
//ATIVIDADE HEMOCENTRO

//1 cadastrar doador 
//2 listar doadores
//3 buscar doador por tipo sanguíneo
//4 buscar doador por data da ultima doação 
//5 sair  

const readline = require('readline-sync');

let doadoresCadastrados = []

function cadastrarDoador(){
    let nomeDoador = readline.question("Digite o nome do doador:")
    let idadeDoaador = readline.question("Digite a idade do doador:")
    let pesoDoador = readline.question("Digite o peso do doador:")
    let tipoSanguineo = readline.question("Digite o tipo sanguíneo do doador:")
    let ultimaDoacao = readline.question("Digite a data da ultima doacao feita pelo doador:")
    doadoresCadastrados.push({nome: nomeDoador, idade: idadeDoaador, peso: pesoDoador, tipoSanguineo: Sangue, dataUltimaDoacao: ultimaDoacao});
}

function exibirMenu() {

    console.log("Menu de opções:");
    console.log("1. Cadastrar novo doador.:");
    console.log("2. Listar doadores:");   
    console.log("3. Buscar doador por tipo sanguíneo:");
    console.log("4. Buscar doador por data da ultima doação:")
    console.log("5. Sair");
}




function processarEscolha(opção){
    switch(opção){
        case '1':
            console.log("Você escolheu a opção 1.")
            cadastrarDoador()
            break;
        case '2':
            console.log("Você escolheu a opção 2.")
            console.log(doadoresCadastrados)
            break;
            case '3':
                console.log("Você escolheu a opção 3.")
               buscaDoadorSangue()
                break;
            case '4':
                console.log("Você escolheu a opção 4")
                verificaDragões()
                break;
           
            case '5':
                    console.log("Você encerrou o programa....")
                    return true
                    default:
                        console.log("Opção inválida. Por favor,escolha uma opção valida")
                    
    }
    return false

}

function main(){
    let encerrar = false
    while(!encerrar){
        exibirMenu()
        let opção = readline.question("Digite o número da opção desejada:")
        encerrar = processarEscolha(opção)
 
    }
}
main()






