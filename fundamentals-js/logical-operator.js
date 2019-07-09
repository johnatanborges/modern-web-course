function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const materSaudavel = !comprarSorvete; // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, materSaudavel };
}

console.log(compras(true, true));
/*
{
comprarSorvete: true,
comprarTv50: true,
comprarTv32: false,
materSaudavel: false
}
*/
