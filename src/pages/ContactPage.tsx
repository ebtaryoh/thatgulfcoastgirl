import { Mail, Phone, MapPin, ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";
import FinalCTA from "../components/FinalCTA";

export default function ContactPage() {
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
                    <Instagram size={18} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-coastal-gold hover:border-coastal-gold hover:text-ink-deep transition-all">
                    <Facebook size={18} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-coastal-gold hover:border-coastal-gold hover:text-ink-deep transition-all">
                    <Linkedin size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 lg:p-14 shadow-2xl shadow-ink/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-coastal-gold/10 rounded-bl-full"></div>
                
                <h3 className="text-2xl font-editorial text-ink mb-8">Send a Message</h3>
                
                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-taupe">First Name</label>
                      <input type="text" id="firstName" className="w-full bg-parchment/30 border border-parchment rounded-xl px-5 py-4 font-body text-ink focus:outline-none focus:border-coastal-gold focus:bg-white transition-colors" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-taupe">Last Name</label>
                      <input type="text" id="lastName" className="w-full bg-parchment/30 border border-parchment rounded-xl px-5 py-4 font-body text-ink focus:outline-none focus:border-coastal-gold focus:bg-white transition-colors" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-taupe">Email Address</label>
                      <input type="email" id="email" className="w-full bg-parchment/30 border border-parchment rounded-xl px-5 py-4 font-body text-ink focus:outline-none focus:border-coastal-gold focus:bg-white transition-colors" placeholder="jane@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-taupe">Phone Number</label>
                      <input type="tel" id="phone" className="w-full bg-parchment/30 border border-parchment rounded-xl px-5 py-4 font-body text-ink focus:outline-none focus:border-coastal-gold focus:bg-white transition-colors" placeholder="(555) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="block text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-taupe">I am interested in</label>
                    <div className="relative">
                      <select id="interest" className="w-full appearance-none bg-parchment/30 border border-parchment rounded-xl px-5 py-4 font-body text-ink focus:outline-none focus:border-coastal-gold focus:bg-white transition-colors">
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
                    <label htmlFor="message" className="block text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-taupe">Message</label>
                    <textarea id="message" rows={4} className="w-full bg-parchment/30 border border-parchment rounded-xl px-5 py-4 font-body text-ink focus:outline-none focus:border-coastal-gold focus:bg-white transition-colors resize-none" placeholder="Tell me a bit about what you're looking for..."></textarea>
                  </div>

                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-ink text-ivory px-10 py-5 text-sm font-body font-semibold tracking-wide hover:bg-ocean-deep transition-colors mt-4">
                    Submit Inquiry <ArrowRight size={16} strokeWidth={2} />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
