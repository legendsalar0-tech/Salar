export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">Privacy Policy</h1>
          <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em]">Last updated: May 2024</p>
        </div>

        <div className="space-y-8 text-slate-600 font-bold">
          <section className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 border-l-4 border-green-500 pl-4 uppercase">Information Collection</h2>
            <p className="leading-relaxed">
              Trendify PK takes your privacy seriously. Hum sirf wahi information collect karte hain jo order process karne ke liye zaroori hai, jese aapka Naam, Address, aur Phone Number.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 border-l-4 border-green-500 pl-4 uppercase">How we use your data</h2>
            <p className="leading-relaxed">
              Aapka data sirf delivery partners ke saath share kiya jata hai taake aapka order safe aur time par aap tak pohanch sake. Hum aapka data kisi aur third-party ko nahi baichte.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 border-l-4 border-green-500 pl-4 uppercase">Order Security</h2>
            <p className="leading-relaxed">
              Trendify PK uses secure servers and the latest encryption to protect your order details. Your shopping experience with us is 100% private and protected.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 border-l-4 border-green-500 pl-4 uppercase">Marketing</h2>
            <p className="leading-relaxed">
              We may occasionally send you SMS alerts for new trending products or sales. Agar aap ye receive nahi karna chahte, to aap kabhi bhi humein unsubscribe karne ka bol sakte hain.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
