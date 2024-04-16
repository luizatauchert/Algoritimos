function calculaArea(base,altura){
    area = base * altura
    console.log(area)
}
calculaArea (2, 4)
calculaArea (4, 5)
calculaArea (7, 6)

//as variaveis criadas nos parenteses são chamadas de de parametro.

function frase(nome){
    console.log(`olá ${nome}`)
}
frase("luiza")
frase("lucas")
frase("adriana")


function calculaMedia(){
console.log(((nota1 + nota2 + nota3) /3).toFixed(2))
}
  
calculaMedia(2,3,5)

function numeroPar(numero){
    if  (numero % 2 == 0){
    console.log("seu numero é par")
    }
    
else{
    console.log("seu numero é impar")
}
}

numeroPar(4)

















