import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Star, Truck, ShieldCheck, Headphones, ArrowLeft, ShoppingBag, CheckCircle2, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ProductPageProps {
  onAddToCart: (p: Product) => void;
}

export default function ProductPage({ onAddToCart }: ProductPageProps) {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (product) setSelectedImage(product.image);
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/" className="text-green-600 font-bold underline">Go back home</Link>
      </div>
    );
  }

  const discount = product.compareAtPrice 
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100) 
    : 0;

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-green-600 transition-colors font-bold text-xs uppercase tracking-widest group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Shop
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl"
            >
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {[product.image, ...Array(3).fill(0).map((_, i) => `https://picsum.photos/seed/${product.id + i}/800/800`)].map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={cn(
                    "aspect-square rounded-2xl overflow-hidden border-2 transition-all",
                    selectedImage === img ? "border-green-500 scale-95 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex gap-2">
                <span className="bg-green-50 text-green-600 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  In Stock
                </span>
                {product.isTrending && (
                  <span className="bg-blue-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Trending 🔥
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("w-4 h-4 fill-current", i < 4 ? "text-yellow-400" : "text-slate-200")} />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest border-l pl-4 border-slate-100">
                  {product.reviews.length} Verified Reviews
                </span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-black text-slate-900">Rs. {product.price}</span>
                {product.compareAtPrice && (
                  <>
                    <span className="text-2xl font-bold text-slate-300 line-through">Rs. {product.compareAtPrice}</span>
                    <span className="text-red-500 font-black text-xl">Save {discount}%</span>
                  </>
                )}
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed font-bold">
              {product.description}
            </p>

            <div className="space-y-4 pt-6 border-t border-slate-100">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Why Pay COD?</h4>
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-100">
                <ShieldCheck className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-sm font-black text-slate-900">100% Secure Cash on Delivery</p>
                  <p className="text-xs font-bold text-slate-600">No payment upfront. Pay when you receive.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Key Features</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-black text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button 
                onClick={() => onAddToCart(product)}
                className="flex-grow flex items-center justify-center gap-3 bg-slate-900 text-white font-black py-5 rounded-[2rem] hover:bg-green-600 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-200 uppercase tracking-widest text-sm"
                id="add-to-cart-page-btn"
              >
                <ShoppingBag className="w-6 h-6" />
                Order via COD
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-12 border-t border-slate-100">
              <div className="text-center space-y-2">
                <Truck className="w-6 h-6 mx-auto text-green-600" />
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Fast PK Delivery</p>
              </div>
              <div className="text-center space-y-2">
                <ShieldCheck className="w-6 h-6 mx-auto text-green-600" />
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Best Quality</p>
              </div>
              <div className="text-center space-y-2">
                <Zap className="w-6 h-6 mx-auto text-green-600" />
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">COD Available</p>
              </div>
            </div>

            <div className="p-6 bg-orange-50 border border-orange-100 rounded-3xl flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-black text-orange-800 uppercase tracking-widest">Hurry! Limited stock</p>
                <p className="text-sm font-medium text-orange-700">12 people are viewing this right now!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
