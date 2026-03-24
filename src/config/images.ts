// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — the first image visitors see [cogview]
  "hero": {
    src: "https://mfile.z.ai/1774368232436-ff51f58548fd4d648064a76b46c74440.png?ufileattname=202603250003432087531ef1be42f1_watermark.png",
    alt: "A modern med spa waiting area with a sleek reception desk and potted plants",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback) [cogview]
  "hero-alt": {
    src: "https://mfile.z.ai/1774368231261-1d5a008fbe6f44e8b729071348c84815.png?ufileattname=20260325000344697d6ca94b5c4bb1_watermark.png",
    alt: "A close-up of a woman's face receiving a gentle facial massage",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage [cogview]
  "about": {
    src: "https://mfile.z.ai/1774368231991-f2be17b6516846498329f9f687b160c2.png?ufileattname=20260325000344bc89cac665024163_watermark.png",
    alt: "A professional female doctor consulting with a patient in a modern office",
    width: 1200,
    height: 800,
  },

  // First service card image [cogview]
  "service-1": {
    src: "https://mfile.z.ai/1774368240314-e1f4b92fbb3e445ab792e7f1f72e93e7.png?ufileattname=2026032500035235349d5bc5f7487c_watermark.png",
    alt: "A medical aesthetician using a laser device on a client",
    width: 1200,
    height: 800,
  },

  // Second service card image [cogview]
  "service-2": {
    src: "https://mfile.z.ai/1774368240143-222dc45854da474faf9b43739c81d287.png?ufileattname=2026032500035281cebc6b4c0f46ed_watermark.png",
    alt: "Sterile medical syringes and needles on a clean metal table",
    width: 1200,
    height: 800,
  },

  // Third service card image [cogview]
  "service-3": {
    src: "https://mfile.z.ai/1774368241441-314f69b9af9c4447a432d1ef5a8f722b.png?ufileattname=202603250003521ab372ffb86a49cb_watermark.png",
    alt: "A woman relaxing on a comfortable facial bed with a sheet",
    width: 1200,
    height: 800,
  },

  // Gallery image 1 [cogview]
  "gallery-1": {
    src: "https://mfile.z.ai/1774368249243-01afdd2d6b5245b18eac175462a24c86.png?ufileattname=20260325000401dff5de9ac22d48c3_watermark.png",
    alt: "A close-up of a woman's flawless glowing skin texture",
    width: 1200,
    height: 800,
  },

  // Gallery image 2 [cogview]
  "gallery-2": {
    src: "https://mfile.z.ai/1774368249096-9ac26d4ccc144247b618394c90137950.png?ufileattname=202603250004019694ea0c905f479c_watermark.png",
    alt: "A row of high-end glass skincare bottles on a wooden shelf",
    width: 1200,
    height: 800,
  },

  // Gallery image 3 [cogview]
  "gallery-3": {
    src: "https://mfile.z.ai/1774368249188-d76325cd6f884a48ba45fbe5611dabc2.png?ufileattname=20260325000401372ab898a66242ee_watermark.png",
    alt: "A marble floor with geometric patterns in a medical spa hallway",
    width: 1200,
    height: 800,
  },

  // Gallery image 4 [cogview]
  "gallery-4": {
    src: "https://mfile.z.ai/1774368257093-b8713b51a20a4db682ef628ca4c081c3.png?ufileattname=20260325000409de327e4b5931497b_watermark.png",
    alt: "A large potted plant in a minimalist room with large windows",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background [cogview]
  "cta": {
    src: "https://mfile.z.ai/1774368256672-fac9f35ffd6041968477c0850cda7d21.png?ufileattname=2026032500040951b6b393e37244a8_watermark.png",
    alt: "A woman smiling confidently in front of a modern mirror",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration [cogview]
  "testimonial-bg": {
    src: "https://mfile.z.ai/1774368256545-f983974d2590478182fdb887191f9c60.png?ufileattname=20260325000409c77d7ab1e0ab47e5_watermark.png",
    alt: "Soft gradient background in calming colors suitable for text overlay",
    width: 1200,
    height: 800,
  },

  // Team member photo [cogview]
  "team-1": {
    src: "https://mfile.z.ai/1774368264756-f9538165667a472d80888add72ec970a.png?ufileattname=20260325000417623f0cf6813449e2_watermark.png",
    alt: "A smiling aesthetician in a medical uniform",
    width: 1200,
    height: 800,
  },

  // Product photo 1 [cogview]
  "product-1": {
    src: "https://mfile.z.ai/1774368264914-f9575244c4c04bcdb37e60ec2ce7af4a.png?ufileattname=20260325000417d9d1bfcfb1114c59_watermark.png",
    alt: "A close-up of a luxury serum bottle on a marble surface",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;