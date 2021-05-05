// here i ahve a set of questions and answers
let qOne = '1 + 1 is :'
let qTwo = '3 - 1 is :'
let qThree = '2 + 2 is :'

//  here i have printed the questions for the user to see
console.log(qOne)
console.log(qTwo)
console.log(qThree)

let score = 0

let readlineSync = require('readline-sync')

//  creating two arrays
let rightAnswers = ['2','2','4']

// checking if the user answers match the right answers 
rightAnswers.forEach(function(answer,index) {
    answer = readlineSync.question('answer:')
    if(answer===rightAnswers[index]){
        score = score + 1
    }
})

console.log(`you have got ${score} right answers`)