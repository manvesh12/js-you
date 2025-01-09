//single momemnt date staryts from i jan 1970 and in milliseconds 


let mydate = new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(typeof mydate )

let mycreatedDate = new Date(2023,0,26)
console.log(mycreatedDate.toDateString)

let mycreatedDate2 = new Date("2023-01-14")
console.log(mycreatedDate2.toLocaleString())


// ------ time Stamps -----
let mytimeStamp =  Date.now()
console.log(mytimeStamp)
console.log(mytimeStamp.getTime)

//how to convert it into time Stamp 
console.log(Math.floor(Date.now()/1000))
// tofind a specific date time month 
let newdate = new Date()
console.log(newdate.getMonth() + 1)


//`${}  `
console.log(newdate.toLocaleString(`default`,{weekday: "long",}))