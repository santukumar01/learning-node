// redering a html page

// 1 . importing http module

const http = require('http');
const fs = require('fs');
//set PORT
const PORT = 8080;

//creaing a server

const server = http.createServer((req, res) => {
    const data = fs.readFileSync('index.html');
    res.end(data);
})

//listen  server
server.listen(PORT, () => {
    console.log('server is runnnug on :', PORT);
})
