const name = "Manvesh "
const repoCount = 50
console.log(name + repoCount)
//another way to represent this is 
console.log(`Hello My Name is ${name} and my Repo Count is ${repoCount}`)

//way to initiate a string 

const nameGame = new String ('hello')
console.log(nameGame)
console.log(nameGame[0])
console.log(nameGame.__proto__)
console.log(nameGame.length)
console.log(nameGame.toUpperCase())
console.log(nameGame.charAt(2))
console.log(nameGame.indexOf('t'))
const newString = nameGame.substring(0,2)//second is not included that is hello from from l
console.log(newString)
const anotherString = nameGame.slice(-8,4)
console.log(anotherString)
 const newStringOne = "   manvesh   "
 console.log(newStringOne.trim());
 const url ="https://hitesh.com/hitesh%20choudhary"
 console.log(url.replace('%20','---------'))
 console.log(url.includes('hitesh'))
 