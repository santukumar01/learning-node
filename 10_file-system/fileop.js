//importing fs module

const fs = require("fs");

console.log("this is stating");

//to read file content using vlocking code

// const buffer = fs.readFileSync('./data.txt');
// returing buffer beacuse of diffrance between seding and receving data . buffer is temp memory
// console.log(buffer);  // printing buffer 
// console.log(buffer.toString());  // printing actual value

// const encoded_data = fs.readFileSync('data.txt', { encoding: "utf-8" });
// console.log(encoded_data);

//creating and writing cintent inside the file using block code.

//write file syn function can give you some time error because of permission by os so put it isndie the try catch block.
// if file exist then it will overwrite the content
// try {
//     fs.writeFileSync("./writeFile.txt", "name : santu");
// } catch (error) {
//     console.log("an error occured in creating file")
// }

//append the content in exiwsting file or craeting a file with  the given copntent

// fs.appendFileSync('writeFile.txt', "\nName : sanu");

//deleting a file by blocking code

// if file name is not found then we get error
try {
    fs.unlinkSync('writeFile.txt')
} catch (error) {
    console.log("File dost not found");
}


console.log("this is last")