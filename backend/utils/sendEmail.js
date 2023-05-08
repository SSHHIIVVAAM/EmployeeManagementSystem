const nodemailer = require("nodemailer");

const sendEmail = async (subject,message,send_to,sent_from,reply_to) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_ADMIN,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    // options for sending email
    const options ={
        from: sent_from,
        to : send_to,
        replyTo: reply_to,
        subject: subject,
        html: message,
    }

    //  send email
    transporter.sendMail(options, function (err,info) {
        if (err) {
            console.log(err)
        }
        console.log(info)
    })
};

module.exports = sendEmail;