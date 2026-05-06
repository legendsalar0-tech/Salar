import { ShoppingCart, Menu, X, Search, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { CONTACT_INFO } from '../../constants';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/#shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
      {/* Top Banner */}
      <div className="bg-slate-900 overflow-hidden py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] md:text-xs font-black text-white tracking-[0.15em] animate-pulse">
            🚚 FREE DELIVERY ALL OVER PAKISTAN | 💵 CASH ON DELIVERY
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
              TRENDIFY<span className="text-green-500">PK</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-bold transition-colors hover:text-green-500",
                  location.pathname === link.path ? "text-green-600" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100">
               <Phone className="w-4 h-4 text-green-600" />
               <span className="text-xs font-black text-slate-900">{CONTACT_INFO.phone}</span>
            </div>
            
            <button 
              onClick={onCartClick}
              className="relative p-2 text-slate-600 hover:text-green-500 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-[10px] font-black leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-xl mb-4">
                <Phone className="w-5 h-5 text-green-600" />
                <span className="font-black text-slate-900">{CONTACT_INFO.phone}</span>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-4 text-base font-bold text-slate-900 border-b border-slate-50 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
