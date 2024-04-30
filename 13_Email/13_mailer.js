// seding mail is asycn operation
// 1. install nodemailer lib using terminal -> npm i nodemailer

const nodemailer = require("nodemailer");

// config email and send it.

async function sendMail() {

    // 1 . carete an email transport -> use to send mail to email server
    // SMTP (Simple Mail Transfer Protocall)

    const transporter = nodemailer.createTransport({

        service: 'gmail',   // third party mail SMPT server/service
        auth: {
            user: "santuku67@gmail.com",
            pass: "kvwsivbkclshliit"
        }
    })

    // Config email content

    const mailOptions = {
        from: "santuku67@gmail.com",
        to: "santukumar13102000@gmail.com",
        subject: "welcome to Node Js App",
        text: " this is mail using nodemailer in nodejs "
    }

    // send the mails
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log("email has sent succesfully");
    } catch (error) {
        console.log("something went wrong" + error);
    }
}

sendMail(); 