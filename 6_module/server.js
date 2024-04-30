//call math.js and use its fuction

//imorting  math module

//one thing about require is while calling math.js it is also excuting the math.js file
const math = require('./math');
//second time dint excute the math.js file just used chace memory which was filled with first excution of math.js in progra,mm file
// const math = require('./math');

//call the function

// const res = math.add(10, 30);

const divres = math.div(80, 2);

console.table([divres]);