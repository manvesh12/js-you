//similar data type comnaprison 
console.log(2>1);
console.log(2>=1);
console.log(2!=1)

//different data type comparsion 

console.log("2" > 1)// here  the string is automatically converted to a integer data type 


console.log(null > 0)//false//similar
console.log(null ==0)//false // here null is converted to NaN      ********// AVOID THESE ALL //******** */
console.log(null >= 0)//true //here null is converted  to zero 

//but for undefined the value is   always false is we try to go for any comparison operator 
//== operator have different  way oif working and where as gretaer than have different way oif checking 


// ===

console.log("2" === 2);
