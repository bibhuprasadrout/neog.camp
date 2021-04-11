// here i ahve a set of questions and answers
let qOne = '1 + 1 is :'
let aOne = '2'
let qTwo = '3 - 1 is :'
let aTwo = '1'
let qThree = '2 + 2 is :'
let aThree = '4'

//  here i have printed the questions for the user to see
console.log(qOne)
console.log(qTwo)
console.log(qThree)

let score = 0

let readlineSync = require('readline-sync')

//  creating two arrays
let rightAnswers = ['2','1','4']
let userAnswer = [0,0,0]

// checking if the user answers match the right answers 
userAnswer.forEach(function(answer, index) {
    userAnswer[index] = readlineSync.question('answer:')
    if(userAnswer[index]===rightAnswers[index]){
        score = score + 1
    }
})

console.log(`you have got ${score} right answers`)