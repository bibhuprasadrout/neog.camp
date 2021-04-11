let readlineSync = require('readline-sync')
let userName = readlineSync.question('Enter your name:')
// console.log(`Welcome ${userName}`)
console.log('Welcome' + ' ' + userName)