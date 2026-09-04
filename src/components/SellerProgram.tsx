import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, TrendingUp, Presentation, Megaphone, Scale, Key } from "lucide-react";

const stage = [
  { label: "Strategic Prep", icon: Target, desc: "Property inspection, repairs, and curated pre-listing improvements to maximize ROI. We don't just list; we optimize.", img: "/images/lifestyle-wa.jpg" },
  { label: "Market Position", icon: TrendingUp, desc: "In-depth pricing analysis, neighborhood market comparison, and a hyper-competitive launch strategy.", img: "/images/hero-coast.jpg" },
  { label: "Premium Presentation", icon: Presentation, desc: "Professional architectural photography, twilight shots, drone footage, and high-end virtual staging.", img: "/images/community-crystal.jpg" },
  { label: "Global Promotion", icon: Megaphone, desc: "Targeted digital ad campaigns, exclusive agent networks, print media, and curated open house events.", img: "/images/lifestyle-wa.jpg" },
  { label: "Fierce Negotiation", icon: Scale, desc: "Rigorous offer vetting, strategic counter-offers, and strong advocacy to protect your equity.", img: "/images/hero-coast.jpg" },
  { label: "Seamless Close", icon: Key, desc: "Clear transaction management, inspection navigation, and escrow coordination from contract to keys.", img: "/images/community-crystal.jpg" },
];

export default function SellerProgram() {
  return (
    <section id="sell" className="relative bg-ink text-ivory overflow-hidden" aria-label="Seller program">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-ocean-deep/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-coastal-gold/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-40 relative z-10">
        
        <div className="text-center max-w-[700px] mx-auto mb-20 lg:mb-32">
          <span className="text-[10px] font-body font-semibold tracking-[0.22em] uppercase text-coastal-gold mb-4 block">The SMART Program</span>
          <h2 className="text-editorial text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-[-0.045em] mb-7">
            YOUR HOME DESERVES<br />
            <span className="italic text-coastal-gold/95">A SMARTER STRATEGY.</span>
          </h2>
          <p className="text-ivory/70 font-body text-base lg:text-lg leading-relaxed">
            I don't just put a sign in the yard. The SMART Seller Program combines data-driven pricing, luxury presentation, and aggressive marketing to command the highest possible price.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-32">
          {stage.map((s, i) => {
            const isEven = i % 2 === 0;
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-100px" });
            const Icon = s.icon;

            return (
              <motion.div 
                ref={ref}
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                    <img src={s.img} alt={s.label} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="max-w-[480px]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-ivory/10 border border-ivory/15 flex items-center justify-center text-coastal-gold">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <span className="text-editorial text-4xl font-light text-ivory/30">0{i + 1}</span>
                    </div>
                    <h3 className="text-editorial text-3xl lg:text-4xl text-ivory mb-5">{s.label}</h3>
                    <p className="text-ivory/70 font-body text-lg leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
