let readlineSync = require('readline-sync')
let userName = readlineSync.question('Enter your name:')
let printCount = readlineSync.question('Enter number of copy:')
let myName = function(printCount){
    for(let count = 0; count < printCount; count++){
        console.log(`${count+1}.${userName}`)
    }
}

myName(printCount)