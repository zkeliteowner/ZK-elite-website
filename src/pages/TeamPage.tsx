import { motion } from 'motion/react';
import { User, Mail, Globe, ArrowRight, Zap } from 'lucide-react';
import { GlowCard } from '../components/ui/spotlight-card';
import { Button } from '../components/ui/neon-button';

interface TeamPageProps {
  setPage: (page: string) => void;
}

const founders = [
  {
    name: 'Zaid Iqbal',
    role: 'Founder & Lead Instructor',
    specialty: 'Senior Web Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: "As a web development instructor and agency founder, Zaid focuses on practical, industry-relevant skills. His leadership philosophy: every project is not merely code — it's a client's hard-earned dream.",
  },
  {
    name: 'Ali Raza',
    role: 'Lead Web Developer',
    specialty: 'UI/UX Expert',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    bio: "Ali Raza is a skilled and passionate web developer with a strong focus on creating modern, responsive, and user-friendly websites. He specializes in clean designs and seamless user experiences.",
  },
  {
    name: 'Mian Khalil',
    role: 'Lead Graphic Designer',
    specialty: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    bio: "Mian Khalil is a creative and detail-oriented graphic designer who specializes in crafting visually appealing and impactful designs for global brands.",
  },
];

const devTeam = [
  { name: 'Hamza Anwar', role: 'Lead Developer', sub: 'High-Performance Frontend' },
  { name: 'Sayyam Akhtar', role: 'Expert Backend', sub: 'Secure API Integrations' },
  { name: 'Fareed Hassan', role: 'Full-Stack Dev', sub: 'E-Commerce Platforms' },
  { name: 'Sameer Khan', role: 'Digital Solutions', sub: 'Marketing Automation' },
  { name: 'Muhammad Usman', role: 'UI Specialist', sub: 'Complex Sleek Designs' },
];

const creativeTeam = [
  { name: 'Awais Tahir', role: 'Lead Graphic Designer', sub: 'Branding Expert' },
  { name: 'Jawad Asif', role: 'Visual Arts', sub: 'Digital Illustration' },
  { name: 'Suleman', role: 'UI/UX Design', sub: 'Layout Prototyping' },
  { name: 'Ali Raza', role: 'Motion Designer', sub: 'Video Editor' },
  { name: 'Atta Subhani', role: 'Creative Strategist', sub: 'Marketing Assets' },
  { name: 'Ayaan Shahzad', role: 'Typography Specialist', sub: 'Logo Design' },
  { name: 'Hafiz Zain', role: 'Print Media Expert', sub: 'Visual Storytelling' },
];

export default function TeamPage({ setPage }: TeamPageProps) {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="px-6 py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gold/5 via-transparent to-transparent -z-10" />
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="relative"
        >
          <h1 className="text-[12vw] font-black font-display text-gold leading-none tracking-tighter opacity-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            OUR TEAM
          </h1>
          <div className="relative z-10">
            <h2 className="text-6xl md:text-8xl font-black font-display text-white mb-6">The Elite Force</h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">The Creative Minds Behind ZKElite — Turning complex requirements into digital masterpieces.</p>
          </div>
        </motion.div>
      </section>

      {/* Leadership */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {founders.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`flex flex-col lg:flex-row items-center gap-16 relative group ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <GlowCard customSize className="w-full flex-1 p-12 h-full flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full max-w-[400px] aspect-square rounded-xl bg-surface-dark border border-white/5 relative overflow-hidden group/img">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110 opacity-70 group-hover/img:opacity-90 grayscale hover:grayscale-0 transition-all font-sans"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent pointer-events-none" />
                </div>
                
                <div className="flex-1 space-y-6">
                  <div className="text-gold font-mono text-xs tracking-[0.3em] font-bold uppercase">{member.role}</div>
                  <h3 className="text-4xl md:text-5xl font-bold font-display">{member.name}</h3>
                  <p className="text-white/60 text-lg leading-relaxed italic border-l-2 border-gold pl-6">
                     "{member.bio}"
                  </p>
                  <div className="flex gap-4 items-center relative z-10 w-fit">
                    <Button 
                      onClick={() => setPage('services')}
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 group/btn"
                    >
                      Explore Services <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dev Team - Slider */}
      <section className="py-32 bg-surface-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
           <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">CORE DEVELOPMENT</span>
           <h2 className="text-4xl font-bold font-display">Expert Developers</h2>
        </div>

        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex gap-8 px-4"
        >
          {[...devTeam, ...devTeam].map((member, i) => (
            <GlowCard 
              key={i} 
              customSize
              className="min-w-[300px] p-10 group hover:border-gold/30 transition-all"
            >
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-gold mb-6">
                 <User size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3 italic">{member.role}</p>
              <p className="text-white/40 text-xs tracking-wide">{member.sub}</p>
            </GlowCard>
          ))}
        </motion.div>
      </section>

      {/* Graphics Team - Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">CREATIVE MINDS</span>
             <h2 className="text-4xl font-bold font-display">Graphics & UI/UX Experts</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {creativeTeam.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative"
              >
                <GlowCard customSize className="p-8 h-full relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold group-hover:text-gold transition-colors">{member.name}</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1 mb-4">{member.role}</p>
                    <p className="text-white/20 text-xs italic">{member.sub}</p>
                  </div>
                  <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 group-hover:-translate-y-2 transition-all duration-700 pointer-events-none">
                     <Zap size={100} className="text-gold" />
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-40 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 flex items-center">
           <motion.div
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="text-[12vw] font-black opacity-5 whitespace-nowrap"
           >
             • VISIONARY • BOLD • MINIMAL • ELITE • MODERN • UNIQUE • VISIONARY • BOLD
           </motion.div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-8">READY TO GO BEYOND ELITE?</h2>
          <p className="text-white/40 text-xl font-medium tracking-tight mb-12">Join the ZKElite revolution today. Let's turn your dream into reality.</p>
          <Button 
            onClick={() => setPage('contact')}
            variant="solid"
            size="lg"
            className="px-10 py-5 mx-auto"
          >
            Launch Project <ArrowRight size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
