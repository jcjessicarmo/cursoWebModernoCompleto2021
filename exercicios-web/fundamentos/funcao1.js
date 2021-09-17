//Seção 04 - Aula 49

/* Função é um bloco de código nomeado, a função recebe parametros de entrada, pode não receber nenhum 
parâmetro, pode não retornar dado, pode receber e retornar dados.
 */

//Função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)


//Função com retorno
function soma(a, b =0){
    return a + b
}
console.log(soma(7,3))

