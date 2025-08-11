const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")
const rateLimit = require("express-rate-limit")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
)
app.use(express.json())

// Rate limiting - prevent spam
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // limit each IP to 3 requests per windowMs
  message: {
    error: "Too many emails sent from this IP, please try again later.",
  },
})

// Create nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail app password
    },
  })
}

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Contact form endpoint
app.post("/api/contact", emailLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required",
      })
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address",
      })
    }

    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({
        success: false,
        error: "Name must be between 2 and 100 characters",
      })
    }

    if (message.length < 10 || message.length > 1000) {
      return res.status(400).json({
        success: false,
        error: "Message must be between 10 and 1000 characters",
      })
    }

    const transporter = createTransporter()

    // Email to you (notification)
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: "sodiqsheriff9@gmail.com",
      subject: `New Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #3B82F6; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0; color: #1976d2; font-size: 14px;">
              <strong>Reply to:</strong> ${email}
            </p>
          </div>
        </div>
      `,
    }

    // Auto-reply email to sender
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Sheriff Sodiq",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible, usually within 24-48 hours.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
            <p style="line-height: 1.6; color: #555; font-style: italic;">"${message}"</p>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul style="line-height: 1.8;">
            <li>Check out my <a href="https://github.com/sodiqsheriff" style="color: #3B82F6;">GitHub</a> for my latest projects</li>
            <li>Connect with me on <a href="https://linkedin.com/in/sodiqsheriff" style="color: #3B82F6;">LinkedIn</a></li>
            <li>View my portfolio projects and case studies</li>
          </ul>
          
          <p>Best regards,<br>
          <strong>Sheriff Sodiq</strong><br>
          <em>MERN Stack Developer & 3D Enthusiast</em></p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e8f5e8; border-radius: 8px; font-size: 14px;">
            <p style="margin: 0; color: #2e7d32;">
              This is an automated response. Please do not reply to this email directly.
            </p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([transporter.sendMail(mailOptionsToYou), transporter.sendMail(mailOptionsToSender)])

    res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    })
  } catch (error) {
    console.error("Email sending error:", error)
    res.status(500).json({
      success: false,
      error: "Failed to send message. Please try again later.",
    })
  }
})

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app
