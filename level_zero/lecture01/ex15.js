let superHeroFanTest 
let q1 = {
    question:'Who is Batman? ',
    answer:'bruce waine '
}
let q2 = {
    question:'Who is Superman? ',
    answer:'clak kent '
}
let q3 = {
    question:'batmans superpower is... ',
    answer:'money '
}
let q4 = {
    question:'supermans superpower is: ',
    answer:'superpower...haha...super everything '
}
let q5 = {
    question:'batman protects the city of: ',
    answer:'gotham '
}
let q6 = {
    question:'superman protects the city of: ',
    answer:'metropolis '
}
let q7 = {
    question:'number of batman girlfriends: ',
    answer:'unknown '
}
let q8 = {
    question:'superman protects: ',
    answer:'loise lane '
}
let q9 = {
    question:'batmans mom is: ',
    answer:'martha '
}
let q10 = {
    question:'supermans mom is: ',
    answer:'martha '
}
let q11 = {
    question:'Batman is: ',
    answer:'worlds greatest detective '
}
let q12 = {
    question:'supermans is: ',
    answer:'a jounalist '
}

superHeroFanTest = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12]

let readlinesync = require('readline-sync')
let answerRight = 0


function test(qNumber, index, superHeroFanTest){
    let userAnswer = readlinesync.question(superHeroFanTest[index].question)
    if(userAnswer===superHeroFanTest[index].answer){
        answerRight += 1
    }
}
superHeroFanTest.forEach(test)
console.log('       ')

if(answerRight<12){
    console.log(`you got ${answerRight} right answer...go read more comics.`)
    console.log('       ')
    let answerKey = []
    
    function answer(qNumber, index, superHeroFanTest){
        answerKey[index] = superHeroFanTest[index].answer
    }
    superHeroFanTest.forEach(answer)
    
    
    function listAnswer(qNumber, index, superHeroFanTest){
        console.log(index+1 + '.' + answerKey[index])
    }
    console.log('The answers to the above questions are')
    superHeroFanTest.forEach(listAnswer)
    console.log('       ')
}else{
    console.log(`you got ${answerRight} right answer...My Man!!!`)
    console.log('       ')
}


