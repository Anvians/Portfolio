import { projects } from "../projectData";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, ShieldCheck, Terminal } from "lucide-react";

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-neon-cyan">
        [ERROR: PROJECT_NOT_FOUND]
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 lg:px-12 pb-20 max-w-[1400px] mx-auto pt-10">
      <Link 
        href="/projects" 
        className="inline-flex items-center gap-2 text-slate-500 hover:text-neon-cyan transition-colors font-mono text-xs uppercase mb-8"
      >
        <ArrowLeft size={14} /> Back to Directory
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Project Info */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              {project.title}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-3 text-neon-cyan">
              <Terminal size={18} />
              <span className="font-mono text-xs tracking-widest uppercase">Specifications</span>
            </div>
            <div className="space-y-2 border-t border-white/5 pt-4">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Host:</span>
                <span className="text-white">Vercel Edge</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Encrypted:</span>
                <span className="text-green-500">SSL_SECURE</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-neon-cyan text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all"
            >
              LAUNCH PROJECT <ExternalLink size={18} />
            </a>
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 glass-panel text-white font-bold rounded-xl hover:border-white/20 transition-all"
            >
              SOURCE CODE <Github size={18} />
            </a>
          </div>
        </div>

        {/* Right: Immersive Viewer */}
        <div className="lg:col-span-2">
          <div className="glass-panel rounded-[2rem] overflow-hidden relative group aspect-video lg:aspect-auto lg:h-[70vh]">
             {/* Viewer Header */}
             <div className="absolute top-0 inset-x-0 h-10 bg-white/5 backdrop-blur-md z-20 flex items-center px-6 justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">
                  HTTPS://{project.slug}.sys
                </span>
                <ShieldCheck size={14} className="text-neon-cyan" />
             </div>

             <iframe
               src={project.liveUrl}
               className="w-full h-full border-none pt-10"
               title={project.title}
             ></iframe>
             
             {/* Holographic Overlays */}
             <div className="absolute inset-0 pointer-events-none border-[20px] border-dark-bg/20 z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}