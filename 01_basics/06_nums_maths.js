const score = 400
const balance = new Number(100.)
console.log(balance)//outputs   //number:100
console.log(score)//400
//method 
console.log(balance.toString().length)

//[fixed]
const abc = 100.101
console.log(abc.toFixed(2))

//[precison]
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))

//[locale String ]
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

Number.MAX_VALUE

//---------------------MATHS---------------------

//POWERFUL LIBRARY
console.log(Math);
console.log(Maths.abs(-4));//absolute value 
console.log(Math.round(4.2))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.7))
console.log(Math.min(4,3,5,6))
console.log(Math.max(4,3,6,7))
console.log(Math.random())//any random value between 0 and 1
console.log(Math.random()*10)
console.log((Math.random()*10)+1)


const min = 10
const max = 20 

console.log(Math.floor(Math.random()* (max - min +1)+min))
