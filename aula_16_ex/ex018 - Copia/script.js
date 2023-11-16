let entrada = document.getElementById('txtn')
let botaoAdd = document.getElementById('botaoAdd')
let botaoFinalizar = document.getElementById('botaoFinalizar')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let meuArray = []

botaoAdd.addEventListener('click', adicionar)
//botaoFinalizar.addEventListener('click', finalizar)
 
/**
 * Validar se é de 1 a 100
 * validar se o número ja tem adicionado
 * Mostrar o total de itens no Array
 * Mostrar a soma dos valores
 * Mostrar o número maior e o menor 
 * Mostrar a média
 */


function adicionar(){
    let numAdd = entrada.value
    entrada.value = ''
    if(numAdd == '' || numAdd == 0){
        window.alert('Inválido! Adicione um número.')
    } else if (numAdd >= 100){
        window.alert('Erro! Adicione um número menor que 100' )
    } else {
        meuArray.push(numAdd)
        let item = document.createElement('option')
        item.text = `${numAdd} Adicionado`
        lista.appendChild(item)
    }
    console.log(meuArray)
}

function finalizar(){
    let soma = 0
    let media = 0
    let maior = 0
    let menor = 0
    let total = 0
    for()
}