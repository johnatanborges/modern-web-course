const pilots = ['Vettel', 'Alonso', 'Haikkonen', 'Massa']
pilots.pop()
console.log(pilots) // [ 'Vettel', 'Alonso', 'Haikkonen' ]

pilots.push('Verstappen')
console.log(pilots) // [ 'Vettel', 'Alonso', 'Haikkonen', 'Verstappen' ]

pilots.shift()
console.log(pilots) // [ 'Alonso', 'Haikkonen', 'Verstappen' ]

pilots.unshift('Hamilton')
console.log(pilots) // [ 'Hamilton', 'Alonso', 'Haikkonen', 'Verstappen' ]


// splice can add and remove
// add
pilots.splice(2, 0, 'Bottas')
console.log(pilots) // [ 'Hamilton', 'Alonso', 'Bottas', 'Haikkonen', 'Verstappen' ]

// remove
pilots.splice(3, 1)
console.log(pilots) // [ 'Hamilton', 'Alonso', 'Bottas', 'Verstappen' ]

// slice
const somePilots1 = pilots.slice(2) // novo array
console.log(somePilots1) // [ 'Bottas', 'Verstappen' ]

const somePilots2 = pilots.slice(1, 3)
console.log(somePilots2) // [ 'Alonso', 'Bottas' ]
