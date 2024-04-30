const nodemailer = require("nodemailer");

async function sendMail() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "santuku67@gmail.com",
            pass: "kvwsivbkclshliit" // Use your App Password if two-factor authentication is enabled
        }
    });

    const mailOptions = {
        from: "santuku67@gmail.com",
        to: "santukumar13102000@gmail.com",
        subject: "Welcome to Node.js App",
        text: "This is an email using nodemailer in Node.js."
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        console.log("Email has been sent successfully");
    } catch (error) {
        console.log("Something went wrong: " + error);
    }
}

sendMail();
