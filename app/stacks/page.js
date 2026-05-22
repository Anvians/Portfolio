"use client";
import { motion } from "framer-motion";
import { Cpu, Code2, Database, LayoutPanelLeft, Layers, Bot, Shield, Cloud } from "lucide-react";

const stackData = [
  {
    category: "Frontend",
    icon: LayoutPanelLeft,
    color: "#00e5ff",
    skills: [
      { name: "Next.js 15 / React", level: 90 },
      { name: "Tailwind CSS v4", level: 88 },
      { name: "Framer Motion", level: 82 },
      { name: "Three.js / R3F", level: 70 },
      { name: "React Native", level: 72 },
    ],
  },
  {
    category: "Backend",
    icon: Database,
    color: "#7c3aed",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "FastAPI / Python", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Redis / Caching", level: 70 },
      { name: "Socket.IO", level: 78 },
    ],
  },
  {
    category: "AI / ML",
    icon: Bot,
    color: "#f43f5e",
    skills: [
      { name: "LangChain / RAG", level: 80 },
      { name: "TensorFlow / Keras", level: 72 },
      { name: "OpenAI / Anthropic APIs", level: 88 },
      { name: "Vector DBs (Pinecone)", level: 70 },
      { name: "MLflow / MLOps", level: 65 },
    ],
  },
  {
    category: "DevOps / Cloud",
    icon: Cloud,
    color: "#f59e0b",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Vercel / Render", level: 90 },
      { name: "Git / CI/CD", level: 85 },
      { name: "AWS (EC2, S3)", level: 62 },
      { name: "GitHub Actions", level: 72 },
    ],
  },
  {
    category: "Security",
    icon: Shield,
    color: "#10b981",
    skills: [
      { name: "JWT / OAuth2", level: 82 },
      { name: "OWASP practices", level: 74 },
      { name: "Network security", level: 68 },
      { name: "Linux hardening", level: 70 },
    ],
  },
];

const currentlyExploring = [
  "WebGPU shaders",
  "Agentic AI workflows",
  "Rust (beginner)",
  "Kubernetes",
];

export default function StackPage() {
  return (
    <div className="min-h-screen px-4 md:px-6 lg:px-12 pt-4 max-w-[1400px] mx-auto pb-24">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <Layers size={16} style={{ color: "#00e5ff" }} />
          <span className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: "rgba(0,229,255,0.6)" }}>
            Core_Modules
          </span>
        </div>
        <h1
          className="font-black uppercase tracking-[-0.02em] leading-[0.9]"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontFamily: "Syne, sans-serif" }}
        >
          Technology{" "}
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Arsenal
          </span>
        </h1>
      </header>

      {/* Stack grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-6">
        {stackData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
              className="group relative p-7 rounded-[2rem] overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* BG orb */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle, ${item.color}15 0%, transparent 70%)` }}
              />

              {/* Header */}
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="p-2.5 rounded-xl"
                  style={{
                    background: `${item.color}12`,
                    border: `1px solid ${item.color}20`,
                  }}
                >
                  <Icon size={16} style={{ color: item.color }} />
                </div>
                <h3
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {item.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {item.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs text-slate-400">{skill.name}</span>
                      <span className="font-mono text-[10px]" style={{ color: `${item.color}80` }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-0.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08 + i * 0.05, duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${item.color}80, ${item.color})`,
                          boxShadow: `0 0 8px ${item.color}40`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Corner decoration */}
              <div
                className="absolute -right-3 -bottom-3 opacity-5 group-hover:opacity-10 transition-opacity"
              >
                <Code2 size={80} style={{ color: item.color }} />
              </div>
            </motion.div>
          );
        })}

        {/* Currently exploring */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: stackData.length * 0.08, duration: 0.5 }}
          className="p-7 rounded-[2rem] relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(0,229,255,0.04))",
            border: "1px solid rgba(124,58,237,0.15)",
            borderStyle: "dashed",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 80% 20%, rgba(124,58,237,0.1) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="p-2.5 rounded-xl"
                style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }}
              >
                <Cpu size={16} style={{ color: "#7c3aed", animation: "spin 8s linear infinite" }} />
              </div>
              <div>
                <div
                  className="font-mono text-[9px] uppercase tracking-[0.2em] mb-0.5"
                  style={{ color: "#7c3aed" }}
                >
                  Learning_Protocol
                </div>
                <div className="text-sm font-bold">Exploring Now</div>
              </div>
            </div>
            <div className="space-y-2.5">
              {currentlyExploring.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div
                    className="w-1 h-1 rounded-full"
                    style={{ background: "#7c3aed", boxShadow: "0 0 6px #7c3aed" }}
                  />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
