import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const communities = [
  { name: "Crystal River", tagline: "Waterfront living near the springs.", props: "Waterfront, Luxury, Family", img: "/images/community-crystal.jpg", desc: "Known for its crystal-clear waters, vibrant downtown, and waterfront homes with direct water access." },
  { name: "Brooksville", tagline: "Historic charm meets modern growth.", props: "Family, Investment, First Home", img: "/images/featured-property.jpg", desc: "The Hernando County seat with a growing arts scene, excellent schools, and expanding residential communities." },
  { name: "Spring Hill", tagline: "Family-friendly coastal growth.", props: "Family, Coastal, Investment", img: "/images/hero-coast.jpg", desc: "Rapid growth balanced by nature preserves and proximity to the Gulf — popular with relocators and families." },
  { name: "Weeki Wachee", tagline: "Quiet waterfront retreats.", props: "Waterfront, Second Home, Resort", img: "/images/lifestyle-wa.jpg", desc: "Small-town atmosphere with riverfront properties, boat access, and a relaxed pace near Tampa Bay area." },
];

export default function Communities() {
  return (
    <section id="communities" className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-20">
          <div>
            <span className="text-[10px] font-body font-semibold tracking-[0.22em] uppercase text-taupe mb-4 block">Communities</span>
            <h2 className="text-editorial text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-[-0.045em] text-ink">EXPLORE<br />THE <span className="italic font-normal text-ocean-deep">GULF COAST.</span></h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2.5 text-ink font-body font-semibold tracking-wide hover:text-ocean-deep transition-colors group" aria-label="Explore all communities">
            View All <ArrowUpRight size={18} strokeWidth={2} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {communities.map((c) => (
            <Link
              key={c.name}
              to="/contact"
              className="group relative bg-ivory rounded-3xl overflow-hidden shadow-lg shadow-ink-deep/5 border border-parchment/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 block"
              aria-label={`Explore ${c.name}`}
            >
              <div className="aspect-[16/10] overflow-hidden img-zoom relative">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/60 via-transparent to-ink-deep/10" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-editorial text-3xl lg:text-4xl text-ivory tracking-[-0.03em] mb-1 drop-shadow-lg">{c.name}</h3>
                  <p className="text-ivory/90 font-body font-medium text-sm drop-shadow-md">{c.tagline}</p>
                </div>
              </div>
              <div className="p-7 lg:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-editorial text-xl text-ink tracking-[-0.02em] mb-1">{c.name}</h3>
                    <p className="text-taupe text-[13px] font-body leading-snug">{c.desc}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-ink-deep text-ivory flex items-center justify-center shrink-0 shadow-lg group-hover:bg-coastal-gold group-hover:text-ink-deep transition-colors">
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.props.split(", ").map((p) => (
                    <span key={p} className="rounded-full bg-cream border border-parchment/60 px-3 py-1 text-[11px] font-body font-medium text-ink-soft">{p}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
