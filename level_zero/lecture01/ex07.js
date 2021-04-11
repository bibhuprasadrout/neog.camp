let readlinesync = require('readline-sync')
let itemOneCost = readlinesync.question('Enter item cost:')
let itemTwoCost = readlinesync.question('Enter item cost:')
let add = function(costOne,costTwo){
    let sum = +itemOneCost + +itemTwoCost
    return sum
}

let billTotal = add(+itemOneCost,+itemTwoCost)
console.log(`You need to ${billTotal} amount.`)


// ----------------OR-------------------

let itemOneprice = Number(readlinesync.question('Enter item price:'))
let itemTwoprice = Number(readlinesync.question('Enter item price:'))
let addition = function(priceOne,priceTwo){
    let sum = itemOneprice + itemTwoprice
    return sum
}

let billTotalAmount = addition(itemOneprice,itemTwoprice)
console.log(`You need to ${billTotalAmount} amount.`)