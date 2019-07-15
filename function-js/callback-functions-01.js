const fabricante = ['Mercedes', 'Audi', 'Bmw'];

function imprimir(nome, indice) {
    console.log(`${indice + 1} - ${nome}`);
}

fabricante.forEach(imprimir);
/*
1 - Mercedes
2 - Audi
3 - Bmw
*/

fabricante.forEach(fabricante => console.log(fabricante));
/*
Mercedes
Audi
Bmw
*/
