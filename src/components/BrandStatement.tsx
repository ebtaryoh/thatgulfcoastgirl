import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BrandStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="brand" className="relative bg-ivory py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-editorial text-[clamp(2.8rem,6vw,5rem)] text-ink leading-[0.95] tracking-[-0.04em] mb-8">
                REAL ESTATE<br />
                <span className="italic font-normal text-ocean-deep">IS PERSONAL.</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-ink-soft font-body text-lg lg:text-xl leading-relaxed mb-6"
            >
              When you work with Amanda, you work directly with Amanda. No call center. No impersonal lead funnel. No replacing human connection with automation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-taupe font-body leading-relaxed"
            >
              Technology supports the relationship — market analysis, virtual staging, pricing strategy, data insights — but the human relationship remains central. From first conversation to closing, you have one dedicated guide who knows this coastline inside and out.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-ink-deep/8 img-zoom">
              <img
                src="/images/personal.png"
                alt="Amanda Crescenzo, Florida Gulf Coast Realtor"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-ink-deep text-ivory rounded-2xl px-8 py-7 shadow-2xl shadow-ink-deep/20 max-w-[280px]">
              <p className="text-editorial-italic text-2xl lg:text-3xl leading-tight mb-3">"Real estate is about lifestyle, community, and finding your next chapter."</p>
              <p className="text-[11px] font-body font-medium tracking-[0.15em] uppercase text-sand">Amanda Crescenzo</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
