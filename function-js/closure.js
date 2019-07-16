// closure é o escopo criado quando uma função é dclarada
// Esse escopo permite à função acessar e manipular variáveis externas á função

// Contexto léxico em ação!

const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao()); // Local
