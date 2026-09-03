import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-ink py-28 lg:py-40 border-t border-ink-soft/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <span className="text-[10px] font-body font-semibold tracking-[0.25em] uppercase text-coastal-gold mb-6 block">Ready to Begin?</span>
        <h2 className="text-editorial text-[clamp(2.8rem,6vw,5.5rem)] text-ivory leading-[1.05] tracking-[-0.03em] mb-8 max-w-[800px] mx-auto font-light">
          Let's find your place<br />
          <span className="italic font-normal text-sand">on the Gulf Coast.</span>
        </h2>
        <p className="text-ivory/70 text-lg lg:text-xl font-body max-w-[600px] mx-auto mb-14 leading-relaxed font-light">Whether you're buying your first home, securing a waterfront retreat, or selling a property—I'm here to guide you every step of the way.</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link to="/listings" className="inline-flex items-center gap-2.5 rounded-full bg-coastal-gold text-ink-deep px-8 py-4 text-sm font-body font-semibold tracking-wide hover:bg-ivory transition-colors shadow-xl shadow-black/20">Explore Properties <ArrowRight size={16} strokeWidth={2} /></Link>
          <a href="tel:+17274527336" className="inline-flex items-center gap-2.5 rounded-full bg-ink text-ivory border border-ivory/20 px-8 py-4 text-sm font-body font-medium tracking-wide hover:bg-ivory/10 hover:border-ivory/40 transition-all"><Phone size={16} strokeWidth={1.5} /> (727) 452-7336</a>
        </div>
      </div>
    </section>
  );
}
