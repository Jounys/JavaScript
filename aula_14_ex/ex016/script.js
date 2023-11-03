function contar(){
    var inicio = document.getElementById('entrada01')
    var fim = document.getElementById('entrada02')
    var passo = document.getElementById('entrada03')
    var res = document.getElementById('res')
    var iniNum = Number(inicio.value)
    var fimNum = Number(fim.value)
    var passoNum = Number(passo.value)
    if(iniNum == 0 || fimNum == 0){
        alert('Erro! Faltam dados')
    }else if(passoNum == 0){
        alert('Impossivel contar! Considerando Passo 1')
        passoNum = 1
        for(iniNum;iniNum <= fimNum;iniNum += passoNum){
            res.innerHTML += `${iniNum} \u{1f449}`
            console.log(iniNum)
        }
    }else{
        for(iniNum; iniNum <= fimNum; iniNum += passoNum){
            res.innerHTML += `${iniNum} \u{1f449}`
            console.log(iniNum)
        }
    }
}