// express is made on the top of node js
// express is not a core module of node js we need to install this. 
const ex = require('express');

const PORT = 3100;

//creating a server -> invoking a function
const app = ex();
// n summary, ex is a variable that holds the functionality of the Express.js framework. When you call ex(), you are creating an instance of an Express application, which you can then use to define routes, middleware, and other settings for your web server.

//handling request

app.get('/', (req, res) => {
    // res.send() IS a wrpper function on res.end() (which means it internally calls the res.end())
    // res.send() end the cycle but also add more property header , len , type of content that we are sending 
    res.send('Welcome to the exprees server');
})


//lisgin the server
// non - bloking code
// below callback is excuted just after server start listing

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})

// for runuing node file_name