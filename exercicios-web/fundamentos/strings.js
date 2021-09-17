//Seção 04 - Aula 42

const escola = "Cod3r" 
console.log(escola.charAt(4)) // O método charAt() retorna o caractere especificado a partir de uma string
console.log(escola.charAt(3))
console.log(escola.charAt(2))
console.log(escola.charAt(1))
console.log(escola.charAt(0))

console.log(escola.charCodeAt(3)) // O  método charCodeAt() retorna um número inteiro entre 0 e 65535 que representa a unidade de código UTF-16 no índice fornecido
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // Ele vai pegar as letras a partir do indice 1
console.log(escola.substring(0, 3)) // Ele vai do indice 3 até o 0

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))
