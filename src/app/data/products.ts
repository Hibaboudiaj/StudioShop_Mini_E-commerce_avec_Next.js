import { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Macbook Air M3",
    slug: "macbook-air-m3",
    price: 6000,
    description:
      "The Apple MacBook Air M3 is a super-portable laptop featuring a powerful 8-core CPU and up to 10-core GPU",
    category: "Laptop",
    image: "/macbook-air-m3.jpg",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    slug: "mechanical-keyboard",
    price: 850,
    description:
      "A premium tactile mechanical keyboard with RGB backlighting, hot-swappable switches, and an aluminum frame for a satisfying typing experience.",
    category: "Accessories",
    image: "/mechanical-keyboard.jpg",
  },
  {
    id: 3,
    name: "Smart Watch Ultra",
    slug: "smart-watch-ultra",
    price: 2500,
    description:
      "The Smart Watch Ultra features an always-on AMOLED display, GPS tracking, heart rate monitoring, and up to 72-hour battery life for active lifestyles.",
    category: "Wearable",
    image: "/smart-watch-ultra.jpg",
  },
  {
    id: 4,
    name: "iPad Pro M4",
    slug: "ipad-pro-m4",
    price: 4500,
    description:
      "The iPad Pro M4 delivers desktop-class performance in an ultra-thin design, featuring a stunning Ultra Retina XDR display and Apple Pencil Pro support.",
    category: "Tablet",
    image: "/ipad-pro-m4.jpg",
  },
  {
    id: 5,
    name: "Wireless Noise-Cancelling Headphones",
    slug: "wireless-noise-cancelling-headphones",
    price: 1200,
    description:
      "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and Hi-Res Audio support for an immersive listening experience.",
    category: "Audio",
    image: "/wireless-headphones.jpg",
  },
  {
    id: 6,
    name: "4K Portable Monitor",
    slug: "4k-portable-monitor",
    price: 1800,
    description:
      "A lightweight 15.6-inch 4K USB-C portable monitor with HDR support, perfect for on-the-go productivity and dual-screen setups.",
    category: "Monitor",
    image: "/4k-portable-monitor.jpg",
  },
];
