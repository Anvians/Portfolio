"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroImage({ src }) {
  const glitch = {
    animate: {
      clipPath: [
        "inset(10% 0 30% 0)", 
        "inset(80% 0 1% 0)", 
        "inset(30% 0 60% 0)", 
        "inset(0 0 0 0)"
      ],
      x: [-2, 2, -1, 0],
      transition: { duration: 0.4, repeat: Infinity, repeatDelay: 5 }
    }
  };

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden glass-panel border border-white/10 group bg-black/40">
      {/* Scanning Line */}
      <motion.div 
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-30 w-full h-[1px] bg-neon-cyan/40 shadow-[0_0_15px_cyan] pointer-events-none"
      />
      
      {/* Glitch Overlay */}
      <motion.div variants={glitch} animate="animate" className="absolute inset-0 z-10 opacity-30 mix-blend-screen pointer-events-none">
         <Image src={src} alt="glitch" fill className="object-cover scale-105 hue-rotate-90 brightness-200" />
      </motion.div>

      <Image 
        src={src} 
        alt="Portfolio Portrait"
        fill
        className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80 z-20" />
      
      {/* Identity Tag */}
      <div className="absolute bottom-8 left-8 z-40">
        <div className="glass-panel px-4 py-2 rounded-full border border-neon-cyan/30 flex items-center gap-3">
          <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_10px_cyan]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neon-cyan">Identity_Verified</span>
        </div>
      </div>
    </div>
  );
}