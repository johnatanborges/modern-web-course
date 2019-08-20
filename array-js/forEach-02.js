Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array) {
    console.log(` ${indice + 1}, ${nome} `)
    console.log(array)
})
// 1, Agatha
// [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
// 2, Aldo
// [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
// 3, Daniel
// [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
// 4, Raquel
// [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]

