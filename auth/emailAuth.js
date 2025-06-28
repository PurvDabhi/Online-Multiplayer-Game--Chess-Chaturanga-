const nodemailer = require('nodemailer') ; //nodemailer for email verification 
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
})

module.exports = transporter;