const a = 1//escopo global

function imprimeVariavel (){
    const b = //escopo local
    console.log('variavel a', a)
    console.log('variavel b', b)


}
imprimaVariavel()

console.log('variavel a',a)
console.log('variavel b', b)








function calculandoArea(altura, largura){
    const area = altura * largura
    return area
}
//atribui retorno a uma variavel 
const areaCalculada = calculaArea(2, 3)

//imprime retorno no console
console.log(calculaArea(2, 3))

function soma(a, b){
    return a + b;
}
let resultado = soma(3, 4);
console.log(resultado + 1);








