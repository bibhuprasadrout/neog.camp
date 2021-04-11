// make sure to have node js and 
// npm(node pakage manager) installed 
// in the system.

// then install the necessary module.

// npm install readline-sync  

let readlineSync = require('readline-sync')
let userName = readlineSync.question('Enter your name:')
console.log(`hello ${userName}`)