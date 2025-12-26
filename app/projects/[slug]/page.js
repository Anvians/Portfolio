import { projects } from "../projectData";

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
        View Live Project
      </a>
      <br />
      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
        View Code
      </a>

      <div style={{ marginTop: "20px", width: "100%", height: "400px" }}>
        <iframe
          src={project.liveUrl}
          style={{ width: "100%", height: "100%", border: "none" }}
          title={project.title}
        ></iframe>
      </div>
    </div>
  );
}
