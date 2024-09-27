require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your app password
  },
  debug: true,
  logger: true,
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'ridzzvir@gmail.com', // Change to your recipient email
  subject: 'Test Email',
  text: 'This is a test email sent using Nodemailer!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error occurred:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});