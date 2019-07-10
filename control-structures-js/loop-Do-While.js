function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1;

do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1);

console.log('Até a próxima');

/*
Opção escolhida foi 2.
Opção escolhida foi 1.
Opção escolhida foi 1.
Opção escolhida foi 7.
Opção escolhida foi 2.
Opção escolhida foi 9.
Opção escolhida foi 2.
Opção escolhida foi 2.
Opção escolhida foi 5.
Opção escolhida foi 9.
Opção escolhida foi 0.
Opção escolhida foi 4.
Opção escolhida foi -1.
Até a próxima
*/
