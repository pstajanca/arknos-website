# Deployment Guide for Arknos Technologies Website

## Netlify Deployment (Recommended)

This project is optimized for Netlify deployment with two options:

### Option 1: Static Site Only (Recommended for Demo)
Deploy just the frontend as a static site without the contact form backend.

**Steps:**
1. Connect your Git repository to Netlify
2. Use these build settings:
   - **Build command**: `vite build`
   - **Publish directory**: `dist`
   - **Node version**: 20

The `netlify.toml` file is already configured for this approach.

### Option 2: Full-Stack with Netlify Functions
To enable the contact form email functionality, you'll need to:

1. Convert the Express server to Netlify Functions
2. Set up environment variables for email service
3. Configure SMTP settings

**Environment Variables needed:**
- `SMTP_HOST` (default: smtp.gmail.com)
- `SMTP_PORT` (default: 587)
- `SMTP_USER` (your email)
- `SMTP_PASS` (your email password/app password)

## Manual Export and Deployment

To export the project for deployment elsewhere:

1. **Build the frontend:**
   ```bash
   npm install
   vite build
   ```

2. **Export files:**
   The `dist/` folder contains all static files ready for deployment to any static hosting service.

3. **Deploy to any static host:**
   - Vercel
   - GitHub Pages
   - AWS S3 + CloudFront
   - Any static hosting service

## Project Structure for Deployment

```
dist/                    # Built frontend files
├── index.html          # Main HTML file
├── assets/             # CSS, JS, and image files
│   ├── *.css          # Compiled CSS
│   ├── *.js           # Bundled JavaScript
│   └── *.png          # Logo files
└── ...

server/                 # Backend files (not needed for static deployment)
client/                 # Source frontend files
shared/                 # Shared schemas
```

## Contact Form Functionality

- **Static deployment**: Contact form will show but won't send emails
- **Full deployment**: Requires backend setup or Netlify Functions
- **Alternative**: Replace with mailto link or external form service

## Domain Configuration

After deployment, you can:
1. Use the provided Netlify domain (e.g., `yoursite.netlify.app`)
2. Configure a custom domain through Netlify
3. Set up SSL (automatically handled by Netlify)

## Performance Optimizations

The build includes:
- Minified CSS and JavaScript
- Optimized images
- Proper caching headers (via netlify.toml)
- Security headers

## Troubleshooting

**Build fails**: Check Node.js version (should be 20+)
**Images not loading**: Verify asset paths in the built files
**Routing issues**: Netlify redirects are configured in netlify.toml