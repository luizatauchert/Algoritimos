const personagens = ["rory", "bob esponja", "serena", "blair", "elena", "damon", "stefan"]

function escolherPersonagem(){
    
let n =Math.floor(Math.random() * (personagens.length))
return personagens[n]
}
console.log (escolherPersonagem())

