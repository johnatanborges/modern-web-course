function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1,
    }
}

console.log(criarProduto('Notebook', 2199.49)); // { nome: 'Notebook', preco: 2199.49, desconto: 0.1 }
console.log(criarProduto('Ipad', 1299.99)); // { nome: 'Ipad', preco: 1299.99, desconto: 0.1 }
