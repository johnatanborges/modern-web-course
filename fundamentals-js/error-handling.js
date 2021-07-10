function handleError(error) {
    // throw new Error('...'); // ...
    // throw 10; // 10
    // throw true; // true
    // throw 'message'; // message
    throw { // [object Object]
        name: error.name,
        msg: error.message,
        date: new Date(),
    };
}

function printShoutedName(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        handleError(e);
    } finally {
        console.log('Final'); // Final
    }
}

const obj = { name: 'Roberto' };
printShoutedName(obj);
