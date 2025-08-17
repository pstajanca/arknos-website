# Contact Form Solutions for Netlify Deployment

The contact form doesn't work on static deployment because it needs a backend to send emails. Here are your options:

## Option 1: Netlify Functions (Recommended)

I've already set up a Netlify Function for you:

### Setup Steps:
1. **Deploy with the function**: The `netlify/functions/contact.js` file is included
2. **Add environment variables** in Netlify dashboard:
   - `SMTP_HOST` = `smtp.gmail.com` (or your email provider)
   - `SMTP_PORT` = `587`
   - `SMTP_USER` = your email address
   - `SMTP_PASS` = your email password or app password

### How it works:
- Contact form automatically uses `/.netlify/functions/contact` in production
- Sends emails via your SMTP provider
- Fully functional with the existing form

## Option 2: Netlify Forms (Simplest)

Replace the current contact form with Netlify's built-in form handling:

### Steps:
1. Add `netlify` attribute to the form
2. Add hidden `form-name` field
3. No backend code needed

### Example form changes needed:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- rest of form fields -->
</form>
```

## Option 3: Third-Party Services

### Formspree:
- Sign up at formspree.io
- Get form endpoint
- Change form action to Formspree URL

### EmailJS:
- Sign up at emailjs.com
- Configure email templates
- Replace form submission logic

## Option 4: mailto Link (Temporary)

For immediate deployment, replace the contact form with a mailto link:

```html
<a href="mailto:info@arknos.tech?subject=Measurement Challenge&body=Hello Arknos Technologies,">
  Contact Us
</a>
```

## Recommended Approach:

**For immediate deployment**: Use Option 1 (Netlify Functions) - it's already configured
**For simplicity**: Use Option 2 (Netlify Forms)
**For advanced features**: Use Option 3 (Third-party services)

## Gmail Setup for SMTP:

If using Gmail for Option 1:
1. Enable 2-factor authentication
2. Generate an "App Password" 
3. Use the app password as `SMTP_PASS`

Your contact form will work perfectly once you add the environment variables!