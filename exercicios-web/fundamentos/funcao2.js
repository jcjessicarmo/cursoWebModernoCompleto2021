//Seção 04 - Aula 50

//Armazenando uma função em uma variavel
const imprimiSoma = function (a,b) {
    console.log(a+b)
}

imprimiSoma(3,2)


//Armazenando uma função arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))


//return implícito
const subtracao = (a, b) => a - b
console.log(subtracao(4,9))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')