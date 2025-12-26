"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MessageSquare, Globe, ShieldCheck, Zap } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); // idle, sending, success
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate encryption and transmission delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus("success");
    
    setTimeout(() => {
      setStatus("idle");
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen px-6 lg:px-12 pt-12 pb-20 max-w-[1200px] mx-auto">
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <Globe className="text-neon-cyan animate-pulse" />
          <span className="font-mono text-neon-cyan text-sm tracking-[0.3em] uppercase">Communication_Hub</span>
        </div>
        <h1 className="text-6xl font-black uppercase tracking-tighter">Establish <br/> Connection</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: The Transmission Form */}
        <div className="lg:col-span-7">
          <motion.form 
            onSubmit={handleSubmit}
            className="glass-panel p-8 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20">
               <ShieldCheck size={40} className="text-neon-cyan" />
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-neon-cyan uppercase tracking-widest ml-1">Subject_Identity</label>
                <input 
                  required
                  type="text"
                  placeholder="ENTER NAME..."
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-neon-cyan transition-colors font-mono text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] text-neon-cyan uppercase tracking-widest ml-1">Return_Coordinates (Email)</label>
                <input 
                  required
                  type="email"
                  placeholder="USER@NETWORK.COM"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-neon-cyan transition-colors font-mono text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] text-neon-cyan uppercase tracking-widest ml-1">Data_Payload (Message)</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="BEGIN TRANSMISSION..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-neon-cyan transition-colors font-mono text-sm resize-none"
                />
              </div>

              <button 
                disabled={status !== "idle"}
                className="group relative w-full py-4 bg-neon-cyan text-black font-black uppercase tracking-widest rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] disabled:opacity-50"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {status === "idle" && <><Send size={18} /> SEND TRANSMISSION</>}
                  {status === "sending" && <span className="animate-pulse">ENCRYPTING...</span>}
                  {status === "success" && "DATA DELIVERED"}
                </div>
                {/* Background sliding effect */}
                <motion.div 
                  className="absolute inset-0 bg-white opacity-20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                />
              </button>
            </div>
          </motion.form>
        </div>

        {/* Right: Social Coordinates & Status */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-8 rounded-[2.5rem]">
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Neural_Nodes</h3>
            <div className="space-y-4">
              {[
                { label: "Email", value: "theanvians@gmail.com", icon: <Mail size={16}/> },
                { label: "Discord", value: "Anvians", icon: <MessageSquare size={16}/> },
                { label: "Github", value: "github.com/Anvians", icon: <Zap size={16}/> },
              ].map((link) => (
                <div key={link.label} className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-neon-cyan transition-colors">
                    {link.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">{link.label}</span>
                    <span className="text-sm font-bold group-hover:text-neon-cyan transition-colors">{link.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8 rounded-[2.5rem] border-dashed border-white/10">
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Uptime_Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">ENCRYPTION</span>
                <span className="text-[10px] text-green-500 font-mono">ACTIVE_AES_256</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">LATENCY</span>
                <span className="text-[10px] text-neon-cyan font-mono">24MS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">LOCATION</span>
                <span className="text-[10px] text-slate-200 font-mono">SAT_LINK_08</span>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl flex items-center gap-3 text-green-400 font-mono text-[10px] uppercase"
              >
                <ShieldCheck size={16} /> Connection stable. Message received.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}