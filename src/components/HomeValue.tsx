import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomeValue() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ street: "", city: "", state: "FL", zip: "", first: "", last: "", email: "", phone: "" });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const canProceed = () => {
    if (step === 1) return form.street && form.city && form.zip;
    if (step === 2) return form.first && form.last && form.email && form.phone;
    return true;
  };

  if (done) {
    return (
      <section id="home-value" className="bg-ink-deep text-ivory py-28 lg:py-36">
        <div className="mx-auto max-w-[560px] px-6 text-center">
          <CheckCircle2 size={56} className="text-coastal-gold mx-auto mb-6" strokeWidth={1} />
          <h2 className="text-editorial text-4xl lg:text-5xl tracking-[-0.03em] mb-4">Thank You.</h2>
          <p className="text-ivory/70 font-body text-base mb-3">Amanda will review your property details and reach out within 24 hours with a personalized market analysis and estimated value range.</p>
          <p className="text-ivory/40 text-sm font-body">No obligation. Just insight.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="home-value" className="bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <span className="text-[10px] font-body font-semibold tracking-[0.22em] uppercase text-taupe mb-4 block">Valuation</span>
            <h2 className="text-editorial text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-[-0.045em] text-ink mb-6">WHAT COULD YOUR<br /><span className="italic font-normal text-ocean-deep">HOME BE WORTH?</span></h2>
            <p className="text-ink-soft font-body text-base lg:text-lg leading-relaxed mb-8">Get an expert analysis of what your home could be worth in today's market — with strategic guidance on positioning, pricing, and timing.</p>

            <div className="flex items-center gap-3 mb-3">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`h-1.5 rounded-full flex-1 transition-colors duration-300 ${step >= s ? "bg-ink-deep" : "bg-parchment"}`} />
              ))}
            </div>
            <p className="text-taupe text-xs font-body">Step {step} of 3</p>
          </div>

          <div className="bg-cream rounded-3xl p-8 lg:p-10 border border-parchment/60 shadow-xl shadow-ink-deep/5">
            {step === 1 && (
              <div>
                <h3 className="text-editorial text-2xl text-ink mb-1">Property Address</h3>
                <p className="text-taupe text-sm font-body mb-6">Where is the property located?</p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="street" className="block text-[11.5px] font-body font-semibold text-ink-soft tracking-wide uppercase mb-1.5">Street Address</label>
                    <input id="street" type="text" value={form.street} onChange={(e) => update("street", e.target.value)} className="w-full bg-ivory border border-sand/70 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-coastal-gold transition-colors" placeholder="123 Gulf Coast Lane" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="city" className="block text-[11.5px] font-body font-semibold text-ink-soft tracking-wide uppercase mb-1.5">City</label>
                      <input id="city" type="text" value={form.city} onChange={(e) => update("city", e.target.value)} className="w-full bg-ivory border border-sand/70 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-coastal-gold transition-colors" placeholder="Brooksville" />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-[11.5px] font-body font-semibold text-ink-soft tracking-wide uppercase mb-1.5">State</label>
                      <input id="state" type="text" value={form.state} onChange={(e) => update("state", e.target.value)} className="w-full bg-ivory border border-sand/70 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-coastal-gold transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-[11.5px] font-body font-semibold text-ink-soft tracking-wide uppercase mb-1.5">ZIP Code</label>
                    <input id="zip" type="text" value={form.zip} onChange={(e) => update("zip", e.target.value)} className="w-full bg-ivory border border-sand/70 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-coastal-gold transition-colors" placeholder="34601" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-editorial text-2xl text-ink mb-1">Property Details</h3>
                <p className="text-taupe text-sm font-body mb-6">Tell us a bit about the home.</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label htmlFor="beds" className="block text-[11.5px] font-body font-semibold text-ink-soft tracking-wide uppercase mb-1.5">Beds</label>
                      <input id="beds" type="number" min={1} defaultValue={3} className="w-full bg-ivory border border-sand/70 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-coastal-gold transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="baths" className="block text-[11.5px] font-body font-semibold text-ink-soft tracking-wide uppercase mb-1.5">Baths</label>
                      <input id="baths" type="number" min={1} step={0.5} defaultValue={2} className="w-full bg-ivory border border-sand/70 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-coastal-gold transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="sqft" className="block text-[11.5px] font-body font-semibold text-ink-soft tracking-wide uppercase mb-1.5">Sq Ft</label>
                      <input id="sqft" type="number" defaultValue={2100} className="w-full bg-ivory border border-sand/70 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-coastal-gold transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-editorial text-2xl text-ink mb-1">Your Information</h3>
                <p className="text-taupe text-sm font-body mb-6">How can Amanda reach you?</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="first" className="block text-[11.5px] font-body font-semibold text-ink-soft tracking-wide uppercase mb-1.5">First Name</label>
                      <input id="first" type="text" value={form.first} onChange={(e) => update("first", e.target.value)} className="w-full bg-ivory border border-sand/70 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-coastal-gold transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="last" className="block text-[11.5px] font-body font-semibold text-ink-soft tracking-wide uppercase mb-1.5">Last Name</label>
                      <input id="last" type="text" value={form.last} onChange={(e) => update("last", e.target.value)} className="w-full bg-ivory border border-sand/70 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-coastal-gold transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11.5px] font-body font-semibold text-ink-soft tracking-wide uppercase mb-1.5">Email</label>
                    <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full bg-ivory border border-sand/70 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-coastal-gold transition-colors" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[11.5px] font-body font-semibold text-ink-soft tracking-wide uppercase mb-1.5">Phone</label>
                    <input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full bg-ivory border border-sand/70 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-coastal-gold transition-colors" placeholder="(727) 452-7336" />
                  </div>
                  <p className="text-[11px] text-taupe font-body leading-snug">By submitting, you consent to being contacted by Home-Land Real Estate Inc. regarding your property valuation request. Your information is kept confidential.</p>
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-8">
              {step > 1 && (
                <button onClick={() => setStep(step - 1)} className="rounded-xl border border-sand/60 text-ink-soft px-6 py-3.5 text-sm font-body font-medium hover:border-ink hover:text-ink transition-colors">Back</button>
              )}
              <button
                onClick={() => {
                  if (step < 3 && canProceed()) setStep(step + 1);
                  else if (step === 3 && canProceed()) setDone(true);
                }}
                disabled={!canProceed()}
                className="ml-auto inline-flex items-center gap-2 rounded-xl bg-ink text-ivory px-8 py-3.5 text-sm font-body font-semibold tracking-wide hover:bg-ocean-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-ink/10"
              >
                {step === 3 ? "Submit Request" : "Continue"} <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
