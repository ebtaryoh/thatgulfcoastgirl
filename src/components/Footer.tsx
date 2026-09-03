import { Globe, ExternalLink, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-ivory/80" aria-label="Footer">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 lg:pt-28 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16 lg:mb-20">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-5" aria-label="That Gulf Coast Girl Home">
              <h2 className="text-editorial text-[22px] lg:text-[26px] font-medium tracking-[-0.03em] text-ivory leading-none">THAT GULF COAST GIRL</h2>
              <span className="text-[9px] font-body font-medium tracking-[0.22em] uppercase text-stone mt-1 block">Florida Gulf Coast Real Estate & Lifestyle</span>
            </Link>
            <p className="text-ivory/50 text-[13px] font-body leading-relaxed">Amanda Crescenzo is a Florida Gulf Coast Realtor® guiding buyers and sellers along the coastline with integrity, expertise, and a deeply personal approach.</p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[10px] font-body font-bold tracking-[0.22em] uppercase text-sand mb-5">Explore</h3>
            <ul className="flex flex-col gap-2.5 text-[13.5px] font-body">
              {[
                { label: "Home", href: "/" },
                { label: "Buy", href: "/buyers" },
                { label: "Sell", href: "/sellers" },
                { label: "Listings", href: "/listings" },
                { label: "About Amanda", href: "/about" },
                { label: "Contact", href: "/contact" }
              ].map((l) => (
                <li key={l.label}><Link to={l.href} className="hover:text-coastal-gold transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-body font-bold tracking-[0.22em] uppercase text-sand mb-5">Contact</h3>
            <ul className="flex flex-col gap-3 text-[13.5px] font-body">
              <li><a href="tel:+17274527336" className="hover:text-coastal-gold transition-colors">(727) 452-7336</a></li>
              <li><a href="mailto:amanda@thatgulfcoastgirl.com" className="hover:text-coastal-gold transition-colors">amanda@thatgulfcoastgirl.com</a></li>
              <li className="text-ivory/50 text-[12.5px] leading-snug mt-2">Home-Land Real Estate Inc.<br />17086 Cortez Blvd<br />Brooksville, FL 34601</li>
            </ul>
          </div>

          {/* Follow + Legal */}
          <div>
            <h3 className="text-[10px] font-body font-bold tracking-[0.22em] uppercase text-sand mb-5">Follow</h3>
            <div className="flex gap-3 mb-6">
              {[Globe, MessageCircle, ExternalLink].map((Icon, i) => (
                <a key={i} href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full bg-ivory/8 border border-ivory/10 flex items-center justify-center hover:bg-coastal-gold hover:text-ink-deep hover:border-coastal-gold transition-all" aria-label="Social link">
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[11.5px] font-body text-ivory/40">
              {["Privacy Policy", "Terms of Service", "Accessibility", "DMCA", "Equal Housing Opportunity"].map((l) => (
                <li key={l}><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-ivory/80 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="text-[12px] font-body text-ivory/40 leading-relaxed max-w-[900px]">
              <p className="mb-2"><strong className="text-ivory/60">Home-Land Real Estate Inc.</strong> — License SL3597761. All property information is deemed reliable but is not guaranteed. Buyers should independently verify all details.</p>
              <p>Information provided by Stellar MLS / OSI (IDX) through an authorized MLS integration. Listing data is dynamic and subject to change. Equal Housing Opportunity.</p>
            </div>
            <p className="text-[11px] font-body text-ivory/30 whitespace-nowrap">© 2026 That Gulf Coast Girl®. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
