import { motion } from 'motion/react';
import { Target, Eye, Shield, Heart, Lightbulb, TrendingUp, Users, Award, Briefcase, Calendar } from 'lucide-react';
import CircularTestimonials from '../components/ui/circular-testimonials';
import { GlowCard } from '../components/ui/spotlight-card';
import { Button } from '../components/ui/neon-button';

interface AboutPageProps {
  setPage: (page: string) => void;
}

const stats = [
  { label: 'Projects Delivered', value: 120, icon: Briefcase },
  { label: 'Satisfied Clients', value: 50, icon: Users },
  { label: 'Team Members', value: 15, icon: Award },
  { label: 'Years of Excellence', value: 3, icon: Calendar },
];

const timeline = [
  { year: '2023', event: 'Agency Founded in Okara, Pakistan' },
  { year: '2024', event: 'First 20 Clients Onboarded Globally' },
  { year: '2025', event: 'Expanded to 8 Full-Service Verticals' },
  { year: '2026', event: '120+ Successful Deliveries & Going Global' },
];

const values = [
  { title: 'Excellence', desc: 'Every deliverable meets international quality standards.', icon: Target },
  { title: 'Integrity', desc: 'Transparent communication and honest timelines, always.', icon: Shield },
  { title: 'Innovation', desc: 'We stay ahead of digital trends so our clients do too.', icon: Lightbulb },
  { title: 'Growth', desc: 'We are invested in our clients\' long-term success.', icon: TrendingUp },
];

const whyZkElite = [
  'Pakistan-based talent, international-grade quality',
  'Full-service agency — no need to hire multiple vendors',
  'Mentor-led team under Sir Zaid\'s expertise',
  'Proven results across e-commerce, education & tech niches',
  'Affordable pricing without compromising on quality',
  'Client-first approach — your dream is our mission',
];

export default function AboutPage({ setPage }: AboutPageProps) {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="px-6 py-20 relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/10 via-transparent to-transparent -z-10" />
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-7xl md:text-9xl font-black font-display text-white mb-6 uppercase tracking-tighter">
              About <span className="text-gold">ZKElite</span>
            </h1>
            <p className="text-white/60 text-2xl md:text-3xl font-light italic leading-relaxed">
              "Your Vision. Our Solutions. Born in Pakistan, Built for the World."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display">Our Story</h2>
            <div className="space-y-6 text-white/50 text-lg leading-relaxed">
              <p>
                The inception of ZKElite wasn't a mere coincidence; it was the manifestation of a shared, ambitious dream. Born in the heart of Pakistan, in the city of Okara, this agency came to life when passionate Web developers, Designers & Market Experts joined forces.
              </p>
              <p>
                Our vision was clear from day one: to empower local businesses with international-standard digital solutions and to build exceptional platforms for global clients that consistently exceed expectations.
              </p>
              <p>
                The foundation of ZKElite was laid under the visionary supervision and mentorship of <span className="text-gold font-bold">Sir Zaid</span>, a highly experienced developer. He instilled the philosophy that every project is a client's hard-earned business and dream.
              </p>
            </div>
          </motion.div>

            <div className="relative group">
              <GlowCard customSize className="aspect-[4/5] w-full p-4">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="ZKElite Team Collaboration" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold/30 via-transparent to-black/60 mix-blend-overlay" />
                </div>
              </GlowCard>
              <div className="absolute -bottom-8 -left-8 z-20">
                <GlowCard customSize className="p-8 h-auto rounded-2xl hidden md:block">
                  <div className="text-gold font-black text-2xl">EST. 2023</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Okara, Pakistan</div>
                </GlowCard>
              </div>
            </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-6 bg-surface-dark/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            className="group"
          >
            <GlowCard customSize className="p-12 border border-gold/20 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gold text-black rounded-full flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold font-display mb-6">Our Mission</h3>
              <p className="text-white/60 text-lg leading-relaxed italic">
                "To empower businesses worldwide with elite digital solutions — from strategy and branding to development and growth — delivered with transparency, passion, and precision."
              </p>
            </GlowCard>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="group"
          >
            <GlowCard customSize className="p-12 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/5 text-gold border border-gold/30 rounded-full flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold font-display mb-6">Our Vision</h3>
              <p className="text-white/60 text-lg leading-relaxed italic">
                "To become the most trusted digital partner for businesses across Pakistan and beyond, setting new standards for quality and impact in the digital industry."
              </p>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Our Values</h2>
            <p className="text-white/40">The principles that guide every pixel and line of code at ZKElite.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <GlowCard customSize className="p-10 h-full text-center transition-colors hover:bg-gold/5">
                  <div className="w-14 h-14 border border-gold/30 text-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:text-black transition-all">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{value.desc}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ZKElite? */}
      <section className="py-32 bg-surface-dark px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
             <h2 className="text-4xl md:text-6xl font-bold font-display leading-[1.1] mb-8">
               Why Smart Businesses Choose <span className="text-gold">ZKElite</span>
             </h2>
          </div>
          <div className="flex-1 space-y-4">
            {whyZkElite.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-5 glass-card group hover:border-gold/30 transition-all"
              >
                <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                  <Heart size={14} />
                </div>
                <span className="text-white/70 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 min-w-[200px] text-center">
               <div className="text-6xl font-black font-display text-gold mb-2">{stat.value}+</div>
               <div className="text-xs uppercase tracking-[0.3em] text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-display uppercase tracking-widest opacity-20">Trust from Partners</h2>
          </div>
          
          <CircularTestimonials 
            testimonials={[
              {
                quote: "Working with ZKElite was the best decision for our digital transformation. Their vision and execution are world-class.",
                name: "Tamar Mendelson",
                designation: "Elite Client",
                src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop"
              },
              {
                quote: "They understand the dream behind the business. The mentorship-led approach at ZKElite makes them a partner, not just a vendor.",
                name: "Joe Charlescraft",
                designation: "Tech Innovator",
                src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop"
              }
            ]}
            autoplay={true}
            colors={{
              name: "#FFD700",
              designation: "rgba(255,255,255,0.3)",
              testimony: "rgba(255,255,255,0.6)",
              arrowBackground: "#111111",
              arrowForeground: "#FFD700",
              arrowHoverBackground: "#FFD700",
            }}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold font-display mb-12">Let's Build Your Digital Empire Together</h2>
          <Button 
            onClick={() => setPage('contact')}
            variant="solid"
            size="lg"
            className="px-12 py-5 mx-auto"
          >
            Contact Us Today <TrendingUp size={24} />
          </Button>
        </div>
      </section>
    </div>
  );
}
