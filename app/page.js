import Link from "next/link";
import GlassCard from "./_components/GlassCard";
import HeroImage from "./_components/HeroImage";
import MetricCounter from "./_components/MetricCounter";
import SkillTag from "./_components/SkillTag";
import { ArrowUpRight, Zap, Code2, Brain, Database, Globe, Download, Github } from "lucide-react";

const featuredProjects = [
  {
    name: "JobPilot",
    desc: "AI-powered job tracker with Gmail API + Claude Haiku",
    tag: "GENAI",
    href: "https://github.com/Anvians",
    accent: "#00e5ff",
  },
  {
    name: "College Connect",
    desc: "Campus events platform with social media integration",
    tag: "FULLSTACK",
    href: "https://campus-events-handler.vercel.app/",
    accent: "#7c3aed",
  },
];

const skills = ["NEXT.JS", "REACT", "NODE.JS", "FASTAPI", "POSTGRESQL", "TENSORFLOW", "LANGCHAIN", "DOCKER"];

export default function Home() {
  return (
    <main className="min-h-screen pb-24 px-4 md:px-6 lg:px-12 max-w-[1600px] mx-auto">
      
      {/* ── HERO GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

        {/* ── LEFT COLUMN ── */}
        <div className="lg:col-span-8 flex flex-col gap-4">

          {/* Main Hero Panel */}
          <div
            className="relative rounded-[2.5rem] overflow-hidden min-h-[420px] flex flex-col justify-end p-10 md:p-14 grid-pattern"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(6,6,26,0.98) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
            }}
          >
            {/* Background nebula orbs */}
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)",
                transform: "translate(-30%, 30%)",
              }}
            />

            {/* Status badge */}
            <div className="absolute top-10 left-10">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#10b981", boxShadow: "0 0 8px #10b981", animation: "pulse 2s ease-in-out infinite" }}
                />
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-emerald-400">
                  System_Online
                </span>
              </div>
            </div>

            {/* Coordinates */}
            <div className="absolute top-10 right-10 font-mono text-[9px] text-slate-600 text-right space-y-1">
              <div>22°34′N 88°22′E</div>
              <div className="text-cyan-800">IIEST SHIBPUR / WB</div>
            </div>

            {/* Headline */}
            <div className="relative z-10">
              <div
                className="font-mono text-xs uppercase tracking-[0.4em] mb-6"
                style={{ color: "rgba(0,229,255,0.6)" }}
              >
                Full-Stack · AI/ML · GenAI
              </div>
              <h1
                className="font-black uppercase leading-[0.88] tracking-[-0.02em] mb-8"
                style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", fontFamily: "Syne, sans-serif" }}
              >
                ANKIT{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #00e5ff 0%, #7c3aed 60%, #f43f5e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  SHARMA
                </span>
              </h1>
              <p className="text-slate-400 max-w-xl text-base leading-relaxed mb-8">
                Architecting high-performance digital systems at the intersection of
                full-stack engineering and artificial intelligence.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/projects">
                  <div
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs font-bold text-black uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
                    style={{ background: "linear-gradient(135deg, #00e5ff, #7c3aed)" }}
                  >
                    VIEW WORK <ArrowUpRight size={14} />
                  </div>
                </Link>
                <Link href="/contact">
                  <div
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs uppercase tracking-wider transition-all hover:text-cyan-400 text-slate-400"
                    style={{
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    CONTACT
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* ── SECONDARY ROW ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Featured Projects — 7 cols */}
            <div className="md:col-span-7 space-y-4">
              {featuredProjects.map((p) => (
                <Link key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">
                  <div
                    className="group flex items-center justify-between p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderLeft: `3px solid ${p.accent}40`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="p-2.5 rounded-xl"
                        style={{ background: `${p.accent}12`, border: `1px solid ${p.accent}20` }}
                      >
                        <Code2 size={16} style={{ color: p.accent }} />
                      </div>
                      <div>
                        <div className="font-bold text-sm group-hover:text-white transition-colors">
                          {p.name}
                        </div>
                        <div className="text-xs text-slate-500">{p.desc}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-[9px] px-2 py-1 rounded-full uppercase"
                        style={{ background: `${p.accent}12`, color: p.accent, border: `1px solid ${p.accent}20` }}
                      >
                        {p.tag}
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-slate-600 group-hover:text-white transition-colors"
                      />
                    </div>
                  </div>
                </Link>
              ))}

              {/* GitHub link */}
              <Link href="https://github.com/Anvians" target="_blank" rel="noopener noreferrer">
                <div
                  className="group flex items-center justify-between p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderStyle: "dashed",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Github size={15} className="text-slate-500 group-hover:text-white transition-colors" />
                    <span className="font-mono text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                      github.com/Anvians → More projects
                    </span>
                  </div>
                  <ArrowUpRight size={13} className="text-slate-700 group-hover:text-slate-400 transition-colors" />
                </div>
              </Link>
            </div>

            {/* Stats — 5 cols */}
            <div className="md:col-span-5 space-y-4">
              {/* Metrics */}
              <div
                className="p-6 rounded-2xl grid grid-cols-2 gap-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <MetricCounter value={10} label="Projects" suffix="+" />
                <MetricCounter value={3} label="Years Coding" suffix="+" />
                <MetricCounter value={5} label="Tech Stacks" suffix="+" />
                <MetricCounter value={100} label="Commits/mo" suffix="+" />
              </div>

              {/* Currently learning badge */}
              <div
                className="p-5 rounded-2xl flex items-center gap-4"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(0,229,255,0.04))",
                  border: "1px solid rgba(124,58,237,0.15)",
                }}
              >
                <div
                  className="p-3 rounded-xl"
                  style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }}
                >
                  <Brain size={18} style={{ color: "#7c3aed" }} />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-violet-400 uppercase tracking-[0.2em] mb-0.5">
                    Currently Mastering
                  </div>
                  <div className="text-sm font-bold">LLM Agents · RAG · MLOps</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Portrait ── */}
        <div className="lg:col-span-4 relative min-h-[600px]">
          <div className="lg:sticky lg:top-28 h-[calc(100vh-140px)] min-h-[500px]">
            <HeroImage src="/Hero.png" />
          </div>
        </div>
      </div>

      {/* ── TECH STACK MARQUEE ── */}
      <div
        className="mt-4 p-6 rounded-2xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1" style={{ background: "rgba(0,229,255,0.1)" }} />
          <span className="font-mono text-[9px] text-cyan-700 uppercase tracking-[0.3em]">Core_Arsenal</span>
          <div className="h-px flex-1" style={{ background: "rgba(0,229,255,0.1)" }} />
        </div>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {skills.map((s) => (
            <SkillTag key={s}>{s}</SkillTag>
          ))}
        </div>
      </div>
    </main>
  );
}
