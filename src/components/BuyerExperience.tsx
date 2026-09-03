import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, ClipboardList, DoorOpen, Scale, Key } from "lucide-react";

const steps = [
  { num: "01", label: "Discover", icon: Search, desc: "We learn your lifestyle, priorities, and what 'home' truly means to you." },
  { num: "02", label: "Define", icon: ClipboardList, desc: "Clarify your must-haves, preferences, and budget with strategic guidance." },
  { num: "03", label: "Search", icon: Search, desc: "Access to listings, off-market opportunities, and data-driven market insights." },
  { num: "04", label: "Tour", icon: DoorOpen, desc: "Private showings, virtual tours, and open houses tailored to your schedule." },
  { num: "05", label: "Negotiate", icon: Scale, desc: "Strong advocacy backed by market analysis, inspection guidance, and strategy." },
  { num: "06", label: "Close", icon: Key, desc: "From inspection to closing table — clear communication, no surprises." },
];

export default function BuyerExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="buy" ref={ref} className="bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center max-w-[640px] mx-auto mb-16 lg:mb-24">
          <span className="text-[10px] font-body font-semibold tracking-[0.22em] uppercase text-taupe mb-4 block">Buyers</span>
          <h2 className="text-editorial text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-[-0.045em] text-ink mb-6">FIND YOUR<br /><span className="italic font-normal text-ocean-deep">NEXT SPOT.</span></h2>
          <p className="text-ink-soft font-body text-base lg:text-lg leading-relaxed">Whether you are a first-time buyer, relocating, seeking waterfront luxury, or building a second-home portfolio — Amanda guides you through each step with clarity and care.</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4" role="list" aria-label="Buyer journey steps">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                role="listitem"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-cream rounded-2xl p-7 border border-parchment/60 hover:border-coastal-gold/40 transition-all hover:-translate-y-2 shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-full bg-ink-deep text-ivory flex items-center justify-center shadow-lg shadow-ink-deep/15">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>
                  <span className="text-editorial text-3xl font-light text-parchment group-hover:text-coastal-gold transition-colors">{s.num}</span>
                </div>
                <h3 className="text-editorial text-xl tracking-[-0.02em] text-ink mb-2">{s.label}</h3>
                <p className="text-taupe text-[13px] leading-snug">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-3 justify-center mt-14">
          {["First-Time Homebuyers", "Relocating Buyers", "Waterfront Buyers", "Luxury Buyers", "Second-Home Buyers", "Investment Buyers", "Military Relocation", "Unique-Property Buyers"].map((t) => (
            <span key={t} className="rounded-full bg-cream border border-parchment/60 px-4 py-2 text-[11.5px] font-body font-medium text-ink-soft">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
