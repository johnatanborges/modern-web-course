let value;
console.log(value); // undefined
// console.log(newValue); // ReferenceError: newValue is not defined
console.log(value.length); // TypeError: Cannot read property 'length' of undefined

value = null;
console.log(value); // null
// console.log(value.toString()); // TypeError: Cannot read property 'toString' of null

const product = {};
console.log(product.price); // undefined
// console.log(product.price.unity); // TypeError: Cannot read property 'unity' of undefined

console.log(product); // {}

product.price = 3.50;
console.log(product); // { price: 3.5 }

product.price = undefined; //dont't do this
console.log(!!product.price); // false
console.log(price); // { price: undefined }

product.price = null;
console.log(!!product.price); // false
console.log(product); // { price: null }
