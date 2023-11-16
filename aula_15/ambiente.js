let num = [5, 8, 2, 9, 3]
num.push(7) //  Add na última posição
//num[5] = 10 // Add na posição especificada
num.sort() // Ordena em ordem crescente
console.log(`Nosso Vetor é o: ${num}`)
console.log(`Nosso Vetor tem: ${num.length} espaços`)

let pos = num.indexOf(10)  // Localiza um valor dentro do array
if(pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor se encontra na posição ${pos}`)
}