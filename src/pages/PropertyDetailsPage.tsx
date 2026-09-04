import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Bed, Bath, Maximize, MapPin, ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { properties } from "../data/properties";

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === Number(id));

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "I am interested in " + (property?.name || "this property") + " and would like more information."
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!property) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center pt-24 pb-16 px-6">
        <h1 className="text-3xl font-editorial text-ink mb-4">Property Not Found</h1>
        <Link to="/" className="text-ocean-deep hover:text-ink transition-colors underline underline-offset-4">Return Home</Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 400);
  };

  const update = (field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formState.firstName && formState.email && formState.message;

  return (
    <div className="bg-cream min-h-screen pb-20">
      {/* Navigation Bar Spacing */}
      <div className="h-24 lg:h-32"></div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Link to="/" className="inline-flex items-center gap-2 text-taupe hover:text-ink transition-colors mb-8 text-sm font-body font-medium uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Listings
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 lg:mb-24">
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-ink-deep/10 aspect-[4/3] lg:aspect-auto lg:h-[600px]">
            <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex flex-col justify-center h-full">
            <div className="flex flex-wrap gap-3 mb-6">
              {property.tags.map((t) => (
                <span key={t} className="rounded-full border border-parchment text-ink-soft text-[10px] font-body font-bold tracking-[0.15em] uppercase px-4 py-1.5">{t}</span>
              ))}
              <span className="rounded-full bg-ocean-deep/10 text-ocean-deep text-[10px] font-body font-bold tracking-[0.15em] uppercase px-4 py-1.5">{property.status}</span>
            </div>

            <h1 className="text-editorial text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em] text-ink mb-6">
              {property.name}
            </h1>
            
            <p className="text-editorial text-4xl text-ocean-deep mb-8">{property.price}</p>
            
            <p className="flex items-center gap-2 text-ink-soft text-lg font-body mb-8">
              <MapPin size={20} strokeWidth={1.5} className="text-taupe" /> {property.location}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-parchment/60 mb-10">
              <div>
                <span className="block text-[11px] font-body font-semibold tracking-[0.15em] uppercase text-taupe mb-2 flex items-center gap-1.5"><Bed size={14} /> Beds</span>
                <span className="text-2xl font-editorial text-ink">{property.beds}</span>
              </div>
              <div>
                <span className="block text-[11px] font-body font-semibold tracking-[0.15em] uppercase text-taupe mb-2 flex items-center gap-1.5"><Bath size={14} /> Baths</span>
                <span className="text-2xl font-editorial text-ink">{property.baths}</span>
              </div>
              <div>
                <span className="block text-[11px] font-body font-semibold tracking-[0.15em] uppercase text-taupe mb-2 flex items-center gap-1.5"><Maximize size={14} /> Sq Ft</span>
                <span className="text-2xl font-editorial text-ink">{property.sqft.toLocaleString()}</span>
              </div>
              <div>
                <span className="block text-[11px] font-body font-semibold tracking-[0.15em] uppercase text-taupe mb-2 flex items-center gap-1.5">Lot</span>
                <span className="text-2xl font-editorial text-ink">{property.lot}</span>
              </div>
            </div>

            <p className="text-ink-soft font-body text-lg leading-relaxed mb-8">
              {property.description}
            </p>

            {property.features && (
              <div>
                <span className="block text-[11px] font-body font-semibold tracking-[0.15em] uppercase text-taupe mb-4">Notable Features</span>
                <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  {property.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-ink-soft font-body text-[15px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-coastal-gold"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Inquiry Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-14 shadow-2xl shadow-ink/5 max-w-[800px] mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-coastal-gold/10 rounded-bl-full"></div>
          
          {isSubmitted ? (
            <div className="text-center py-10 relative z-10">
              <CheckCircle2 size={64} className="text-coastal-gold mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-editorial text-3xl lg:text-4xl text-ink mb-4">Inquiry Received.</h3>
              <p className="text-ink-soft font-body text-lg max-w-[400px] mx-auto leading-relaxed">
                Thank you for your interest in {property.name}. I will review your message and get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-editorial text-ink mb-2">Inquire About This Property</h3>
              <p className="text-ink-soft font-body mb-8">Schedule a private showing or request more details about {property.location}.</p>
              
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-taupe">First Name*</label>
                    <input required type="text" id="firstName" value={formState.firstName} onChange={(e) => update("firstName", e.target.value)} className="w-full bg-parchment/30 border border-parchment rounded-xl px-5 py-4 font-body text-ink focus:outline-none focus:border-coastal-gold focus:bg-white transition-colors" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-taupe">Last Name</label>
                    <input type="text" id="lastName" value={formState.lastName} onChange={(e) => update("lastName", e.target.value)} className="w-full bg-parchment/30 border border-parchment rounded-xl px-5 py-4 font-body text-ink focus:outline-none focus:border-coastal-gold focus:bg-white transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-taupe">Email Address*</label>
                    <input required type="email" id="email" value={formState.email} onChange={(e) => update("email", e.target.value)} className="w-full bg-parchment/30 border border-parchment rounded-xl px-5 py-4 font-body text-ink focus:outline-none focus:border-coastal-gold focus:bg-white transition-colors" placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-taupe">Phone Number</label>
                    <input type="tel" id="phone" value={formState.phone} onChange={(e) => update("phone", e.target.value)} className="w-full bg-parchment/30 border border-parchment rounded-xl px-5 py-4 font-body text-ink focus:outline-none focus:border-coastal-gold focus:bg-white transition-colors" placeholder="(555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-taupe">Message*</label>
                  <textarea required id="message" value={formState.message} onChange={(e) => update("message", e.target.value)} rows={4} className="w-full bg-parchment/30 border border-parchment rounded-xl px-5 py-4 font-body text-ink focus:outline-none focus:border-coastal-gold focus:bg-white transition-colors resize-none"></textarea>
                </div>

                <button type="submit" disabled={!isFormValid} className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-ink text-ivory px-10 py-5 text-sm font-body font-semibold tracking-wide hover:bg-ocean-deep transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                  Request Information <ArrowRight size={16} strokeWidth={2} />
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
