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

// This code will print all the questions
let superHeroFanTest 
let q1 = {
    question:'Who is Batman?',
    answer:'bruce waine'
}
let q2 = {
    question:'Who is Superman?',
    answer:'clak kent'
}
let q3 = {
    question:'batmans superpower is...',
    answer:'money'
}
let q4 = {
    question:'supermans superpower is:',
    answer:'superpower...haha...super everything'
}
let q5 = {
    question:'batman protects the city of:',
    answer:'gotham'
}
let q6 = {
    question:'superman protects the city of:',
    answer:'metropolis'
}
let q7 = {
    question:'number of batman girlfriends:',
    answer:'unknown'
}
let q8 = {
    question:'superman protects:',
    answer:'loise lane'
}
let q9 = {
    question:'batmans mom is:',
    answer:'martha'
}
let q10 = {
    question:'supermans mom is:',
    answer:'martha'
}
let q11 = {
    question:'Batman is:',
    answer:'worlds greatest detective'
}
let q12 = {
    question:'supermans is:',
    answer:'a jounalist'
}

superHeroFanTest = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12]

for(let count = 0; count < superHeroFanTest.length; count++){
    console.log(superHeroFanTest[count].question)
}
// ------------------------------------or-------------------------------------------

let superHeroFanExam = [
    q1 = {
        question:'Who is Batman?',
        answer:'bruce waine'
    },
    q2 = {
        question:'Who is Superman?',
        answer:'clak kent'
    },
    q3 = {
        question:'batmans superpower is...',
        answer:'money'
    },
    q4 = {
        question:'supermans superpower is:',
        answer:'superpower...haha...super everything'
    },
    q5 = {
        question:'batman protects the city of:',
        answer:'gotham'
    },
    q6 = {
        question:'superman protects the city of:',
        answer:'metropolis'
    },
    q7 = {
        question:'number of batman girlfriends:',
        answer:'unknown'
    },
    q8 = {
        question:'superman protects:',
        answer:'loise lane'
    },
    q9 = {
        question:'batmans mom is:',
        answer:'martha'
    },
    q10 = {
        question:'supermans mom is:',
        answer:'martha'
    },
    q11 = {
        question:'Batman is:',
        answer:'worlds greatest detective'
    },
    q12 = {
        question:'supermans is:',
        answer:'a jounalist'
    }
]

// observe the answers for each console - this is for self referance.
for(let count = 0; count < superHeroFanExam.length; count++){
    `${console.log(Object.values(superHeroFanExam[count])[0])}${console.log(Object.values(superHeroFanExam[count])[1])}`
    console.log(superHeroFanTest[count])
    console.log(Object.values(superHeroFanExam[count]))
}