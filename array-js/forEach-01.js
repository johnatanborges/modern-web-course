const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

approved.forEach( name => console.log (name))
// Agatha
// Aldo
// Daniel
// Raquel

approved.forEach(function(name, index) {
    console.log(` ${index + 1}, ${name} `)
})
// 1, Agatha
// 2, Aldo
// 3, Daniel
// 4, Raquel

const showApproved = approved => console.log(approved)

approved.forEach(showApproved)
// Agatha
// Aldo
// Daniel
// Raquel

approved.forEach( (name, index, array) => {
    console.log(array)
})
// [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
// [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
// [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
// [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
