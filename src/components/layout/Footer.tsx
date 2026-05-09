import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Send, ArrowRight } from 'lucide-react';
import { Button } from '../ui/neon-button';

interface FooterProps {
  setPage: (page: string) => void;
}

export default function Footer({ setPage }: FooterProps) {
  const handleNavClick = (id: string) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tickerItems = ['DESIGN', 'CODE', 'BRAND', 'SCALE', 'GROW'];

  return (
    <footer className="bg-black pt-20 border-t border-gold/10 relative overflow-hidden">
      {/* Ticker Strip */}
      <div className="bg-gold py-4 transform -rotate-1 relative z-20 overflow-hidden">
        <motion.div
           animate={{ x: [0, -1000] }}
           transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
           className="flex whitespace-nowrap"
        >
          {Array(20).fill(0).map((_, i) => (
            <span key={i} className="text-sm font-black text-black flex items-center mx-12 uppercase tracking-tighter">
              • WEB DEVELOPMENT • APP DEVELOPMENT • SHOPIFY STORES • GRAPHIC DESIGN • DIGITAL MARKETING • VIDEO EDITING • SEO • CONTENT WRITING
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Brand Column */}
        <div className="space-y-10">
          <div className="font-display flex items-center">
            <span className="text-[#FFD700] font-bold text-2xl tracking-tighter">ZK</span>
            <span className="font-semibold text-2xl tracking-tighter uppercase text-white ml-2">Elite</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light">
            Building Impact. Fueled by Tech. We turn your vision into a powerful digital reality from the heart of Pakistan.
          </p>
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] font-mono">[ NEWSLETTER ]</h4>
            <div className="flex bg-white/[0.03] border border-white/10 p-1 pl-4 hover:border-gold/30 transition-all rounded-full overflow-hidden">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-none outline-none text-[10px] flex-1 py-2 font-bold tracking-widest text-white"
              />
              <Button neon={false} className="bg-gold text-black px-4 py-2 hover:bg-amber-gold transition-colors font-black rounded-none border-none">
                <Send size={14} />
              </Button>
            </div>
          </div>
        </div>

        {/* Services Column */}
        <div className="lg:pl-10">
          <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
            Services
            <div className="h-[1px] w-8 bg-gold/30" />
          </h4>
          <ul className="space-y-5">
            {['WEB DEVELOPMENT', 'SHOPIFY STORES', 'GRAPHIC DESIGN', 'DIGITAL MARKETING', 'MOBILE APPS'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => handleNavClick('services')}
                  className="text-white/40 hover:text-gold text-[10px] font-bold uppercase tracking-widest transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Agency Column */}
        <div className="lg:pl-10">
          <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
            Agency
            <div className="h-[1px] w-8 bg-gold/30" />
          </h4>
          <ul className="space-y-5">
            {['Our Story', 'Meet the Team', 'Project FAQs', 'Terms of Service', 'Contact Us'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => {
                    const pageMap: Record<string, string> = {
                      'Our Story': 'about',
                      'Meet the Team': 'team',
                      'Project FAQs': 'contact',
                      'Contact Us': 'contact'
                    };
                    handleNavClick(pageMap[item] || 'home');
                  }}
                  className="text-white/40 hover:text-gold text-[10px] font-bold uppercase tracking-widest transition-colors"
                >
                  {item.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Column */}
        <div className="space-y-12">
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
              Connect
              <div className="h-[1px] w-8 bg-gold/30" />
            </h4>
            <div className="flex space-x-4">
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
                  className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-black hover:bg-gold hover:border-gold transition-all duration-500"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <Button 
            onClick={() => handleNavClick('contact')}
            variant="ghost"
            className="group flex flex-col items-start gap-4 p-0 bg-transparent hover:bg-transparent border-none"
          >
            <span className="text-gold/60 text-[10px] font-bold uppercase tracking-[0.3em] font-mono group-hover:text-gold transition-colors">[ HAVE A PROJECT? ]</span>
            <div className="text-white font-black text-xl tracking-tighter flex items-center gap-3 group-hover:gap-5 transition-all">
              LET'S TALK <ArrowRight size={24} className="text-gold" />
            </div>
          </Button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-12 py-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 font-bold uppercase tracking-[0.2em] gap-6 bg-black">
        <div>&copy; 2026 ZKElite. All rights reserved.</div>
        <div className="flex items-center gap-8">
          <span>OKARA, PAKISTAN</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-gold transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
