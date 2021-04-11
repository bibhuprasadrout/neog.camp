let readlinesync = require('readline-sync')
let grocessaryList = []
let grocessaryListLength = readlinesync.question('Number of items you wish to purchace:')
for(let count=0; count<grocessaryListLength; count++){
    grocessaryList[count]=readlinesync.question('Enter item:')
}

console.log(grocessaryList[0])
console.log(grocessaryList[2])
console.log(grocessaryList[grocessaryListLength-1])