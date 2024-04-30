const http = require('http')

const PORT = 3100;

//res.end -> complete the cycle of req res cycle and res return to server

// req and res both are object
const server = http.createServer((req, res) => {
    res.write("this is from nodejs");
    if (req.url == '/first') {
        return res.end("this is inside first");
        // any thing after res.end() line will give error (writng after end so use return)
        // because function i still excuting algtho res has ended.
        // to prevent this either use retunr keyword or use else
        // with return keyword we ensoure thst function excution also ended.
    }
    res.end("welcome to the codoing ninja server");
})

server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})
