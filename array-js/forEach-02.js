Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

approved.forEach(function(name, index, array) {
    console.log(` ${index + 1}, ${name} `)
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
