require('dotenv').config();
const { transporter } = require('./utils/mailer');

async function sendTest() {
  try {
    let info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to:   process.env.EMAIL_USER,          // send to yourself
      subject: 'Nodemailer Test Email',
      text:    'If you see this, email works!',
    });
    console.log('Test email sent:', info.response);
  } catch (err) {
    console.error('Test email failed:', err);
  }
}

sendTest();
