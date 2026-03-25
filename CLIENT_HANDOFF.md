# Client Handoff: Radiance Med Spa

Welcome to your new website! We have built a premium, modern website designed specifically for your medical spa business. This document explains how to manage and update your site.

## What Has Been Built

We have created a complete website with the following features:

### 📄 Pages
1.  **Home**: A beautiful landing page with a video/image hero, an overview of your top services, and client testimonials.
2.  **Services**: A detailed breakdown of everything you offer, including Botox, Laser Hair Removal, and Facials.
3.  **About Us**: Your story, your values, and a bio for you and your team.
4.  **Gallery**: A visual gallery of your treatments and facility.
5.  **Book Now**: A simple, online form for clients to request appointments.
6.  **Specials**: A section to display current promotions with a countdown timer.
7.  **Contact**: A HIPAA-compliant form for general inquiries.

### 🎨 Design
*   **Colors**: A soft purple (`#A45A9D`) that feels clinical yet luxurious, with gold accents.
*   **Fonts**: Clean, professional headings (Montserrat) and easy-to-read body text (Open Sans).
*   **Vibe**: Elegant, trustworthy, and modern.

## How to Update Images

**There is only ONE file you need to edit to change any image on the entire website.**

### The File
Open this file in any code editor (VS Code is recommended):
`src/config/images.ts`

### How to Use It
1.  Look for the comment `// Add your image slot here`.
2.  Replace the URL inside the `src: "..."` quote with your new image URL.
3.  Save the file.
4.  The image will appear instantly on all pages that use that section.

**Supported Images:**
*   Hero Backgrounds
*   Service Images
*   Team Photos
*   Gallery Photos

### Important Tips
*   **Size**: Use images that are at least 1200px wide. This ensures they look good on all screens.
*   **Format**: JPG or PNG is best. If you have WebP, that's even better.
*   **Hosting**: For the best speed, you should host these images on your own server or a service like Cloudinary/Imgix, rather than pasting long URLs directly.

## How to Change Colors

Your colors are defined in one place: `tailwind.config.ts`.

1.  Open `tailwind.config.ts`.
2.  Find the `colors` section.
3.  Change the hex code next to `primary`, `secondary`, or `accent` to your brand colors.
4.  Save. The website will update automatically.

## How to Change Fonts

Your fonts are configured in the root layout file.

1.  Open `src/app/layout.tsx`.
2.  Look for the `inter` or `montserrat` font imports.
3.  Replace the font family names with Google Fonts links if you want to use a different font entirely.

## How to Change Text Content

*   **Page Text**: Go to the specific page file (e.g., `src/app/about/page.tsx`) and edit the text inside the JSX.
*   **Navigation Links**: Edit the `navLinks` array in `src/components/Navbar.tsx`.
*   **Footer Links**: Edit the `footerLinks` array in `src/components/Footer.tsx`.

## How to Update Contact Information

The contact details (Address, Phone, Email) are hardcoded in the `Footer.tsx` component. Simply update the text there.

## How to Add a New Page

1.  Create a new file: `src/app/new-page/page.tsx`.
2.  Copy the structure from `src/app/services/page.tsx`.
3.  Update the metadata (SEO title and description).
4.  Rebuild the site: `npm run build`.

## Who to Contact

If you need any changes to this website:
*   **Direct Support**: [Pegrio Support]
*   **Email**: [Support Email Address]

---

**Thank you for choosing Pegrio for your website build!**

---

### Next Steps for You (as the Client)
1.  Review the code files (especially `src/config/images.ts` and `tailwind.config.ts`).
2.  Choose your preferred images for the slots listed in `images.ts`.
3.  Let us know if you need to tweak any colors or fonts.
4.  We will help you deploy the site to live once you are ready.