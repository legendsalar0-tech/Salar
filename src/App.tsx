import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsOfService from './pages/TermsOfService';
import CartDrawer from './components/shop/CartDrawer';
import { CartItem, Product } from './types';
import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO } from './constants';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
        <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductPage onAddToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>

        <Footer />
        
        {/* Floating Support Actions */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Whatsapp Support
            </span>
          </a>
          <a 
            href={`tel:${CONTACT_INFO.phone}`}
            className="md:hidden p-4 bg-slate-900 text-white rounded-full shadow-2xl hover:bg-slate-800 transition-all hover:scale-110 active:scale-95 group"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>

        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </Router>
  );
}
