import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target } from "lucide-react";

export default function SellerHero() {
  return (
    <section className="relative h-[85vh] min-h-[650px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero-coast.jpg" alt="Waterfront property" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink-deep/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink-deep/50" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 text-center mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[11px] font-body font-semibold tracking-[0.25em] uppercase text-coastal-gold mb-6 block"
        >
          Selling With Amanda
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-editorial text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.04em] text-ivory mb-8"
        >
          MAXIMIZE YOUR<br />
          <span className="italic font-normal text-coastal-gold/90">HOME'S VALUE.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-ivory/80 text-lg lg:text-xl font-body max-w-[640px] mx-auto mb-10 leading-relaxed font-light"
        >
          Elevated marketing, strategic positioning, and fierce negotiation to ensure your property stands out and commands top dollar in the Gulf Coast market.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Link to="/contact" className="inline-flex items-center gap-2.5 rounded-full bg-coastal-gold text-ink-deep px-8 py-4 text-sm font-body font-semibold tracking-wide hover:bg-ivory transition-colors shadow-xl shadow-black/20">
            Start My Smart Seller Journey <Target size={16} strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
