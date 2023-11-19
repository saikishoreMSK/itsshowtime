// Your server-side Node.js logic goes here
// This code runs on the server and can include Nodemailer

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/book', (req, res) => {
  const { count, selectedCity, selectedPlace, selectedDay, selectedDate, selectedTime, discountedPrice } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'itsshowtimesite@gmail.com',
      pass: 'pawotpmvucmfrdnq'
    }
  });

  let confirmationMessage = `Your ${count} movie ticket(s) at ${selectedCity} (city), ${selectedPlace} (place) on ${selectedDay} ${selectedDate} at ${selectedTime} have been booked for a total of Rs${discountedPrice}.`;

  let mailOptions = {
    from: 'itsshowtimesite@gmail.com',
    to: 'sai163415@gmail.com',
    subject: 'Movie Ticket Booking Confirmation',
    text: confirmationMessage
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});