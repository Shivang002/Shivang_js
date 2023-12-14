//++++++++++++++++++++++++++++++++++++++++++ ARRAYS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Properties of array
//1.arrays in JS are resizable
//2.it  can contain mix datatype value 
//3.it has 0 indexing at element can be retrived by normal array usage
//4.it uses shallow copy for copying elements(shallow copy that uses references i.e. values are changed in the original array)
 
//Decalaration

// let arr=[1,2,3,4,5,"true",true] ->arrauyu can be decalared like this also

// let arr=[1,2,3,4,5]
// console.log(arr[3]);

const arr1=new Array(1,2,3,4,5,6)  //another way of decalaring array
// console.log(arr1[2])

// //to add an element in array
// arr1.push(7) //thala for the win(comedy)

// console.log(arr1)
//output : [
//     1, 2, 3, 4,
//     5, 6, 7
//   ]

//pop method
// arr1.pop() //to remove the last  element
// console.log(arr1);
//output : [ 1, 2, 3, 4, 5, 6 ]

//unshift operation
//add element in starting

//shift
// remove the first element of the array

//questions -> boolean
//includes()
//indexOf()
  
//JOIN operation
//convert the element of the array in string datatype format
// const newArr=arr1.join()
// console.log(newArr)
//output :  1,2,3,4,5,6


// //imp**:
// //slice vs splice
// //slice -> subarray of particular  size 
// console.log("A",arr1.slice(1,3))//does not  include the last  index(3)
// //output : A [ 2, 3 ]


// //splice -> remove element from the array of the given size and make it a new array
// console.log(arr1.splice(1,3))
// //output :[ 2, 3, 4 ]
// console.log("B",arr1)
// //output : B [ 1, 5, 6 ] the old array left after removing the elments upto that particular size

const arr2=["flash","asd","aws"]
const arr3=["shakti","hanuman","jmd"]

//merging
//push -> this  method is m=not preffered most becoz it just  pushes one array into the another array
//work on existing array
// arr2.push(arr3)
// console.log(arr2);
//output : [ 'flash', 'asd', 'aws', [ 'shakti', 'hanuman', 'jmd' ] ]

//concat method ->it returns a new array
//better way of merging the arrays
// const ans=arr2.concat(arr3)
// console.log(ans);
//output : [ 'flash', 'asd', 'aws', 'shakti', 'hanuman', 'jmd' ]


//spread method -> mainly used by most of developer
//divides each elements of both the array in single entity and merge them to give us the new array
// const  ans=[...arr2,...arr3]
// console.log(ans);
//output : [ 'flash', 'asd', 'aws', 'shakti', 'hanuman', 'jmd' ]

 //flat operation
//  const myn=[1,2,3,[1,23,34],5,6,[7,8,9,[1,2,3,4]]]
//  //this is  a complicated array
//  //here we will use flat operation to make them in proper one array
//  console.log(myn.flat(Infinity)); //()->depth dene hote h but infinity likh denge to vo automatic adjust kar lega
// //output : 
// // [
// //     1, 2, 3, 1, 23, 34,
// //     5, 6, 7, 8,  9,  1,
// //     2, 3, 4
// //   ]

//EXPERIMENT
// console.log(Array.from("Shivang"));
// //output:
// [
//     'S', 'h', 'i',
//     'v', 'a', 'n',
//     'g'
//   ]