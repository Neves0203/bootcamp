let win = 101
let lost = 2

function rank(){
    switch(true){
        case win < 10:
            return ("Ferro")
            break
        case win < 20:
            return ("Bronze")
            break
        case win < 50:
            return ("Prata")
            break
        case win < 80:
            return ("Ouro")
            break
        case win < 90:
            return ("Diamante")
            break
        case win < 100:
            return ("Lendário")
            break
        case win >= 101:
            return ("Imortal")
            break
    }
}

function saldoVitorias(){
    return win - lost
}

console.log("O Herói tem saldo de " + saldoVitorias() + " está no nível de " + rank() + ".")