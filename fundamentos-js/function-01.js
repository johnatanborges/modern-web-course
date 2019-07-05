// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); // 5
imprimirSoma(2); // NaN
imprimirSoma(2, 10, 4, 5, 6, 7); // 12
imprimirSoma(); // NaN

// Função com retorno
function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2, 3)); // 5
console.log(soma(2)); // 3
console.log(soma()); // NaN
