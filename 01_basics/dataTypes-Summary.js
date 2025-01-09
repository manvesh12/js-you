// data type is  divided as in the way that how data is stored and how it is categorised

//------- primitive data types 
// 7 types  : all  are call by values 
/*
String 
Number 
Boolean 
Null 
Undefined 
Symbol 
BigInt (used for large values like scientific values )
*/

//-----------Non primitive refernce -----------
/*
Array 
Objects
Functions 
*/
// use n at the end of the integer to convert it to BigInt



//------ARRAYS------
const  Hero = ["hi","hello","may I"]

//------objects-------
 let myobjn = {
name: "hitesh",
age: 22,
}

//-------Functions--------

const myFunction = function(){
    console.log("hello world ")
}

/////type of null is object 
/////type of of object is function




//***********************_______------------------- */

//stack memory(primitive  call by value ),heap memory(non primitive call by refernce )

let myyoutubename="manveshsingh"//linear structure line wise 

let anothername = myyoutubename
anothername = "hello"
console.log(myyoutubename);

console.log(anothername);


let userOne ={
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userOne.email = "may I"
console.log(userOne.email);
console.log(userOne.email);
