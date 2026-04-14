"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  ArrowUpRight, 
  Smartphone, 
  Video, 
  Zap, 
  Target, 
  X, 
  BarChart3, 
  Plus,
  Instagram,
  Facebook,
  Music2
} from 'lucide-react';

// Reusable FAQ Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 text-left">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-8 flex justify-between items-center text-left group cursor-pointer"
      >
        <span className="text-xl md:text-2xl font-black tracking-tight uppercase group-hover:text-zinc-400 transition-colors">
          {question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="text-zinc-500">
          <Plus size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-400 text-lg font-light leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  useEffect(() => { 
    setMounted(true); 
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const partnerLogos = ["cummings.png", "Manny.png", "Tma.png", "diamond.png", "jody.png"];

  // VERCEL BLOB ASSET MASTER LINKS
  const logoUrl = "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/avora-logo.PNG";
  const headshotUrl = "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/drew-headshot.JPG";
  const heroVideo = "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/bezr%20show%20real%20-%20HD%201080p.mp4";
  
  const workProjects = [
    { 
      agent: "Nicole Gentry", 
      label: "217 Steed Ln", 
      file: "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/217%20Steed%20ln%20%281%29.mp4" 
    },
    { 
      agent: "Kelley Thompson", 
      label: "5944 Tomahawk St", 
      file: "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/5944%20Tomahawk%20St%20v2.mp4" 
    },
    { 
      agent: "Tim Markland", 
      label: "2802 Haddaway", 
      file: "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/2802%20Haddaway%20video.mp4" 
    }
  ];

  const servicesData = [
    { 
      title: "Real Estate", 
      icon: <Video size={24} />, 
      desc: "Cinematic listing videos and drone cinematography.", 
      file: "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/3041%20Rocks%20Rd.mp4" 
    },
    { 
      title: "Lifestyle Content", 
      icon: <Zap size={24} />, 
      desc: "High-end brand narratives that connect with your audience.", 
      file: "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/Bagel%20Works%20Spotlight.mp4" 
    },
    { 
      title: "High-Energy Recaps", 
      icon: <Smartphone size={24} />, 
      desc: "Fast-paced event and hype edits built for engagement.", 
      file: "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/armor.mp4" 
    }
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden scroll-smooth text-left cursor-default">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-white z-[100] origin-left" style={{ scaleX }} />

      {/* 1. NAVIGATION */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
        <nav className="flex justify-between items-center w-full max-w-5xl px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-zinc-900 shadow-inner group-hover:border-white/40 transition-colors">
              <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-black tracking-[0.1em] uppercase hidden sm:block group-hover:text-white transition-colors">Avora Media</span>
          </div>
          <div className="flex items-center gap-8 md:gap-12 text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-black">
            <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="hover:text-white transition-colors cursor-pointer">Work</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors cursor-pointer">About</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition-colors cursor-pointer">Services</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="hover:text-white transition-colors cursor-pointer">FAQ</a>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsBookingOpen(true)} className="px-8 py-2.5 bg-white text-black rounded-full font-black uppercase tracking-tighter text-xs cursor-pointer ml-2">Book Now</motion.button>
          </div>
        </nav>
      </div>

      {/* 2. HERO SECTION */}
      <header className="relative w-full h-[95vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <video autoPlay loop muted playsInline src={heroVideo} className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent z-10" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto w-full px-8 md:px-20 text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-16 h-[1px] bg-zinc-700"></div>
              <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-300 font-bold leading-none">Luxury in Motion</span>
            </div>
            <h1 className="text-[11vw] md:text-[9.5rem] font-black tracking-tighter leading-[0.8] mb-14 pr-12 text-left">
              VISUALS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 italic uppercase inline-block pb-4 leading-none">That Convert.</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-12 text-left">
              <p className="text-zinc-300 max-w-lg text-xl font-light italic opacity-90 leading-relaxed">
                High-fidelity video assets designed to dominate social feeds.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                onClick={() => setIsBookingOpen(true)} 
                className="bg-white text-black group px-14 py-7 rounded-full font-black flex items-center gap-5 shadow-2xl uppercase tracking-widest text-xs cursor-pointer mb-2"
              >
                Scale Your Story <ArrowUpRight size={22} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 3. LOGO SCROLL */}
      <div className="w-full overflow-hidden bg-[#050505] pt-12 pb-32 relative group border-b border-white/5 mt-[-10vh] z-30">
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#050505] via-[#050505]/95 to-transparent z-20 pointer-events-none" />
        <div className="flex relative overflow-hidden">
          <motion.div 
            className="flex items-center gap-24 md:gap-32 flex-nowrap" 
            animate={{ x: [0, -1920] }} 
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 flex items-center justify-center">
                <img src={`/${logo}`} alt="Partner" className="h-24 md:h-32 w-auto grayscale brightness-200 contrast-125 opacity-40 hover:opacity-100 transition-all mix-blend-screen shrink-0 pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 4. WORK SECTION */}
      <section id="work" className="px-6 py-32 max-w-7xl mx-auto scroll-mt-32">
        <div className="mb-20 text-left">
            <span className="text-zinc-600 uppercase text-[10px] tracking-[0.6em] font-bold mb-4 block">Archive</span>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none text-white">
              Recent <span className="italic text-zinc-500">Works.</span>
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workProjects.map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              whileHover={{ y: -10 }} 
              className="aspect-[9/16] bg-zinc-900 rounded-[3rem] overflow-hidden relative group border border-white/5 shadow-2xl cursor-pointer"
            >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-700 z-10" />
                <div className="absolute bottom-12 left-10 right-10 z-20 space-y-2 text-left">
                    <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50">{project.agent}</p>
                    <h4 className="text-2xl font-bold uppercase tracking-tighter text-white leading-none">{project.label}</h4>
                </div>
                <video autoPlay loop muted playsInline src={project.file} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section id="about" className="px-6 py-40 max-w-7xl mx-auto border-t border-white/5 scroll-mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center text-left">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="aspect-square bg-zinc-900 rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
                <img src={headshotUrl} alt="Drew" className="w-full h-full object-cover grayscale transition duration-1000 hover:grayscale-0" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white text-black p-10 rounded-[2.5rem] hidden md:block shadow-2xl z-30 text-left font-black">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-2 text-zinc-400 leading-none">Creative Director</p>
                <h4 className="text-3xl font-bold uppercase tracking-tighter">Drew Chavis</h4>
            </div>
          </motion.div>
          <div className="space-y-10">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-left">Visual <br/>Strategy.</h2>
            <p className="text-gray-500 text-xl font-light leading-relaxed text-left">
              Based in Maryland, I specialize in crafting modern, high-impact visuals that feel fresh, premium, and unmistakably on-brand. I bridge the gap between artistic direction and high-velocity social growth.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 group text-left">
                <Target className="mb-4 text-zinc-500 group-hover:text-white transition-colors" size={24} />
                <h5 className="font-bold text-sm uppercase text-zinc-200 font-mono leading-none">Conversion</h5>
              </div>
              <div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 group text-left">
                <BarChart3 className="mb-4 text-zinc-500 group-hover:text-white transition-colors" size={24} />
                <h5 className="font-bold text-sm uppercase text-zinc-200 font-mono leading-none">Growth</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section id="services" className="px-6 py-40 bg-white text-black rounded-[5rem] mx-3 shadow-2xl text-left scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-7xl font-black tracking-tighter uppercase leading-[0.8] mb-24 text-left leading-none">Built to Scale.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {servicesData.map((service, idx) => (
              <div key={idx} className="group space-y-8 text-left leading-none">
                <div className="aspect-[4/5] bg-zinc-900 rounded-[3rem] overflow-hidden relative shadow-inner">
                    <video autoPlay loop muted playsInline src={service.file} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition duration-1000" />
                </div>
                <h4 className="text-3xl font-black uppercase tracking-tighter leading-none">{service.title}</h4>
                <p className="text-zinc-600 text-lg font-light italic leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="px-6 py-40 max-w-5xl mx-auto scroll-mt-32 border-t border-white/5">
        <div className="mb-20 text-left leading-none">
            <span className="text-zinc-600 uppercase text-[10px] tracking-[0.6em] font-bold mb-4 block leading-none font-mono">Common Queries</span>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none">Questions <br/><span className="text-zinc-800 italic text-glow">Answered.</span></h2>
        </div>
        <div className="space-y-2">
          <FAQItem question="What services do you provide?" answer="I specialize in cinematic media production and brand storytelling, with experience in video, audio, and creative direction to craft powerful visual experiences that connect and convert." />
          <FAQItem question="How do I start working with you?" answer="You can easily book through my calendar above, and I'll personally reach out to go over the details, timeline, and goals." />
          <FAQItem question="How long does a project take?" answer="Most short-form projects are delivered within 2–3 days, depending on scope. I'll confirm your exact turnaround time after reviewing your goals." />
          <FAQItem question="Do you provide revisions?" answer="Absolutely! Each project includes a set number of revisions to ensure the visuals and sound fully capture your creative vision." />
        </div>
      </section>

      {/* 8. BOOKING OVERLAY */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div 
            initial={{ y: "100%" }} 
            animate={{ y: 0 }} 
            exit={{ y: "100%" }} 
            transition={{ type: "spring", damping: 25, stiffness: 200 }} 
            className="fixed inset-0 z-[200] bg-[#050505] p-4 md:p-8 flex flex-col text-left"
          >
            <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-8 leading-none">
                <h2 className="text-3xl font-black tracking-tighter uppercase leading-none">Secure Your Date</h2>
                <button 
                  onClick={() => setIsBookingOpen(false)} 
                  className="p-4 bg-white/5 rounded-full border border-white/10 transition-colors cursor-pointer hover:bg-white/10"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden relative shadow-2xl">
                <iframe src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2DDl3XPvReKsNHCoQ75hvS5ZUzmcWn0TTVCTfeZNRvsRykXo9haZzHNIjhOw7-WeGdIyETIRqr?gv=true" style={{ border: 0, filter: "invert(93%) hue-rotate(180deg)", mixBlendMode: "screen" }} width="100%" height="100%" frameBorder="0"></iframe>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 9. FOOTER */}
      <footer className="bg-zinc-950 pt-32 pb-16 px-6 border-t border-white/5 font-sans text-left">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 leading-none text-left">
            <div className="md:col-span-6 space-y-8">
              <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-4 cursor-pointer group leading-none">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-zinc-900 flex items-center justify-center">
                  <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-2xl font-black tracking-[0.1em] uppercase group-hover:text-white transition-colors">Avora Media</span>
              </div>
              <p className="text-zinc-500 max-w-sm text-lg font-light leading-relaxed italic">High-velocity social growth. Based in Maryland.</p>
            </div>
            
            <div className="md:col-span-3 space-y-8 text-left">
              <h5 className="text-[10px] tracking-[0.5em] text-zinc-600 uppercase font-black">Social</h5>
              <ul className="space-y-6">
                <li>
                  <a href="https://www.instagram.com/avora.media" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-all flex items-center gap-4 group">
                    <Instagram size={20} />
                    <span className="text-xs uppercase tracking-widest font-black group-hover:translate-x-1 transition-transform">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/people/Avora-Media/61575353782521/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-all flex items-center gap-4 group">
                    <Facebook size={20} />
                    <span className="text-xs uppercase tracking-widest font-black group-hover:translate-x-1 transition-transform">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@avoramedia.co" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-all flex items-center gap-4 group">
                    <Music2 size={20} />
                    <span className="text-xs uppercase tracking-widest font-black group-hover:translate-x-1 transition-transform">TikTok</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-3 space-y-6 text-left">
              <h5 className="text-[10px] tracking-[0.5em] text-zinc-600 uppercase font-black">Contact</h5>
              <p className="text-zinc-400 text-sm font-black underline cursor-pointer hover:text-white transition-colors">drew@avoramedia.co</p>
            </div>
          </div>
          <div className="pt-16 border-t border-white/5 text-center text-[9px] text-zinc-700 uppercase tracking-[0.6em] font-bold">
            <p>© 2026 Avora Media Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}