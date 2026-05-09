import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { services } from '../../constants';
import { Button } from '../ui/neon-button';

interface NavbarProps {
  currentPage: string;
  setPage: (page: string) => void;
}

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Our Services', id: 'services', hasMegaMenu: true },
    { name: 'Our Team', id: 'team' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setPage(id);
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-2xl py-4 border-b border-gold/10' : 'bg-black/20 py-8 border-b border-gold/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="cursor-pointer flex items-center group font-display"
          onClick={() => handleNavClick('home')}
        >
          <span className="text-[#FFD700] font-bold text-2xl tracking-tighter">ZK</span>
          <span className="font-semibold text-2xl tracking-tighter uppercase text-white ml-2">Elite</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10 text-sm font-medium tracking-wide uppercase">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className="relative group"
              onMouseEnter={() => link.hasMegaMenu && setIsMegaMenuOpen(true)}
              onMouseLeave={() => link.hasMegaMenu && setIsMegaMenuOpen(false)}
            >
              <button
                onClick={() => !link.hasMegaMenu && handleNavClick(link.id)}
                className={`transition-colors hover:text-gold flex items-center gap-1 ${
                  currentPage === link.id ? 'text-gold' : 'text-white'
                }`}
              >
                {link.name}
                {link.hasMegaMenu && <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />}
              </button>
              
              {/* Animated underline */}
              {currentPage === link.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              {/* Mega Menu */}
              {link.hasMegaMenu && (
                <AnimatePresence>
                  {isMegaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="absolute top-full left-1/2 -translate-x-[40%] pt-6 w-[800px]"
                    >
                      <div className="bg-[#0A0A0A] border border-gold/15 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(255,215,0,0.1)]">
                        <div className="grid grid-cols-4 gap-4 p-8 relative overflow-hidden">
                          {/* Grain texture effect in mega menu */}
                          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                          
                          {services.map((service) => (
                            <div
                              key={service.id}
                              className="group/card cursor-pointer p-4 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-gold/10"
                              onClick={() => handleNavClick('services')}
                            >
                              <service.icon className="text-gold mb-3 transition-transform group-hover/card:scale-110" size={20} />
                              <h4 className="text-white font-bold text-sm mb-1">{service.name}</h4>
                              <p className="text-white/50 text-xs leading-relaxed">{service.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-gold p-4 flex justify-center">
                          <Button 
                            onClick={() => handleNavClick('services')}
                            variant="ghost"
                            neon={false}
                            className="text-black hover:text-black/80 text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                          >
                            🚀 Start Your Project <ArrowRight size={14} />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden lg:block">
          <Button
            onClick={() => handleNavClick('contact')}
            variant="outline"
            className="px-6 py-2"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[1000] lg:hidden flex flex-col items-center justify-center space-y-8"
          >
            <button
              className="absolute top-8 right-8 text-white hover:text-gold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-3xl font-bold font-display ${
                  currentPage === link.id ? 'text-gold' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}

            <Button
              onClick={() => handleNavClick('contact')}
              variant="solid"
              size="lg"
              className="px-10 py-4 mt-8"
            >
              Get a Quote
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
