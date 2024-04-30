//why we need module 
//in front end we can add as many as js file as posible in sigle html file
//but in back end we need to make one file moduie and we export the file in other js file 

function sum(x, y) {
    return x + y;
}

// The reason the div function is not exported when you use module.exports = { add: sum } is that you are overwriting the entire module.exports object with a new object that only contains the add property. As a result, the previously assigned div property is lost.
//div act like property where above is a function 
module.exports.div = (x, y) => {
    return x / y;
}

// converting normal file to module -> creting module

//1. common js
module.exports = { //a object
    add: sum,
}

console.log("printing beacsue of require keyword/ function");

//we can also use only export but  function shuould not have name

// exports = function (x , y)
// {
//     return x+y;
// }