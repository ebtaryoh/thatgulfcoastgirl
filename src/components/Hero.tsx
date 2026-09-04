import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const quickFilters = ["Waterfront", "Luxury", "Coastal", "First Home", "Land", "Investment"];

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-end overflow-hidden" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-coast.jpg"
          alt="Florida Gulf Coast aerial view at golden hour"
          className="w-full h-full object-cover scale-105 animate-[slowZoom_25s_ease-in-out_infinite_alternate]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/50 via-ink-deep/30 to-ink-deep/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/20 via-transparent to-ink-deep/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 pb-24 pt-48 lg:pb-32 lg:pt-56">
        <div className="max-w-[820px]">
          <div className="inline-flex items-center gap-3 bg-ivory/10 backdrop-blur-md border border-ivory/15 rounded-full pl-5 pr-4 py-2.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-coastal-gold animate-pulse" />
            <span className="text-ivory/95 text-[10.5px] font-body font-medium tracking-[0.18em] uppercase">Florida Gulf Coast Realtor® — Since 2014</span>
          </div>

          <h1 className="text-editorial text-[clamp(3.2rem,9vw,7.5rem)] font-light text-ivory leading-[0.92] tracking-[-0.045em] mb-7">
            <span className="block">THAT GULF</span>
            <span className="block italic font-normal text-coastal-gold/95">COAST GIRL</span>
          </h1>

          <div className="max-w-[540px] mb-10">
            <h2 className="text-editorial text-[clamp(2rem,4.5vw,3.6rem)] text-ivory leading-[1.05] tracking-[-0.03em] mb-4 font-light">
              Find your place<br />
              <span className="italic font-normal text-sand">on Florida's Gulf.</span>
            </h2>
            <p className="text-ivory/80 text-base lg:text-lg font-body font-light leading-relaxed tracking-[0.01em]">
              Coastal homes. Waterfront living. Local expertise from Brooksville to Crystal River — with a guide who knows this coastline like the back of her hand.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link to="/buyers" className="inline-flex items-center gap-2.5 rounded-full bg-coastal-gold text-ink-deep px-7 py-4 text-sm font-body font-semibold tracking-wide hover:bg-ivory transition-colors shadow-xl shadow-ink-deep/20">
              Buy a Home <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link to="/sellers" className="inline-flex items-center gap-2.5 rounded-full bg-ivory/10 text-ivory border border-ivory/25 px-7 py-4 text-sm font-body font-medium tracking-wide hover:bg-ivory/15 transition-colors backdrop-blur-sm">
              Sell a Home
            </Link>
          </div>

          {/* Property discovery bar */}
          <div className="bg-ivory/95 backdrop-blur-xl rounded-2xl p-6 lg:p-7 shadow-2xl shadow-ink-deep/10 max-w-[820px] border border-parchment/60">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-ink-soft" strokeWidth={1.5} />
              <span className="text-[11px] font-body font-semibold text-ink-soft tracking-[0.15em] uppercase">What are you looking for?</span>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); navigate("/listings"); }} className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search address, city, neighborhood or ZIP"
                  className="w-full bg-cream border border-sand/70 rounded-xl px-5 py-3.5 text-ink text-sm font-body focus:outline-none focus:border-coastal-gold/60 focus:ring-2 focus:ring-coastal-gold/10 transition-all placeholder:text-taupe/60"
                  aria-label="Property search"
                />
              </div>
              <button type="submit" className="rounded-xl bg-ink text-ivory px-8 py-3.5 text-sm font-body font-semibold tracking-wide hover:bg-ocean-deep transition-colors whitespace-nowrap shadow-lg shadow-ink/10">
                Explore
              </button>
            </form>
            <div className="flex flex-wrap gap-2">
              {quickFilters.map((f) => (
                <Link
                  key={f}
                  to="/listings"
                  className="rounded-full bg-cream border border-sand/60 px-3.5 py-1.5 text-[11px] font-body font-medium text-ink-soft hover:border-coastal-gold hover:text-ink transition-colors"
                >
                  {f}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 opacity-60">
        <span className="text-[9px] font-body font-medium tracking-[0.25em] uppercase text-ivory">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-ivory/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
