const user={
    username:"hitesh",
    price : 999,

    welcomeText :function(){
        //yha "this " jo h vo current context ko refer karta h
        console.log(`hello ${this.username}, welcome to the site`);
    }
}

user.welcomeText();// ye jo h current value  ke lia kaam karta h
user.username="shivang" //humne yha username ki value  change kardia 
user.welcomeText() //to abb yha username ki value shivang h aur vo shivang print karega
//output : of the above commands
// hello hitesh, welcome to the site
// hello shivang, welcome to the site

//when we print 'this' here it will show empty object becuase no  object is defined globally here so it is unable to take context for the same


//+++++++++++++++++++++++++ Arrow function +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const chai=function(){
//     username ="shivang "
//     console.log(this.username); 
//     //output : undefined
// }
// chai()

//Decalaring of a function using arrow function
const chai=() => {  //here  => is the arrow fun'c
    username ="shivang "
    console.log(this.username); 
    //output : undefined    : again 
}
// chai()


//basic arrow fun'c
// const addTwo=(nums1,nums2) => {
//     return nums1+ nums2
// }
// console.log(addTwo(3,7)); //output :10

//Implicit arrow fun'c
 //const addTwo=(nums1,nums2) => nums1+nums2
 //console.log(addTwo(3,7)); //output :10

 //for object returning
 const addTwo=(nums1,nums2) => ({username: "mohit"})
 console.log(addTwo(3,4));