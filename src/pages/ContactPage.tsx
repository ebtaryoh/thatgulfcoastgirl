import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import FinalCTA from "../components/FinalCTA";

// Inline SVGs for brand icons removed from Lucide
const InstagramIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 400);
  };

  const update = (field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formState.firstName && formState.email && formState.message;

  return (
    <>
      <section className="bg-cream pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-parchment/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5">
              <span className="text-[10px] font-body font-semibold tracking-[0.25em] uppercase text-taupe mb-6 block">Get In Touch</span>
              <h1 className="text-editorial text-[clamp(3rem,6vw,5rem)] leading-[0.95] tracking-[-0.04em] text-ink mb-8">
                LET'S TALK<br />
                <span className="italic font-normal text-ocean-deep">REAL ESTATE.</span>
              </h1>
              <p className="text-ink-soft text-lg font-body leading-relaxed mb-12 max-w-[480px]">
                Whether you're looking to buy your dream waterfront property, sell your current home, or just have questions about the Gulf Coast market, I'm here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-parchment flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-ocean-deep" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-body font-semibold tracking-[0.15em] uppercase text-taupe mb-1">Direct Line</span>
                    <a href="tel:+17274527336" className="text-xl font-editorial text-ink hover:text-ocean-deep transition-colors">(727) 452-7336</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-parchment flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-ocean-deep" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-body font-semibold tracking-[0.15em] uppercase text-taupe mb-1">Email</span>
                    <a href="mailto:amanda@thatgulfcoastgirl.com" className="text-lg font-body text-ink hover:text-ocean-deep transition-colors">amanda@thatgulfcoastgirl.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-parchment flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-ocean-deep" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-body font-semibold tracking-[0.15em] uppercase text-taupe mb-1">Service Area</span>
                    <span className="text-lg font-body text-ink">Florida's Gulf Coast & Nature Coast</span>
                  </div>
                </div>
              </div>

              <div className="mt-14 pt-10 border-t border-parchment/60">
                <span className="block text-[11px] font-body font-semibold tracking-[0.15em] uppercase text-taupe mb-6">Follow the Lifestyle</span>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-coastal-gold hover:border-coastal-gold hover:text-ink-deep transition-all">
                    <InstagramIcon size={18} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-coastal-gold hover:border-coastal-gold hover:text-ink-deep transition-all">
                    <FacebookIcon size={18} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-coastal-gold hover:border-coastal-gold hover:text-ink-deep transition-all">
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 lg:p-14 shadow-2xl shadow-ink/5 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-coastal-gold/10 rounded-bl-full"></div>
                
                {isSubmitted ? (
                  <div className="text-center py-10 relative z-10">
                    <CheckCircle2 size={64} className="text-coastal-gold mx-auto mb-6" strokeWidth={1.5} />
                    <h3 className="text-editorial text-3xl lg:text-4xl text-ink mb-4">Inquiry Received.</h3>
                    <p className="text-ink-soft font-body text-lg max-w-[400px] mx-auto leading-relaxed">
                      Thank you for reaching out, {formState.firstName}. I will review your message and get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-editorial text-ink mb-8">Send a Message</h3>
                    
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
                        <label htmlFor="interest" className="block text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-taupe">I am interested in</label>
                        <div className="relative">
                          <select id="interest" value={formState.interest} onChange={(e) => update("interest", e.target.value)} className="w-full appearance-none bg-parchment/30 border border-parchment rounded-xl px-5 py-4 font-body text-ink focus:outline-none focus:border-coastal-gold focus:bg-white transition-colors">
                            <option value="">Select an option...</option>
                            <option value="buying">Buying a property</option>
                            <option value="selling">Selling my property</option>
                            <option value="relocating">Relocating to the area</option>
                            <option value="other">General Inquiry</option>
                          </select>
                          <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1.5L6 6.5L11 1.5" stroke="#878A86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-taupe">Message*</label>
                        <textarea required id="message" value={formState.message} onChange={(e) => update("message", e.target.value)} rows={4} className="w-full bg-parchment/30 border border-parchment rounded-xl px-5 py-4 font-body text-ink focus:outline-none focus:border-coastal-gold focus:bg-white transition-colors resize-none" placeholder="Tell me a bit about what you're looking for..."></textarea>
                      </div>

                      <button type="submit" disabled={!isFormValid} className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-ink text-ivory px-10 py-5 text-sm font-body font-semibold tracking-wide hover:bg-ocean-deep transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                        Submit Inquiry <ArrowRight size={16} strokeWidth={2} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
