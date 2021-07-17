const cart = [
    '{ "name": "eraser", "price": 3.45 }',
    '{ "name": "notebook", "price": 13.90 }',
    '{ "name": "pencil kit", "price": 41.42 }',
    '{ "name": "pen", "price": 7.50 }'
]

const toObject = json => JSON.parse(json)

const onlyPrice = product => product.price

const result = cart.map(toObject).map(onlyPrice)
console.log(result) // [ 3.45, 13.9, 41.42, 7.5 ]
