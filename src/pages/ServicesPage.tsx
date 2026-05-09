import { motion } from 'motion/react';
import { services } from '../constants';
import { CheckCircle2, Zap, Trophy, Users, Lightbulb, BarChart3, Globe2 } from 'lucide-react';
import { GlowCard } from '../components/ui/spotlight-card';
import { Button } from '../components/ui/neon-button';

interface ServicesPageProps {
  setPage: (page: string) => void;
}

const serviceImages: Record<string, string> = {
  'web-dev': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
  'app-dev': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
  'shopify': 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop',
  'graphic-design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
  'marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  'video': 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2070&auto=format&fit=crop',
  'seo': 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c20e?q=80&w=2069&auto=format&fit=crop',
  'content': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop'
};

export default function ServicesPage({ setPage }: ServicesPageProps) {
  const whyChooseUs = [
    { icon: Zap, title: 'Fast Delivery', desc: 'On-time project delivery without compromising quality.' },
    { icon: Trophy, title: 'Elite Quality', desc: 'International standard work from a passionate Pakistani team.' },
    { icon: Users, title: 'Client-First', desc: 'Your vision, our mission — transparent communication always.' },
    { icon: Lightbulb, title: 'Innovation', desc: 'Cutting-edge tools, frameworks, and strategies.' },
    { icon: BarChart3, title: 'Data-Driven', desc: 'Every decision backed by research and analytics.' },
    { icon: Globe2, title: 'Global Reach', desc: 'Serving clients from Pakistan to USA, UK, UAE & beyond.' },
  ];

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="px-6 py-20 text-center relative">
        <div className="absolute inset-0 opacity-10 -z-10 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:40px_40px]" />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black font-display text-white mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/60 text-xl max-w-3xl mx-auto font-medium"
        >
          From pixels to performance — we cover every dimension of your digital presence.
        </motion.p>
        
        <div className="flex items-center justify-center gap-4 mt-8 text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-white/30">
          <button onClick={() => setPage('home')} className="hover:text-gold">Home</button>
          <span>/</span>
          <span className="text-gold">Our Services</span>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-40">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 relative">
                <span className="absolute -top-20 -left-10 text-[180px] font-black text-gold/5 pointer-events-none font-display">
                  0{i + 1}
                </span>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <GlowCard customSize className="w-16 h-16 flex items-center justify-center rounded-2xl flex-shrink-0">
                      <service.icon size={30} className="text-gold" />
                    </GlowCard>
                    <h2 className="text-4xl md:text-5xl font-bold font-display">{service.name}</h2>
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed mb-10">
                    {service.details}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-white/80">
                        <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => setPage('contact')}
                    variant="outline"
                    className="px-8 py-4 bg-white/5"
                  >
                    Get a Quote for This Service
                  </Button>
                </div>
              </div>

              <GlowCard customSize className="flex-1 w-full max-w-xl aspect-square p-2 group overflow-hidden">
                <div className="w-full h-full rounded-xl relative overflow-hidden bg-black flex items-center justify-center">
                  <img 
                    src={serviceImages[service.id]} 
                    alt={service.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-transparent mix-blend-overlay" />
                  <div className="absolute bottom-6 left-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <service.icon size={40} className="text-gold" />
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose ZKElite */}
      <section className="py-32 bg-surface-dark px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Why Choose ZKElite?</h2>
            <p className="text-white/40 max-w-2xl mx-auto">We combine technical expertise with a deep commitment to our clients success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <GlowCard customSize className="p-10 h-full transition-all">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-xl mb-6 group-hover:bg-gold text-gold group-hover:text-black transition-all">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-10">Start Your Elite Journey</h2>
          <Button 
            onClick={() => setPage('contact')}
            variant="solid"
            size="lg"
            className="px-12 py-5"
          >
            Launch Project <Zap size={20} className="inline ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
