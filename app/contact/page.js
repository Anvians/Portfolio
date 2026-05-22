"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MessageSquare, Github, Zap, RadioTower, CheckCircle2 } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "theanvians@gmail.com",
    href: "mailto:theanvians@gmail.com",
    icon: Mail,
    color: "#00e5ff",
  },
  {
    label: "GitHub",
    value: "github.com/Anvians",
    href: "https://github.com/Anvians",
    icon: Github,
    color: "#7c3aed",
  },
  {
    label: "Discord",
    value: "Anvians",
    href: "#",
    icon: MessageSquare,
    color: "#f43f5e",
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 2000));
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen px-4 md:px-6 lg:px-12 pt-4 pb-24 max-w-[1200px] mx-auto">
      {/* Header */}
      <header className="mb-14">
        <div className="flex items-center gap-3 mb-5">
          <RadioTower size={16} style={{ color: "#00e5ff", animation: "pulse 2s ease-in-out infinite" }} />
          <span
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: "rgba(0,229,255,0.6)" }}
          >
            Communication_Hub
          </span>
        </div>
        <h1
          className="font-black uppercase tracking-[-0.02em] leading-[0.9]"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontFamily: "Syne, sans-serif" }}
        >
          Establish
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Connection
          </span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full min-h-[400px] gap-6 rounded-[2.5rem] p-12"
                style={{
                  background: "linear-gradient(135deg, rgba(16,185,129,0.06), rgba(0,229,255,0.04))",
                  border: "1px solid rgba(16,185,129,0.2)",
                }}
              >
                <div
                  className="p-5 rounded-full"
                  style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)" }}
                >
                  <CheckCircle2 size={32} style={{ color: "#10b981" }} />
                </div>
                <div className="text-center">
                  <div
                    className="font-black text-2xl mb-2 uppercase tracking-tight"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    Transmission Received
                  </div>
                  <p className="text-slate-400 text-sm">
                    Connection established. I'll respond within 24 hours.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="p-8 rounded-[2.5rem] space-y-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {[
                  { key: "name", label: "Subject_Identity", placeholder: "Your name", type: "text" },
                  { key: "email", label: "Return_Coordinates", placeholder: "user@network.com", type: "email" },
                ].map((field) => (
                  <div key={field.key} className="space-y-2">
                    <label
                      className="font-mono text-[9px] uppercase tracking-[0.25em] block"
                      style={{ color: "rgba(0,229,255,0.5)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      required
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#e2e8f0",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(0,229,255,0.3)";
                        e.target.style.boxShadow = "0 0 20px rgba(0,229,255,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.08)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                ))}

                <div className="space-y-2">
                  <label
                    className="font-mono text-[9px] uppercase tracking-[0.25em] block"
                    style={{ color: "rgba(0,229,255,0.5)" }}
                  >
                    Data_Payload
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Begin transmission..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl text-sm outline-none resize-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#e2e8f0",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(0,229,255,0.3)";
                      e.target.style.boxShadow = "0 0 20px rgba(0,229,255,0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.08)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="w-full py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-[1.01] disabled:opacity-60"
                  style={{
                    background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
                    boxShadow: status === "idle" ? "0 0 30px rgba(0,229,255,0.2)" : "none",
                  }}
                >
                  {status === "idle" && (
                    <span className="flex items-center justify-center gap-2">
                      <Send size={14} /> Send Transmission
                    </span>
                  )}
                  {status === "sending" && (
                    <span className="flex items-center justify-center gap-2">
                      <Zap size={14} className="animate-pulse" /> Encrypting...
                    </span>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-5 space-y-5">
          {/* Links */}
          <div
            className="p-8 rounded-[2.5rem] space-y-4"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <h3
              className="font-mono text-[9px] uppercase tracking-[0.25em] mb-6"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Neural_Nodes
            </h3>
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group transition-all"
                >
                  <div
                    className="p-3 rounded-xl transition-all group-hover:scale-105"
                    style={{
                      background: `${link.color}10`,
                      border: `1px solid ${link.color}20`,
                    }}
                  >
                    <Icon size={15} style={{ color: link.color }} />
                  </div>
                  <div>
                    <div className="font-mono text-[9px] text-slate-600 uppercase mb-0.5">
                      {link.label}
                    </div>
                    <div
                      className="text-sm font-medium transition-colors group-hover:text-white"
                      style={{ color: "#94a3b8" }}
                    >
                      {link.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Status readout */}
          <div
            className="p-6 rounded-2xl"
            style={{
              background: "rgba(0,229,255,0.03)",
              border: "1px solid rgba(0,229,255,0.08)",
            }}
          >
            <h3
              className="font-mono text-[9px] uppercase tracking-[0.25em] mb-5"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Link_Status
            </h3>
            <div className="space-y-3">
              {[
                { key: "ENCRYPTION", value: "AES-256 / ACTIVE", color: "#10b981" },
                { key: "RESPONSE_TIME", value: "< 24 HOURS", color: "#00e5ff" },
                { key: "AVAILABILITY", value: "OPEN TO WORK", color: "#f59e0b" },
              ].map((s) => (
                <div key={s.key} className="flex justify-between items-center">
                  <span className="font-mono text-[10px] text-slate-500">{s.key}</span>
                  <span className="font-mono text-[10px]" style={{ color: s.color }}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
