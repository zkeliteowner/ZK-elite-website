import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Globe, Facebook, Instagram, Linkedin, Send, ChevronDown, Plus, Minus } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { GlowCard } from '../components/ui/spotlight-card';
import { Button } from '../components/ui/neon-button';

const faqs = [
  { q: 'How long does a website project take?', a: 'Typically 7–21 days depending on the scope and complexity of the project.' },
  { q: 'Do you work with international clients?', a: 'Absolutely! We serve clients from Pakistan, USA, UK, UAE, Canada, and beyond.' },
  { q: 'What payment methods do you accept?', a: 'We accept bank transfers, PayPal, Wise, and other payment methods based on client location.' },
  { q: 'Will I own full rights to my project?', a: 'Yes. Upon final payment, all project files, code, and assets are transferred to you.' },
  { q: 'Do you offer post-launch support?', a: 'Yes, we offer maintenance packages and ongoing support for all delivered projects.' },
];

interface ContactPageProps {
  setPage?: (page: string) => void;
}

export default function ContactPage({ setPage }: ContactPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 2000);
  };

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="px-6 py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from- gold/5 via-transparent to-transparent -z-10" />
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-8xl font-black font-display text-white mb-6 uppercase tracking-tighter"
        >
          Let's Work <span className="text-gold">Together</span>
        </motion.h1>
        <p className="text-white/60 text-xl font-light italic max-w-2xl mx-auto">
          "Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours."
        </p>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Column */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-display uppercase tracking-widest text-gold opacity-50">Contact Info</h2>
              
              <div className="space-y-6">
                <a href="mailto:contact@zkelite.com" className="flex items-center gap-6 group">
                  <GlowCard customSize className="w-14 h-14 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <Mail size={24} className="relative z-10" />
                  </GlowCard>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-1">Email</div>
                    <div className="text-lg font-bold">contact@zkelite.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-6 group">
                  <GlowCard customSize className="w-14 h-14 flex items-center justify-center text-gold">
                    <MapPin size={24} className="relative z-10" />
                  </GlowCard>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-1">Location</div>
                    <div className="text-lg font-bold">Okara, Pakistan</div>
                  </div>
                </div>

                <a href="https://zkelite.com" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                  <GlowCard customSize className="w-14 h-14 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <Globe size={24} className="relative z-10" />
                  </GlowCard>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-1">Website</div>
                    <div className="text-lg font-bold">zkelite.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-display uppercase tracking-widest text-gold opacity-50">Follow Us</h2>
              <div className="flex gap-6">
                 {[
                   { icon: Facebook, link: 'https://facebook.com/share/p/1DsoFtQ6jr/' },
                   { icon: Instagram, link: 'https://instagram.com/zkelite' },
                   { icon: Linkedin, link: 'https://linkedin.com/company/zkelite' }
                 ].map((social, i) => (
                   <a 
                     key={i}
                     href={social.link}
                     target="_blank"
                     rel="noreferrer"
                     className="w-16 h-16 border border-white/10 flex items-center justify-center text-white hover:text-black hover:bg-gold hover:border-gold transition-all duration-300"
                   >
                     <social.icon size={28} />
                   </a>
                 ))}
              </div>
            </div>

            <GlowCard customSize className="h-80 rounded-2xl overflow-hidden p-2">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109266.08272658865!2d73.43572886738281!3d30.812328198424263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39229783f980753b%3A0xc3f8e5e74c84ad6a!2sOkara%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715200000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(80%) grayscale(1)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </GlowCard>
          </div>

          {/* Form Column */}
          <GlowCard customSize className="p-10 md:p-16 relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] rounded-2xl overflow-hidden" />
            
            <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-all text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-all text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Phone Number (Optional)</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-all text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Service Required</label>
                  <select className="w-full bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-all text-white appearance-none">
                    <option className="bg-black">Web Development</option>
                    <option className="bg-black">App Development</option>
                    <option className="bg-black">Shopify Store</option>
                    <option className="bg-black">Graphic Design</option>
                    <option className="bg-black">Digital Marketing</option>
                    <option className="bg-black">Video Editing</option>
                    <option className="bg-black">SEO Optimization</option>
                    <option className="bg-black">Content Writing</option>
                    <option className="bg-black">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Project Budget</label>
                <select className="w-full bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-all text-white appearance-none">
                  <option className="bg-black">Under $500</option>
                  <option className="bg-black">$500 – $1,000</option>
                  <option className="bg-black">$1,000 – $5,000</option>
                  <option className="bg-black">$5,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Message / Project Brief</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 p-4 focus:border-gold outline-none transition-all text-white resize-none" />
              </div>

              <Button 
                type="submit"
                disabled={formStatus !== 'idle'}
                variant="solid"
                size="lg"
                className="w-full py-6 flex items-center justify-center gap-4 disabled:opacity-50"
              >
                {formStatus === 'idle' ? (
                  <>Send Message <Send size={20} /></>
                ) : formStatus === 'sending' ? (
                  <>Sending...</>
                ) : (
                  <>Message Sent! 🚀</>
                )}
              </Button>
            </form>
          </GlowCard>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-display text-center mb-20 uppercase tracking-widest opacity-20">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden glass-card">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-xl font-bold">{faq.q}</span>
                  {openFaq === i ? <Minus size={20} className="text-gold" /> : <Plus size={20} className="text-gold" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-white/50 leading-relaxed text-lg">
                         {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Ticker */}
      <div className="py-20 bg-gold/[0.02] border-y border-white/5 overflow-hidden">
        <motion.div 
           animate={{ x: [0, -1000] }}
           transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
           className="flex whitespace-nowrap gap-12"
        >
          {Array(20).fill(0).map((_, i) => (
            <span key={i} className="text-[12vw] font-black font-display opacity-5 text-gold tracking-tighter">
              • DESIGN • CODE • BRAND • SCALE • GROW •
            </span>
          ))}
        </motion.div>
      </div>

      <div className="py-20 text-center">
         <h2 className="text-5xl md:text-7xl font-black font-display text-gold mb-4 tracking-tighter uppercase italic">START A PROJECT WITH ZKELITE →</h2>
      </div>
    </div>
  );
}
