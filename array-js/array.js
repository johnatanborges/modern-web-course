console.log(typeof Array, typeof new Array, typeof []) // function object object

let approved = new Array('Bia', 'Carlos', 'Ana')
console.log(approved) // [ 'Bia', 'Carlos', 'Ana' ]

approved = ['Bruna', 'Camila', 'Marcela']
console.log(approved[0]) // Bruna
console.log(approved[1]) // Camila
console.log(approved[2]) // Marcela
console.log(approved[3]) // undefined

approved[3] = 'Paulo'
approved.push('Debora')
console.log(approved.length) // 5

approved[9] = 'Rafael'
console.log(approved.length) // 10
console.log(approved[8] === undefined) // true
console.log(approved[8] === null) // false

console.log(approved)
/*
[
    'Bruna',
    'Camila',
    'Marcela',
    'Paulo',
    'Debora',
    <4 empty items>,
    'Rafael'
]
*/

// sort
approved.sort()
console.log(approved)
/*
[
    'Bruna',
    'Camila',
    'Debora',
    'Marcela',
    'Paulo',
    'Rafael',
    <4 empty items>
]
*/

// delete
delete approved[1]
console.log(approved[1]) // undefined
console.log(approved[2]) // Debora

// splice
approved = ['Bia', 'Carlos', 'Ana']
approved.splice(1, 1)
console.log(approved) // [ 'Bia', 'Ana' ]

approved = ['Bia', 'Carlos', 'Ana']
approved.splice(0, 2)
console.log(approved) // [ 'Ana' ]

approved = ['Bia', 'Carlos', 'Ana']
approved.splice(1, 2, 'Element1', 'Element2')
console.log(approved) // [ 'Bia', 'Element1', 'Element2' ]

approved = ['Bia', 'Carlos', 'Ana']
approved.splice(1, 0, 'Element1', 'Element2')
console.log(approved) // [ 'Bia', 'Element1', 'Element2', 'Carlos', 'Ana' ]

approved = ['Bia', 'Carlos', 'Ana']
approved.splice(1, 1, 'Element1', 'Element2')
console.log(approved) // [ 'Bia', 'Element1', 'Element2', 'Ana' ]
