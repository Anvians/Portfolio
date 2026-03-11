"use client";
import { motion } from "framer-motion";

export default function GlassCard({ children, className = "" }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} // Triggers the animation right before scrolling into view
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: "easeOut" }} // Buttery smooth lift effect
      className={`group glass-panel p-8 rounded-[2rem] relative overflow-hidden transition-colors duration-500 hover:border-neon-cyan/30 hover:bg-white/[0.04] ${className}`}
    >
      {/* Top Right Cyan Glow - Expands and brightens on hover */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-cyan/10 blur-[50px] rounded-full transition-all duration-700 group-hover:bg-neon-cyan/20 group-hover:scale-150" />
      
      {/* Bottom Left Purple Glow - Adds depth and expands on hover */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-purple/10 blur-[50px] rounded-full transition-all duration-700 group-hover:bg-neon-purple/20 group-hover:scale-150" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}