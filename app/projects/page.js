import ProjectCard from "../_components/ProjectCard"; // adjust the path if needed
import { projects } from "./projectData";
export default function ProjectsPage() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.title}
          liveUrl={project.liveUrl}
          repoUrl={project.repoUrl}
        />
      ))}
    </div>
  );
}
