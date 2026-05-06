import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-black tracking-tighter text-white uppercase">
              TRENDIFY<span className="text-green-500">PK</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              Pakistan's leading store for trending gadgets and smart electronics. 
              Quality items delivered right to your doorstep with Cash on Delivery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/" className="hover:text-green-500 transition-colors">Home</Link></li>
              <li><Link to="/#shop" className="hover:text-green-500 transition-colors">Shop All</Link></li>
              <li><Link to="/about" className="hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Store Policies</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/privacy" className="hover:text-green-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:text-green-500 transition-colors">Refund & Return Policy</Link></li>
              <li><Link to="/terms" className="hover:text-green-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Customer Support</h4>
            <div className="space-y-4 text-sm font-bold">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-500" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-slate-500 space-y-4 md:space-y-0 uppercase tracking-widest">
          <p>© {currentYear} TRENDIFY PK. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <span className="text-green-500">💵 CASH ON DELIVERY ONLY</span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span>SHIPPING ALL OVER PAKISTAN 🇵🇰</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
