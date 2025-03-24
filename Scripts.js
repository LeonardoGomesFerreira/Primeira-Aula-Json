let exemplosJson = {
    "Nome": "Hugo",
    "Idade": 30,
    "Filhos": [
        {"Nome": "Pedro", "Idade": 12},
        {"Nome": "Bianca", "Idade": 15},
        {"Nome": "Willian", "Idade": 10},
        {"Nome": "Maria", "Idade": 18},
        {"Nome": "Gabi", "Idade": 5},
        {"Nome": "Julia", "Idade": 8},
        {"Nome": "Hendrew", "Idade": 6},
        {"Nome": "Max", "Idade": 13},
        {"Nome": "Amanda", "Idade": 16},
        {"Nome": "Breno", "Idade": 20},
        {"Nome": "Natalie", "Idade": 22},
        {"Nome": "Lucas", "Idade": 14},
        {"Nome": "Mariana", "Idade": 9},
        {"Nome": "Felipe", "Idade": 11},
        {"Nome": "Carla", "Idade": 17}
    ]
}

// console.log(exemplosJson.Nome, exemplosJson.Idade, exemplosJson.Filhos[0], exemplosJson.Filhos[1])

console.log(document.getElementById("ListaDeNomes").innerHTML)

//Mostra Nome e idade
//exemplosJson.Filhos.map(function(Filhos){
//    console.log(Filhos)
//})


// Mostra 0 Nome 
//exemplosJson.Filhos.map(function(Filhos){
//    console.log(Filhos.Nome)
//})


// Mostra a idade
//exemplosJson.Filhos.map(function(Filhos){
//    console.log(Filhos.Idade)
//})


// Alem de mostra no console vai mostra na tela em html 
exemplosJson.Filhos.map(function(Filhos){
    console.log(Filhos.Nome)
    let htmlAntigo = document.getElementById("ListaDeNomes").innerHTML;
    novoHtml = htmlAntigo + "<li>" + Filhos.Nome + "</li>"
    document.getElementById("ListaDeNomes").innerHTML = novoHtml
})
