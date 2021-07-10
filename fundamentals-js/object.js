const prod1 = {};
prod1.name = 'Super Cell';
prod1.price = 4998.90;
prod1['Cool discount'] = 0.40; // avoid attribute with space

console.log(prod1); // { name: 'Super Cell', price: 4998.9, 'Cool discount': 0.4 }

const prod2= {
    name: 'Polo shirt',
    price: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
};

console.log(prod2);
/*
{
    name: 'Polo shirt',
    price: 79.9,
    obj: { blabla: 1, obj: { blabla: 2 } }
}
*/
