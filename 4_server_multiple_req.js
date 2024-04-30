const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    //res.write only modify the response but dont end the res but res.end after giving res it also end the res 
    res.write("this is main page\n"); // esacpe char work here 
    if (req.url === '/user') {
        return res.end("This is User page");
    }
    else if (req.url === '/product') {
        return res.end("This is Product Page");
    }
    else {
        return res.end("this is else page");
    }
    //unreachable code after using return keyword
    res.end("this is after end response");  // this line cause error (line after end response) (before using return)
});

server.listen(PORT, () => {
    console.log("server is listen on PORT : 3000");
})