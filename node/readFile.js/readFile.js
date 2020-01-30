const fs = require('fs')

const route = __dirname + '/file.json'

//sync
const content = fs.readFileSync(route, 'utf-8')
console.log(content)
// {
//     "db": {
//         "host": "localhost",
//         "port": 5432,
//         "user": "usuario",
//         "pass": "123456"
//     }
// }


//assync
fs.readFile(route, 'utf-8', (err, content) => {
    const config = JSON.parse(content)
    console.log(`${config.db.host}:${config.db.port}`) // localhost:5432
})

const config = require('./file.json')
console.log(config.db) // { host: 'localhost', port: 5432, user: 'usuario', pass: '123456' }

fs.readdir(__dirname, (err, files) => {
    console.log('Conteúdo da pasta...') // Conteúdo da pasta...
    console.log(files) // [ 'file.json', 'readFile.js' ]
})
