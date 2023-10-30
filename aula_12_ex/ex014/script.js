function carregar(){
    var hrs = document.getElementById('horas')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    hrs.innerHTML = `Agora são ${hora}:${minutos}`

    if (hora >= 0 && hora < 12){
        img.src = 'img/manha.png'
        document.body.style.background = '#BF5E0A'
    } else if(hora >= 12 && hora < 18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#078C03'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#40291C'
    }
}

carregar()