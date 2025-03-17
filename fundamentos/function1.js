//função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}                   //a e b são parâmetros  
imprimirSoma(2, 3)  //2 e 3 são argumentos
imprimirSoma(2)     //NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) //soma os dois primeiros e ignora o resto
imprimirSoma()      //NaN

//função com retorno
function soma(a, b = 1) {
    return a + b
}
                                  
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
