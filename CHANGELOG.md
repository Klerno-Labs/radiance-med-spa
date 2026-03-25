# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2024-05-20

### Added
- **Full Website Structure**: Home, Services, About, Gallery, Book, Specials, Contact pages.
- **Design System**: Custom Tailwind configuration with brand colors (#A45A9D), typography (Montserrat, Open Sans), and spacing.
- **Components**:
  - `Navbar`: Sticky, responsive, mobile hamburger menu.
  - `Footer`: 4-column layout, social links, contact info.
  - `HeroSection`: Full-screen hero with video/image background support.
  - `ServicesGrid`: Grid of service cards with images and links.
  - `TestimonialsSection`: Carousel-style grid with star ratings.
  - `CTASection`: High-contrast conversion banner.
  - `Modal`: Reusable overlay for lightbox/gallery.
  - `Button`: Multiple variants (Primary, Secondary, Outline, Ghost).
  - `Input`: Floating label-style inputs with validation states.
- **Pages**:
  - `Home`: Hero, Services, Testimonials, CTA.
  - `Services`: Detailed grid with pricing and FAQs.
  - `About`: Mission, Values, Team Bios.
  - `Gallery`: Lightbox-enabled grid.
  - `Book`: Form with validation, loading states, success message.
  - `Specials`: Countdown timers, promotional cards.
  - `Contact`: HIPAA-compliant form logic with honeypot.
- **Configuration**:
  - `images.ts`: Centralized image management using Pexels URLs.
  - `utils.ts`: Helper functions (cn, validation, scroll).
- **API**: `src/app/api/contact/route.ts` for form handling.
- **SEO**: Meta tags on all pages, Open Graph, Schema.org (LocalBusiness).
- **Performance**: Lazy loading, static export optimization, optimized bundle sizes.

### Known Limitations
- **Form Backend**: Forms currently log to console. To send emails, connect an API service (e.g., Resend) to `src/app/api/contact/route.ts`.
- **Image Hosting**: Uses Pexels URLs. For production, host images on S3/Cloudinary to ensure speed and reliability.
- **Calendar Integration**: Book page form is for inquiries. Direct booking requires Calendly integration or similar.
- **Logo**: Text-based logo for static export reliability.