export default function RefundPolicy() {
  return (
    <div className="bg-white min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">Refund & Return Policy</h1>
          <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em]">Last updated: May 2024</p>
        </div>

        <div className="space-y-12 text-slate-600 font-bold">
          <section className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 border-l-4 border-green-500 pl-4 uppercase tracking-tight">7-Day Check Warranty</h2>
            <p className="leading-relaxed">
              At Trendify PK, we offer a 7-day hassle-free return and exchange policy. Agar aapko product pasand nahi aata ya koi masla hai, to aap 7 din ke andar hum se rabta kar sakte hain. Aapka mutmain hona hamari pehli tarjeeh hai.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 border-l-4 border-green-500 pl-4 uppercase tracking-tight">Conditions for Returns</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Product must be in original packaging.</li>
              <li>Product must not be used or damaged by the user.</li>
              <li>All accessories and manuals must be included in the box.</li>
              <li>Return request must be made within 7 days of delivery.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 border-l-4 border-green-500 pl-4 uppercase tracking-tight">How to initiate a return?</h2>
            <p className="leading-relaxed">
              Bas hamare Whatsapp number <span className="text-green-600 font-black">03184394277</span> par message karein aur apne order ki detail (Name, Order ID) share karein. Humara representative aapko 2 hours ke andar guide karega.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 border-l-4 border-green-500 pl-4 uppercase tracking-tight">Refund Process</h2>
            <p className="leading-relaxed">
              Product return receive hone ke 48 hours ke andar hum apka refund process kar dete hain via Easypaisa, JazzCash, or Bank Transfer. Delivery charges are non-refundable unless the product was faulty.
            </p>
          </section>

          <div className="p-8 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
            <p className="text-sm text-center">
              "Humara maqsad business ke saath saath aapka bharosa jeetna hai." - <span className="font-black text-slate-900">Trendify PK Team</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
