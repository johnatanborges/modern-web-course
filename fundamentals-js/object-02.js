console.log(typeof Object); // function
console.log(typeof new Object); // object

const Client = function() {};
console.log(typeof Client); // function
console.log(typeof new Client); // object

class Product {}; // ES 2015 (ES6)
console.log(typeof Product); // function
console.log(typeof new Product); // object
