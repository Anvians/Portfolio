"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="hidden lg:block">
      {/* Main Cursor Ring */}
      <motion.div
        animate={{ x: position.x - 20, y: position.y - 20, scale: active ? 1.5 : 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
        className="fixed top-0 left-0 w-10 h-10 border border-neon-cyan/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      {/* Center Dot */}
      <motion.div
        animate={{ x: position.x - 3, y: position.y - 3 }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-neon-purple rounded-full pointer-events-none z-[9999]"
      />
    </div>
  );
}