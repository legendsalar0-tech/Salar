import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { Product } from '../../types';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const discount = product.compareAtPrice 
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100) 
    : 0;

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {discount > 0 && (
          <span className="bg-red-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
            {discount}% OFF
          </span>
        )}
        {product.isTrending && (
          <span className="bg-blue-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
            Trending 🔥
          </span>
        )}
        {product.isLimited && (
          <span className="bg-orange-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider animate-pulse">
            🔥 Limited Stock
          </span>
        )}
        <span className="bg-slate-900 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
          💵 Cash on Delivery
        </span>
      </div>

      <button className="absolute top-4 right-4 z-10 p-2.5 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white transition-all shadow-sm">
        <Heart className="w-4 h-4" />
      </button>

      {/* Image Container */}
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[4/3] overflow-hidden bg-slate-50 relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          
          {/* Quick Action Overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <button 
              onClick={(e) => {
                e.preventDefault();
                onAddToCart(product);
              }}
              className="flex-grow flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-bold text-xs hover:bg-green-600 transition-colors shadow-lg"
              id={`add-to-cart-${product.id}`}
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
            <Link 
              to={`/product/${product.id}`}
              className="p-3 bg-white text-slate-900 rounded-xl hover:bg-slate-50 transition-colors shadow-lg"
            >
              <Eye className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="space-y-1">
          <p className="text-[10px] font-black text-green-600 uppercase tracking-[0.2em]">
            {product.category}
          </p>
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-green-600 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={cn(
                  "w-3 h-3 fill-current",
                  i < 4 ? "text-yellow-400" : "text-slate-200"
                )} 
              />
            ))}
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            (12 viewing)
          </span>
        </div>

        <div className="flex items-baseline gap-2 pt-1 border-t border-slate-50 mt-1">
          <span className="text-xl font-black text-slate-900">Rs. {product.price}</span>
          {product.compareAtPrice && (
            <span className="text-sm font-medium text-slate-400 line-through">
              Rs. {product.compareAtPrice}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
