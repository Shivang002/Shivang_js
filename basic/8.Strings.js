// we use old way of stings such as
const str="Hitesh"
const mid= 2
// console.log(str+ mid +".26");
// this is old method of string concatenation


//Modern way
//by using "String Interpulation"
//be will be using backtick for the same

//console.log(`the name is ${str} and the mid value is ${mid} of the above`);

//this the modern way where ${attribute_name} is used for using the var/const


//Properties of String are:
const repo=new String("Shivang.res.yes.pes") // this is the way of declaring string in an object form

// here this the string in terms of object declaration
//few methods of string properties are

// console.log(repo[0]); // here string is as an array
// console.log(repo.length); //used for finding the length of string
// console.log(repo.toUpperCase()); // changing the string into uppercase

//experiment
// console.log(str[0]); // ye method normal string decelartion me bhi kaam karta h
// console.log(str.length);
// console.log(str.toUpperCase());


console.log(repo.charAt(3));
console.log(repo.indexOf('v'));

//substring method( start,end) -> end-1 index tak ke values print karega
console.log(repo.substring(0,5));

// slice method -> isme hum -ve value bhi dete h taki ppiche se print karwa sake
console.log(repo.slice(-8,4));
console.log(repo.slice(-6,4));

//trim -> unwanted spaces remove karta h
const wer="    shiva     "
console.log(wer.trim());

//string can be used for checking/questioning
//includes
console.log(repo.includes("Shivang"));

// split method
console.log(repo.split('.'));

//