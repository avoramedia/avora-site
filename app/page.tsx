"use client";
import React, { useState, useEffect } from 'react';
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
  Share2 
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 text-left">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-8 flex justify-between items-center text-left group cursor-pointer"
      >
        <span className="text-xl md:text-2xl font-black tracking-tight uppercase group-hover:text-zinc-400 transition-colors leading-none">
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
    document.title = "Avora Media | Visuals That Convert";
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const dropboxDirect = (url: string) => url ? url.replace('dl=0', 'raw=1') : "";

  const assets = {
    logo: dropboxDirect("https://www.dropbox.com/scl/fi/bybsclb6xgwateis75for/avora-logo.PNG?rlkey=g1dphpanvc7n0n0it8ccufkc1&st=zwmlj2vn&dl=0"),
    headshot: dropboxDirect("https://www.dropbox.com/scl/fi/eitqvyl0q5fgbg45mycd5/3C7C2ACC-6484-4AFA-BD7C-45FA5E8F851D-3.JPG?rlkey=2nc5qkt1j4t253qanlxu0o5s9&st=t2yj6htn&dl=0"),
    heroVideo: dropboxDirect("https://www.dropbox.com/scl/fi/k0iq9kz5kbmbmjbseq03o/bezr-show-real-HD-1080p.mp4?rlkey=i99q3sg0p5nm9us4pr4pvd0ds&st=6e5dm2fr&dl=0"), 
    steedLn: dropboxDirect("https://www.dropbox.com/scl/fi/luvg4s2ltcl6kjz701xd4/217-Steed-ln-1.mp4?rlkey=wp092r8p7iz3wj32h5zf6qk6a&st=zalusayv&dl=0"), 
    tomahawk: dropboxDirect("https://www.dropbox.com/scl/fi/fwn7jg2jw77ww8grb9ge0/5944-Tomahawk-St-v2.mp4?rlkey=tog5ctgi61eefd8ofk7fxqsl7&st=7jtwlqrl&dl=0"),
    haddaway: dropboxDirect("https://www.dropbox.com/scl/fi/0e646ba9ltf180ubhug48/2802-Haddaway-video.mp4?rlkey=e6m7jjxrcl23h0xagaw29oot2&st=s3whm9b3&dl=0"),
    rocksRd: dropboxDirect("https://www.dropbox.com/scl/fi/jz1etshsy43yt4encj9z7/3041-Rocks-Rd.mp4?rlkey=lrrk077y413cshcfzzstl6wxc&st=yiniqsog&dl=0"),
    bagelWorks: dropboxDirect("https://www.dropbox.com/scl/fi/z2kiw1dmfcxama5x3wspm/Bagel-Works-Spotlight.mp4?rlkey=0re10jpt0tvjv52olj75qglv3&st=enp45yc0&dl=0"), 
    armor: dropboxDirect("https://www.dropbox.com/scl/fi/xneijjk7c7y1r619icnlf/armor.mp4?rlkey=c6hjoqh0264vu4a4b5hig5qcd&st=4qis8pqe&dl=0"),
  };

  const partnerLogos = ["cummings.png", "Manny.png", "Tma.png", "diamond.png", "jody.png"];

  const workProjects = [
    { agent: "Nicole Gentry", label: "217 Steed Ln", file: assets.steedLn },
    { agent: "Kelley Thompson", label: "5944 Tomahawk St", file: assets.tomahawk },
    { agent: "Tim Markland", label: "2802 Haddaway", file: assets.haddaway }
  ];

  const servicesData = [
    { title: "Real Estate", icon: <Video size={24} />, desc: "Cinematic listing videos and drone cinematography.", file: assets.rocksRd },
    { title: "Lifestyle Content", icon: <Zap size={24} />, desc: "High-end brand narratives that connect with your audience.", file: assets.bagelWorks },
    { title: "High-Energy Recaps", icon: <Smartphone size={24} />, desc: "Fast-paced event and hype edits built for engagement.", file: assets.armor }
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
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 leading-none">
        <nav className="flex justify-between items-center w-full max-w-5xl px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-3 cursor-pointer group leading-none">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-zinc-900 shadow-inner group-hover:border-white/40 transition-colors">
              <img src={assets.logo} alt="Logo" className="w-full h-full object-cover scale-110 rounded-full" />
            </div>
            <span className="text-sm font-black tracking-[0.1em] uppercase hidden sm:block group-hover:text-white transition-colors">Avora Media</span>
          </div>
          <div className="flex items-center gap-8 md:gap-12 text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-black">
            <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="hover:text-white transition-colors cursor-pointer">Work</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors cursor-pointer">About</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition-colors cursor-pointer">Services</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="hover:text-white transition-colors cursor-pointer">FAQ</a>
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => setIsBookingOpen(true)} className="px-8 py-2.5 bg-white text-black rounded-full font-black uppercase text-xs cursor-pointer ml-2">Book Now</motion.button>
          </div>
        </nav>
      </div>

      {/* 2. HERO SECTION */}
      <header className="relative w-full h-[95vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <video autoPlay loop muted playsInline key={assets.heroVideo} src={assets.heroVideo} className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent z-10" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto w-full px-8 md:px-20 text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <div className="flex items-center gap-3 mb-10 leading-none">
              <div className="w-16 h-[1px] bg-zinc-700"></div>
              <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-300 font-bold leading-none">Luxury in Motion</span>
            </div>
            <h1 className="text-[11vw] md:text-[9.5rem] font-black tracking-tighter leading-[0.8] mb-14 text-left">VISUALS<br /><span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 italic uppercase inline-block pb-4 leading-none">That Convert.</span></h1>
            <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-12 text-left">
              <p className="text-zinc-300 max-w-lg text-xl font-light italic opacity-90 leading-relaxed">
                High-fidelity video assets designed to dominate social feeds.
              </p>
              <motion.button whileHover={{ scale: 1.05 }} onClick={() => setIsBookingOpen(true)} className="bg-white text-black group px-14 py-7 rounded-full font-black flex items-center gap-5 shadow-2xl uppercase tracking-widest text-xs cursor-pointer">Scale Your Story <ArrowUpRight size={22} /></motion.button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 3. LOGO SCROLL */}
      <div className="w-full overflow-hidden bg-[#050505] pt-12 pb-32 relative group border-b border-white/5 mt-[-10vh] z-30 leading-none">
        <div className="flex relative overflow-hidden">
          <motion.div className="flex items-center gap-24 md:gap-32 flex-nowrap" animate={{ x: [0, -1920] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}>
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 flex items-center justify-center leading-none">
                <img src={`/${logo}`} alt="Partner" className="h-24 md:h-32 w-auto grayscale brightness-200 opacity-40 hover:opacity-100 transition-all mix-blend-screen shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 4. WORK SECTION */}
      <section id="work" className="px-6 py-32 max-w-7xl mx-auto scroll-mt-32 border-t border-white/5">
        <div className="mb-20 text-left leading-none">
            <span className="text-zinc-600 uppercase text-[10px] tracking-[0.6em] font-bold mb-4 block leading-none">Archive</span>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none text-white">Recent <span className="italic text-zinc-500">Works.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workProjects.map((project, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="aspect-[9/16] bg-zinc-900 rounded-[3rem] overflow-hidden relative group border border-white/5 shadow-2xl cursor-pointer">
                <video autoPlay loop muted playsInline key={project.file} src={project.file} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000" />
                <div className="absolute bottom-12 left-10 right-10 z-20 text-left leading-none"><p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50 mb-2">{project.agent}</p><h4 className="text-2xl font-bold uppercase tracking-tighter text-white leading-none">{project.label}</h4></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section id="about" className="px-6 py-40 max-w-7xl mx-auto border-t border-white/5 scroll-mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center text-left leading-none">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="aspect-square bg-zinc-900 rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
                <img src={assets.headshot} alt="Drew Chavis" className="w-full h-full object-cover grayscale transition duration-1000 hover:grayscale-0" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white text-black p-10 rounded-[2.5rem] hidden md:block shadow-2xl z-30 text-left font-black leading-none">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-2 text-zinc-400 leading-none">Creative Director</p>
                <h4 className="text-3xl font-bold uppercase tracking-tighter leading-none">Drew Chavis</h4>
            </div>
          </motion.div>
          <div className="space-y-10 leading-none">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-left">Visual <br/>Strategy.</h2>
            <p className="text-gray-500 text-xl font-light leading-relaxed leading-none">Based in Maryland, I specialize in crafting modern, high-impact visuals that feel fresh, premium, and unmistakably on-brand. I bridge the gap between artistic direction and high-velocity social growth.</p>
            <div className="grid grid-cols-2 gap-6 pt-4 leading-none">
              <div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 group text-left leading-none">
                <Target className="mb-4 text-zinc-500 group-hover:text-white transition-colors" size={24} />
                <h5 className="font-bold text-sm uppercase text-zinc-200 font-mono leading-none">Conversion</h5>
              </div>
              <div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 group text-left leading-none">
                <BarChart3 className="mb-4 text-zinc-500 group-hover:text-white transition-colors" size={24} />
                <h5 className="font-bold text-sm uppercase text-zinc-200 font-mono leading-none">Growth</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section id="services" className="px-6 py-40 bg-white text-black rounded-[5rem] mx-3 shadow-2xl scroll-mt-32">
        <div className="max-w-7xl mx-auto text-left leading-none">
          <h2 className="text-7xl font-black tracking-tighter uppercase mb-24 leading-none">Built to Scale.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 leading-none">
            {servicesData.map((service, idx) => (
              <div key={idx} className="group space-y-8 text-left leading-none">
                <div className="aspect-[4/5] bg-zinc-900 rounded-[3rem] overflow-hidden relative shadow-inner">
                    <video autoPlay loop muted playsInline key={service.file} src={service.file} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-1000" />
                </div>
                <h4 className="text-3xl font-black uppercase tracking-tighter leading-none">{service.title}</h4>
                <p className="text-zinc-600 text-lg font-light italic leading-relaxed leading-none">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section id="faq" className="px-6 py-40 max-w-5xl mx-auto scroll-mt-32 border-t border-white/5">
        <div className="mb-20 text-left leading-none">
            <span className="text-zinc-600 uppercase text-[10px] tracking-[0.6em] font-bold mb-4 block leading-none font-mono">Common Queries</span>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none">Questions <br/><span className="text-zinc-800 italic">Answered.</span></h2>
        </div>
        <div className="space-y-2 leading-none">
          <FAQItem question="What services do you provide?" answer="I specialize in cinematic media production and brand storytelling, with experience in video, audio, and creative direction to craft powerful visual experiences that connect and convert." />
          <FAQItem question="How do I start working with you?" answer="You can easily book through my calendar above, and I'll personally reach out to go over the details, timeline, and goals." />
          <FAQItem question="How long does a project take?" answer="Most short-form projects are delivered within 2–3 days, depending on scope. I'll confirm your exact turnaround time after reviewing your goals." />
          <FAQItem question="Do you provide revisions?" answer="Absolutely! Each project includes a set number of revisions to ensure the visuals and sound fully capture your creative vision." />
        </div>
      </section>

      {/* 8. BOOKING OVERLAY */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed inset-0 z-[200] bg-[#050505] p-4 md:p-8 flex flex-col">
            <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col text-left leading-none">
              <div className="flex justify-between items-center mb-8 leading-none"><h2 className="text-3xl font-black tracking-tighter uppercase leading-none">Secure Your Date</h2><button onClick={() => setIsBookingOpen(false)} className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors cursor-pointer leading-none"><X size={24} /></button></div>
              <div className="flex-1 bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl relative leading-none">
                <iframe src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2DDl3XPvReKsNHCoQ75hvS5ZUzmcWn0TTVCTfeZNRvsRykXo9haZzHNIjhOw7-WeGdIyETIRqr?gv=true" style={{ border: 0, filter: "invert(93%) hue-rotate(180deg)", mixBlendMode: "screen" }} width="100%" height="100%" frameBorder="0"></iframe>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 9. FULL FOOTER */}
      <footer className="bg-zinc-950 pt-32 pb-16 px-6 border-t border-white/5 font-sans text-left leading-none">
        <div className="max-w-7xl mx-auto leading-none">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 leading-none text-left">
            <div className="md:col-span-6 space-y-8 leading-none">
              <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-3 cursor-pointer group leading-none">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-zinc-900 leading-none">
                  <img src={assets.logo} alt="Logo" className="w-full h-full object-cover rounded-full leading-none" />
                </div>
                <span className="text-xl font-black tracking-tighter uppercase leading-none">Avora Media</span>
              </div>
              <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-sm leading-none">Visuals that convert. Based in Maryland, serving clients globally.</p>
              
              <div className="flex gap-4 leading-none pt-4">
                <a href="https://instagram.com/avora.media" target="_blank" className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/40 transition-all leading-none">
                  <Share2 size={20} />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-3 leading-none">
              <h5 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20 mb-10 leading-none">Sitemap</h5>
              <ul className="space-y-6 text-sm font-black uppercase tracking-widest leading-none">
                <li><a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="text-zinc-500 hover:text-white transition-colors leading-none">Work</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-zinc-500 hover:text-white transition-colors leading-none">About</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-zinc-500 hover:text-white transition-colors leading-none">Services</a></li>
                <li><a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="text-zinc-500 hover:text-white transition-colors leading-none">FAQ</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-3 leading-none">
              <h5 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20 mb-10 leading-none">Contact</h5>
              <a href="mailto:drew@avoramedia.co" className="text-sm font-black uppercase tracking-widest text-zinc-500 leading-none hover:text-white transition-colors cursor-pointer block mb-4">
                drew@avoramedia.co
              </a>
              <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest leading-none">Available for Worldwide Travel</p>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 leading-none">
            <p className="text-[9px] text-zinc-700 uppercase tracking-[0.6em] font-black leading-none">© 2026 Avora Media Group. All rights reserved.</p>
            <div className="flex gap-12 leading-none">
              <span className="text-[9px] text-zinc-700 uppercase tracking-[0.6em] font-black leading-none italic">Designed by Avora</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}