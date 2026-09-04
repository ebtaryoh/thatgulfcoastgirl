import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomeValue() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ street: "", city: "", state: "FL", zip: "", first: "", last: "", email: "", phone: "" });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const canProceed = () => {
    if (step === 1) return form.street && form.city && form.zip;
    if (step === 2) return true; // Just defaults
    if (step === 3) return form.first && form.last && form.email && form.phone;
    return true;
  };

  if (done) {
    return (
      <section id="home-value" className="bg-ink text-ivory py-28 lg:py-40">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <CheckCircle2 size={64} className="text-coastal-gold mx-auto mb-8" strokeWidth={1.5} />
          <h2 className="text-editorial text-4xl lg:text-5xl tracking-[-0.03em] mb-6">Valuation Request Sent.</h2>
          <p className="text-ivory/70 font-body text-lg leading-relaxed mb-4">I will review your property details and reach out within 24 hours with a personalized market analysis and estimated value range.</p>
          <p className="text-ivory/40 text-sm font-body tracking-wide uppercase">No obligation. Just insight.</p>
        </div>
      </section>
    );
  }

  const inputClass = "w-full bg-parchment/30 border border-parchment rounded-xl px-5 py-4 font-body text-ink focus:outline-none focus:border-coastal-gold focus:bg-white transition-colors";
  const labelClass = "block text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-taupe mb-2";

  return (
    <section id="home-value" className="bg-cream py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="text-[10px] font-body font-semibold tracking-[0.22em] uppercase text-taupe mb-4 block">Valuation</span>
            <h2 className="text-editorial text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-[-0.045em] text-ink mb-6">WHAT COULD YOUR<br /><span className="italic font-normal text-ocean-deep">HOME BE WORTH?</span></h2>
            <p className="text-ink-soft font-body text-base lg:text-lg leading-relaxed mb-12 max-w-[500px]">Get an expert analysis of what your home could be worth in today's market — with strategic guidance on positioning, pricing, and timing.</p>

            <div className="max-w-[320px]">
              <div className="flex items-center gap-3 mb-4">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`h-1.5 rounded-full flex-1 transition-colors duration-500 ${step >= s ? "bg-ocean-deep" : "bg-parchment/70"}`} />
                ))}
              </div>
              <p className="text-taupe text-[11px] font-body tracking-wider uppercase font-semibold">Step {step} of 3</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-14 shadow-2xl shadow-ink/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-coastal-gold/10 rounded-bl-full"></div>
            
            <form className="relative z-10" onSubmit={(e) => e.preventDefault()}>
              {step === 1 && (
                <div className="space-y-6">
                  <div className="mb-8">
                    <h3 className="text-editorial text-3xl text-ink mb-2">Property Address</h3>
                    <p className="text-taupe text-sm font-body">Where is the property located?</p>
                  </div>
                  
                  <div>
                    <label htmlFor="street" className={labelClass}>Street Address</label>
                    <input id="street" type="text" value={form.street} onChange={(e) => update("street", e.target.value)} className={inputClass} placeholder="123 Gulf Coast Lane" />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="city" className={labelClass}>City</label>
                      <input id="city" type="text" value={form.city} onChange={(e) => update("city", e.target.value)} className={inputClass} placeholder="Clearwater" />
                    </div>
                    <div>
                      <label htmlFor="state" className={labelClass}>State</label>
                      <input id="state" type="text" value={form.state} onChange={(e) => update("state", e.target.value)} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="zip" className={labelClass}>ZIP Code</label>
                    <input id="zip" type="text" value={form.zip} onChange={(e) => update("zip", e.target.value)} className={inputClass} placeholder="33767" />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="mb-8">
                    <h3 className="text-editorial text-3xl text-ink mb-2">Property Details</h3>
                    <p className="text-taupe text-sm font-body">Tell us a bit about the home.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label htmlFor="beds" className={labelClass}>Beds</label>
                      <input id="beds" type="number" min={1} defaultValue={3} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="baths" className={labelClass}>Baths</label>
                      <input id="baths" type="number" min={1} step={0.5} defaultValue={2} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="sqft" className={labelClass}>Sq Ft</label>
                      <input id="sqft" type="number" defaultValue={2100} className={inputClass} />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="mb-8">
                    <h3 className="text-editorial text-3xl text-ink mb-2">Your Information</h3>
                    <p className="text-taupe text-sm font-body">Where should Amanda send the valuation?</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="first" className={labelClass}>First Name</label>
                      <input id="first" type="text" value={form.first} onChange={(e) => update("first", e.target.value)} className={inputClass} placeholder="Jane" />
                    </div>
                    <div>
                      <label htmlFor="last" className={labelClass}>Last Name</label>
                      <input id="last" type="text" value={form.last} onChange={(e) => update("last", e.target.value)} className={inputClass} placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone</label>
                    <input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} placeholder="(727) 452-7336" />
                  </div>
                  <p className="text-[11px] text-taupe font-body leading-relaxed mt-4">By submitting, you consent to being contacted by Home-Land Real Estate Inc. regarding your property valuation request. Your information is kept confidential.</p>
                </div>
              )}

              <div className="flex gap-4 mt-10 pt-8 border-t border-parchment/60">
                {step > 1 && (
                  <button onClick={() => setStep(step - 1)} className="rounded-xl border border-parchment text-ink-soft px-8 py-4 text-sm font-body font-semibold hover:border-ink hover:text-ink transition-colors">Back</button>
                )}
                <button
                  onClick={() => {
                    if (step < 3 && canProceed()) setStep(step + 1);
                    else if (step === 3 && canProceed()) setDone(true);
                  }}
                  disabled={!canProceed()}
                  className="ml-auto inline-flex items-center gap-2 rounded-xl bg-ink text-ivory px-10 py-4 text-sm font-body font-semibold tracking-wide hover:bg-ocean-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-xl shadow-ink/10"
                >
                  {step === 3 ? "Submit Request" : "Continue"} <ArrowRight size={16} strokeWidth={2} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
