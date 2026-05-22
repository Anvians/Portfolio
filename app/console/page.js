"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TerminalSquare, ChevronRight } from "lucide-react";

const BOOT_SEQUENCE = [
  { type: "dim", content: "ANKIT_OS v4.2.1 — KERNEL LOADED", delay: 0 },
  { type: "dim", content: "MOUNTING /sys/cortex ... [OK]", delay: 60 },
  { type: "dim", content: "LOADING AI_MODULES ... [OK]", delay: 120 },
  { type: "dim", content: "NEURAL_LINK ESTABLISHED ... [OK]", delay: 180 },
  { type: "dim", content: "─────────────────────────────────────", delay: 240 },
  { type: "system", content: "WELCOME. TYPE 'HELP' FOR COMMANDS.", delay: 320 },
];

const HELP_OUTPUT = `
COMMANDS ─────────────────────────────────────────────
  about        Identity profile
  skills       Technology modules
  projects     Deployed systems
  contact      Communication channel
  education    Academic background
  experience   Mission logs
  status       System diagnostics
  clear        Clear terminal
  whoami       Current operator
─────────────────────────────────────────────────────`.trim();

const commands = {
  help: { type: "system", content: HELP_OUTPUT },
  about: {
    type: "system",
    content: `
SUBJECT    : Ankit Sharma
ROLE       : Full-Stack Developer + AI/ML Engineer
LOCATION   : West Bengal, India
INSTITUTE  : IIEST Shibpur (Mech Eng → CS pivot)
MISSION    : Architecting intelligent digital systems
STATUS     : Seeking AI/ML/GenAI roles @ TCS + beyond`.trim(),
  },
  skills: {
    type: "system",
    content: `
FRONTEND   ▓▓▓▓▓▓▓▓▓░  Next.js, React, Tailwind, Framer
BACKEND    ▓▓▓▓▓▓▓▓░░  Node.js, FastAPI, PostgreSQL, Redis
AI/ML      ▓▓▓▓▓▓▓░░░  LangChain, RAG, TF/Keras, Anthropic
DEVOPS     ▓▓▓▓▓▓░░░░  Docker, Vercel, GitHub Actions, AWS
SECURITY   ▓▓▓▓▓░░░░░  JWT, OAuth2, OWASP, Linux`.trim(),
  },
  projects: {
    type: "system",
    content: `
01. JobPilot ............. React Native + Claude Haiku + Gmail API
02. Purchase Order Mgr ... FastAPI + PostgreSQL + Gemini AI
03. GitVisualizer ........ React + D3.js + GitHub API
04. OSINT Crawler ........ FastAPI + Python async scraping
05. College Connect ...... Full-stack events platform
06. CHITCHAT ............. Socket.IO real-time chat app

→ URL: github.com/Anvians`.trim(),
  },
  contact: {
    type: "cyan",
    content: `
EMAIL   : theanvians@gmail.com
GITHUB  : github.com/Anvians
DISCORD : Anvians

TRANSMISSION_STATUS: OPEN`.trim(),
  },
  education: {
    type: "system",
    content: `
INSTITUTION : IIEST Shibpur (est. 1856)
DEGREE      : B.Tech Mechanical Engineering
YEAR        : Final Year (Graduating 2026)
PIVOT       : Self-directed CS/AI track alongside Mech
RELEVANT    : DSA, ML Systems, Distributed Systems`.trim(),
  },
  experience: {
    type: "system",
    content: `
[2024-Present] Independent Developer
  Shipped 6+ production projects across AI and web
  
[2024]         AI/ML Preparation  
  TCS iNE cleared · AI/ML/GenAI JD selected
  RAG systems · MLOps pipeline expertise

[2023]         Shell Graduate Programme
  Passed Round 1 · Competency-based assessment`.trim(),
  },
  status: {
    type: "system",
    content: `
SYSTEM     : OPTIMAL
CPU_USAGE  : 87% (deep focus mode)
COFFEE     : CRITICAL — refill required
CREATIVITY : ████████████ 100%
MOOD       : BUILDING
NEXT_GOAL  : Ship something great today`.trim(),
  },
  whoami: {
    type: "cyan",
    content: "OPERATOR: Ankit Sharma — Digital Architect & AI Engineer",
  },
};

