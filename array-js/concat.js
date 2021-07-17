const daughters = ['Alana', 'Camila']
const sons = ['Alisson', 'Bruno']
const todos = daughters.concat(sons)
console.log(todos, daughters, sons)
// [ 'Alana', 'Camila', 'Alisson', 'Bruno' ] [ 'Alana', 'Camila' ] [ 'Alisson', 'Bruno' ]

console.log([].concat([1, 2], [3, 4], 5, [[6,7]]))
// [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
