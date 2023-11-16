let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){ //  l de lista
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){ // ! Significa não
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value} Adicionado`
        lista.appendChild(item)
    } else {
        window.alert('Número inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
    console.log(valores)
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione números antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = valores[0]
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior número encontrado foi: ${maior}</p>`
        res.innerHTML += `<p>O menor número encontrado foi: ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos: ${soma}</p>`
        res.innerHTML += `<p>A média é: ${media}</p>`
    }
}