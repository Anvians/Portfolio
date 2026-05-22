"use client";
import { motion } from "framer-motion";

const ticks = [
  { label: "STATUS", value: "ONLINE", color: "#10b981" },
  { label: "LOCATION", value: "INDIA/WB", color: "#00e5ff" },
  { label: "FOCUS", value: "AI+ML+FULLSTACK", color: "#7c3aed" },
  { label: "AVAILABILITY", value: "OPEN TO WORK", color: "#f59e0b" },
  { label: "SPECIALIZATION", value: "GENAI · REACT · NODE", color: "#00e5ff" },
  { label: "BUILD_STATUS", value: "DEPLOYED", color: "#10b981" },
  { label: "MISSION", value: "ARCHITECT THE FUTURE", color: "#7c3aed" },
];

export default function StatusTicker() {
  const items = [...ticks, ...ticks]; // duplicate for seamless loop

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 overflow-hidden"
      style={{
        borderTop: "1px solid rgba(0,229,255,0.08)",
        background: "rgba(2,2,10,0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="relative py-2 overflow-hidden">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {items.map((tick, i) => (
            <div key={i} className="flex items-center gap-2 shrink-0">
              <span
                className="font-mono text-[9px] uppercase tracking-[0.2em]"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                {tick.label}
              </span>
              <span className="font-mono text-[9px]" style={{ color: "rgba(255,255,255,0.1)" }}>
                ///
              </span>
              <span
                className="font-mono text-[9px] font-bold uppercase tracking-[0.15em]"
                style={{ color: tick.color, textShadow: `0 0 10px ${tick.color}60` }}
              >
                {tick.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
