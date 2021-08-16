let readlineSync = require('readline-sync')
let starCount = readlineSync.question('Enter the star limit:')
let starCountAgain = starCount
let starCountInverted = starCount
let triStar = function(starCount){
    for(let count = 1; count <= starCount; count++){
        console.log('*'.repeat(count))
    }
}
let triStarAgain = function(starCountAgain){
    for(let countAgain = 1; countAgain <= starCountAgain; countAgain++){
        let pattern = ''
        for(let countSub = 1; countSub <= countAgain; countSub++){
            pattern = pattern + '*'
        }
        console.log(pattern)
    }
}
let triStarInverted = function(starCountInverted){
    for(let countInverted = starCountInverted; countInverted >= 1; countInverted--){
        let pattern = ''
        for(let countSub = countInverted; countSub >= 1; countSub--){// This line could also be a addition loop and the outpul will still bnot change
            pattern = pattern + '*'
        }
        console.log(pattern)
    }
}
triStar(starCount)
triStarAgain(starCountAgain)
triStarInverted(starCountInverted)