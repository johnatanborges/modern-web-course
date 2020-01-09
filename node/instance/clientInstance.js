const contA = require('./singleInstance')
const contB = require('./singleInstance')

const contC = require('./newInstance')()
const contD = require('./newInstance')()

contA.inc()
contA.inc()
console.log('contA: ', contA.value, 'contB: ', contB.value) // contA:  3 contB:  3

contC.inc()
contC.inc()
console.log('contC: ', contC.value, 'contD: ', contD.value) // contC:  3 contD:  1
