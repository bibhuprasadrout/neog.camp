let readlineSync = require('readline-sync')
let score = 0

let kbc = function(question, answer){
    let userAnswer = readlineSync.question(question)
    if(userAnswer === answer){
        score++
    }
}

kbc('1 + 1 is:', '2')
kbc('3 - 1 is:', '2')
kbc('2 + 2 is:', '4')

console.log(`your have got ${score} right answers`)