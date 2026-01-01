import Link from "next/link";
import GlassCard from "./_components/GlassCard";
import HeroImage from "./_components/HeroImage";
import { Cpu, Layout } from "lucide-react";

export default function Home() {



  return (
    <main className="min-h-screen pb-20 px-6 lg:px-12 max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side (8/12 Columns) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Main Hero Bento Item */}
          <div className="glass-panel p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden group min-h-[400px] flex flex-col justify-end">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-100 transition-opacity duration-1000">
               <div className="w-32 h-32 border-t-2 border-r-2 border-neon-cyan" />
            </div>
            
            <span className="font-mono text-neon-cyan text-sm tracking-[0.4em] mb-4 uppercase">System_Online</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
              ANKIT <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-glow">SHARMA</span>
            </h1>
            <p className="mt-8 text-slate-400 max-w-lg text-lg leading-relaxed">
              Full-stack developer architecting high-frequency digital experiences.
            </p>
          </div>

          {/* Secondary Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href='https://chat-app-coral-psi.vercel.app/' target="_blank" rel="noopener noreferrer">
            <GlassCard className="group">
              <div className="flex justify-between items-start mb-10">
                <span className="p-2 bg-neon-cyan/10 rounded-lg text-neon-cyan"><Layout size={20}/></span>
                <span className="text-[10px] font-mono text-slate-500">PROJ_01</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">Chat App</h3>
              <p className="text-sm text-slate-400">App to chat for developer.</p>
            </GlassCard>
            </Link>

            <GlassCard className="group">
              <div className="flex justify-between items-start mb-10">
                <span className="p-2 bg-neon-purple/10 rounded-lg text-neon-purple"><Cpu size={20}/></span>
                <span className="text-[10px] font-mono text-slate-500">PROJ_02</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-purple transition-colors">Nebula Engine</h3>
              <p className="text-sm text-slate-400">High-performance data visualization framework.</p>
            </GlassCard>
            
            <div className="md:col-span-2 glass-panel p-8 rounded-[2rem]">
               <div className="flex items-center gap-4 mb-6">
                 <div className="h-[1px] flex-1 bg-white/10" />
                 <span className="text-[10px] font-mono text-neon-cyan tracking-[0.3em] uppercase">Core_Arsenal</span>
                 <div className="h-[1px] flex-1 bg-white/10" />
               </div>
               <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
                 {['NEXT.JS', 'TAILWIND_v4', 'THREE.JS', 'FRAMER', 'REACT'].map(tech => (
                   <span key={tech} className="text-xl font-black text-slate-600 hover:text-white transition-colors cursor-default">
                     {tech}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        </div>

        {/* Right Side (4/12 Columns) - Sticky Portrait */}
        <div className="lg:col-span-4 relative min-h-[600px]">
          <div className="lg:sticky lg:top-32 h-[calc(100vh-160px)] min-h-[500px]">
            <HeroImage src="/my-photo.png" />
          </div>
        </div>

      </div>
    </main>
  );
}