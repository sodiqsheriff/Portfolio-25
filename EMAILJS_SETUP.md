# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to Email Services in your dashboard
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Connect your Gmail account (sodiqsheriff9@gmail.com)
5. Your service ID should be: `blaze_official`

## Step 3: Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Set Template ID as: `template_contact`
4. Use this template content:

**Subject:** New Portfolio Contact from {{user_name}}

**Content:**
\`\`\`
Hello Sheriff,

You have received a new message from your portfolio website:

Name: {{user_name}}
Email: {{user_email}}
Message: {{message}}

Sent from: {{user_email}}
Date: {{sent_date}}

Best regards,
Your Portfolio Contact Form
\`\`\`

## Step 4: Get Your Public Key
1. Go to Account > General
2. Copy your Public Key
3. Replace "your_public_key" in the Contact component

## Step 5: Update Contact Component
Replace these values in the Contact component:
- Service ID: `blaze_official` ✅ (already set)
- Template ID: `template_contact`
- Public Key: Your actual public key from EmailJS

## Step 6: Test the Form
1. Fill out the contact form on your portfolio
2. Check your email (sodiqsheriff9@gmail.com)
3. Verify you receive the message

## EmailJS Limits (Free Plan)
- 200 emails per month
- EmailJS branding in emails
- Basic templates

## Pro Tips
1. Set up email filters in Gmail for portfolio messages
2. Create an auto-reply template in EmailJS
3. Monitor your monthly usage in the EmailJS dashboard
4. Consider upgrading for higher limits and custom branding

## Troubleshooting
- Check browser console for errors
- Verify all IDs match exactly
- Ensure Gmail service is properly connected
- Test with a simple message first
\`\`\`

Let's also create a simple EmailJS initialization file:
