// // Batman V Superman
// let Batman = {
//     name:'Bruce waine',
//     occupation:'detective',
//     superPower:'money',
//     city:'Gotham',
//     spouceAndGirlfriends:'unknown number',
//     mothersName:'Martha'
// }
// let Superman = {
//     name:'Clark kent',
//     occupation:'journalist',
//     superPower:'super everything',
//     city:'Metropolis',
//     spouceAndGirlfriends:'Loise lane',
//     mothersName:'Martha'
// }

// This code will ask questions and expect the right answers.

let superHeroFanTest 
let q1 = {
    question:'Who is Batman? ',
    answer:'bruce waine'
}
let q2 = {
    question:'Who is Superman? ',
    answer:'clak kent'
}
let q3 = {
    question:'batmans superpower is... ',
    answer:'money'
}
let q4 = {
    question:'supermans superpower is: ',
    answer:'superpower...haha...super everything'
}
let q5 = {
    question:'batman protects the city of: ',
    answer:'gotham'
}
let q6 = {
    question:'superman protects the city of: ',
    answer:'metropolis'
}
let q7 = {
    question:'number of batman girlfriends: ',
    answer:'unknown'
}
let q8 = {
    question:'superman protects: ',
    answer:'loise lane'
}
let q9 = {
    question:'batmans mom is: ',
    answer:'martha'
}
let q10 = {
    question:'supermans mom is: ',
    answer:'martha'
}
let q11 = {
    question:'Batman is: ',
    answer:'worlds greatest detective'
}
let q12 = {
    question:'supermans is: ',
    answer:'a jounalist'
}

superHeroFanTest = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12]

// 'for' and 'foreach' performing the same task...
// for(let count = 0; count < superHeroFanTest.length; count++){
//     console.log(superHeroFanTest[count].question)
// }
// function question(qNumber, index, superHeroFanTest){
//     console.log(superHeroFanTest[index].question)
// }
// superHeroFanTest.forEach(question)

let readlinesync = require('readline-sync')
let answerRight = 0


function test(qNumber){
    let userAnswer = readlinesync.question(qNumber.question)
    if(userAnswer===qNumber.answer){
        answerRight += 1
    }
}
superHeroFanTest.forEach(test)

if(answerRight<12){
    console.log(`you got ${answerRight} right answer...go read more comics.`)
}else{
    console.log(`you got ${answerRight} right answer...My Man!!!`)
}

