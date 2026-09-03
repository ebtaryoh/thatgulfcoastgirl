import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "/buyers" },
  { label: "Sell", href: "/sellers" },
  { label: "Listings", href: "/listings" },
  { label: "About Amanda", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || location.pathname !== "/"
            ? "bg-ivory/92 backdrop-blur-xl shadow-[0_1px_0_rgba(221,211,196,0.4)]"
            : "bg-transparent"
        }`}
        aria-label="Primary"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex h-[72px] lg:h-[80px] items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none group" aria-label="That Gulf Coast Girl Home">
              <span className={`text-editorial text-[22px] lg:text-[26px] font-medium tracking-[-0.03em] text-ink transition-colors duration-300 ${scrolled || location.pathname !== "/" ? "text-ink" : "text-ivory"} group-hover:text-coastal-gold`}>
                THAT GULF COAST GIRL
              </span>
              <span className={`text-[9px] lg:text-[10px] font-body font-medium tracking-[0.22em] uppercase mt-[3px] ${scrolled || location.pathname !== "/" ? "text-taupe" : "text-ivory/80"} transition-colors duration-300`}>
                Florida Gulf Coast Real Estate
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`nav-link text-[11.5px] font-body font-medium tracking-[0.08em] uppercase transition-colors duration-300 ${
                    scrolled || location.pathname !== "/" ? "text-ink-soft hover:text-ocean-deep" : "text-ivory/90 hover:text-ivory"
                  } ${location.pathname === l.href ? "text-ocean-deep font-bold" : ""}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+17274527336"
                className={`flex items-center gap-2 text-[11px] font-medium tracking-wide transition-colors duration-300 ${scrolled || location.pathname !== "/" ? "text-ink-soft hover:text-ocean-deep" : "text-ivory/90 hover:text-ivory"}`}
                aria-label="Call Amanda"
              >
                <Phone size={14} strokeWidth={1.5} />
                <span>(727) 452-7336</span>
              </a>
              <Link
                to="/contact"
                className={`rounded-full px-5 py-2.5 text-[11.5px] font-body font-semibold tracking-wide uppercase transition-all duration-300 shadow-none ${
                  scrolled || location.pathname !== "/"
                    ? "bg-ink text-ivory hover:bg-ocean-deep"
                    : "bg-ivory/12 text-ivory border border-ivory/30 hover:bg-ivory/20 backdrop-blur-md"
                }`}
              >
                Start Your Search
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 -mr-2 transition-colors ${scrolled || location.pathname !== "/" ? "text-ink" : "text-ivory"}`}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-ink-deep/50 backdrop-blur-sm transition-opacity duration-500 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 bottom-0 w-[min(420px,92vw)] bg-ivory shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-label="Mobile navigation"
          aria-modal="true"
        >
          <div className="flex flex-col h-full px-8 pt-24 pb-10 overflow-y-auto">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-7 right-7 p-2 text-ink hover:text-ocean-deep transition-colors"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            <div className="flex flex-col gap-1.5 mb-10">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-editorial text-3xl font-medium hover:text-ocean-deep transition-colors py-2 border-b border-parchment/60 ${location.pathname === l.href ? "text-ocean-deep" : "text-ink"}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4 mb-10">
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="w-full text-center rounded-full bg-ink text-ivory py-3.5 text-sm font-semibold tracking-wide uppercase hover:bg-ocean-deep transition-colors">
                Start Your Search
              </Link>
              <a href="tel:+17274527336" className="w-full text-center rounded-full border border-ink/15 text-ink py-3.5 text-sm font-medium tracking-wide hover:bg-ink hover:text-ivory transition-all flex items-center justify-center gap-2">
                <Phone size={16} strokeWidth={1.5} /> (727) 452-7336
              </a>
            </div>

            <div className="mt-auto pt-8 border-t border-parchment">
              <p className="text-editorial-italic text-ink-soft text-lg mb-4">"Find your place on the Gulf."</p>
              <a href="mailto:amanda@thatgulfcoastgirl.com" className="text-[13px] text-taupe hover:text-ocean-deep transition-colors flex items-center gap-2">
                <Mail size={14} /> amanda@thatgulfcoastgirl.com
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
