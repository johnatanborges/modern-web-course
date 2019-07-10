function tratarErro(erro) {
    // throw new Error('...'); // ...
    // throw 10; // 10
    // throw true; // true
    // throw 'mensagem'; // mensagem
    throw { // [object Object]
        nome: erro.name,
        msg: erro.message,
        date: new Date(),
    };
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErro(e);
    } finally {
        console.log('final'); // final
    }
}

const obj = { nome: 'Roberto' };
imprimirNomeGritado(obj);
