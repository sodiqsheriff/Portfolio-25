# Portfolio Backend Setup

## Prerequisites
- Node.js (v14 or higher)
- Gmail account with App Password enabled

## Setup Instructions

### 1. Install Dependencies
\`\`\`bash
cd server
npm install
\`\`\`

### 2. Gmail App Password Setup
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security > App passwords
4. Generate an app password for "Mail"
5. Copy the 16-character password

### 3. Environment Variables
Create a `.env` file in the server directory:
\`\`\`env
PORT=5000
FRONTEND_URL=http://localhost:3000
EMAIL_USER=sodiqsheriff9@gmail.com
EMAIL_PASS=your-16-character-app-password
\`\`\`

### 4. Run the Server
\`\`\`bash
# Development
npm run dev

# Production
npm start
\`\`\`

### 5. Frontend Environment Variable
Add to your Next.js `.env.local`:
\`\`\`env
NEXT_PUBLIC_API_URL=http://localhost:5000
\`\`\`

## Deployment

### Backend (Railway/Heroku/DigitalOcean)
1. Deploy the server folder
2. Set environment variables in your hosting platform
3. Update FRONTEND_URL to your domain

### Frontend
Update NEXT_PUBLIC_API_URL to your backend URL

## Features
- Email validation
- Rate limiting (3 emails per 15 minutes per IP)
- Auto-reply to sender
- HTML formatted emails
- Error handling
- CORS protection

## Testing
Send a test email to verify:
\`\`\`bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
