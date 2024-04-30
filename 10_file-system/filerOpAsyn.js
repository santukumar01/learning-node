//non blocking code

const fs = require("fs");

// reading data
// fs.readFile('data.txt', (error, data) => {
//     if (error) {
//         console.log("file not found");
//     }
//     else {
//         // console.log(data);  // output buffer
//         console.log(data.toString());
//     }
// })

//writing file
// fs.writeFile('write.txt', 'Nwe man', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("file is created eith given content");
//     }

// })

//append content 

// fs.appendFile('write.txt', '\nother man', (error) => {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("data have added");
//     }
// })

//delete file

fs.unlink('write.txt', (error) => {
    if (error) {
        console.log("file not found");
    }
    else {
        console.log("file has deleted");
    }
})

console.log("ending code");
