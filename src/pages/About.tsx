import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-white pb-24">
      {/* Hero */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <p className="text-[10px] font-black text-green-600 uppercase tracking-[0.4em]">Trendify PK Story</p>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none uppercase">
              Pakistan's Trending <br />
              Products Store
            </h1>
            <p className="text-slate-500 max-w-xl mx-auto text-lg font-bold">
              We bring the best quality gadgets and daily use items to your doorstep with 100% genuine products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight underline decoration-green-500 decoration-4 underline-offset-8 uppercase">Hamara Maqsad</h2>
              <p className="text-slate-600 leading-relaxed font-bold">
                Trendify PK ka maqsad Pakistan me high-quality aur trending products ko munasib qeemat par faraham karna hai. Hum apne har product ki quality ko check karte hain taake aapka trust barqarar rahe.
              </p>
              <p className="text-slate-600 leading-relaxed font-bold">
                Join our community of over 5,000+ happy shoppers in Pakistan and experience the fastest Cash on Delivery service.
              </p>
            </div>
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/about1/800/800" alt="Team Trendify" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl order-2 md:order-1">
              <img src="https://picsum.photos/seed/about2/800/800" alt="Quality Tech" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight underline decoration-green-500 decoration-4 underline-offset-8 uppercase">Why Choose Us?</h2>
              <p className="text-slate-600 leading-relaxed font-bold">
                Humara focus sirf quality aur customers ki khushi par hota hai. Jab tak aap mutmain nahi honge, humara kaam poora nahi hoga. Hum har order par Fast Delivery aur Easy Support provide karte hain.
              </p>
              <p className="text-slate-600 leading-relaxed font-bold">
                Cash on Delivery (COD) Enabled: Pay only after you receive your box. No hidden charges, just pure shopping bliss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black text-green-500 tracking-tighter">5,000+</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Happy Customers in PK</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black text-green-500 tracking-tighter">100%</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Real Support</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black text-green-500 tracking-tighter">FAST</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Local Delivery</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black text-green-500 tracking-tighter">COD</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Secure Payments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
