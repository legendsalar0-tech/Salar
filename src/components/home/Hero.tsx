import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative bg-slate-50 overflow-hidden py-12 md:py-24">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-green-700">🚚 FAST DELIVERY ALL OVER PAKISTAN</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter"
            >
              PAKISTAN'S <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">TRENDING</span> <br />
              PRODUCTS STORE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-bold"
            >
              Best Quality | Cash on Delivery | Fastest Delivery. 
              Discover premium gadgets at the best prices in Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href="#shop"
                className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-lg overflow-hidden shadow-2xl shadow-slate-300 transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-tighter"
              >
                <div className="relative z-10 flex items-center gap-2">
                  Shop Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
              <div className="flex items-center gap-4 px-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/${i + 20}/100/100`} 
                      alt="User avatar" 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-left leading-tight">
                  <p className="text-sm font-black text-slate-900">5k+ Polished Orders</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Happy Customers in PK</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/techhero/800/800" 
                alt="Modern Tech Gadgets" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/5" />
            </div>
            
            {/* Minimal overlays for tech feel */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 p-6 bg-white rounded-3xl shadow-xl flex items-center gap-3 border border-slate-100"
            >
              <Zap className="w-6 h-6 text-green-500 fill-green-500/20" />
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Efficiency</p>
                <p className="text-sm font-bold text-slate-900">+40% Faster</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 p-6 bg-white rounded-3xl shadow-xl flex items-center gap-3 border border-slate-100"
            >
              <Shield className="w-6 h-6 text-blue-500 fill-blue-500/20" />
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Security</p>
                <p className="text-sm font-bold text-slate-900">Encrypted Pro X</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