function TypedLine({ content, type }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!content.includes("\n")) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(content.slice(0, i++));
        if (i > content.length) clearInterval(interval);
      }, 8);
      return () => clearInterval(interval);
    } else {
      setDisplayed(content);
    }
  }, [content]);

  const colorMap = {
    system: "#94a3b8",
    cyan: "#00e5ff",
    error: "#f87171",
    dim: "rgba(71,85,105,0.8)",
    user: "#e2e8f0",
  };

  return (
    <pre
      className="font-mono text-xs leading-relaxed whitespace-pre-wrap"
      style={{ color: colorMap[type] || "#94a3b8", fontFamily: "JetBrains Mono, monospace" }}
    >
      {displayed}
    </pre>
  );
}

export default function ConsolePage() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [bootDone, setBootDone] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    const boot = [];
    BOOT_SEQUENCE.forEach(({ type, content, delay }) => {
      setTimeout(() => {
        if (mounted) {
          setHistory((h) => [...h, { type, content }]);
          if (delay === BOOT_SEQUENCE[BOOT_SEQUENCE.length - 1].delay) {
            setTimeout(() => setBootDone(true), 200);
          }
        }
      }, delay);
    });
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newH = [...history, { type: "user", content: `> ${input}` }];

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (commands[cmd]) {
      newH.push(commands[cmd]);
    } else {
      newH.push({
        type: "error",
        content: `Command not found: '${cmd}'. Type 'help' for available commands.`,
      });
    }

    setHistory(newH);
    setInput("");
  };

  return (
    <div className="min-h-screen px-4 md:px-6 lg:px-12 pt-4 max-w-[1000px] mx-auto pb-24">
      <div className="flex items-center gap-3 mb-6">
        <TerminalSquare size={16} style={{ color: "#00e5ff" }} />
        <h1
          className="font-black uppercase tracking-[0.2em] text-lg"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          System Console
        </h1>
        {bootDone && (
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full ml-2"
            style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}
          >
            <div
              className="w-1 h-1 rounded-full"
              style={{ background: "#10b981", boxShadow: "0 0 5px #10b981", animation: "pulse 2s ease-in-out infinite" }}
            />
            <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-[0.2em]">ACTIVE</span>
          </div>
        )}
      </div>

      {/* Terminal window */}
      <div
        className="rounded-[1.5rem] overflow-hidden"
        style={{
          background: "rgba(2,2,10,0.9)",
          border: "1px solid rgba(0,229,255,0.1)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 40px rgba(0,229,255,0.04) inset",
        }}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Window chrome */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="flex gap-1.5">
            {["#ef4444", "#f59e0b", "#10b981"].map((c, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: c, opacity: 0.6 }}
              />
            ))}
          </div>
          <span
            className="font-mono text-[9px] uppercase tracking-[0.25em]"
            style={{ color: "rgba(0,229,255,0.4)" }}
          >
            ANKIT_OS — bash
          </span>
          <div />
        </div>

        {/* Output */}
        <div
          className="p-6 h-[62vh] overflow-y-auto space-y-2"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          {history.map((entry, i) => (
            <TypedLine key={i} content={entry.content} type={entry.type} />
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleCommand}
          className="flex items-center gap-3 px-6 py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <ChevronRight
            size={14}
            style={{ color: "#00e5ff", filter: "drop-shadow(0 0 5px rgba(0,229,255,0.6))" }}
          />
          <input
            ref={inputRef}
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 text-xs"
            style={{
              color: "#e2e8f0",
              fontFamily: "JetBrains Mono, monospace",
              caretColor: "#00e5ff",
            }}
            placeholder={bootDone ? "enter command..." : "initializing..."}
            disabled={!bootDone}
          />
          <span
            className="font-mono text-[9px]"
            style={{ color: "rgba(0,229,255,0.3)" }}
          >
            ⌘
          </span>
        </form>
      </div>
    </div>
  );
}
