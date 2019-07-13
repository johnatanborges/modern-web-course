const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar(); // Bom dia!


const falar = pessoa.falar;
falar(); // indefined // conflict functional and OO

const falarPesssoa = pessoa.falar.bind(pessoa);
falarPesssoa(); // Bom dia!