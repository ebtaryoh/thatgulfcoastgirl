import { Compass, Key, ShieldCheck } from "lucide-react";

export default function BuyerPerks() {
  return (
    <section className="bg-ink py-24 lg:py-32 border-t border-ink-soft/20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div className="text-center md:text-left">
            <div className="w-14 h-14 rounded-full bg-ivory/5 border border-ivory/10 flex items-center justify-center text-coastal-gold mb-6 mx-auto md:mx-0">
              <Compass strokeWidth={1.5} size={24} />
            </div>
            <h3 className="text-editorial text-2xl text-ivory tracking-[-0.02em] mb-4">Local Expertise</h3>
            <p className="text-ivory/60 font-body leading-relaxed text-[15px]">Deep knowledge of Florida's Gulf Coast communities, hidden gem neighborhoods, and waterfront property nuances to guide your search.</p>
          </div>
          
          <div className="text-center md:text-left">
            <div className="w-14 h-14 rounded-full bg-ivory/5 border border-ivory/10 flex items-center justify-center text-coastal-gold mb-6 mx-auto md:mx-0">
              <Key strokeWidth={1.5} size={24} />
            </div>
            <h3 className="text-editorial text-2xl text-ivory tracking-[-0.02em] mb-4">Off-Market Access</h3>
            <p className="text-ivory/60 font-body leading-relaxed text-[15px]">Leveraging a strong professional network to find opportunities before they hit the market, giving you a competitive edge.</p>
          </div>

          <div className="text-center md:text-left">
            <div className="w-14 h-14 rounded-full bg-ivory/5 border border-ivory/10 flex items-center justify-center text-coastal-gold mb-6 mx-auto md:mx-0">
              <ShieldCheck strokeWidth={1.5} size={24} />
            </div>
            <h3 className="text-editorial text-2xl text-ivory tracking-[-0.02em] mb-4">Fierce Advocacy</h3>
            <p className="text-ivory/60 font-body leading-relaxed text-[15px]">Strategic negotiation, rigorous contract review, and clear communication to protect your interests from offer to closing table.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
