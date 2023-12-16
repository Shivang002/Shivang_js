//Decalaration of the function
//Function funcName(){ executablle statements}
function sayMyName(){
 console.log("s");
 console.log("h");
 console.log("i");
 console.log("v");
 console.log("a");
 console.log("n");
 console.log("g");
}

//sayMyName -> this used for the reference  only 

//sayMyName() //->execution of the function

//ADD Two no.'s
// function add(number1,number2){
//     console.log(number1 + number2);
// }
//add()//->this gives result as "NaN"(not a no. )becoz the noo.'s are undefined
// add(3,4)// 7

// //experiment
// add(3,"a") // 3a

//storing a result
function add(number1,number2){
    let res=(number1 + number2);
    return res;
    //note no operation takes place after the retun statement

}

const ans=add(3,4)
//console.log(ans);

//function ka concept yha pe DSA wle ki tarahh hota h 


 function loggedIn(username){
       return `the user loggedIn is ${username}`
 }
 //console.log(loggedIn("Shivang Pandey"))

///// console.log(loggedIn()) //output : the user loggedIn is undefined
 //jab hum koe value pass nhi karte h function me to "undefined " print hota h ya assign hota h

 //+++++++++++++++++++++++++++++++++++++++++++++++++ part 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 //how to multiple values in the function
 function storePrice(...nums){ // this is called as rest operator ( rest and spread are diff)
    return nums
 }
  console.log(storePrice(100,2000,300,400))  // display item in form of array

  