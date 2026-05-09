import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, Users, Briefcase, Calendar, Award, Zap } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { services } from '../constants';
import { useState, useEffect } from 'react';
import CircularTestimonials from '../components/ui/circular-testimonials';
import { GlowCard } from '../components/ui/spotlight-card';
import { HeroGeometric } from '../components/ui/shape-landing-hero';
import { Button } from '../components/ui/neon-button';

const stats = [
  { label: 'Projects Completed', value: 120 },
  { label: 'Happy Clients', value: 50 },
  { label: 'Years Experience', value: 3 },
  { label: 'Core Services', value: 8 },
];

const projects = [
  { 
    name: 'Pureglow', 
    tag: 'E-Commerce', 
    desc: 'A premium beauty and cosmetics platform.', 
    link: 'https://pureglow.rf.gd',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop'
  },
  { 
    name: 'Mera Mustaqbil', 
    tag: 'EdTech', 
    desc: 'Impactful digital platform to empower students.', 
    link: 'https://meramustakbil.com',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop'
  },
  { 
    name: 'Ussam Tech', 
    tag: 'Portfolio', 
    desc: 'Modern dynamic portal for tech agency.', 
    link: 'https://ussamtech.site',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop'
  },
  { 
    name: 'Genzedia', 
    tag: 'Ecosystem', 
    desc: 'High-performance digital ecosystem.', 
    link: 'https://genzedia.com',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
  },
];

const steps = [
  { num: '01', title: 'Discover', desc: 'Idea & Strategy' },
  { num: '02', title: 'Design', desc: 'Visual Identity' },
  { num: '03', title: 'Develop', desc: 'Core Architecture' },
  { num: '04', title: 'Testing', desc: 'Quality Assurance' },
  { num: '05', title: 'Launch', desc: 'Growth & Marketing' },
];

interface HomeProps {
  setPage: (page: string) => void;
}

