//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa //tire de dentro do objeto pessoa os atributos nome e idade
console.log(nome, idade)
console.log(nome, idade)

const{ nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//const { conta: { ag, num}} = pessoa
//console.log(ag, num) //erro pois conta não está definido dentro do objeto pessoa
