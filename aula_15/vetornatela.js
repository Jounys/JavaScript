let valores = [5, 8, 2, 9, 3, 4]
// valores.push(20) // Casos de ordenção em Unicode
// valores.sort()

// for(let pos = 0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

for(let pos in valores){ // for(para) in(em) para cada posição em valores
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}