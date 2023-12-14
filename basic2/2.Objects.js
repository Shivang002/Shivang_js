//++++++++++++++++++++++++++++++++++++ OBJECTS +++++++++++++++++++++++
//TWO  WAYS OF DECALARING OBJECTS : LITERALS and CONSTRUCTOR
//singleton ->only singlee instaces
//constructors se singletonn banta h
//literals me singleton nhi bnata 

//Literals: Here objects are decalared in key-value pair
//the default datatype of key is STRING

//decalaration of symbol in js
const sym= Symbol("mym1")
//decalaration 
const obj={
    name:"Shivang Pandey",
    [sym]: "hereye", //hare symbol are decalared within the square brackets
    "firstname": "Shivang",
    age: 18 ,
    email:"shivang02.26@gmail.com",
    location :"varanasi"
} 

//how to acesss the object values
//.(dot)method -> not sutaible for string type decalared key eg: "Firstname"
// console.log(obj.name);
// //console.log(obj."firstname");//here it shows error
//  //show that is why we use another method 

//  //[] method
//  console.log(obj["firstname"]);
//  //symbol can also be printed using this method only
//  console.log(typeof obj[sym]);

//changiing the value  of the key
// obj.email="shiv@gmail.com"
// console.log(obj);
//output:
// {
//     name: 'Shivang Pandey',
//     firstname: 'Shivang',
//     age: 18,
//     email: 'shiv@gmail.com',
//     location: 'varanasi',
//     [Symbol(mym1)]: 'hereye'
//   }


//freeze -> stop futher change in the object values
//  Object.freeze(obj)
//  obj.email="shivaaaaa@gmail.com"
//  console.log(obj);
 //output:
//  {
//     name: 'Shivang Pandey',
//     firstname: 'Shivang',
//     age: 18,
//     email: 'shiv@gmail.com', //here  there is no change in email value after frreeze operation
//     location: 'varanasi',
//     [Symbol(mym1)]: 'hereye'
//   }


 //function with objects
 obj.func= function(){
    console.log("hum yha function ka  use kar rhe h ");
 }
 obj.fun= function(){
    console.log(`hum yha function ka  use kar rhe h, ${this.name} `);
 }
console.log(obj.fun());


