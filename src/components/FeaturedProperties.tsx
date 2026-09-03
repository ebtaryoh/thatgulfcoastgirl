import { useState } from "react";
import { Link } from "react-router-dom";
import { Bed, Bath, Maximize, ArrowUpRight, Heart, MapPin } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "Single Family — Hernando Beach",
    price: "$599,000",
    beds: 3,
    baths: 2,
    sqft: 2210,
    lot: "7,405 sq.ft.",
    image: "/images/featured-property.jpg",
    location: "3342 Turks Cap Drive, Hernando Beach, FL 34607",
    tags: ["Waterfront", "Active"],
    status: "For Sale",
  },
  {
    id: 2,
    name: "Single Family — Spring Hill",
    price: "$285,000",
    beds: 2,
    baths: 2,
    sqft: 1036,
    lot: "0.32 ac",
    image: "/images/hero-coast.jpg",
    location: "12411 Brookside Street, Spring Hill, FL 34609",
    tags: ["Coastal", "Active"],
    status: "For Sale",
  },
  {
    id: 3,
    name: "Single Family — Spring Hill",
    price: "$289,900",
    beds: 3,
    baths: 2,
    sqft: 1480,
    lot: "10,000 sq.ft.",
    image: "/images/community-crystal.jpg",
    location: "1185 Macfarlane Avenue, Spring Hill, FL 34608",
    tags: ["Residential", "Active"],
    status: "For Sale",
  },
  {
    id: 4,
    name: "Condo — Island Estates",
    price: "$415,000",
    beds: 2,
    baths: 2,
    sqft: 1120,
    lot: "Condo",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    location: "Island Estates, Clearwater, FL 33767",
    tags: ["Condo", "Pending"],
    status: "Pending",
  },
  {
    id: 5,
    name: "Single Family — Trinity",
    price: "$725,000",
    beds: 4,
    baths: 3,
    sqft: 2850,
    lot: "0.45 ac",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    location: "Trinity, FL 34655",
    tags: ["Luxury", "Active"],
    status: "For Sale",
  },
  {
    id: 6,
    name: "Townhouse — Safety Harbor",
    price: "$510,000",
    beds: 3,
    baths: 2.5,
    sqft: 1850,
    lot: "Townhome",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    location: "Safety Harbor, FL 34695",
    tags: ["Townhome", "Active"],
    status: "For Sale",
  },
  {
    id: 7,
    name: "Single Family — Dunedin",
    price: "$649,900",
    beds: 3,
    baths: 2,
    sqft: 1920,
    lot: "0.2 ac",
    image: "https://images.unsplash.com/photo-1570129477492-45c003eaa271?auto=format&fit=crop&q=80",
    location: "Dunedin, FL 34698",
    tags: ["Coastal", "Sold"],
    status: "Sold",
  },
  {
    id: 8,
    name: "Estate — Tarpon Springs",
    price: "$1,250,000",
    beds: 5,
    baths: 4,
    sqft: 4200,
    lot: "1.2 ac",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    location: "Tarpon Springs, FL 34689",
    tags: ["Estate", "Active"],
    status: "For Sale",
  },
  {
    id: 9,
    name: "Condo — Clearwater Beach",
    price: "$895,000",
    beds: 2,
    baths: 2,
    sqft: 1450,
    lot: "Condo",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    location: "Clearwater Beach, FL 33767",
    tags: ["Waterfront", "Active"],
    status: "For Sale",
  }
];

export default function FeaturedProperties() {
  const [liked, setLiked] = useState<number[]>([]);
  const toggleLike = (id: number) => setLiked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <section id="listings" className="bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-20">
          <div>
            <span className="text-[10px] font-body font-semibold tracking-[0.22em] uppercase text-taupe mb-4 block">Discover</span>
            <h2 className="text-editorial text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-[-0.045em] text-ink">FIND YOUR<br /><span className="italic font-normal text-ocean-deep">PLACE.</span></h2>
          </div>
          <Link to="/listings" className="inline-flex items-center gap-2.5 text-ink font-body font-semibold tracking-wide hover:text-ocean-deep transition-colors group" aria-label="Explore all properties">
            Explore All Properties <ArrowUpRight size={18} strokeWidth={2} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {properties.map((p, i) => (
            <Link
              key={p.id}
              to="/contact"
              className="group block bg-ivory rounded-3xl overflow-hidden shadow-lg shadow-ink-deep/5 border border-parchment/40 hover:shadow-2xl hover:shadow-ink-deep/10 transition-all duration-500 hover:-translate-y-2 card-elevate"
              aria-label={`View ${p.name}`}
              style={{ animationDelay: `${(i % 3) * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading={i < 3 ? "eager" : "lazy"} />
                <div className="absolute top-4 left-4 flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-ink-deep/80 backdrop-blur-md text-ivory text-[10px] font-body font-semibold tracking-wide uppercase px-3 py-1">{t}</span>
                  ))}
                </div>
                <button
                  onClick={(e) => { e.preventDefault(); toggleLike(p.id); }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-ink-deep/60 backdrop-blur-md flex items-center justify-center text-ivory hover:bg-ink hover:text-coastal-gold transition-all z-10"
                  aria-label={liked.includes(p.id) ? "Remove from favorites" : "Save to favorites"}
                >
                  <Heart size={17} strokeWidth={1.5} className={liked.includes(p.id) ? "fill-coastal-gold text-coastal-gold" : ""} />
                </button>
                <div className="absolute bottom-4 right-4 bg-ivory/95 backdrop-blur-md rounded-full px-4 py-1.5 text-ink font-body font-bold text-sm shadow-lg">
                  {p.status}
                </div>
              </div>

              <div className="p-7 lg:p-8">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-editorial text-2xl lg:text-[1.55rem] text-ink leading-tight tracking-[-0.02em]">{p.name}</h3>
                  <span className="text-editorial text-xl lg:text-2xl text-ocean-deep font-medium shrink-0">{p.price}</span>
                </div>
                <p className="flex items-center gap-1.5 text-taupe text-[13px] font-body mb-5">
                  <MapPin size={13} strokeWidth={1.5} /> {p.location}
                </p>
                <div className="flex items-center gap-6 text-ink-soft text-[13px] font-body mb-6">
                  <span className="flex items-center gap-2"><Bed size={15} strokeWidth={1.5} /> {p.beds} Beds</span>
                  <span className="flex items-center gap-2"><Bath size={15} strokeWidth={1.5} /> {p.baths} Baths</span>
                  <span className="flex items-center gap-2"><Maximize size={15} strokeWidth={1.5} /> {p.sqft.toLocaleString()} Sq Ft</span>
                </div>
                <div className="flex items-center justify-between pt-5 border-t border-parchment/60">
                  <span className="text-[11px] font-body font-medium text-taupe tracking-wide">Lot: {p.lot}</span>
                  <span className="text-[11px] font-body font-semibold text-ink tracking-wide group-hover:text-ocean-deep transition-colors">View Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
