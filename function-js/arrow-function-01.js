let dobro = function (a) {
    return a * 2;
}

dobro = (a) => {
    return a * 2;
}

dobro = a => a * 2;
console.log(dobro(Math.PI)); // 6.283185307179586

let ola = function() {
    return 'Olá';
}

ola = () => 'Olá';
ola = _ => 'Olá';
console.log(ola()); // Ola
