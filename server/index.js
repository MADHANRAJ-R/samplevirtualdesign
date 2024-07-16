const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(
  cors({
    origin: ["https://samplevirtualdesign.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

//Below are the api routes for the email templates

// Email Templates
const obj = {
  Contact: (name, email, phone, message) => {
    let mailContent = `<p>You got a new visitor for parthiban website.</p>
                     <p>Enquiry: Contact<br /> 
                     
                     Name: ${name} <br />
                     Email: ${email} <br />
                     WhatsApp Number: ${phone}`;

    if (message.trim() !== "") {
      mailContent += `<br /> Message: ${message}`;
    }
    mailContent += `</p>`;
    return mailContent;
  }
};
// Main Service
app.post("/contact", (req, res) => {
    const {name, phone, email, message } = req.body;
    //nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "madhansr1509@gmail.com",
        pass: process.env.PASS,
      },
    });
  
    // Email content
    const mailOptions = {
      from: email,
      to: "madhansr1509@gmail.com",
      subject: "New visitor for parthiban website",
      html: obj.Contact(name, email, phone, message),
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }
    });
  });
  //listen
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
  