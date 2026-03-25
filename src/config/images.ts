export const images = {
  // Homepage hero banner — the first image visitors see
  "hero": {
    src: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Luxurious spa treatment room",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback)
  "hero-alt": {
    src: "https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Professional facial treatment",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage
  "about": {
    src: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Elegant spa interior with calming atmosphere",
    width: 1200,
    height: 800,
  },

  // First service card image
  "service-1": {
    src: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Professional skincare treatment application",
    width: 1200,
    height: 800,
  },

  // Second service card image
  "service-2": {
    src: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Relaxing spa environment",
    width: 1200,
    height: 800,
  },

  // Third service card image
  "service-3": {
    src: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Modern aesthetic clinic interior",
    width: 1200,
    height: 800,
  },

  // Gallery image 1
  "gallery-1": {
    src: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Spa products and essential oils arrangement",
    width: 1200,
    height: 800,
  },

  // Gallery image 2
  "gallery-2": {
    src: "https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Relaxing spa treatment scene",
    width: 1200,
    height: 800,
  },

  // Team member photo
  "team-1": {
    src: "https://images.pexels.com/photos/5069612/pexels-photo-5069612.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Professional aesthetician portrait",
    width: 1200,
    height: 800,
  },

  // Gallery image 3
  "gallery-3": {
    src: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Premium skincare products lineup",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background
  "cta": {
    src: "https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Serene spa reception area",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration
  "testimonial-bg": {
    src: "https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    alt: "Wellness and beauty treatment detail",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;