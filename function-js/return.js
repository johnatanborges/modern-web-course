function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    }  else {
        return area;
    }
}

console.log(area(2, 7)); // 14
console.log(area(2)); // NaN
console.log(area()); // NaN
console.log(area(2, 3, 5, 19)); // 6
console.log(area(10, 12)); // Valor acima do permitido: 120m2 // undefined
