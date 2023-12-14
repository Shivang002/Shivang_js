//date
//the date was counted from 1 january 1970 for the first time 
//decalaration  of the date

let myDate=new Date(); // here they date is declared as the object

// console.log(myDate)                  //2023-12-14T06:12:20.737Z ->output
// console.log(myDate.toString())      //Thu Dec 14 2023 06:12:20 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())  //Thu Dec 14 2023
// console.log(myDate.toLocaleString()) //12/14/2023, 6:16:14 AM

//In js the is decalared from 0.

//to print our known date 
let myCreatedDate= new Date(2024,3,20)
// console.log(myCreatedDate.toDateString())  //Tue Apr 02 2024

// let myCreatedDate= new Date("01-20-2023")
// console.log(myCreatedDate.toLocaleString())  //Tue Apr 02 2024

let example=Date.now();
console.log(Date.now()) //current date from 1 jan 1970
console.log(myCreatedDate.getTime()) 
console.log(Math.floor(myCreatedDate.getTime()/1000))  //for printing the time in seconds
