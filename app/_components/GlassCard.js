"use client";
import { motion } from "framer-motion";

export default function GlassCard({ children, className }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`glass-panel p-8 rounded-[2rem] relative overflow-hidden ${className}`}
    >
      {/* Decorative corner glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-neon-cyan/5 blur-3xl rounded-full" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}