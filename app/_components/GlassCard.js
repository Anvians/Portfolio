"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function GlassCard({ children, className = "", accent = "cyan" }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-8deg", "8deg"]);

  const springRotX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const accentColors = {
    cyan: { primary: "#00e5ff", secondary: "#7c3aed", glow: "rgba(0,229,255,0.15)" },
    violet: { primary: "#7c3aed", secondary: "#00e5ff", glow: "rgba(124,58,237,0.15)" },
    rose: { primary: "#f43f5e", secondary: "#7c3aed", glow: "rgba(244,63,94,0.15)" },
  };
  const color = accentColors[accent] || accentColors.cyan;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        rotateX: springRotX,
        rotateY: springRotY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`group relative rounded-[2rem] overflow-hidden transition-all duration-500 ${className}`}
    >
      {/* Base glass */}
      <div
        className="absolute inset-0 rounded-[2rem]"
        style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      />

      {/* Dynamic spotlight */}
      <motion.div
        className="absolute inset-0 rounded-[2rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${useTransform(glowX, (v) => v)} ${useTransform(glowY, (v) => v)}, ${color.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at top right, ${color.primary}20 0%, transparent 70%)`,
        }}
      />

      {/* Bottom edge shimmer */}
      <div
        className="absolute bottom-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, transparent, ${color.primary}60, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 w-full h-full" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
