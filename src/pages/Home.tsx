import { motion } from 'motion/react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Reviews from '../components/home/Reviews';
import ProductCard from '../components/shop/ProductCard';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';

interface HomeProps {
  onAddToCart: (p: Product) => void;
}

export default function Home({ onAddToCart }: HomeProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const trendingProducts = PRODUCTS.filter(p => p.isTrending);

  return (
    <div>
      <Hero />
      <Features />

      {/* Featured/Trending Products */}
      <section id="shop" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-[10px] font-black text-green-600 uppercase tracking-[0.4em]">Curated Collection</p>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">TRENDING NOW</h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-center md:text-right">
            Hand-picked gadgets that are taking the internet by storm. Quality guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Category Promo */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative bg-slate-100 rounded-[3rem] overflow-hidden aspect-[16/9] md:aspect-auto">
            <img 
              src="https://picsum.photos/seed/smartgadgets/1000/600" 
              alt="Smart Gadgets" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end p-12">
              <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">SMART GADGETS</h3>
              <a href="#shop" className="text-white font-bold flex items-center gap-2 group/btn">
                Shop Collection <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="group relative bg-slate-100 rounded-[3rem] overflow-hidden aspect-[16/9] md:aspect-auto">
            <img 
              src="https://picsum.photos/seed/mobileaccess/1000/600" 
              alt="Mobile Accessories" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end p-12">
              <h3 className="text-4xl font-black text-white mb-4 tracking-tighter text-right md:text-left">MOBILE ACCS</h3>
              <a href="#shop" className="text-white font-bold flex items-center gap-2 group/btn justify-end md:justify-start">
                Shop Collection <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Reviews />

      {/* Newsletter */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(#00C853_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="bg-green-500/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-green-500/20">
            <Mail className="w-10 h-10 text-green-500" />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase italic">TRENDS IN YOUR INBOX</h2>
            <p className="text-slate-400 text-lg font-bold">Sales alerts, new arrivals aur exclusive deals ke liye subscribe karein.</p>
          </div>

          {!isSubscribed ? (
            <form 
              onSubmit={(e) => { e.preventDefault(); setIsSubscribed(true); }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input 
                type="email" 
                required
                placeholder="Aapka Email address..." 
                className="flex-grow bg-slate-800 border-none text-white rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all font-bold placeholder:text-slate-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-green-500 hover:bg-green-600 text-slate-900 font-black px-8 py-4 rounded-2xl transition-all shadow-xl shadow-green-500/20 active:scale-95 whitespace-nowrap uppercase tracking-widest text-xs">
                Subscribe Now
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-green-500 font-black text-xl uppercase tracking-tighter"
            >
              🎉 Shukriya! Welcome to Trendify PK Club.
            </motion.div>
          )}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
             <p className="text-slate-500 text-[10px] uppercase tracking-widest font-black flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
               Free Delivery Rs. 2000+
             </p>
             <p className="text-slate-500 text-[10px] uppercase tracking-widest font-black flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
               100% Secure COD
             </p>
             <p className="text-slate-500 text-[10px] uppercase tracking-widest font-black flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
               Verified Products 🇵🇰
             </p>
          </div>
        </div>
      </section>
    </div>
  );
}
