//importing using ES6  

//why using ES6

// 1. readilhblty
// 2. optoimizeing code useing tree shaking (remove all usused import make it lightweight)

// impoting all expotable tags form math.mjs file . 
// import * as math from './math.mjs'
// console.log(math.sum(33, 4));
// math.age = 80;  Cannot assign to read only property 'age' of object '[object Module]'
// console.log(math.age);

// imporinng specal tags
//name should match
import { sum } from "./math.mjs";
console.log(sum(33, 4));



