let readlinesync = require('readline-sync')
let grocessaryList = []
let grocessaryListLength = readlinesync.question('Number of items you wish to purchace:')
for(let count=0; count<grocessaryListLength; count++){
    grocessaryList[count]=readlinesync.question('Enter item:')
}
for(let count=0; count<grocessaryListLength; count++){
    console.log(grocessaryList[count])
}
