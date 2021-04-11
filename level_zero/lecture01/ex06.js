let readlineSync = require('readline-sync')
let classStrength = readlineSync.question('Enter class strength:')
let score = 0
for(let scoreCount = 0 ; 
    scoreCount < classStrength;
    scoreCount++){
        let studentAge = readlineSync.question('Enter age:')
        if(studentAge >= 18){
            score = score + 1
        }
    }
console.log(`${score} students out of ${classStrength} are eligible to take the driving test.`)