import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.password
    },
  });


  export async function emailNotification(recipientEmail, subject, message) {
    const mailOptions = {
      from: 'sanjay@novasync.com',
      to: recipientEmail,
      subject,
      text: message,
    };
  
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(`Email sent to ${recipientEmail}: ${info.messageId}`);
    } catch (error) {
      console.error(`Error sending email to ${recipientEmail}: ${error}`);
    }
  }
  