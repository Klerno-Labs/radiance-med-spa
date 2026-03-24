# Client Handoff for Radiance Med Spa Website

## What Was Built
We have created a comprehensive website for Radiance Med Spa, featuring the following pages:

### Home
- A split-screen hero section showcasing your services.
- A grid of services with detailed descriptions.
- Trust indicators and testimonials to build credibility.
- A call-to-action banner encouraging bookings.

### Services
- A category grid displaying all available services.
- Detailed service cards with pricing information.
- Integrated "Book Now" functionality for easy appointment scheduling.

### About
- Team bios presented in an alternating layout.
- A mission statement that reflects your clinic's values.

### Gallery
- An interactive Before/After image slider to showcase results.

### Book Now
- A step-by-step booking wizard with real-time form validation.

### Specials
- A promotional offer grid to highlight current deals.

### Contact
- An integrated map for location visibility.
- A HIPAA-compliant contact form for inquiries.

## Changing Images
All images are controlled from ONE file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site. 

To swap an image:
1. Open `src/config/images.ts`.
2. Locate the desired image slot.
3. Replace the `src` URL with your new image URL.
4. Update the `alt` text to describe the new image.
5. Save the file — the change will appear on every page that uses that image.

## Changing Logo
If a logo slot exists, update the logo URL in `src/config/images.ts` following the same steps as above.

## Changing Colors
To modify the brand colors, edit the `tailwind.config.js` file under the `theme.extend.colors` section.

## Changing Fonts
To swap the Google Font used in the site, update the font family in `src/app/layout.tsx`.

## Updating Text Content
To update text content, locate the respective page files in the `src/app/` directory and make your edits.

## Requesting Changes
For any additional changes or updates, please reach out to Pegrio support.

## Hosting and Maintenance Info
Your website is hosted on Cloudflare Pages, which provides automatic deployments from your GitHub repository. Ensure to keep your repository updated for any changes.

## Contact
For support, please contact Pegrio at support@pegrio.com.