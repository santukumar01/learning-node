// 1. importing http module 
const http = require('http');

// createServer(requestListener);
// createServer (function callback)
// return http server objects

//2 . creating a server using createServer module

const server = http.createServer((req, res) => {

    console.log("i am inside createServer");
    res.end("Hi this is ninaj server");
});

//listing the server
// there 

const PORT = 3100;

// server.listen(PORT);

// 3. listing the server on specific PORT for client request
// server.listen excute only one time
//server.listen(PORT , call-back-function)  , // (listinglistener) 
server.listen(PORT, () => {
    console.log(`server is running on http//localhost:${PORT}`)
});
