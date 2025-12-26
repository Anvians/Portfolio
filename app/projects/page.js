import ProjectCard from "../_components/ProjectCard";
import { projects } from "./projectData";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-6 lg:px-12 pb-20 max-w-[1400px] mx-auto">
      <header className="mb-12 pt-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-neon-cyan" />
          <span className="font-mono text-neon-cyan text-sm tracking-[0.3em] uppercase">Archive_Explorer</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          Work <span className="text-white/20">&</span> Projects
        </h1>
        <p className="mt-4 text-slate-400 max-w-2xl text-lg">
          A collection of digital artifacts, interfaces, and experimental web technologies developed in the Alex Forge lab.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            description={project.description}
            liveUrl={project.liveUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </div>
  );
}