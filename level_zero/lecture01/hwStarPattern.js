let readlineSync = require('readline-sync')
let starCount = readlineSync.question('Enter the star limit:')
let triStar = function(starCount){
    for(let count = 1; count <= starCount; count++){
        console.log('*'.repeat(count))
    }
}

triStar(starCount)

// for(let stars = 1; stars <= count; stars++){} temporarily 
// having issue solving the problem using double for loops
// the recurring stars are not printing horizontally but rather vcertically.