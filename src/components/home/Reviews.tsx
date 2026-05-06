import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { REVIEWS } from '../../constants';

export default function Reviews() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-[10px] font-black text-green-600 uppercase tracking-[0.4em]">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">TRUSTED BY THOUSANDS</h2>
          <p className="text-slate-500 max-w-lg mx-auto font-medium">Don't just take our word for it. Hear what our community has to say about NovaCart.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] relative shadow-sm border border-slate-100"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-50" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                ))}
              </div>
              <p className="text-slate-700 italic leading-relaxed mb-8 relative z-10 font-medium">
                "{review.comment}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex-shrink-0 flex items-center justify-center font-black text-slate-400">
                  {review.user.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.user}</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-black">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
