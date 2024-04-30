// http request  type 
const express = require('express');

const PORT = 3200;

//creating a server using express => by invking exprees module
const app = express();


// http header used for sending meta data with requext and response;
app.get('/', (req, res) => {
    res.set('Content-type', 'text/plain');  // setting header
    console.log("get req recievd");
    res.send();
})

app.post('/', (req, res) => {
    res.status(201).send("Post request");  // adding response status code
})

app.put('/', (req, res) => {
    console.log("putt req recievd");
})

app.delete('/', (req, res) => {
    console.log("get req recievd");
})

app.listen(PORT, () => {
    console.log(`server is running on PORT ": ${PORT}`);
})

