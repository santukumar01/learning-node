
// addres bar in   can only allow you to send POST request

const http = require('http');

const PORT = 3100;

// http.createServer(requestListener)

const server = http.createServer((req, res) => {

    if (req.method === 'POST') {
        console.log(req.body);
        let body = "";
        req.on("data", (chunks) => {  //data event means server is expecting data chuks (this is how server knows chuks is availabe to get)
            body += chunks.toString();
        })

        req.on('end', () => {  // end indicates that data have finsied
            console.log(body);
            res.end('Data is recevierd');
        })
    }
    else {
        console.log("function end Here");
        res.end("Welcome to the coding Ninja server");
    }
})

server.listen(PORT, () => {
    console.log(`server is runnning on ${PORT}`);
})
