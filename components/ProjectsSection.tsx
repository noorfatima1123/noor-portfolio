"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "HireFlow",
    subtitle: "AI-Powered Recruitment Platform",
    description:
      "End-to-end AI recruitment platform automating candidate screening, resume analysis, and interview assessment. Multi-layer ML pipeline with TF-IDF, KeyBERT, semantic matching, and Gemini API integration.",
    tech: ["Python", "Gemini API", "TF-IDF", "KeyBERT", "React", "TypeScript"],
    year: "2025 – Present",
  },
  {
    title: "Study Agent",
    subtitle: "AI-Powered Learning Assistant",
    description:
      "Intelligent study assistant with RAG pipeline allowing students to upload PDFs and ask questions. Semantic search using Sentence Transformers with FAISS indexing, supporting Urdu and English.",
    tech: ["Python", "FastAPI", "PostgreSQL", "MongoDB", "FAISS", "RAG"],
    year: "2025 – Present",
  },
  {
    title: "Zenvyra Health",
    subtitle: "IoT Health Monitoring Android App",
    description:
      "Full-stack AI health monitoring system with ESP32 wearable, six biomedical sensors, TensorFlow Lite ML for stress classification, Firebase backend, and wellness mini-games.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "TensorFlow Lite", "ESP32"],
    year: "2024 – 2025",
  },
  {
    title: "Portfolio Website",
    subtitle: "Cinematic Developer Portfolio",
    description:
      "Responsive developer portfolio with cinematic dark theme, Three.js particles, GSAP animations, and dedicated sections showcasing major projects and skills.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    year: "2025",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-heading",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        padding: "6rem 2rem",
        background: "#0A0A0A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <h2
        className="projects-heading"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "#F5EFE6",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Featured <span style={{ color: "#C8860A" }}>Projects</span>
      </h2>

      <p
        style={{
          color: "#777",
          fontSize: "1rem",
          marginBottom: "4rem",
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        AI-powered applications & full-stack products
      </p>

      {/* Projects Grid */}
      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-card"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(200,134,10,0.12)",
              borderRadius: "16px",
              padding: "2rem",
              transition: "all 0.4s ease",
              cursor: "default",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(200,134,10,0.4)";
              e.currentTarget.style.background = "rgba(200,134,10,0.03)";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(200,134,10,0.12)";
              e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Year Badge */}
            <span
              style={{
                fontSize: "0.75rem",
                color: "#C8860A",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
              }}
            >
              {project.year}
            </span>

            {/* Title */}
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#F5EFE6",
                margin: 0,
              }}
            >
              {project.title}
            </h3>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "0.9rem",
                color: "#C8860A",
                margin: 0,
                fontWeight: 500,
              }}
            >
              {project.subtitle}
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: "0.9rem",
                color: "#888",
                lineHeight: 1.7,
                margin: 0,
                flex: 1,
              }}
            >
              {project.description}
            </p>

            {/* Tech Pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
                marginTop: "auto",
              }}
            >
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "0.3rem 0.7rem",
                    borderRadius: "50px",
                    background: "rgba(200,134,10,0.08)",
                    border: "1px solid rgba(200,134,10,0.15)",
                    color: "#C8860A",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;