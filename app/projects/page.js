"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../_components/ProjectCard";
import { Satellite } from "lucide-react";

const projects = [
  {
    slug: "jobpilot",
    title: "JobPilot",
    description: "AI-powered job application tracker integrating Gmail API and Claude Haiku. Auto-parses emails and organizes applications intelligently.",
    liveUrl: "https://github.com/Anvians",
    repoUrl: "https://github.com/Anvians",
    tags: ["GenAI", "React Native", "Node.js", "Supabase"],
    category: "ai",
  },
  {
    slug: "osint-crawler",
    title: "OSINT Username Crawler",
    description: "Cybersecurity tool to cross-reference usernames across major platforms. FastAPI backend with async scraping.",
    liveUrl: "https://portfoliotools-two.vercel.app",
    repoUrl: "https://github.com/Anvians/independent-project",
    tags: ["FastAPI", "Python", "OSINT", "Async"],
    category: "security",
  },
  {
    slug: "GitVisualizer",
    title: "GitVisualizer",
    description: "Analyze GitHub profiles with beautiful visual charts for repositories, languages used, and contribution activity.",
    liveUrl: "https://gitvisualizer-anvians.vercel.app",
    repoUrl: "https://github.com/Anvians/GitVisualizer",
    tags: ["React", "D3.js", "GitHub API"],
    category: "fullstack",
  },
  {
    slug: "hiver",
    title: "Hiver — Email Classifier",
    description: "Gemini-powered email triage and classification system. Automatically categorizes and prioritizes inbox messages.",
    liveUrl: "https://hiver-anvians.vercel.app/",
    repoUrl: "https://github.com/Anvians/Hiver",
    tags: ["Gemini AI", "ReactJS", "NLP"],
    category: "ai",
  },
  {
    slug: "college-connect",
    title: "College Connect",
    description: "Full-stack campus events management platform with private social media integration and real-time notifications.",
    liveUrl: "https://campus-events-handler.vercel.app/",
    repoUrl: "https://github.com/Anvians/College-Connect",
    tags: ["React", "Node.js", "MongoDB"],
    category: "fullstack",
  },
  {
    slug: "chat-app",
    title: "CHITCHAT",
    description: "Real-time full-stack chat application with Socket.IO, featuring rooms, presence indicators, and message history.",
    liveUrl: "https://chat-anvians.vercel.app/",
    repoUrl: "https://github.com/Anvians/Chat-App",
    tags: ["Socket.IO", "React", "Express"],
    category: "fullstack",
  },
];

const filters = [
  { id: "all", label: "All Systems" },
  { id: "ai", label: "AI / ML" },
  { id: "fullstack", label: "Full Stack" },
  { id: "security", label: "Security" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen px-4 md:px-6 lg:px-12 pb-24 max-w-[1400px] mx-auto">
      {/* Header */}
      <header className="mb-12 pt-4">
        <div className="flex items-center gap-3 mb-5">
          <Satellite size={16} style={{ color: "#00e5ff" }} />
          <span className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: "rgba(0,229,255,0.6)" }}>
            Archive_Explorer
          </span>
        </div>
        <h1
          className="font-black uppercase tracking-[-0.02em] leading-[0.9] mb-6"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontFamily: "Syne, sans-serif" }}
        >
          Work{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            &amp;
          </span>{" "}
          Projects
        </h1>
        <p className="text-slate-400 max-w-2xl text-base">
          Digital systems built at the intersection of performance engineering and artificial intelligence.
        </p>
      </header>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className="px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300"
            style={{
              background: active === f.id ? "rgba(0,229,255,0.12)" : "rgba(255,255,255,0.03)",
              border: active === f.id ? "1px solid rgba(0,229,255,0.3)" : "1px solid rgba(255,255,255,0.08)",
              color: active === f.id ? "#00e5ff" : "#475569",
              boxShadow: active === f.id ? "0 0 20px rgba(0,229,255,0.1)" : "none",
            }}
          >
            {f.label}
          </button>
        ))}
        <span
          className="px-4 py-2 rounded-full font-mono text-xs text-slate-600"
          style={{ border: "1px solid transparent" }}
        >
          {filtered.length} systems
        </span>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                {...project}
                index={i}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
