# Arknos Technologies Website

A professional landing page for Arknos Technologies, a high-tech startup that develops advanced sensing and monitoring solutions.

## Features

- Modern, responsive design with industrial high-tech aesthetic
- Animated background elements with navy/blue color scheme
- Contact form with email functionality
- Professional company branding and messaging
- Built with React, TypeScript, and Tailwind CSS

## Deployment

### Netlify Deployment

This project is configured for easy deployment on Netlify:

1. **Connect Repository**: Connect your Git repository to Netlify
2. **Build Settings**: Netlify will automatically detect the build settings from `netlify.toml`
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node.js version: 20

3. **Environment Variables** (if using contact form email functionality):
   - `SMTP_HOST` - SMTP server hostname (default: smtp.gmail.com)
   - `SMTP_PORT` - SMTP server port (default: 587)
   - `SMTP_USER` - SMTP username/email
   - `SMTP_PASS` - SMTP password/app password

### Manual Deployment

To build and deploy manually:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The dist/ folder contains the built files ready for deployment
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5000 in your browser
```

## Project Structure

- `client/` - Frontend React application
- `server/` - Backend Express server (for contact form)
- `shared/` - Shared TypeScript schemas
- `attached_assets/` - Logo and image assets

## Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, Node.js
- **Forms**: React Hook Form with Zod validation
- **Email**: Nodemailer
- **Deployment**: Netlify-ready configuration

## Contact

For questions about Arknos Technologies, visit the website contact form or email info@arknos.tech