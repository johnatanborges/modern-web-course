const num = [1, 2, 3, 4, 5]

let resultado = num.map( e => {
    return e * 2
})

console.log(resultado, num) // [ 2, 4, 6, 8, 10 ] [ 1, 2, 3, 4, 5 ]

let teste = num.map( e => {
    //return e * 2
})

console.log(teste) // [ undefined, undefined, undefined, undefined, undefined ]

const soma10 = e => e + 10

const triplo = e => e * 3

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = num.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado) // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
