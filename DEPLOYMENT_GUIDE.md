# Deployment Guide

This guide will walk you through deploying the Radiance Med Spa website to **Cloudflare Pages** (Static Export).

## Prerequisites
- Node.js installed
- Cloudflare Account
- Git repository (GitHub or GitLab)

## Step 1: Prepare Your Code

1.  Ensure you have run `npm run build` locally and the `out` folder is generated.
2.  Push your code to your Git repository.

## Step 2: Connect to Cloudflare Pages

1.  Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Navigate to **Workers & Pages**.
3.  Click **Create application**.
4.  Select **Pages** -> **Connect to Git**.
5.  Authorize Cloudflare to access your repository.
6.  Select your repository and branch (e.g., `main`).

## Step 3: Configure Build Settings

In the **Configuration** tab for your project:

1.  **Project name**: `radiancemedspa` (or your preference).
2.  **Production Branch**: `main`.
3.  **Framework Preset**: **Next.js** (This is crucial for automatic framework detection, although we are doing a static export).
4.  **Build command**: `npm run build`
5.  **Build output directory**: `out`

*Note: If "Next.js" preset isn't found, use "None" as preset and ensure Build Command is `npm run build` and Output Directory is `out`.*

## Step 4: Set Environment Variables

If you plan to use the contact form email feature later:

1.  Click on **Environment variables**.
2.  Add variable `RESEND_API_KEY` with your value.

## Step 5: Deploy

1.  Click **Save and Deploy**.
2.  Cloudflare will build your site. This may take a few minutes.
3.  Once deployed, you will receive a URL (e.g., `https://radiancemedspa.pages.dev`).

## Step 6: Custom Domain

1.  In the project dashboard, click **Custom domains**.
2.  Enter your domain (e.g., `radiancemedspa.com`).
3.  Follow the DNS setup instructions provided by Cloudflare.
4.  Once DNS points to Cloudflare, your site will be live at your custom domain.

## Post-Deployment Checklist

- [ ] **SSL/HTTPS**: Enabled automatically by Cloudflare.
- [ ] **Analytics**: Install Google Analytics 4 script in `src/app/layout.tsx`.
- [ ] **Forms**: Ensure the `src/app/api/contact/route.ts` is connected to a real email provider.
- [ ] **Testing**: Test the contact form submission on the live site.
- [ ] **SEO**: Verify `sitemap.xml` is accessible via `yourdomain.com/sitemap.xml`.

## Troubleshooting

**Issue**: Build fails with "Static Export is not supported when using dynamic API routes." 
**Solution**: Ensure all API routes use `export const dynamic = 'force-static'` or use `export const dynamic = 'force-static'` in `next.config.js`.

**Issue**: Images are blurry or don't load. 
**Solution**: Check that `next.config.js` has `images: { unoptimized: true }`.

**Issue**: Mobile menu doesn't open. 
**Solution**: Ensure the Navbar component is imported in all pages.