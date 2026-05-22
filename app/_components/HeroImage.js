"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroImage({ src }) {
  const [loadPct, setLoadPct] = useState(0);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadPct((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setVerified(true), 400);
          return 100;
        }
        return p + Math.random() * 8 + 2;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const pct = Math.min(100, Math.round(loadPct));

  return (
    <div
      className="relative w-full h-full rounded-[2.5rem] overflow-hidden group"
      style={{
        background: "rgba(6,6,26,0.8)",
        border: "1px solid rgba(0,229,255,0.12)",
        boxShadow: "0 0 60px rgba(124,58,237,0.15), 0 0 0 0.5px rgba(0,229,255,0.08) inset",
      }}
    >
      {/* Corner brackets */}
      {[
        "top-4 left-4 border-t-2 border-l-2",
        "top-4 right-4 border-t-2 border-r-2",
        "bottom-4 left-4 border-b-2 border-l-2",
        "bottom-4 right-4 border-b-2 border-r-2",
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute w-6 h-6 ${cls} z-30`}
          style={{ borderColor: "rgba(0,229,255,0.5)" }}
        />
      ))}

      {/* Scan line */}
      <motion.div
        animate={{ y: ["-2px", "100%"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
        className="absolute inset-x-0 z-30 pointer-events-none"
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.8), transparent)",
          boxShadow: "0 0 20px rgba(0,229,255,0.5)",
          top: 0,
        }}
      />

      {/* Cross-hair reticle */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border border-neon-cyan/30 rounded-full" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-neon-cyan/30" style={{ top: "50%" }} />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neon-cyan/30" />
          <div className="absolute inset-2 border border-violet-500/20 rounded-full" />
        </div>
      </div>

      {/* Image */}
      <Image
        src={src}
        alt="Portfolio Portrait"
        fill
        priority
        className="object-cover transition-all duration-1000 group-hover:scale-105"
        style={{ filter: "brightness(0.9) contrast(1.05)" }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to top, rgba(2,2,10,0.95) 0%, rgba(2,2,10,0.3) 40%, transparent 70%)",
        }}
      />

      {/* Status panel */}
      <div className="absolute bottom-6 left-6 right-6 z-20 space-y-3">
        {/* Loading bar */}
        {pct < 100 && (
          <div className="space-y-1">
            <div className="flex justify-between font-mono text-[9px] text-cyan-400/60">
              <span>BIOMETRIC_SCAN</span>
              <span>{pct}%</span>
            </div>
            <div className="h-px bg-white/10 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${pct}%` }}
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #7c3aed, #00e5ff)",
                  boxShadow: "0 0 10px rgba(0,229,255,0.5)",
                }}
              />
            </div>
          </div>
        )}

        {/* Identity tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: verified ? 1 : 0, y: verified ? 0 : 10 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(0,229,255,0.08)",
              border: "1px solid rgba(0,229,255,0.2)",
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#00e5ff",
                boxShadow: "0 0 6px #00e5ff",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400">
              IDENTITY_CONFIRMED
            </span>
          </div>
          <div
            className="px-3 py-1.5 rounded-full font-mono text-[9px] text-violet-300"
            style={{
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            NODE_08 ✓
          </div>
        </motion.div>
      </div>

      {/* Holographic sheen on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 z-15 pointer-events-none transition-opacity"
        style={{
          background: "linear-gradient(135deg, rgba(0,229,255,0.04) 0%, transparent 50%, rgba(124,58,237,0.04) 100%)",
        }}
      />
    </div>
  );
}
