import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Smart RGB LED Strip Lights',
    price: 1499,
    compareAtPrice: 2499,
    description: 'Apne room ko modern look dein RGB LED lights ke sath. Remote aur mobile se control. Perfect for gaming setups and room decoration.',
    features: ['Music Sync', 'Easy Install', 'Bright Colors', 'Mobile App Control'],
    image: 'https://picsum.photos/seed/ledstrip/800/800',
    category: 'Home Decor',
    isTrending: true,
    reviews: [
      { id: 'r1', user: 'Zeeshan Ahmed', rating: 5, comment: 'Bohat zabardast quality hai, delivery bhi fast thi.', date: '2024-05-01' },
    ]
  },
  {
    id: '2',
    name: 'Portable Juicer Blender',
    price: 1999,
    compareAtPrice: 2999,
    description: 'Fresh juice kahin bhi banayein. USB rechargeable aur lightweight design. Built-in battery for multiple uses.',
    features: ['Portable & Lightweight', 'USB Rechargeable', 'Easy to Clean', 'Fast Blending'],
    image: 'https://picsum.photos/seed/blender/800/800',
    category: 'Lifestyle',
    isTrending: true,
    isLimited: true,
    reviews: [
      { id: 'r2', user: 'Sana Khan', rating: 5, comment: 'Very useful product for gym. Highly recommended!', date: '2024-04-28' },
    ]
  },
  {
    id: '3',
    name: 'T500 Ultra Smart Watch',
    price: 3499,
    compareAtPrice: 4999,
    description: 'Calls, fitness tracking aur stylish design ek hi watch me. Connects with all Android and iOS devices.',
    features: ['Heart Rate Monitor', 'Sleep Monitor', 'Waterproof', 'Call Support'],
    image: 'https://picsum.photos/seed/smartwatch/800/800',
    category: 'Gadgets',
    isTrending: true,
    reviews: [
      { id: 'r3', user: 'Hamza Malik', rating: 5, comment: 'Price ke hisab se best watch hai. Display quality achi hai.', date: '2024-05-03' },
    ]
  },
  {
    id: '4',
    name: 'Magnetic Car Phone Holder',
    price: 699,
    compareAtPrice: 1299,
    description: 'Strong magnetic holder for safe driving. Easy stick-on mechanism for dashboard or vents.',
    features: ['360 Rotation', 'Strong Grip', 'Universal Fit', 'Sleek Design'],
    image: 'https://picsum.photos/seed/carholder/800/800',
    category: 'Accessories',
    reviews: [
      { id: 'r4', user: 'Bilal Siddiqui', rating: 4, comment: 'Grip kaafi strong hai even on bumpy roads.', date: '2024-04-15' },
    ]
  },
  {
    id: '5',
    name: 'M10 Wireless Earbuds',
    price: 2499,
    compareAtPrice: 3999,
    description: 'High quality sound aur long battery backup. Charging case doubles as a power bank for your phone.',
    features: ['Noise Reduction', 'Fast Charging', 'Digital Battery Display', 'HIFI Sound'],
    image: 'https://picsum.photos/seed/earbuds/800/800',
    category: 'Gadgets',
    isTrending: true,
    isLimited: true,
    reviews: [
      { id: 'r5', user: 'Usman Ghani', rating: 5, comment: 'Battery backup is amazing. Best for gaming.', date: '2024-05-02' },
    ]
  },
];

export const REVIEWS = [
  { id: '1', user: 'Ahmed Raza', rating: 5, comment: 'Trendify PK se shopping ka experience bohat acha raha. Products bilkul wese hi hain jese pictures me the.', date: 'Kal' },
  { id: '2', user: 'Ayesha Bibi', rating: 5, comment: 'Pakistani stores me sab se behtreen quality aur Fast COD service. 5 stars!', date: '3 din pehle' },
  { id: '3', user: 'Muhammad Umar', rating: 4, comment: 'Juicer blender mangwaya tha, delivery time par hui aur product bhi asli hai.', date: '1 hafta pehle' },
];

export const CONTACT_INFO = {
  phone: '03184394277',
  email: 'support@trendifypk.com',
  address: 'Gulberg III, Lahore, Pakistan',
  whatsapp: '923184394277'
};
