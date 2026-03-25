# Radiance Med Spa Website

A bespoke, high-conversion, static website for Radiance Med Spa, a premier medical aesthetics provider in Houston, TX.

## 📋 Overview

This website is built for **lead generation** and brand authority. It features a clean, luxury aesthetic that balances clinical professionalism with an inviting atmosphere. It is optimized for mobile, fast loading, and accessibility (WCAG 2.1 AA).

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (Utility-first)
- **Language**: TypeScript (Strict Mode)
- **Deployment**: Static Site Export (`output: "export"`)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Montserrat, Open Sans, Playfair Display)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository** (or download the files)
2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

This project uses **Static Site Export**. You must build and then export the site to generate the `out` folder.


npm run build
npm run start
# OR
yarn build && yarn start

The static files will be generated in the `out` directory, ready for deployment to Cloudflare Pages, Netlify, or any static host.

## 📁 Project Structure


radiancemedspa/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts       # Backend logic for forms
│   │   ├── globals.css            # Global styles and utilities
│   │   ├── layout.tsx             # Root layout (fonts, providers)
│   │   ├── page.tsx               # Homepage
│   │   ├── services/              # Services page
│   │   ├── about/                 # About page
│   │   ├── gallery/               # Gallery page
│   │   ├── book/                  # Booking page
│   │   ├── specials/              # Specials page
│   │   └── contact/               # Contact page
│   ├── components/
│   │   ├── ui/                    # Reusable UI components (Button, Input, Modal)
│   │   ├── Navbar.tsx             # Sticky navigation
│   │   ├── Footer.tsx             # Multi-column footer
│   │   ├── Container.tsx          # Section wrapper
│   │   ├── HeroSection.tsx        # Hero components
│   │   ├── ServicesGrid.tsx       # Service cards
│   │   └── ...
│   ├── config/
│   │   └── images.ts              # CENTRAL IMAGE CONFIGURATION
│   ├── lib/
│   │   └── utils.ts               # Utility functions (cn, validation)
│   └── types/
├── next.config.js                 # Next.js configuration (Static Export)
├── tailwind.config.ts             # Tailwind configuration
├── package.json
├── tsconfig.json
└── README.md

## 🖼️ Image Customization

**EVERY image** on the website is controlled from a single file: `src/config/images.ts`.

### How to Change an Image

1.  Open `src/config/images.ts`.
2.  Locate the specific slot you want to change (e.g., `"hero"`, `"about"`, `"service-1"`).
3.  Replace the `src` URL with your own image URL.
    *   **Format**: `https://your-image-host.com/path/to/image.jpg`
    *   **Dimensions**: Recommended 1200px width, landscape (16:9) for best results.
4.  Update the `alt` text to describe the new image.
5.  Update the `width` and `height` properties if the new image is significantly different.
6.  Save the file. The image will update on **all pages** that use that slot automatically.

### Image Slots

*   `hero`: Homepage hero banner.
*   `hero-alt`: Fallback or alternate hero images.
*   `about`: About page or section hero.
*   `service-1`, `service-2`, `service-3`: Service cards on Home and Services pages.
*   `gallery-1`, `gallery-2`, `gallery-3`: Gallery images.
*   `team-1`: Team member photos.
*   `cta`: CTA banner background.
*   `testimonial-bg`: Testimonials section background.

## 🎨 Brand Customization

### Colors

Colors are defined in `tailwind.config.ts` under the `theme.extend.colors` section.

*   `primary`: #A45A9D (Brand/Medical aesthetic color)
*   `secondary`: #F4D03F (Highlights/Golds)
*   `accent`: #D35400 (Call-to-actions/Alerts)

To change a color, modify the hex code in the config file.

### Fonts

Fonts are configured in `src/app/layout.tsx`.

*   `font-heading`: 'Montserrat' (Used for H1-H6).
*   `font-body`: 'Open Sans' (Used for body text).
*   `font-accent`: 'Playfair Display' (Used for emphasis/quotes).

### Logo

The logo is currently rendered as a text-based logo for reliability in this static export. To add an image logo:

1.  Add an entry to `src/config/images.ts` named `"logo"`.
2.  Update `src/components/Navbar.tsx` to import the logo image and render it in place of the text.

## 📧 Environment Variables

No environment variables are required for this static build, as API calls are simulated for demonstration purposes. However, if you wish to enable email sending (e.g., using Resend), create a `.env.local` file:


# For Email Service (e.g., Resend)
RESEND_API_KEY=your_api_key_here

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1.  Connect your repository to Cloudflare Pages.
2.  In the build settings, set the **Build Command** to: `npm run build`
3.  Set the **Output Directory** to: `out`
4.  Click **Deploy**.

### Netlify

1.  Push your code to GitHub.
2.  In Netlify, drag and drop the project folder.
3.  Set Build Command: `npm run build`
4.  Set Publish directory: `out`

## ✅ Checklist Before Launch

- [ ] Review all content in `src/app/**/page.tsx` and update with real business info.
- [ ] Check all images in `src/config/images.ts` are high-quality and optimized.
- [ ] Verify all contact forms route to a real email destination (currently logs to console).
- [ ] Test on mobile, tablet, and desktop.
- [ ] Check accessibility (contrast, ARIA labels, form labels).
- [ ] Verify SEO metadata on every page.
- [ ] Set up Google Analytics and Google Search Console.

## 📄 License

Copyright © 2024 Radiance Med Spa. All rights reserved.