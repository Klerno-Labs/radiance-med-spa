# Radiance Med Spa Website

## Project Description
This project is a bespoke, high-performance static website for Radiance Med Spa, a premier provider of medical aesthetic treatments. The website is designed to reflect the clinic's premium, clinical, yet warm brand identity, focusing on lead generation by showcasing services, trust indicators, and providing a frictionless booking experience.

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/radiance-med-spa.git
   cd radiance-med-spa
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the development server:

npm run dev

Open your browser and navigate to `http://localhost:3000`.

### Build
To build the project for production:

npm run build

### Deploy
To deploy the project, follow the instructions in the DEPLOYMENT_GUIDE.md file.

## Project Structure Overview

src/
├── app/
│   ├── api/
│   ├── about/
│   ├── booking/
│   ├── contact/
│   ├── gallery/
│   ├── home/
│   ├── specials/
│   └── services/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ...
├── config/
│   └── images.ts
├── lib/
│   └── utils.ts
└── styles/
    └── globals.css

## Image Customization
To change any image on the site:
1. Open `src/config/images.ts`.
2. Locate the image slot you want to change (e.g., "hero", "about", "service-1").
3. Replace the `src` URL with your new image URL.
4. Update the `alt` text to describe the new image.
5. Save the file — every component on the site updates automatically.

## Brand Customization
### Changing Colors
Modify the colors in `tailwind.config.js` under the `theme.extend.colors` section.

### Changing Fonts
Update the font family in `src/app/layout.tsx` to use your desired Google Font.

### Changing Logo
If a logo slot exists, update the logo URL in `src/config/images.ts`.

## Environment Variables Needed
- `NEXT_PUBLIC_API_URL`: The base URL for your API.

## Deployment Instructions
Follow the instructions in the DEPLOYMENT_GUIDE.md file for deploying to Cloudflare Pages.