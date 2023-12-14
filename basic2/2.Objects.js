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
//  obj.func= function(){
//     console.log("hum yha function ka  use kar rhe h ");
//  }
//  obj.fun= function(){
//     console.log(`hum yha function ka  use kar rhe h, ${this.name} `);
//  }
// console.log(obj.fun());



//+++++++++++++++++++++++++++++++++++++++++++++++++++ OBJECT-2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//constructor -> singleton
//const tinder=new Object()

const tinder={}

tinder.id=1
tinder.name="Shivang Pandey"
tinder.isLogged=false

//console.log(tinder);
//output: { id: 1, name: 'Shivang Pandey', isLogged: false }


//nested object
const obc={
   email:"shiva@gmail.som",
   first:{
        firstname:"Shivang",
        lastname:"Pandey"
   },
   message:"nested loop"
}
// console.log(obc);
//output:
// {
//    email: 'shiva@gmail.som',
//    first: { firstname: 'Shivang', lastname: 'Pandey' },
//    message: 'nested loop'
//  }

// loop ke andar ke values ko direct access karne e lia
  // console.log(obc.first.firstname);

//merging the two object
const obj1={1:"asd",2:"ert"}
const obj2={3:"qwe",4:"qsc"}

//const obj3={obj1,obj2} //this will give same issue as the push operation in array

//console.log(obj3);
//output : { obj1: { '1': 'asd', '2': 'ert' }, obj2: { '3': 'qwe', '4': 'qsc' } }

// const obj3= Object.assign(obj1,obj2)
// console.log(obj3); //{ '1': 'asd', '2': 'ert', '3': 'qwe', '4': 'qsc' }

//spread  operator ->Widely and Mostly used
// const obj3={...obj1,...obj2}
// console.log(obj3);
//output :{ '1': 'asd', '2': 'ert', '3': 'qwe', '4': 'qsc' }

//printing/using the keys of the object
// console.log(Object.keys(tinder)); //will be in the form of array
// console.log(Object.values(tinder));  //same for the values
// //to avoid error it is better to ask the object whether iit contains the required properties
// console.log(tinder.hasOwnProperty('isLogged')); //will return a boolean ans

//DESTRUCTION
const eg={
   course:"js in Hindi",
   price:99,
   coach:"Hitesh"
}
//new way of acessing object attributes
 const {coach : sir}=eg //another way of calling the attributes by giving shortname
 console.log(sir);


 //apna kaam dusre ke sir pe daal dena ->API yhi 