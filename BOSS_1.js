let nomeHeroi ="Neves_02"
let qntXP = 8000
let rank = ""

switch(true){
    case qntXP <= 1000:
    rank = "Ferro"
    break
    case qntXP <= 2000:
    rank = "Bronze"
    break
    case qntXP <= 5000:
    rank = "Prata"
    break
    case qntXP <= 7000:
    rank = "Ouro"
    break
    case qntXP <= 8000:
    rank = "Platina"
    break
    case qntXP <= 9000:
    rank = "Ascendente"
    break
    case qntXP <= 10000:
    rank = "Imortal"
    break
    case qntXP > 10000:
    rank = "Radiante"
    break
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rank + ".")