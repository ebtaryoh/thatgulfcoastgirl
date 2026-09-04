import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, ClipboardList, DoorOpen, Scale, Key, Target } from "lucide-react";

const steps = [
  { num: "01", label: "Discover", icon: Search, desc: "We learn your lifestyle, priorities, and what 'home' truly means to you.", img: "/images/lifestyle-wa.jpg" },
  { num: "02", label: "Define", icon: ClipboardList, desc: "Clarify your must-haves, preferences, and budget with strategic guidance.", img: "/images/hero-coast.jpg" },
  { num: "03", label: "Search", icon: Target, desc: "Access to listings, off-market opportunities, and data-driven market insights.", img: "/images/community-crystal.jpg" },
  { num: "04", label: "Tour", icon: DoorOpen, desc: "Private showings, virtual tours, and open houses tailored to your schedule.", img: "/images/lifestyle-wa.jpg" },
  { num: "05", label: "Negotiate", icon: Scale, desc: "Strong advocacy backed by market analysis, inspection guidance, and strategy.", img: "/images/hero-coast.jpg" },
  { num: "06", label: "Close", icon: Key, desc: "From inspection to closing table — clear communication, no surprises.", img: "/images/community-crystal.jpg" },
];

export default function BuyerExperience() {
  return (
    <section id="buy" className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="text-center max-w-[640px] mx-auto mb-20 lg:mb-32">
          <span className="text-[10px] font-body font-semibold tracking-[0.22em] uppercase text-taupe mb-4 block">The Process</span>
          <h2 className="text-editorial text-[clamp(2.8rem,6vw,4.5rem)] leading-[0.92] tracking-[-0.045em] text-ink mb-6">
            A SEAMLESS<br />
            <span className="italic font-normal text-ocean-deep">EXPERIENCE.</span>
          </h2>
          <p className="text-ink-soft font-body text-base lg:text-lg leading-relaxed mb-8">
            I guide you through every milestone of the home buying journey, ensuring clarity, confidence, and absolute success.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center gap-2.5 border border-ink text-ink px-8 py-3.5 text-[13px] font-body font-bold tracking-widest uppercase hover:bg-ink hover:text-ivory transition-colors">
            Book a Consultation
          </a>
        </div>

        <div className="flex flex-col gap-12 lg:gap-24 relative">
          {/* Vertical connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-parchment/60 -translate-x-1/2 z-0" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            const isEven = i % 2 === 0;
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.div
                ref={ref}
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 relative z-10`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className={`aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-ink/5 ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'} max-w-[500px]`}>
                    <img src={s.img} alt={s.label} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>

                {/* Center Node */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-cream border-4 border-ivory items-center justify-center text-ocean-deep shadow-lg z-20">
                  <Icon size={20} strokeWidth={2} />
                </div>

                {/* Content Side */}
                <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-16' : 'lg:pr-16 text-left lg:text-right'}`}>
                  <div className="max-w-[420px] mx-auto lg:mx-0 inline-block text-left">
                    <span className="text-editorial text-4xl lg:text-5xl font-light text-coastal-gold/80 mb-4 block">{s.num}</span>
                    <h3 className="text-editorial text-3xl tracking-[-0.02em] text-ink mb-4">{s.label}</h3>
                    <p className="text-ink-soft/80 font-body text-base leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-28 lg:mt-40 text-center">
          <span className="text-[10px] font-body font-semibold tracking-[0.15em] uppercase text-taupe mb-6 block">Specializing In</span>
          <div className="flex flex-wrap gap-3 justify-center max-w-[800px] mx-auto">
            {["First-Time Homebuyers", "Relocating Buyers", "Waterfront Buyers", "Luxury Buyers", "Second-Home Buyers", "Investment Buyers", "Military Relocation", "Unique-Property Buyers"].map((t) => (
              <span key={t} className="rounded-full bg-cream border border-parchment/60 px-5 py-2.5 text-[11.5px] font-body font-medium text-ink-soft hover:bg-coastal-gold hover:text-ink-deep hover:border-coastal-gold transition-colors cursor-default">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
