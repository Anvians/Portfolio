"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ title, description, liveUrl, repoUrl, slug }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="glass-panel group relative overflow-hidden rounded-3xl transition-all duration-500 hover:border-neon-cyan/50"
    >
      {/* Decorative Scanner Line (Hover Only) */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <motion.div 
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-full h-[1px] bg-neon-cyan/50 shadow-[0_0_10px_cyan]"
        />
      </div>

      {/* Iframe Preview Container */}
      <div className="relative h-48 w-full overflow-hidden bg-black/40 border-b border-white/10">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark-bg/80 to-transparent pointer-events-none" />
        
      
        <div className="w-[100%] h-[100%] origin-top pointer-events-none">
          <iframe
            src={liveUrl}
            className="w-full h-full border-none opacity-40 group-hover:opacity-80 transition-opacity"
            title={title}
            loading="lazy"
          ></iframe>
        </div>

        {/* View Details Overlay */}
        <Link 
          href={`/projects/${slug}`}
          className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-dark-bg/40 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-neon-cyan text-black font-bold rounded-full text-sm">
            <Monitor size={16} />
            OPEN SYSTEM
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold tracking-tight text-glow group-hover:text-neon-cyan transition-colors">
            {title}
          </h3>
          <div className="flex gap-3 text-slate-400">
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white  transition-colors">
                <Github size={18} />
              </a>
            )}
            <a href={liveUrl} target="_blank" rel="noopener  noreferrer" className="hover:text-neon-cyan transition-colors">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Status: Deployed</span>
          <span className="text-[10px] font-mono text-neon-cyan/60 uppercase tracking-widest">v2.0.4</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;