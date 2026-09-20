const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://samplevirtualdesign.vercel.app",
    methods: ["GET", "POST"],
  })
);

app.get("/", (req, res) => {
  res.send("Email server is running");
});

app.post("/contact", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    console.log("Received data:", {
      name,
      phone,
      email,
      message,
    });

    if (!name || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: "Name, phone and email are required",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New visitor for Parthiban website",

      html: `
        <h2>New Contact Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>WhatsApp Number:</strong> ${phone}</p>

        <p><strong>Message:</strong> ${message || "No message"}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("EMAIL ERROR:");
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error sending email",
      error: error.message,
    });
  }
});

module.exports = app;