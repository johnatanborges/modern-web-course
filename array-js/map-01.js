const num = [1, 2, 3, 4, 5]

let result = num.map( e => {
    return e * 2
})

console.log(result, num) // [ 2, 4, 6, 8, 10 ] [ 1, 2, 3, 4, 5 ]

let teste = num.map( e => {
    //return e * 2
})

console.log(teste) // [ undefined, undefined, undefined, undefined, undefined ]

const sum10 = e => e + 10

const triple = e => e * 3

const forMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = num.map(sum10).map(triple).map(forMoney)

console.log(result) // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
