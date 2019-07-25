function MeuObjeto() {}

console.log(MeuObjeto.prototype) // MeuObjeto {}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__); // true
console.log(MeuObjeto.prototype === obj1.__proto__); // true

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia, meu nome é ${this.nome}`)
}

obj1.falar(); // Bom dia, meu nome é Anônimo

obj2.nome = 'Pedro'
obj2.falar() // Bom dia, meu nome é Pedro

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar() // Bom dia, meu nome é obj3

// Resume
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true
console.log(MeuObjeto.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true
