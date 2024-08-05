// Import nodemailer
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'samuelbassey421@gmail.com', 
        pass: '********' 
    }
});

// Define email options
const mailOptions = {
    from: 'samuelbassey421@gmail.com', // sender
    to: 'benstephen2000@gmail.com', // recipient
    subject: 'Test Email from Node.js',
    text: 'Hello! This is a test email sent from Node.js using nodemailer and hey its me stevo.'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
