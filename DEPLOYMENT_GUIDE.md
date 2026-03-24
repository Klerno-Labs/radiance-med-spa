# Deployment Guide for Radiance Med Spa Website

## Step-by-Step Cloudflare Pages Deployment

### 1. Build the Project
First, ensure your project is built for production:

npm run build

### 2. Configure Cloudflare Pages
1. Go to the Cloudflare dashboard and select your account.
2. Click on "Pages" and then "Create a Project".
3. Connect your GitHub repository containing the Radiance Med Spa project.

### 3. Set Build Settings
- **Framework preset:** Select "Next.js".
- **Build command:** `npm run build`
- **Output directory:** `out` (for static export)

### 4. Environment Variables Configuration
Add any required environment variables:
- `NEXT_PUBLIC_API_URL`: Your API base URL.

### 5. Domain Setup
1. In the Cloudflare Pages settings, navigate to the "Custom Domains" section.
2. Add your custom domain and follow the instructions to configure DNS settings.

### 6. Post-Deploy Checklist
- Ensure SSL is enabled for your domain.
- Check for any necessary redirects.
- Set up Google Analytics for tracking.

### 7. Verify Deployment
Visit your deployed site to ensure everything is functioning as expected.