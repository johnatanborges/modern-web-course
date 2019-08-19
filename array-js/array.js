console.log(typeof Array, typeof new Array, typeof []) // function object object

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana' ]

aprovados = ['Bruna', 'Camila', 'Marcela']
console.log(aprovados[0]) // Bruna
console.log(aprovados[1]) // Camila
console.log(aprovados[2]) // Marcela
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
aprovados.push('Debora')
console.log(aprovados.length) // 5

aprovados[9] = 'Rafael'
console.log(aprovados.length) // 10
console.log(aprovados[8] === undefined) // true
console.log(aprovados[8] === null) // false

console.log(aprovados)
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
aprovados.sort()
console.log(aprovados)
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
delete aprovados[1]
console.log(aprovados[1]) // undefined
console.log(aprovados[2]) // Debora

// splice
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados) // [ 'Bia', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(0, 2)
console.log(aprovados) // [ 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados) // [ 'Bia', 'Elemento1', 'Elemento2' ]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados) // [ 'Bia', 'Elemento1', 'Elemento2', 'Carlos', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados) // [ 'Bia', 'Elemento1', 'Elemento2', 'Ana' ]
