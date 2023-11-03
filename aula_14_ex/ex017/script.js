function gerar(){
    var entrada =  document.getElementById('entrada')
    var seltab = document.getElementById('seltab')
    if(entrada.value.length == 0){
        alert('Sem número para gerar Tabuada! Digite um número.')
    } else {
        var entradaNum = Number(entrada.value)
        seltab.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            // var calculo = entradaNum * c
            let item = document.createElement('option')
            item.text = `${entradaNum} x ${c} = ${entradaNum*c}`
            seltab.appendChild(item)
        }
    }
}