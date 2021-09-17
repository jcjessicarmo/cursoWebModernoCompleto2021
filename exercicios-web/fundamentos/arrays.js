//Seção 04 - Aula 45

/* o array é uma estrutura de dados que contém um índice numérico e um elemento, 
que pode ser de qualquer tipo primitivo de dados, um objeto ou, até mesmo, um outro array. */

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

/* O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento 
desse array.*/

valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)