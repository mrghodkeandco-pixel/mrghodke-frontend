const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');

dotenv.config();

const products = [
  {
    name: 'Kaju Katli (Premium)',
    slug: 'kaju-katli-premium',
    price: 799,
    category: 'sweets',
    image: 'https://images.unsplash.com/photo-1606312619342-7f3e8b0c8d4e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1',
    description: 'Finest cashew-based mithai, smooth and rich.',
    featured: true
  },
  {
    name: 'Gulab Jamun (Classic)',
    slug: 'gulab-jamun-classic',
    price: 299,
    category: 'sweets',
  image: 'https://images.unsplash.com/photo-1609640721637-4e8c0d2f6c10?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2',
    description: 'Soft, syrupy, and indulgent gulab jamuns.',
    featured: true
  },
  {
    name: 'Masala Chakli',
    slug: 'masala-chakli',
    price: 199,
    category: 'snacks',
  image: 'https://images.unsplash.com/photo-1606851093536-0f7f3d0fb7d3?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3',
    description: 'Crisp, savory chaklis with a hint of spice.',
    featured: false
  },
  {
    name: 'Festive Box - Assorted',
    slug: 'festive-box-assorted',
    price: 1499,
    category: 'festive-boxes',
  image: 'https://images.unsplash.com/photo-1601050690295-7f5d6e2a0e5a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4',
    description: 'Assorted premium sweets presented in a festive box.',
    featured: true
  }
  ,
  {
    name: "Ajoba's Pedha (Keshari Pedha)",
    slug: 'ajobas-pedha-keshri',
    price: 350,
    category: 'sweets',
    image: 'keshari pedha.jpeg',
    description: 'Keshari Pedha — 1/2kg. Soft, aromatic, handcrafted.',
    featured: true
  },
  {
    name: "Ajoba's Big Blessing (Jumbo Keshari Pedha)",
    slug: 'ajobas-big-blessing-jumbo-keshri',
    price: 375,
    category: 'sweets',
    image: 'jumbo keshri pedha.jpeg',
    description: 'Jumbo Keshari Pedha — 1/2kg. Rich, celebratory pedha.',
    featured: true
  },
  {
    name: "Ajoba's Aam Choco Barfi (Diwali Limited Edition - available only in mix mithai)",
    slug: 'ajobas-aam-choco-barfi',
    price: 525,
    category: 'sweets',
    image: 'mango choclate barfi.jpeg',
    description: 'Ajoba\'s Aam Choco Barfi — 1/2kg. Mango and chocolate layered barfi. Diwali limited edition (available in mix mithai).',
    featured: true
  },
  {
    name: 'Anjeer Barfi',
    slug: 'anjeer-barfi',
    price: 525,
    category: 'sweets',
    image: 'anjeer barfi.jpeg',
    description: 'Anjeer Barfi — 1/2kg. Rich fig-flavored barfi.',
    featured: false
  },
  {
    name: 'Gulkand Barfi',
    slug: 'gulkand-barfi',
    price: 525,
    category: 'sweets',
    image: 'gulkand barfi.jpeg',
    description: 'Gulkand Barfi — 1/2kg. Delicate rose-petal preserve flavor.',
    featured: false
  },
  {
    name: 'Pista Barfi',
    slug: 'pista-barfi',
    price: 525,
    category: 'sweets',
    image: 'pista barfi.jpeg',
    description: 'Pista Barfi — 1/2kg. Smooth, pistachio-rich barfi.',
    featured: false
  },
  {
    name: 'Classic Kandhi Pedha',
    slug: 'classic-kandhi-pedha',
    price: 350,
    category: 'sweets',
    image: 'kandhi pedha.jpeg',
    description: 'Classic Kandhi Pedha — 1/2kg. Traditional, handcrafted taste.',
    featured: true
  }
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mrGhodke');
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Seeded products');
  process.exit();
}

seed().catch(err => console.error(err));
