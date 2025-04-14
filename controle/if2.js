function teste1 (num) {
    if (num > 7) {
        console.log(num)
        console.log("final")
    }
}

teste1 (6)
teste1 (8)

function teste2 (num) {
    if (num > 7); {  //sentença de codigo vazia que termina com ;. Bloco de código nao esta associada ao if
        console.log(num)
    }
}

teste2 (6)
teste2 (8)
