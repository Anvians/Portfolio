"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ from = 0, to, decimals = 0, suffix = "" }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });
  const count = useMotionValue(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, count, to]);

  return (
    <span ref={nodeRef}>
      <motion.span>{useTransform(count, (v) => v.toFixed(decimals))}</motion.span>
      {suffix}
    </span>
  );
}

export default function MetricCounter({ value, label, suffix = "+", decimals = 0 }) {
  return (
    <div className="text-center">
      <div
        className="text-4xl font-black font-syne mb-1"
        style={{
          background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        <Counter to={value} suffix={suffix} decimals={decimals} />
      </div>
      <div className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em]">{label}</div>
    </div>
  );
}
