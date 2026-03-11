"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.05 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <div className="hidden lg:block pointer-events-none z-[9999]">
      
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border-2 border-neon-cyan/80 rounded-full mix-blend-difference"
      />

      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-neon-purple rounded-full mix-blend-difference"
      />
      
    </div>
  );
}