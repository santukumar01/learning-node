const express = require('express');

const PORT = 3200;

const app = express();

// middleware by function

//form javscrpt function name === call back function
function first(req, res, next) {
    console.log("This is first");
    next();
}

function second(req, res, next) {
    console.log("This is second");
    next();
}

function global(req, res, next) {
    console.log("this is global middlewre");
    next();
}
// can list all the function
// app.get('/', first, second, (req, res) => {
//     res.send("This is last middlewrae");
// })

//can use array of function as well
// oreder is imp first is alwys excute before second and then the last call back
// these are route level middleware 
app.get('/send', [first, second], (req, res) => {
    res.send("This is last middlewrae");
})

//this is application- level iddle ware(alweays excute )
app.use(global);

//listing the server/app
app.listen(PORT, () => {
    console.log(`server is runnoig on PORT :${PORT}`);
})