"use client";
import { motion } from "framer-motion";
import { Cpu, Code2, Database, LayoutPanelLeft, Layers } from "lucide-react";

const stackData = [
  {
    category: "Frontend Architecture",
    icon: <LayoutPanelLeft className="text-neon-cyan" />,
    skills: ["Next.js 15", "React", "Tailwind CSS v4", "Framer Motion", "Three.js"]
  },
  {
    category: "Backend & Systems",
    icon: <Database className="text-neon-purple" />,
    skills: ["Node.js", "FastAPI", "PostgreSQL", "Firebase", "Redis"]
  },
  {
    category: "Tools & DevOps",
    icon: <Cpu className="text-neon-cyan" />,
    skills: ["Git", "Docker", "Vercel", "AWS", "Figma"]
  }
];

export default function StackPage() {
  return (
    <div className="min-h-screen px-6 lg:px-12 pt-12 max-w-[1200px] mx-auto pb-20">
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <Layers className="text-neon-cyan" />
          <span className="font-mono text-neon-cyan text-sm tracking-[0.3em] uppercase">Core_Modules</span>
        </div>
        <h1 className="text-6xl font-black uppercase tracking-tighter">Technology <br/> Arsenal</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stackData.map((item, idx) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel p-8 rounded-[2.5rem] relative overflow-hidden group"
          >
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold mb-6 tracking-tight uppercase">{item.category}</h3>
            
            <div className="space-y-3">
              {item.skills.map(skill => (
                <div key={skill} className="flex items-center justify-between group/item">
                  <span className="text-slate-400 group-hover/item:text-white transition-colors">{skill}</span>
                  <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      className="h-full bg-neon-cyan shadow-[0_0_10px_cyan]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Background pattern */}
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Code2 size={120} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 glass-panel p-8 rounded-[2rem] flex items-center justify-between border-dashed border-white/10">
        <div className="flex flex-col">
          <span className="text-xs font-mono text-slate-500 uppercase">Learning_Protocol</span>
          <span className="text-lg font-bold">Exploring WebGPU & AI Agent RAG workflows</span>
        </div>
        <div className="h-12 w-12 rounded-full border border-neon-purple flex items-center justify-center animate-spin-slow">
          <Cpu size={20} className="text-neon-purple" />
        </div>
      </div>
    </div>
  );
}