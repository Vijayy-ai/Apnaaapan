const express = require('express');
const cors = require('cors');
const path = require('path');
const { MongoClient } = require('mongodb');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://apnaaapan_user:apnaaapan_user@cluster0.libx8iw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DATABASE_NAME = process.env.DATABASE_NAME || 'apnapan_contacts';

// Email configuration
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;

// Contact form API endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, question } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phoneNumber || !question) {
      return res.status(400).json({ 
        message: 'All fields are required',
        error: 'MISSING_FIELDS'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Invalid email format',
        error: 'INVALID_EMAIL'
      });
    }

    // Connect to MongoDB Atlas
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection('contact_submissions');

    // Create contact submission document
    const contactData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phoneNumber: phoneNumber.trim(),
      question: question.trim(),
      submittedAt: new Date(),
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    };

    // Save to database
    const result = await collection.insertOne(contactData);
    console.log('Contact form submission saved:', result.insertedId);

    // Send email notification
    if (EMAIL_USER && EMAIL_PASS && RECIPIENT_EMAIL) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS
        }
      });

      const mailOptions = {
        from: EMAIL_USER,
        to: RECIPIENT_EMAIL,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #F26B2A;">New Contact Form Submission</h2>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0D1B2A; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> +91 ${phoneNumber}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
              <h3 style="color: #0D1B2A; margin-top: 0;">Question/Message</h3>
              <p style="line-height: 1.6;">${question.replace(/\n/g, '<br>')}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 8px;">
              <p style="margin: 0; color: #0066cc; font-size: 14px;">
                <strong>Note:</strong> This is an automated email from your website's contact form.
              </p>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: +91 ${phoneNumber}
Submitted: ${new Date().toLocaleString()}

Question/Message:
${question}

---
This is an automated email from your website's contact form.
        `
      };

      await transporter.sendMail(mailOptions);
      console.log('Email notification sent successfully');
    }

    // Close MongoDB connection
    await client.close();

    // Send success response
    res.status(200).json({ 
      message: 'Contact form submitted successfully',
      submissionId: result.insertedId
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Close MongoDB connection in case of error
    try {
      const client = new MongoClient(MONGODB_URI);
      await client.close();
    } catch (closeError) {
      console.error('Error closing MongoDB connection:', closeError);
    }

    res.status(500).json({ 
      message: 'Internal server error. Please try again later.',
      error: 'SERVER_ERROR'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📧 Email notifications: ${EMAIL_USER ? 'Enabled' : 'Disabled'}`);
  console.log(`🗄️  MongoDB: ${MONGODB_URI ? 'Connected' : 'Not configured'}`);
});
