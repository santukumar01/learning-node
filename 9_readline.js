// how to read / rake input frrom cmd / terminal

// 1. importing readline(a core module of node ) 

const readline = require('readline');

// 2 . config interfce to conncet this application with cmd/ terminal

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 3. taking input from cmd / reading input

//returning an interface 
//callback chain
//clouser -> how innner function var have aces to outer function var
//input and output are string 

interface.question("Enter first number : ", (num1) => {
    interface.question("Enter Second number : ", (num2) => {

        let sum = Number(num1) + Number(num2);

        console.log(sum);

    })
})



