import { useState } from "react";
import { Waves, Mountain, Users, UtensilsCrossed, Sailboat, Sun } from "lucide-react";

const categories = [
  { icon: Waves, label: "WATER", desc: "Wake up closer to the water. From beachfront estates to quiet canal homes, find the shoreline that speaks to you.", img: "/images/hero-coast.jpg" },
  { icon: Mountain, label: "NATURE", desc: "Find trails, springs, parks, and open spaces that make Florida feel like home — not just a vacation.", img: "/images/community-crystal.jpg" },
  { icon: Users, label: "COMMUNITY", desc: "Discover neighborhoods that feel like home. Small-town warmth meets coastal sophistication.", img: "/images/featured-property.jpg" },
  { icon: UtensilsCrossed, label: "FOOD", desc: "Explore the local flavor of the Gulf Coast — from dockside seafood to chef-driven dining in Brooksville and beyond.", img: "/images/lifestyle-wa.jpg" },
  { icon: Sailboat, label: "BOATING", desc: "Access to marinas, boat ramps, and waterway connections make weekend cruising a way of life.", img: "/images/hero-coast.jpg" },
  { icon: Sun, label: "SUN", desc: "Sunsets over the Gulf aren't just beautiful — they're the reason people stay. Find your front-row seat.", img: "/images/lifestyle-wa.jpg" },
];

export default function Lifestyle() {
  const [active, setActive] = useState(0);

  return (
    <section id="lifestyle" className="relative bg-ink-deep text-ivory overflow-hidden" aria-label="Live the Gulf lifestyle">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-36">
        <div className="max-w-[560px] mb-16 lg:mb-20">
          <span className="text-[10px] font-body font-semibold tracking-[0.22em] uppercase text-coastal-gold mb-4 block">Lifestyle</span>
          <h2 className="text-editorial text-[clamp(3rem,7vw,5.8rem)] leading-[0.92] tracking-[-0.045em] mb-6">LIVE<br />THE <span className="italic text-coastal-gold/90">GULF.</span></h2>
          <p className="text-ivory/70 font-body text-base lg:text-lg leading-relaxed">Buying property is about choosing a lifestyle. Here is what that looks like along Florida's Gulf Coast.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* List */}
          <div className="lg:col-span-5 flex flex-col gap-1.5">
            {categories.map((c, i) => {
              const Icon = c.icon;
              const isActive = active === i;
              return (
                <button
                  key={c.label}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-5 text-left px-5 py-5 rounded-xl transition-all duration-350 ${
                    isActive ? "bg-ivory/10 border border-ivory/10" : "border border-transparent hover:bg-ivory/[0.04]"
                  }`}
                  aria-label={`Show ${c.label}`}
                  aria-pressed={isActive}
                >
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-350 ${isActive ? "bg-coastal-gold text-ink-deep" : "bg-ivory/8 text-ivory/60 group-hover:text-ivory group-hover:bg-ivory/12"}`}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className={`text-editorial text-2xl lg:text-[1.7rem] tracking-[-0.03em] mb-0.5 transition-colors ${isActive ? "text-ivory" : "text-ivory/50 group-hover:text-ivory/80"}`}>
                      {c.label}
                    </h3>
                    <p className={`text-[13px] font-body leading-snug transition-colors ${isActive ? "text-ivory/70" : "text-ivory/35"}`}>
                      {c.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Visual */}
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full rounded-3xl overflow-hidden shadow-2xl shadow-black/30 relative">
              {categories.map((c, i) => (
                <img
                  key={c.label}
                  src={c.img}
                  alt={c.label}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/50 via-transparent to-ink-deep/10 pointer-events-none" />
              <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
                <div className="bg-ink-deep/70 backdrop-blur-md border border-ivory/10 rounded-xl px-6 py-5 max-w-[380px]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-coastal-gold" />
                    <span className="text-[10px] font-body font-bold tracking-[0.2em] uppercase text-sand">{categories[active].label}</span>
                  </div>
                  <h3 className="text-editorial text-2xl lg:text-[1.6rem] text-ivory leading-tight">{categories[active].desc}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
