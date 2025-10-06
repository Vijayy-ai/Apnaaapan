# Contact Form Setup Guide

This guide will help you set up the functional contact form with MongoDB Atlas and email notifications.

## 🚀 Quick Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. MongoDB Atlas Setup

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Sign up for a free account
   - Create a new cluster (free tier is sufficient)

2. **Get Connection String**
   - In your cluster, click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with your database name (e.g., `apnapan_contacts`)

3. **Create Database User**
   - Go to "Database Access" in your Atlas dashboard
   - Add a new database user
   - Note down the username and password

### 3. Email Setup (Gmail Example)

1. **Enable 2-Factor Authentication**
   - Go to your Google Account settings
   - Enable 2-factor authentication

2. **Generate App Password**
   - Go to "Security" → "App passwords"
   - Generate a new app password for "Mail"
   - Copy the 16-character password

### 4. Environment Variables

Create a `.env.local` file in your project root:

```env
# MongoDB Atlas Configuration
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/apnapan_contacts?retryWrites=true&w=majority
DATABASE_NAME=apnapan_contacts

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
RECIPIENT_EMAIL=contact@apnapan.com
```

### 5. Vercel Deployment

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Set Environment Variables in Vercel**
   ```bash
   vercel env add MONGODB_URI
   vercel env add DATABASE_NAME
   vercel env add EMAIL_USER
   vercel env add EMAIL_PASS
   vercel env add RECIPIENT_EMAIL
   ```

3. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

## 🔧 Alternative Email Providers

### Outlook/Hotmail
```javascript
// In api/contact.js, replace the transporter configuration:
const transporter = nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});
```

### Custom SMTP
```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.your-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});
```

## 📧 Email Template Customization

The email template is in `api/contact.js`. You can customize:
- Subject line
- HTML template
- Text template
- Styling and colors

## 🗄️ Database Schema

The contact form data is stored with this structure:
```javascript
{
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  question: String,
  submittedAt: Date,
  ipAddress: String,
  userAgent: String
}
```

## 🧪 Testing

1. **Local Testing**
   ```bash
   npm start
   ```
   - Navigate to `/contact`
   - Fill out and submit the form
   - Check your email and MongoDB Atlas dashboard

2. **Production Testing**
   - Deploy to Vercel
   - Test the live form
   - Verify emails are received

## 🔍 Troubleshooting

### Common Issues:

1. **"Invalid email format" error**
   - Check email validation regex in the API

2. **MongoDB connection failed**
   - Verify connection string
   - Check IP whitelist in Atlas
   - Ensure database user has proper permissions

3. **Email not sending**
   - Verify app password (not regular password)
   - Check 2FA is enabled
   - Try different email provider

4. **CORS errors**
   - Vercel handles CORS automatically for API routes

### Debug Mode:
Add console.log statements in `api/contact.js` to debug issues.

## 📱 Form Features

- ✅ Real-time validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Form reset after successful submission
- ✅ Responsive design
- ✅ Email notifications
- ✅ Database storage
- ✅ Input sanitization

## 🔒 Security Features

- Input validation and sanitization
- Email format validation
- Rate limiting (can be added)
- IP address logging
- User agent logging
- Environment variable protection

## 📊 Monitoring

Check your MongoDB Atlas dashboard to:
- View submitted forms
- Monitor database performance
- Set up alerts

## 🎨 Customization

You can easily customize:
- Form fields (add/remove fields)
- Validation rules
- Email templates
- Success/error messages
- Styling and colors

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Check Vercel function logs
3. Verify environment variables
4. Test MongoDB connection
5. Test email configuration

---

**Note**: Make sure to keep your environment variables secure and never commit them to version control.
