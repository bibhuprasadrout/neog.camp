let q1 = {
  question:'Who is Batman? ',
  options: ['Bruce Wayne', 'Peater Parker', 'Floyd Lawton'],
  correctOption: 0,
  answer:'Bruce Wayne'
}
let q2 = {
  question:'Who is Superman? ',
  options: ['Tony Stark', 'Lex Luthor', 'Clark Kent'],
  correctOption: 2,
  answer:'Clark Kent'
}
let q3 = {
  question:'batmans superpower is... ',
  options: ['Money', 'Magic', 'Mind Control'],
  correctOption: 0,
  answer:'Money'
}
let q4 = {
  question:'supermans superpower is: ',
  options: ['Super Everything', 'Matter Manipulation', 'Shape Shifting'],
  correctOption: 0,
  answer:'Superpower...haha...Super Everything'
}
let q5 = {
  question:'batman protects the city of: ',
  options: ['Central City', 'Space Sector 2814', 'Gotham'],
  correctOption: 2,
  answer:'Gotham'
}
let q6 = {
  question:'superman protects the city of: ',
  options: ['Themyscira', 'Metropolis', 'New York'],
  correctOption: 1,
  answer:'Metropolis'
}
let q7 = {
  question:'number of batman girlfriends: ',
  options: ['2', '20', 'Unknown'],
  correctOption: 2,
  answer:'Unknown'
}
let q8 = {
  question:'superman protects: ',
  options: ['Iris West', 'Loise Lane', 'Barbara Ann Minerva'],
  correctOption: 1,
  answer:'Loise Lane'
}
let q9 = {
  question:'batmans mom is: ',
  options: ['Martha Wayne', 'Nora Allen', 'Martha Kent'],
  correctOption: 0,
  answer:'Martha'
}
let q10 = {
  question:'supermans mom is: ',
  options: ['Martha Wayne', 'Hippolyta', 'Martha Kent'],
  correctOption: 2,
  answer:'Martha'
}
let q11 = {
  question:'Batman is: ',
  options: ['Worlds Greatest Thief', 'Worlds Greatest Detective', 'Worlds Greatest Superhero'],
  correctOption: 1,
  answer:'Worlds Greatest Detective'
}
let q12 = {
  question:'supermans is: ',
  options: ['A Major Leagues Player', 'A Jounalist', 'A Trucker'],
  correctOption: 1,
  answer:'A Jounalist'
}

let superHeroFanTest = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12]

let readlinesync = require('readline-sync')
let dcFan = readlinesync.question('Enter your name:')
let answerRight = 0

superHeroFanTest.forEach(function test(qNumber){
  let userAnswer = readlinesync.keyInSelect(qNumber.options, qNumber.question)
  if(userAnswer === qNumber.correctOption){
      answerRight++
  }
})
console.log('       ')

if(answerRight<12){
  console.log(`Hi ${dcFan}, you got ${answerRight} right answer...go read more comics.`)
  console.log('       ')
  let question = []
  let answerKey = []
  
  function answer(qNumber,index){
      question[index] = qNumber.question
      answerKey[index] = qNumber.answer
      console.log(index+1 + '.' + question[index])
      console.log(' ' + answerKey[index])
  }
  console.log(`Hi ${dcFan}, The answers to the above questions are`)
  superHeroFanTest.forEach(answer)
  console.log('       ')
}else{
  console.log(`Hi ${dcFan}, you got ${answerRight} right answer...My Man!!!`)
  console.log('       ')
}
