
//mostrar os numeros de 1 a 10  
for(contagem = 1; contagem < 11; contagem++){
    console.log(contagem);
}


//mostrar os numeros pares de 1 a 10
for(numerosPares = 0; numerosPares <= 10; numerosPares += 2){
    console.log(numerosPares)
}


//mostrar a tabuada do 5 ate 5 * 10
for(tabuada = 1; tabuada <= 10; tabuada++){
    console.log(tabuada * 5)
}


//somar os numeros de 1 a 10 
for(soma = 1; soma <= 11; soma++){
    console.log(soma + soma)
}




//mostrar os numeros pares de 1  20, mas pular os multiplos de 3
for(numerosPares = 1; numerosPares <= 20; numerosPares += 2){
    if(numerosPares % 3 !== 0)
    console.log(numerosPares )
}


//soma os numeros impares de 1 a 100
let somaImpares = 0
for(soma = 1; soma <= 20; soma = soma + 2){
    somaImpares = somaImpares + soma
    console.log(somaImpares)
}

//mostrar os numeros de 1 a 100, mas substitua os multiplos de 3 por "Fizz", os multiplos de 5 por "Buzz", e os multiplod de 3 e 5 por "FizzBuzz"

for(fizzBuzz = 1; fizzBuzz <= 100; fizzBuzz++){
  if (fizzBuzz % 3 === 0) {
      console.log("Fizz");
  }  if (fizzBuzz % 5 === 0){
    console.log("Buzz")
  }


}//ta errado 




