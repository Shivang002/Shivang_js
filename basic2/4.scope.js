// let a=10
// const b= 20
// var c=30

if(true){
    let a=10
    const b= 20
    var c=30
}
// console.log(a); // ->  this show error beecoz scope od  a is within the if operator only
// console.log(b); //-> same as above 
//after commenting the above we get :
console.log(c);
//output : 30
//this is why we dont use  var
