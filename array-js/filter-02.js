Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const products = [
    { name: 'Notebook', price: 2499, fragile: true },
    { name: 'iPad Pro', price: 4199, fragile: true },
    { name: 'Glass of glasses', price: 12.49, fragile: true },
    { name: 'Plastic cup', price: 18.99, fragile: false }
]

console.log(products.filter( e => {
    return false // []
}))

const fragile = product => product.fragile


const expansive = product => product.price >= 500

const result = products.filter2(fragile).filter2(expansive)
console.log(result)
// [
//      { name: 'Notebook', price: 2499, fragile: true },
//      { name: 'iPad Pro', price: 4199, fragile: true }
// ]
