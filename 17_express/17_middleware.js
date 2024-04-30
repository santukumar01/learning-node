const express = require("express");

const PORT = 3200;

//creating server
const app = express();

//creating routing 
// request handler === resuqst litner === (req , res , next)->{}

// app.get('/',
//     (req, res, next) => {
//         // console.log("this is first middleware")
//         res.writable("this is from firts");
//         next();
//     },
//     (req, res) => {
//         res.send("this is from last ")
//     }
// )



//in below section order matter
// in below only first print and error in console
//in below to sending response that is invalid 
app.get('/', (req, res, next) => {
    res.send("this is from first middleware");
    next();
})


app.get('/', (req, res) => {
    res.send("this is from secondt middleware");
})


// listing the server

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
})