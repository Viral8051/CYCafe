// server.js
require('dotenv').config(); // Load environment variables
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS
const app = express();
const port = 3001; // Change to 3001

app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

// Route to handle form submission
app.post('/contact-send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Date and Time of submission
  const currentDate = new Date().toLocaleString();

  // Nodemailer Transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Use your email service here (Gmail, Yahoo, etc.)
    auth: {
      user: process.env.EMAIL_USER,  // Your email address from .env
      pass: process.env.EMAIL_PASS,   // Your app password from .env
    },
  });

  // Email Template
  const contactmailOptions = {
    from: email,  // Sender's email address
    to: 'ridzzvir@gmail.com',  // Recipient's email address
    subject: `Message from ${name}: ${subject}`,
    html: `
      <h3>You have a new contact form submission!</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Date Submitted:</strong> ${currentDate}</p>
    `,
  };

  // Send email
  transporter.sendMail(contactmailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error sending email', error });
      
    }
    res.status(200).send({ message: 'Email sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
