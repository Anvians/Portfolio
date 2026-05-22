"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const trailsRef = useRef([]);

  const springConfig = { damping: 28, stiffness: 600, mass: 0.08 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  // Slower trail ring
  const trailX = useSpring(cursorX, { damping: 40, stiffness: 200, mass: 0.3 });
  const trailY = useSpring(cursorY, { damping: 40, stiffness: 200, mass: 0.3 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Detect pointer targets
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isLink = el?.closest('a, button, [role="button"], input, textarea, select');
      setIsPointer(!!isLink);
    };

    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="hidden lg:block pointer-events-none z-[9999] fixed inset-0">
      {/* Outer magnetic ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isPointer ? 1.8 : isClicking ? 0.6 : 1,
          opacity: isPointer ? 0.6 : 0.4,
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1px solid rgba(0,229,255,0.7)",
            boxShadow: "0 0 12px rgba(0,229,255,0.3), inset 0 0 12px rgba(0,229,255,0.05)",
          }}
        />
      </motion.div>

      {/* Slow trailing ring */}
      <motion.div
        style={{ x: trailX, y: trailY }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            border: "0.5px solid rgba(124,58,237,0.3)",
          }}
        />
      </motion.div>

      {/* Core dot */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isClicking ? 0.5 : 1,
        }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#00e5ff",
            boxShadow: "0 0 10px #00e5ff, 0 0 20px rgba(0,229,255,0.5)",
          }}
        />
      </motion.div>
    </div>
  );
}
