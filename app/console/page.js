"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, ChevronRight } from "lucide-react";

export default function ConsolePage() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "ANKIT SHARMA OS v4.0.0 [STABLE]" },
    { type: "system", content: "INITIALIZING NEURAL LINK... OK" },
    { type: "system", content: "TYPE 'HELP' TO LIST AVAILABLE COMMANDS." },
    { type: "system", content: "----------------------------------------" },
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    const newHistory = [...history, { type: "user", content: input }];

    switch (cmd) {
      case "help":
        newHistory.push({ type: "system", content: "AVAILABLE COMMANDS: ABOUT, PROJECTS, SKILLS, CLEAR, STATUS" });
        break;
      case "about":
        newHistory.push({ type: "system", content: "SUBJECT: ANKIT SHARMA. MISSION: ARCHITECTING THE FUTURE OF THE WEB." });
        break;
      case "projects":
        newHistory.push({ type: "system", content: "REDIRECTING TO WORK ARCHIVE..." });
        setTimeout(() => window.location.href = "/projects", 1000);
        break;
      case "status":
        newHistory.push({ type: "system", content: "CPU: OPTIMAL | COFFEE_LEVEL: CRITICAL | CREATIVITY: 100%" });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        newHistory.push({ type: "error", content: `COMMAND NOT RECOGNIZED: ${cmd}` });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="min-h-screen px-6 lg:px-12 pt-12 max-w-[1000px] mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Terminal className="text-neon-cyan" />
        <h1 className="text-2xl font-mono uppercase tracking-[0.3em]">System_Console</h1>
      </div>

      <div className="glass-panel rounded-2xl p-6 h-[60vh] flex flex-col font-mono text-sm">
        <div className="flex-1 overflow-y-auto space-y-2 mb-4 custom-scrollbar">
          {history.map((entry, i) => (
            <div key={i} className={`${
              entry.type === "system" ? "text-neon-cyan" : 
              entry.type === "error" ? "text-red-400" : "text-white"
            }`}>
              {entry.type === "user" ? `> ${entry.content}` : entry.content}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={handleCommand} className="flex items-center gap-2 border-t border-white/10 pt-4">
          <ChevronRight size={18} className="text-neon-cyan animate-pulse" />
          <input
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 text-white placeholder:opacity-20"
            placeholder="ENTER COMMAND..."
          />
        </form>
      </div>
    </div>
  );
}