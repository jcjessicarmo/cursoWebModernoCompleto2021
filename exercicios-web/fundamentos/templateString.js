//Seção 04 - Aula 43

const nome = 'Rebeca'
const concatencacao = 'Olá ' + nome + '!'
const template =`
Olá
${nome}!`
console.log(concatencacao, template)

//expressoes...
console.log (`1 + 1 = ${ 1 + 1 }`)

const up = texto => texto.toUpperCase() // Faz com que a palavra cuidado fique maiuscula.
console.log (`Ei... ${up('cuidado')}!`)

const NomeUp = texto2 => texto2.toUpperCase() // O metodo toUpperCase() retorna o valor da string original convertido em letras maiúsculas.
console.log (`Escreva em maiusculo a palvra 'agora':  ${NomeUp('agora')}!`)