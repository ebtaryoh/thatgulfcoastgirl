import { Target } from "lucide-react";
import { Link } from "react-router-dom";

const stage = [
  { label: "Prepare", desc: "Property inspection, repairs, and strategic pre-listing improvements." },
  { label: "Position", desc: "Pricing analysis, market comparison, and competitive strategy." },
  { label: "Present", desc: "Virtual staging, professional photography, and curated marketing." },
  { label: "Promote", desc: "Targeted digital campaigns, agent networks, and open house events." },
  { label: "Negotiate", desc: "Strong offer management, inspection navigation, and advocacy." },
  { label: "Close", desc: "Clear transaction guidance from contract to keys." },
];

export default function SellerProgram() {


  return (
    <section id="sell" className="relative bg-ink-deep text-ivory overflow-hidden" aria-label="Seller program">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-ocean-deep/30 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-36 relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <span className="text-[10px] font-body font-semibold tracking-[0.22em] uppercase text-coastal-gold mb-4 block">Sell</span>
            <h2 className="text-editorial text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-[-0.045em] mb-7">
              YOUR HOME DESERVES<br />
              <span className="italic text-coastal-gold/95">A SMARTER STRATEGY.</span>
            </h2>
            <p className="text-ivory/70 font-body text-base lg:text-lg leading-relaxed mb-6">The SMART Seller Program combines market analysis, strategic pricing, presentation, promotion, and expert negotiation — all with direct access to Amanda.</p>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Pricing Strategy", "Market Analysis", "Virtual Staging", "Presentation", "Marketing", "Negotiation", "Direct Communication", "Transaction Guidance"].map((t) => (
                <span key={t} className="rounded-full bg-ivory/10 border border-ivory/15 px-3.5 py-1.5 text-[11px] font-body font-medium text-ivory/80">{t}</span>
              ))}
            </div>

            <Link to="/contact" className="inline-flex items-center gap-2.5 rounded-full bg-coastal-gold text-ink-deep px-8 py-4 text-sm font-body font-semibold tracking-wide hover:bg-ivory transition-colors shadow-lg shadow-coastal-gold/20">
              Start My Smart Seller Journey <Target size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className="bg-ink/60 backdrop-blur-md border border-ivory/10 rounded-3xl p-8 lg:p-10">
            <h3 className="text-editorial text-2xl lg:text-3xl tracking-[-0.02em] mb-10">The Journey</h3>
            <div className="flex flex-col gap-5">
              {stage.map((s, i) => (
                <div key={s.label} className="flex gap-5 items-start group">
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 rounded-full bg-ivory/10 border border-ivory/10 flex items-center justify-center text-editorial text-lg group-hover:bg-coastal-gold group-hover:text-ink-deep group-hover:border-coastal-gold transition-all">{i + 1}</div>
                    {i < stage.length - 1 && <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-5 bg-ivory/15" />}
                  </div>
                  <div>
                    <h4 className="text-editorial text-xl text-ivory mb-1 group-hover:text-coastal-gold transition-colors">{s.label}</h4>
                    <p className="text-ivory/60 text-[13px] font-body leading-snug">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
