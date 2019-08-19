const pilotos = ['Vettel', 'Alonso', 'haikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro!
console.log(pilotos) // [ 'Vettel', 'Alonso', 'haikkonen' ]

pilotos.push('Verstappen')
console.log(pilotos) // [ 'Vettel', 'Alonso', 'haikkonen', 'Verstappen' ]

pilotos.shift() // remove o primeiro
console.log(pilotos) // [ 'Alonso', 'haikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton')
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'haikkonen', 'Verstappen' ]


// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas')
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'haikkonen', 'Verstappen' ]

// remover
pilotos.splice(3, 1)
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'Verstappen' ]

// slice
const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1) // [ 'Bottas', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 3)
console.log(algunsPilotos2) // [ 'Alonso', 'Bottas' ]
