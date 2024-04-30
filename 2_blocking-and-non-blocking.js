//javascript is a single therad lang
//single thred -> it can handle one task at a time in

//blocking code 
// for (let i = 0; i < 1000000000; i++) {
//     // some task is happening
// }
// console.log("i have to wait for upper function to finish");


//converting blocking code to non blocking code
// setTimeout(function callback , time in minisec)
// functution call back -> a function which is passed as argument to antother function

setTimeout(() => {
    console.log("printing inside setTimeout");
}, 10000000);

console.log("i have to wait for upper function to finish");



