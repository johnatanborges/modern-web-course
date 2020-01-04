const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinese = f => f.pais === 'China'
const women = f => f.genero === 'F'
const lowestSalary = (func, currentFunc) => {
    return func.salario < currentFunc.salario ? func : currentFunc
}

axios.get(url).then(response => {
    const employees = response.data

    const func = employees
        .filter(chinese)
        .filter(women)
        .reduce(lowestSalary)

    console.log(func)
})
