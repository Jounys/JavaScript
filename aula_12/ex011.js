var idade = 65
console.log('Idade: ' + idade)

if(idade < 16){
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto Opcional!')
} else {
    console.log('Voto Obrigatório!')
}
