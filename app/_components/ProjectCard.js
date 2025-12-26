'use client'

import React from "react";

const ProjectCard = ({ title, description, liveUrl, repoUrl }) => {
  return (
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div
        className="project-card"
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          overflow: "hidden",
          width: "300px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div style={{ height: "180px", overflow: "hidden" }}>
          <iframe
            src={liveUrl}
            style={{ width: "100%", height: "100%", border: "none" }}
            title={title}
          ></iframe>
        </div>
        <div style={{ padding: "10px" }}>
          <h3 style={{ margin: "0 0 5px 0", color: "#333" }}>{title}</h3>
          <p style={{ margin: 0, color: "#555", fontSize: "14px" }}>{description}</p>
          {repoUrl && (
            <p style={{ marginTop: "5px", fontSize: "12px", color: "#888" }}>
              View Code
            </p>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