export default function Home({ setPage }: HomeProps) {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const words = ['Business', 'Brand', 'Store', 'Revenue'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Geometric Background */}
      <HeroGeometric
        badge="Elite Digital Agency"
        title1="Elevate Your"
        title2="Digital Vision"
      >
        <section className="pt-40 pb-20 px-6 relative z-10 w-full">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono text-gold uppercase tracking-[0.3em] font-bold">[ PREMIUM SOLUTIONS ]</span>
                <div className="h-[1px] w-12 bg-gold/30" />
              </div>
              
              <h1 className="hero-heading mb-8">
                Elevate Your <br />
                <div className="flex flex-col md:flex-row md:items-center md:gap-4 h-[1em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={words[activeWordIndex]}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      className="text-gold block"
                    >
                      {words[activeWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="hidden md:inline">Brand</span>
                </div>
                To Elite Levels
              </h1>

              <p className="text-white/50 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light">
                From targeted marketing campaigns to seamless e-commerce solutions, we provide everything you need to grow your digital empire.
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-16">
                <Button 
                  onClick={() => setPage('contact')}
                  variant="solid"
                  size="lg"
                >
                  Start Your Project <ArrowRight size={18} className="inline ml-2" />
                </Button>
                <Button 
                  onClick={() => setPage('services')}
                  variant="outline"
                  size="lg"
                >
                  Our Services
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-8 border-t border-white/10">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-gold font-black text-2xl mb-1">{stat.value}+</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative lg:-mt-16"
            >
              <div className="hero-3d-canvas h-[500px] md:h-[600px] w-full flex items-center justify-center rounded-2xl bg-transparent relative group overflow-hidden">
                <Spline 
                  scene="https://prod.spline.design/G8PVxEmlvYH3g3fI/scene.splinecode"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#030303]/80 pointer-events-none" />
              </div>
              
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em]">Scroll Down</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </HeroGeometric>

      {/* Marquee Strip */}
      <section className="bg-gold py-6 transform -rotate-1 translate-y-2 relative z-20">
        <motion.div
           animate={{ x: [0, -2000] }}
           transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
           className="flex whitespace-nowrap gap-16"
        >
          {Array(10).fill(0).map((_, i) => (
            <span key={i} className="text-sm md:text-base font-black text-black flex items-center gap-16 uppercase tracking-tighter">
              • WEB DEVELOPMENT • APP DEVELOPMENT • SHOPIFY STORES • GRAPHIC DESIGN • DIGITAL MARKETING • VIDEO EDITING • SEO • CONTENT WRITING
            </span>
          ))}
        </motion.div>
      </section>

      {/* About Teaser */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-gold text-[10px] font-mono font-bold uppercase tracking-[0.4em]">[ OUR STORY ]</span>
              <div className="h-[1px] w-12 bg-gold/20" />
            </div>
            <h2 className="text-6xl md:text-7xl font-black font-display mb-10 leading-[0.9] uppercase tracking-tighter">
              Born in Pakistan,<br /><span className="text-gold">Built for the World.</span>
            </h2>
            <div className="space-y-6 text-white/50 leading-relaxed mb-12 text-lg font-light">
              <p>
                The inception of ZKElite wasn't a mere coincidence; it was the manifestation of a shared, ambitious dream. Born in the heart of Pakistan, in the city of Okara, this agency came to life when passionate Web developers, Designers & Market Experts joined forces.
              </p>
              <p>
                Our foundation was laid under the visionary supervision of <span className="text-white font-bold italic">Sir Zaid</span>, a highly experienced developer who instilled in us the philosophy that every project is not merely code, but a client's hard-earned business and dream.
              </p>
            </div>
            <Button 
              onClick={() => setPage('about')}
              variant="outline"
              className="px-10"
            >
              Read More <ArrowRight size={18} className="inline ml-2" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <GlowCard customSize className="aspect-[4/3] w-full p-4 group">
              <div className="w-full h-full rounded-xl relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                  alt="ZKElite Agency Office" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-transparent mix-blend-overlay" />
              </div>
            </GlowCard>
            <div className="absolute -bottom-8 -left-8 z-20">
              <GlowCard customSize className="p-8 rounded-2xl hidden md:block border-glow">
                <div className="text-4xl font-black font-display text-gold">120+</div>
                <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-2 font-bold">Global Success Stories</div>
              </GlowCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-40 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-24 text-center">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6">WORKFLOW</span>
            <h2 className="text-5xl md:text-6xl font-bold font-display mb-4 uppercase tracking-tighter">Our Digital Workflow</h2>
            <div className="w-24 h-[1px] bg-gold/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
            {/* Animated line */}
            <div className="absolute top-[138px] left-0 w-full h-[1px] bg-gold/10 hidden md:block" />
            
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group px-6 pt-24 pb-12 flex flex-col items-center text-center hover:bg-gold/5 transition-colors"
              >
                <div className="text-7xl font-black font-display text-gold/5 absolute top-10 group-hover:text-gold/15 transition-all">
                  {step.num}
                </div>
                <div className="w-4 h-4 bg-black border-2 border-gold rounded-full mb-12 relative z-10 group-hover:bg-gold transition-colors shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
                <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24 gap-8 flex-wrap">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] font-mono">[ EXPERTISE ]</span>
                <div className="h-[1px] w-12 bg-gold/20" />
              </div>
              <h2 className="text-6xl md:text-8xl font-black font-display uppercase tracking-[-0.05em] leading-[0.9]">Our Core <br /><span className="text-gold">Services</span></h2>
            </div>
            <Button 
              onClick={() => setPage('services')}
              variant="outline"
            >
              Explore All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.slice(0, 4).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="group"
              >
                <GlowCard customSize className="p-12 h-full transition-all flex flex-col justify-between min-h-[450px]">
                  <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                     <service.icon size={150} className="text-gold" />
                  </div>
                  <div>
                    <div className="w-20 h-20 bg-gold/5 flex items-center justify-center rounded-2xl mb-10 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                      <service.icon size={36} className="text-gold group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">{service.name}</h3>
                    <p className="text-white/50 text-lg mb-10 leading-relaxed font-light">
                      {service.details}
                    </p>
                  </div>
                  <button 
                    onClick={() => setPage('services')}
                    className="flex items-center gap-3 text-gold text-sm font-bold uppercase tracking-widest group/btn w-fit relative z-10"
                  >
                    Explore Service <ArrowRight size={18} className="group-hover/btn:translate-x-3 transition-transform" />
                  </button>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WE BUILD - Giant Text */}
      <section className="py-60 bg-black flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.03)_0%,transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center relative z-10"
        >
          <h2 className="text-[15vw] font-black font-display leading-none opacity-5 tracking-tighter select-none">
            WE BUILD
          </h2>
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="text-5xl md:text-9xl font-black font-display text-gold mt-[-8vw] md:mt-[-100px] drop-shadow-[0_20px_50px_rgba(255,215,0,0.2)]"
          >
            Digital Empires
          </motion.div>
          <div className="text-white/30 text-lg md:text-2xl uppercase tracking-[0.8em] font-medium mt-12 pl-8">
            Strategy · Identity · Growth
          </div>
        </motion.div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gold/20" />
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] font-mono">[ PORTFOLIO ]</span>
              <div className="h-[1px] w-12 bg-gold/20" />
            </div>
            <h2 className="text-6xl md:text-[100px] font-black font-display uppercase tracking-tighter leading-[0.9]">Recent <span className="text-gold">Projects</span></h2>
            <p className="text-white/40 mt-10 max-w-xl mx-auto font-light text-xl italic leading-relaxed">Delivering high-performance digital ecosystems for visionary brands.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl aspect-[16/11] bg-surface-dark border border-white/5 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-90 group-hover:bg-black/60 transition-colors duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                  />
                </div>

                <div className="absolute bottom-0 left-0 p-12 z-20 w-full transform transition-all duration-500 group-hover:-translate-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-mono text-gold border border-gold/30 px-3 py-1 uppercase tracking-[0.2em] block">{project.tag}</span>
                  </div>
                  <h3 className="text-4xl font-bold mb-4 tracking-tight">{project.name}</h3>
                  <p className="text-white/40 text-lg max-w-sm mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto font-light">
                    {project.desc}
                  </p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-gold text-xs font-black uppercase tracking-[0.2em] border-b border-gold/30 pb-2 w-fit hover:border-gold hover:gap-5 transition-all"
                  >
                    Visit Project <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/10 px-6 bg-gold/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-16 text-center md:text-left">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 min-w-[200px]"
            >
              <div className="text-6xl md:text-8xl font-black font-display text-gold mb-3 tracking-tighter drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                {stat.value}+
              </div>
              <div className="text-xs uppercase tracking-[0.4em] text-white/50 font-bold ml-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 px-6 bg-surface-dark/30 relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gold/20" />
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] font-mono">[ CLIENT VOICES ]</span>
              <div className="h-[1px] w-12 bg-gold/20" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter">Client Stories</h2>
          </div>
          
          <CircularTestimonials 
            testimonials={[
              {
                quote: "ZKElite transformed our e-commerce presence. Their attention to Shopify details and high-end aesthetics set us apart in a crowded market. Truly elite service!",
                name: "Tamar Mendelson",
                designation: "Pureglow Founder",
                src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop"
              },
              {
                quote: "The technical expertise of Sir Zaid and his team is unmatched. They built a secure, scalable ecosystem for Genzedia that handles our growth effortlessly.",
                name: "Joe Charlescraft",
                designation: "Genzedia CTO",
                src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop"
              },
              {
                quote: "Impeccable design and flawless code. ZKElite didn't just build a website; they crafted a brand identity that perfectly resonates with our students.",
                name: "Martina Edelweist",
                designation: "Mera Mustaqbil Director",
                src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop"
              }
            ]}
            autoplay={true}
            colors={{
              name: "#FFD700",
              designation: "rgba(255,255,255,0.4)",
              testimony: "#FFFFFF",
              arrowBackground: "rgba(255,215,0,0.1)",
              arrowForeground: "#FFD700",
              arrowHoverBackground: "#FFD700",
            }}
            fontSizes={{
              name: "2rem",
              designation: "0.75rem",
              quote: "1.125rem",
            }}
          />
        </div>
      </section>

      {/* Final Hero CTA */}
      <section className="py-60 px-6 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 blur-[180px] rounded-full -z-10 animate-pulse" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-[120px] font-black font-display mb-12 leading-[0.8] uppercase tracking-[-0.05em]">
              Ready to <br /><span className="text-gold">Go Elite?</span>
            </h2>
            <p className="text-white/40 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Let's turn your vision into a powerful digital reality. Your partner from strategy to market dominance.
            </p>
            <Button 
              onClick={() => setPage('contact')}
              variant="solid"
              size="xl"
              className="mx-auto shadow-[0_20px_80px_rgba(255,215,0,0.15)] group"
            >
              Start Your Project <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
