const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
console.log(filha1) // {}
console.log(filha1.nome); // Pedro
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // preto

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome) // Bia
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // Bia tem cabelo preto

console.log(Object.keys(filha1)); // [ 'nome' ]
console.log(Object.keys(filha2)); // [ 'nome' ]

for (let key in filha2) {
    console.log(key)
        // nome
        // corCabelo
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
            // nome
            // Por herança: corCabelo
}

for (let key in filha2) {
    console.log(filha2[key])
}
