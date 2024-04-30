const express = require('express');
const PORT = 3100;

const app = express();

app.get('/', (req, res) => {
    return res.send("Welcome to server side");
})

//serving static file
// express.static -> is middlewre to server the statis file
// app.use takes middeleare that ineeds to excute while you req is being procced
// my sttaic files are in public foilder which can be directly accessed directly.
// app.use takes root (folder name as a parameter)

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log("server is running on PORT", PORT);
})