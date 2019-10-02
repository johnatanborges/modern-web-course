console.log(module.exports) // {}
console.log(exports) // {}
console.log(this) // {}


console.log(module.exports === this) // true
console.log(module.exports === exports) // true

// -----------------------

this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports) // { a: 1, b: 2, c: 3 }
console.log(exports) // { a: 1, b: 2, c: 3 }
console.log(this) // { a: 1, b: 2, c: 3 }

// -------------------------

exports = null
console.log(module.exports) // { a: 1, b: 2, c: 3 }
console.log(exports) // null
console.log(this) // { a: 1, b: 2, c: 3 }


exports = {
    nome: 'Teste111'
}

// -------------------------

console.log(module.exports) // { a: 1, b: 2, c: 3 }
console.log(exports) // { nome: 'Teste111' }
console.log(this) // { a: 1, b: 2, c: 3 }

// --------------------------

module.exports = {
    nome: 'Teste222'
}

console.log(module.exports) // { nome: 'Teste222' }
console.log(exports) // { nome: 'Teste111' }
console.log(this) // { a: 1, b: 2, c: 3 }

