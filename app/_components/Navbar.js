"use client";
import { motion } from "framer-motion";
import { Terminal, Cpu, Layout, Mail, Hexagon } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { icon: <Hexagon size={18} />, label: "Home" },
    { icon: <Layout size={18} />, label: "Work" },
    { icon: <Cpu size={18} />, label: "Stack" },
    { icon: <Terminal size={18} />, label: "Console" },
    { icon: <Mail size={18} />, label: "Contact" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-panel px-6 py-3 rounded-full flex items-center gap-6 md:gap-10"
      >
        {navItems.map((item) => (
          <button 
            key={item.label}
            className="group flex flex-col items-center gap-1 text-slate-400 hover:text-neon-cyan transition-all"
          >
            <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
            <span className="text-[9px] uppercase tracking-tighter font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              {item.label}
            </span>
          </button>
        ))}
      </motion.div>
    </nav>
  );
}