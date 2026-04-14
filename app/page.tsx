"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  ArrowUpRight, Smartphone, Video, Zap, Target, X, BarChart3, Plus, Share2 
} from 'lucide-react';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  useEffect(() => { 
    setMounted(true); 
    document.title = "Avora Media | Visuals That Convert";
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // --- DROPBOX DIRECT LINK HELPER ---
  const dropboxDirect = (url: string) => url ? url.replace('dl=0', 'raw=1') : "";

  const assets = {
    // BRANDING
    logo: "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/avora-logo.PNG",
    headshot: "https://e3nsj1twgnbict6m.public.blob.vercel-storage.com/drew-headshot.JPG",
    
    // HERO
    heroVideo: dropboxDirect("https://www.dropbox.com/scl/fi/k0iq9kz5kbmbmjbseq03o/bezr-show-real-HD-1080p.mp4?rlkey=i99q3sg0p5nm9us4pr4pvd0ds&st=6e5dm2fr&dl=0"), 
    
    // WORK ARCHIVE
    steedLn: dropboxDirect("https://www.dropbox.com/scl/fi/luvg4s2ltcl6kjz701xd4/217-Steed-ln-1.mp4?rlkey=wp092r8p7iz3wj32h5zf6qk6a&st=zalusayv&dl=0"), 
    tomahawk: dropboxDirect("https://www.dropbox.com/scl/fi/fwn7jg2jw77ww8grb9ge0/5944-Tomahawk-St-v2.mp4?rlkey=tog5ctgi61eefd8ofk7fxqsl7&st=7jtwlqrl&dl=0"),
    haddaway: dropboxDirect("https://www.dropbox.com/scl/fi/0e646ba9ltf180ubhug48/2802-Haddaway-video.mp4?rlkey=e6m7jjxrcl23h0xagaw29oot2&st=s3whm9b3&dl=0"),
    
    // SERVICES SECTION
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
    { title: "Real Estate", icon: <Video size={24} />, desc: "Cinematic listing videos.", file: assets.rocksRd },
    { title: "Lifestyle Content", icon: <Zap size={24} />, desc: "High-end brand narratives.", file: assets.bagelWorks },
    { title: "High-Energy Recaps", icon: <Smartphone size={24} />, desc: "Fast-paced hype edits.", file: assets.armor }
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden scroll-smooth text-left">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-white z-[100] origin-left" style={{ scaleX }} />

      {/* 1. NAVIGATION */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
        <nav className="flex justify-between items-center w-full max-w-5xl px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-3 cursor-pointer group leading-none">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-zinc-900 shadow-inner">
              <img src={assets.logo} alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="text-sm font-black tracking-[0.1em] uppercase hidden sm:block">Avora Media</span>
          </div>
          <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-black">
            <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="hover:text-white transition-colors cursor-pointer">Work</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition-colors cursor-pointer">Services</a>
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => setIsBookingOpen(true)} className="px-8 py-2.5 bg-white text-black rounded-full font-black uppercase text-xs cursor-pointer ml-2">Book Now</motion.button>
          </div>
        </nav>
      </div>

      {/* 2. HERO SECTION */}
      <header className="relative w-full h-[95vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          {assets.heroVideo && (
            <video autoPlay loop muted playsInline key={assets.heroVideo} src={assets.heroVideo} className="w-full h-full object-cover opacity-20 grayscale" />
          )}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent z-10" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto w-full px-8 md:px-20 text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <h1 className="text-[11vw] md:text-[9.5rem] font-black tracking-tighter leading-[0.8] mb-14 text-left">VISUALS<br /><span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 italic uppercase inline-block pb-4 leading-none">That Convert.</span></h1>
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => setIsBookingOpen(true)} className="bg-white text-black px-14 py-7 rounded-full font-black flex items-center gap-5 shadow-2xl uppercase tracking-widest text-xs cursor-pointer">Scale Your Story <ArrowUpRight size={22} /></motion.button>
          </motion.div>
        </div>
      </header>

      {/* 4. WORK SECTION */}
      <section id="work" className="px-6 py-32 max-w-7xl mx-auto scroll-mt-32 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workProjects.map((project, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="aspect-[9/16] bg-zinc-900 rounded-[3rem] overflow-hidden relative group border border-white/5 shadow-2xl cursor-pointer">
                {project.file && (
                   <video autoPlay loop muted playsInline key={project.file} src={project.file} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000" />
                )}
                <div className="absolute bottom-12 left-10 right-10 z-20 text-left"><p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50">{project.agent}</p><h4 className="text-2xl font-bold uppercase tracking-tighter text-white leading-none">{project.label}</h4></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section id="services" className="px-6 py-40 bg-white text-black rounded-[5rem] mx-3 shadow-2xl">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-7xl font-black tracking-tighter uppercase leading-[0.8] mb-24">Built to Scale.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {servicesData.map((service, idx) => (
              <div key={idx} className="group space-y-8">
                <div className="aspect-[4/5] bg-zinc-900 rounded-[3rem] overflow-hidden relative shadow-inner">
                    {service.file && (
                        <video autoPlay loop muted playsInline key={service.file} src={service.file} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-1000" />
                    )}
                </div>
                <h4 className="text-3xl font-black uppercase tracking-tighter leading-none">{service.title}</h4>
                <p className="text-zinc-600 text-lg font-light italic leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOOKING OVERLAY */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed inset-0 z-[200] bg-[#050505] p-4 md:p-8 flex flex-col">
            <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-8"><h2 className="text-3xl font-black tracking-tighter uppercase">Secure Your Date</h2><button onClick={() => setIsBookingOpen(false)} className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"><X size={24} /></button></div>
              <div className="flex-1 bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl relative">
                <iframe src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2DDl3XPvReKsNHCoQ75hvS5ZUzmcWn0TTVCTfeZNRvsRykXo9haZzHNIjhOw7-WeGdIyETIRqr?gv=true" style={{ border: 0, filter: "invert(93%) hue-rotate(180deg)", mixBlendMode: "screen" }} width="100%" height="100%" frameBorder="0"></iframe>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-zinc-950 pt-32 pb-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
            <p className="text-[9px] text-zinc-700 uppercase tracking-[0.6em] font-bold">© 2026 Avora Media Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}