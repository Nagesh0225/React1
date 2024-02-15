const nodemailer = require('nodemailer');

// Create a Nodemailer transporter using SMTP
const transporter = nodemailer.createTransport({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false, 
  auth: {
    user: 'nageshpatidar021999@gmail.com',
    pass: 'Nagesh@1999',
  },
});

// Function to send a password reset email
const sendPasswordResetEmail = (recipientEmail, resetToken) => {
  // Email content
  const mailOptions = {
    from: 'nageshpatidar021999@gmail.com',
    to: recipientEmail,
    subject: 'Password Reset',
    html: `<p>Click the following link to reset your password: <a href="http://your-app/reset-password/${resetToken}">Reset Password</a></p>`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = {
  sendPasswordResetEmail,
};
