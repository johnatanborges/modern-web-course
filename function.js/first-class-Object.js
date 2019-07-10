// Function in JS is First-Class Object (Citizens)
// Higher-order Function

// literal function
function fun1() {};

// function in variable
const fun2 = function() {};

const array = [function (a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3)); // 5

// function in objects
const obj = {};
obj.falar = function () { return 'Opa'};
console.log(obj.falar()); // Opa

// function param
function run(fun) {
    fun()
}

run(function() { console.log('Corra...')}) // Corra...

// function return
function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(4); // 9

const cincoMais = soma(2, 3);
cincoMais(4); // 9
