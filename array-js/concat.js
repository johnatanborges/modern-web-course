const filhas = ['Alana', 'Camila']
const filhos = ['Alisson', 'Bruno']
const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)
// [ 'Alana', 'Camila', 'Alisson', 'Bruno' ] [ 'Alana', 'Camila' ] [ 'Alisson', 'Bruno' ]

console.log([].concat([1, 2], [3, 4], 5, [[6,7]]))
// [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
