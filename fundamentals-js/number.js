const weight1 = 1.0;
const weight2 = Number('2.0');

console.log(weight1, weight2); // 1 2

console.log(Number.isInteger(weight1)); // true

console.log(Number.isInteger(weight2)); // true

const evaluation1 = 9.871;
const evaluation2 = 6.871;

const total = evaluation1 * weight1 + evaluation2 * weight2;
const average = total / (weight1 + weight2)


console.log(average); // 7.8709999999996
console.log(average.toFixed(2)); // 7.87
console.log(average.toString()); // 7.87099999999996
console.log(average.toString(2)); // Convert to binary
console.log(typeof average); // number
console.log(typeof Number); // function
