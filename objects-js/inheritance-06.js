function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até mais', 456)

console.log(aula1) // Aula { nome: 'Bem vindo', videoId: 123 }
console.log(aula2) // Aula { nome: 'Até mais', videoId: 456 }

// simulando o new
function novo (f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até mais', 456)
console.log(aula3) // Aula { nome: 'Bem vindo', videoId: 123 }
console.log(aula4) // Aula { nome: 'Até mais', videoId: 456 }
