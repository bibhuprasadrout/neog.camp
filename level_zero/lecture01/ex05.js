let readlineSync = require('readline-sync')
let userName = readlineSync.question('Enter your name:')
let userAge = readlineSync.question('Enter your age:')

if( userAge >= 25){
    console.log('You are of the right age')
}else{
    console.log('your are of the wrong age')
}