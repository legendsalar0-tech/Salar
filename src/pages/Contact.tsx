import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white pb-24">
      {/* Hero */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-[10px] font-black text-green-600 uppercase tracking-[0.4em]">Rabta Karein</p>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none uppercase">WE'RE HERE TO HELP</h1>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase underline decoration-green-500 decoration-4 underline-offset-8">CONTACT INFORMATION</h2>
              <p className="text-slate-500 font-bold leading-relaxed">
                Koi bhi sawal ho ya order ka status check karna ho, hum se neechay diye gaye tareeqon se rabta kar sakte hain. We respond within 2 hours!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-slate-100 rounded-2xl text-slate-900 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-1 uppercase text-xs tracking-widest">Email Us</h4>
                  <p className="text-slate-500 font-bold">{CONTACT_INFO.email}</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-black tracking-widest">24/7 Support</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-slate-100 rounded-2xl text-slate-900 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-1 uppercase text-xs tracking-widest">Call / Whatsapp</h4>
                  <p className="text-slate-500 font-bold">{CONTACT_INFO.phone}</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-black tracking-widest">Mon-Sun: 10am - 10pm</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-slate-100 rounded-2xl text-slate-900 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-1 uppercase text-xs tracking-widest">Our Store</h4>
                  <p className="text-slate-500 font-bold leading-relaxed lowercase">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200">
            {!submitted ? (
              <form 
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your name" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Phone Number (Required)</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="03XXXXXXXXX" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Message</label>
                  <textarea 
                    required 
                    rows={4}
                    placeholder="Aapka kiya sawal hai?" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all font-bold resize-none"
                  />
                </div>
                <button 
                  className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-green-500 transition-all active:scale-95 shadow-xl shadow-slate-200"
                  id="contact-submit-btn"
                >
                  SEND MESSAGE
                  <Send className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 uppercase">Shukriya!</h3>
                  <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Hum jald hi rabta karenge.</p>
                </div>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-green-600 font-black underline uppercase text-sm"
                >
                  Ek aur message bhejein
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
