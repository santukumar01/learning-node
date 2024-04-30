// why using path module -> to make cross platform
// in diffent os path of directrty might be differently written so use path module to prevent this

const { error } = require('console');
const fs = require('fs');
const path = require('path');

const pathfind = path.join('home', 'read.txt');

//on different platfoprm the below line gives difrent output.
console.log(pathfind);
// fs.readFile(pathfind, (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log(data.toString());
//     }

// })


//using ansolute path
const resolvePath = path.resolve('home', 'read.txt');

console.log(resolvePath);

fs.readFile(resolvePath, (error, data) => {
    if (error) {
        console.log("File not found");
    }
    else {
        console.log(data.toString());
    }
})

//find extension of a file
// extaname(filePath)
console.log(path.extname(resolvePath));