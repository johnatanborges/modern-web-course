function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);
}

console.log('Até a próxima');

/*
Opção escolhida foi 2.
Opção escolhida foi 7.
Opção escolhida foi 5.
Opção escolhida foi -1.
Até a próxima
*/
