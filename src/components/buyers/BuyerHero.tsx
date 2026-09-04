import { motion } from "framer-motion";

export default function BuyerHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/lifestyle-wa.jpg" alt="Coastal living" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink-deep/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 text-center mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[11px] font-body font-semibold tracking-[0.25em] uppercase text-coastal-gold mb-6 block"
        >
          Buying With Amanda
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-editorial text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.04em] text-ivory mb-8"
        >
          FIND YOUR<br />
          <span className="italic font-normal text-sand">NEXT SPOT.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-ivory/80 text-lg lg:text-xl font-body max-w-[600px] mx-auto leading-relaxed font-light mb-10"
        >
          Whether you're looking for a waterfront retreat, relocating to the Nature Coast, or buying your first home, I'll help you secure the perfect property with confidence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <a href="/contact" className="inline-flex items-center justify-center gap-2.5 rounded-full bg-coastal-gold text-ink-deep px-8 py-4 text-sm font-body font-bold tracking-widest uppercase hover:bg-ivory transition-colors">
            Start Your Search
          </a>
        </motion.div>
      </div>
    </section>
  );
}
