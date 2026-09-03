import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserCheck, MapPin, Lightbulb, Monitor, HeartHandshake, TreePine } from "lucide-react";

const cards = [
  { icon: UserCheck, label: "DIRECT ACCESS", desc: "You communicate directly with Amanda — no call center, no impersonal lead funnel." },
  { icon: MapPin, label: "LOCAL KNOWLEDGE", desc: "Deep familiarity with Gulf Coast lifestyle, markets, neighborhoods, and hidden opportunities." },
  { icon: Lightbulb, label: "STRATEGIC EXPERIENCE", desc: "10+ years in property management, operations, development, negotiation, and real estate strategy." },
  { icon: Monitor, label: "TECHNOLOGY-ENABLED", desc: "Modern market analysis, virtual staging, pricing strategy, and data insights — always in service of the relationship." },
  { icon: HeartHandshake, label: "PERSONAL SERVICE", desc: "A highly personal experience from first conversation through closing and beyond." },
  { icon: TreePine, label: "COMMUNITY-MINDED", desc: "Committed to local communities, natural resources, and protecting Florida's coastline." },
];

export default function WhyAmanda() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why" ref={ref} className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center max-w-[640px] mx-auto mb-16 lg:mb-20">
          <span className="text-[10px] font-body font-semibold tracking-[0.22em] uppercase text-taupe mb-4 block">Why Amanda</span>
          <h2 className="text-editorial text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-[-0.045em] text-ink mb-6">WHY WORK<br />WITH <span className="italic font-normal text-ocean-deep">AMANDA?</span></h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-ivory rounded-2xl p-8 border border-parchment/50 hover:border-coastal-gold/40 transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-ink-deep text-ivory flex items-center justify-center mb-5 shadow-lg shadow-ink-deep/10">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-editorial text-xl text-ink tracking-[-0.02em] mb-2">{c.label}</h3>
                <p className="text-taupe text-[13px] font-body leading-relaxed">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
