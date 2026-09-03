import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  { category: "Market Trends", date: "Oct 2026", title: "Why the Gulf Coast is Florida's Best Kept Secret", readTime: "5 min read", img: "/images/hero-coast.jpg" },
  { category: "Home Buying", date: "Sep 2026", title: "Navigating Waterfront Property Insurance", readTime: "7 min read", img: "/images/lifestyle-wa.jpg" },
  { category: "Community", date: "Sep 2026", title: "Top 5 Hidden Gem Neighborhoods in Spring Hill", readTime: "4 min read", img: "/images/community-crystal.jpg" },
];

export default function Guide() {
  return (
    <section id="guide" className="bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-[600px]">
            <span className="text-[10px] font-body font-semibold tracking-[0.22em] uppercase text-taupe mb-4 block">Knowledge</span>
            <h2 className="text-editorial text-[clamp(2.8rem,6vw,4.5rem)] leading-[0.92] tracking-[-0.045em] text-ink mb-6">GULF COAST <span className="italic font-normal text-ocean-deep">GUIDE.</span></h2>
            <p className="text-ink-soft text-[15px] font-body leading-relaxed">Insights, market trends, and everything you need to know about living on the Nature Coast.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2.5 text-ink font-body font-semibold tracking-wide hover:text-ocean-deep transition-colors group" aria-label="Browse all articles">
            Browse All Articles <ArrowUpRight size={18} strokeWidth={2} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((a, i) => (
            <Link key={a.title} to="/contact" className="group block bg-cream rounded-2xl p-8 border border-parchment/50 hover:border-coastal-gold/40 hover:-translate-y-1 transition-all duration-400 shadow-sm hover:shadow-lg" aria-label={`Read ${a.title}`}>
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-8 img-zoom">
                <img src={a.img} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-body font-semibold tracking-[0.15em] uppercase text-taupe">{a.category}</span>
                <span className="text-[10px] font-body font-medium tracking-wide text-ink-soft/70">{a.readTime}</span>
              </div>
              <h3 className="text-editorial text-2xl text-ink leading-tight tracking-[-0.02em] mb-6 group-hover:text-ocean-deep transition-colors">{a.title}</h3>
              <div className="flex items-center justify-between pt-5 border-t border-parchment/60">
                <span className="text-[11.5px] font-body text-taupe">{a.date}</span>
                <span className="text-[11px] font-body font-semibold text-ink tracking-wide flex items-center gap-1.5 group-hover:text-ocean-deep transition-colors">Read <ArrowRight size={12} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
