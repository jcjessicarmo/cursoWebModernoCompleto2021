const saudacao = 'Opa' // Contexto léxico 1

function exec () {
    const saudacao = 'Falaaa' // Contexto léxico 1
    return saudacao 
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 22,
    peso: 90,
    endereco: {
        rua: 'Rua muito legal',
        bairro: 'Eh demais',
        numero: 112
    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)