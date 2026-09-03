import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Handshake, TrendingUp, ShieldCheck } from "lucide-react";

const credentials = [
  { abbr: "AHWD", full: "At Home With Diversity", desc: "Certified inclusive housing practices." },
  { abbr: "RSPS", full: "Resort & Second-Home Property Specialist", desc: "Specialized in vacation and investment properties." },
  { abbr: "GRN", full: "NAR Green Designee", desc: "Sustainable real estate practices and green building awareness." },
  { abbr: "MRP", full: "Military Relocation Professional", desc: "Dedicated support for service members and families." },
];

export default function MeetAmanda() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-[720px] mb-16 lg:mb-24">
          <span className="text-[10px] font-body font-semibold tracking-[0.22em] uppercase text-taupe mb-4 block">About Amanda</span>
          <h2 className="text-editorial text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-[-0.045em] text-ink mb-6">
            YOUR REALTOR.<br />
            <span className="italic font-normal text-ocean-deep">YOUR LOCAL GUIDE.</span>
          </h2>
          <p className="text-ink-soft font-body text-base lg:text-lg leading-relaxed">Amanda Crescenzo is That Gulf Coast Girl®. A Florida Gulf Coast Realtor®, community advocate, and the person you call when you want more than a transaction — you want a relationship.</p>
        </div>

        {/* Editorial grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-ink-deep/10 img-zoom">
              <img src="/images/about-portrait.png" alt="Amanda Crescenzo" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute top-5 left-5 bg-ink-deep/85 backdrop-blur-md text-ivory rounded-xl px-5 py-4 max-w-[220px] shadow-xl">
              <p className="text-[10px] font-body font-bold tracking-[0.2em] uppercase text-sand mb-1">Credentials</p>
              <p className="text-editorial-italic text-xl">10+ years</p>
              <p className="text-[12px] text-ivory/70 leading-snug">Multi-family, consulting, development, operations, real-estate strategy.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col gap-10 lg:gap-12"
          >
            <div>
              <h3 className="text-editorial text-3xl lg:text-[2.2rem] tracking-[-0.03em] text-ink mb-5 leading-tight">Find Your New Spot with Amanda Crescenzo</h3>
              <div className="space-y-4 text-ink-soft font-body leading-relaxed text-[15px] lg:text-base">
                <p>I’m Amanda Crescenzo | That Gulf Coast Girl® — your trusted Florida Gulf Coast Realtor®, local community advocate, and go-to guide for buying and selling homes along the Gulf Coast.</p>
                <p>As a Florida real estate agent specializing in coastal homes, waterfront properties, luxury homes, and lifestyle-focused real estate, I help buyers and sellers navigate the market with confidence, clarity, and care. Whether you’re searching for your dream home near the water, selling a Gulf Coast property, relocating to Florida, or exploring your next chapter, I’m here to make the process feel seamless, informed, and personal.</p>
                <p>With more than a decade of experience in multi-family property management, business start-up consulting, mixed-use development, negotiation, operations, and real estate strategy, I bring a well-rounded perspective to every transaction. My mission is simple: to make you feel like a VIP while guiding you through your real estate journey with integrity, expertise, and a deep understanding of the Florida Gulf Coast market.</p>
                <p>But real estate is more than contracts and closings — it’s about lifestyle, community, and finding the right place to call home. As a foodie, nature explorer, and passionate supporter of the Sunshine State, I love helping people discover everything that makes Florida’s Gulf Coast such a special place to live, work, and play.</p>
                <p>I’m also a community builder at heart. My certifications reflect my commitment to people, the planet, and sustainable practices that help protect Florida’s coastline, natural resources, and local communities. You’ll often find me attending city planning meetings, supporting local charity events, or advocating for the preservation of Florida’s State Parks.</p>
                <p>Authenticity is at the core of my business. When you work with me, you communicate directly with me — not a call center, not a paid lead platform, and never AI in place of real human connection. I use advanced technology only as a supportive tool for market analysis, virtual staging, pricing strategy, and data insights, while keeping the relationship personal from start to finish.</p>
                <p>My commission is not weighed down by paid lead fees or corporate referral cuts, which allows me to help buyers and sellers enter the market more competitively. Whether you’re buying a coastal home, selling waterfront property, relocating to the Gulf Coast, or simply exploring your options over coffee, I’m here to help you move forward with confidence.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Handshake, label: "Direct Access", desc: "You communicate with Amanda, not a call center." },
                { icon: TrendingUp, label: "Strategic Experience", desc: "10+ years across property management and development." },
                { icon: BookOpen, label: "Market Insights", desc: "Data-driven pricing, staging, and market analysis." },
                { icon: ShieldCheck, label: "Integrity First", desc: "Clear guidance with no hidden agendas." },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-ivory rounded-xl p-5 border border-parchment/70 hover:border-coastal-gold/50 transition-colors group">
                  <Icon size={22} className="text-ocean-deep mb-3 group-hover:text-coastal-gold transition-colors" strokeWidth={1.5} />
                  <h4 className="text-ink font-body font-semibold text-sm mb-1.5">{label}</h4>
                  <p className="text-taupe text-[12px] leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Credentials */}
        <div className="border-t border-parchment pt-14">
          <h3 className="text-editorial text-3xl lg:text-4xl tracking-[-0.03em] text-ink mb-3">Credentials</h3>
          <p className="text-taupe font-body text-sm mb-10">Recognized designations for specialized expertise.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {credentials.map((c) => (
              <div key={c.abbr} className="bg-ivory rounded-2xl p-7 border border-parchment/60 hover:border-coastal-gold/40 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md">
                <div className="text-editorial text-4xl font-light text-ink-deep mb-3">{c.abbr}</div>
                <h4 className="text-ink font-body font-semibold text-sm mb-1.5">{c.full}</h4>
                <p className="text-taupe text-[12.5px] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
