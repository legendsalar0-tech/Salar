import { Truck, ShieldCheck, Headphones, Repeat } from 'lucide-react';
import { motion } from 'motion/react';

export default function Features() {
  const features = [
    {
      icon: Truck,
      title: 'Fast PK Delivery',
      desc: 'Quick delivery across all cities in Pakistan',
      color: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: ShieldCheck,
      title: 'Premium Quality',
      desc: 'Hand-picked trending gadgets only',
      color: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Headphones,
      title: 'Easy Support',
      desc: 'Whatsapp or call support anytime',
      color: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Repeat,
      title: 'Cash on Delivery',
      desc: 'Pay only when you receive your order',
      color: 'bg-green-50',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-3xl group hover:bg-slate-50 transition-colors cursor-default border border-transparent hover:border-slate-100"
            >
              <div className={`${f.color} p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
                <f.icon className={`w-8 h-8 ${f.iconColor}`} />
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-slate-900 tracking-tight">{f.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-tight">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
