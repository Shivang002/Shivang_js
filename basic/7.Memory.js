// stack memory -> primitive datatypes 
//                 isme copy of the value jati h aur koe changes nhi hota h original me
// example:
let shivang=1

let pandey=shivang
pandey = 2
console.log(pandey)
console.log(shivang)

//heap memory-> non primitve datatypes
//              isme original ka reference pass hota h aur jo changes ek baar bhi  hoga vo sidhe original value me hi hoga
// example:
let userOne={
      email:"shivang@gmail",
      id: 1
}
let userTwo=userOne
userTwo.id=23 // object ke kisse bhi var ko access karne ke lia .(dot) lagate h
console.log(userOne.id);