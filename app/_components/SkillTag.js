"use client";

export default function SkillTag({ children }) {
  const handleEnter = (e) => {
    e.currentTarget.style.color = "rgba(0,229,255,0.8)";
    e.currentTarget.style.WebkitTextStroke = "none";
    e.currentTarget.style.textShadow = "0 0 20px rgba(0,229,255,0.3)";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.color = "rgba(255,255,255,0.08)";
    e.currentTarget.style.WebkitTextStroke = "0.5px rgba(255,255,255,0.08)";
    e.currentTarget.style.textShadow = "none";
  };

  return (
    <span
      className="text-lg font-black uppercase tracking-tight transition-all duration-300 cursor-default"
      style={{
        color: "rgba(255,255,255,0.08)",
        fontFamily: "Syne, sans-serif",
        WebkitTextStroke: "0.5px rgba(255,255,255,0.08)",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
    </span>
  );
}
