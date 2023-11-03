function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) >= ano){
        alert('[ERRO] Verifique os dados!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') // criação de um elemento HTML
        img.setAttribute('id', 'foto') // Criando um ID e o nome do ID
        
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 12){
                // Criança
                img.setAttribute('src', 'imagens/criançaH.png')
            } else if( idade < 18){
                // Adolescente
                img.setAttribute('src', 'imagens/adolescenteH.png')
            } else if (idade < 65){
                // Adulto
                img.setAttribute('src', 'imagens/adultoH.png')
            } else{
                // Idoso
                img.setAttribute('src', 'imagens/idosoH.png')
            }
        }else if(fsex[1].checked){ // Ou só else
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imagens/criançaM.png')
            } else if( idade < 18){
                // Adolescente
                img.setAttribute('src', 'imagens/adolescenteM.png')
            } else if (idade < 65){
                // Adulto
                img.setAttribute('src', 'imagens/adultoM.png')
            } else{
                // Idoso
                img.setAttribute('src', 'imagens/idosoM.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}