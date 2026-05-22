"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, description, liveUrl, repoUrl, tags = [], index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative rounded-[2rem] overflow-hidden"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        transition: "border-color 0.4s, box-shadow 0.4s",
      }}
    >
      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          border: "1px solid rgba(0,229,255,0.25)",
          boxShadow: "0 0 40px rgba(0,229,255,0.08) inset",
        }}
      />

      {/* Preview iframe */}
      <div className="relative h-52 overflow-hidden bg-[#02020a]">
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 50%, rgba(2,2,10,0.9) 100%)",
          }}
        />

        {/* Scan line on hover */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.div
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-full h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.6), transparent)" }}
          />
        </div>

        <iframe
          src={liveUrl}
          className="w-full h-full border-none transition-all duration-700 grayscale group-hover:grayscale-0"
          style={{ opacity: 0.35, transform: "scale(1)", transformOrigin: "top left" }}
          title={title}
          loading="lazy"
        />

        {/* Launch overlay */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold text-black uppercase tracking-wider"
              style={{
                background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
                boxShadow: "0 0 30px rgba(0,229,255,0.4)",
              }}
            >
              <ArrowUpRight size={14} />
              LAUNCH SYSTEM
            </div>
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3
            className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-cyan-400"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {title}
          </h3>
          <div className="flex gap-2">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-all hover:text-white text-slate-500"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Github size={14} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-all hover:text-cyan-400 text-slate-500"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{description}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full font-mono text-[10px] tracking-wider"
                style={{
                  background: "rgba(0,229,255,0.06)",
                  border: "1px solid rgba(0,229,255,0.12)",
                  color: "rgba(0,229,255,0.7)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex items-center gap-1.5">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#10b981", boxShadow: "0 0 6px #10b981" }}
            />
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Live</span>
          </div>
          <span className="font-mono text-[10px] text-slate-600 uppercase">v2.0</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
