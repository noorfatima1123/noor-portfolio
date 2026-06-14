"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "FraudShield",
    subtitle: "AI-Powered Real-Time Fraud Detection System",
    description:
      "End-to-end fraud detection system ingesting real transaction data through a 7-phase modular architecture. 100% fraud detection rate on 284,807 Kaggle transactions with zero false positives. Real-time dashboard with live feed, severity charts, and instant alerts.",
    tech: ["Python", "FastAPI", "Next.js", "TypeScript", "ChromaDB", "SMTP"],
    year: "2025",
  },
  {
    title: "ECHO Arena",
    subtitle: "AI Adversarial Debate Platform",
    description:
      "Full-stack AI debate simulation where users defend ideas against a ruthless AI opponent using real market data. Dynamic deathmatch system across 5 attack dimensions with neutral AI judging, HP-based scoring, and cinematic war room UI.",
    tech: ["Next.js", "TypeScript", "FastAPI", "Claude API", "Tailwind CSS", "Framer Motion"],
    year: "2025",
  },
  {
    title: "BriefAI",
    subtitle: "Multi-Agent Document Intelligence",
    description:
      "Six specialized AI agents that translate complex documents into audience-specific briefs. Cross-document comparison, Brief DNA fingerprinting, Visual Renderer cinematic mode, and Slack integration. Built on Microsoft Foundry IQ for grounded reasoning.",
    tech: ["Next.js", "Python", "FastAPI", "Azure AI Search", "TypeScript", "Slack API"],
    year: "2025",
  },
  {
    title: "HireFlow",
    subtitle: "AI-Powered Recruitment Platform",
    description:
      "End-to-end AI recruitment platform automating candidate screening, resume analysis, and interview assessment. Multi-layer ML pipeline with TF-IDF, KeyBERT, semantic matching, and Gemini API integration for intelligent job description parsing.",
    tech: ["Python", "Gemini API", "TF-IDF", "KeyBERT", "React", "TypeScript"],
    year: "2025",
  },
  {
    title: "Study Agent",
    subtitle: "AI-Powered Learning Assistant",
    description:
      "Intelligent study assistant with RAG pipeline allowing students to upload PDFs and ask questions. Semantic search using Sentence Transformers with FAISS indexing, supporting both Urdu and English languages.",
    tech: ["Python", "FastAPI", "PostgreSQL", "MongoDB", "FAISS", "RAG"],
    year: "2025",
  },
  {
    title: "Zenvyra Health",
    subtitle: "IoT Health Monitoring Android App",
    description:
      "Full-stack AI health monitoring system with ESP32 wearable, six biomedical sensors, TensorFlow Lite ML for stress classification, Firebase backend, and wellness mini-games with AI coaching chatbot.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "TensorFlow Lite", "ESP32"],
    year: "2024 – 2025",
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
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
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
          maxWidth: "550px",
        }}
      >
        AI-powered applications, full-stack products & intelligent systems
      </p>

      {/* Projects Grid */}
      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1300px",
          width: "100%",
        }}
      >
        {projects.map((project, index) => (
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
              gap: "0.9rem",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(200,134,10,0.4)";
              e.currentTarget.style.background = "rgba(200,134,10,0.03)";
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.4), 0 0 40px rgba(200,134,10,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(200,134,10,0.12)";
              e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Top Row: Index + Year */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(200,134,10,0.35)",
                  fontFamily: "monospace",
                  letterSpacing: "0.1em",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "#C8860A",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  background: "rgba(200,134,10,0.08)",
                  padding: "0.25rem 0.7rem",
                  borderRadius: "50px",
                }}
              >
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "#F5EFE6",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              {project.title}
            </h3>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "0.85rem",
                color: "#C8860A",
                margin: 0,
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              {project.subtitle}
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: "0.85rem",
                color: "#888",
                lineHeight: 1.75,
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
                paddingTop: "0.5rem",
              }}
            >
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "0.3rem 0.75rem",
                    borderRadius: "50px",
                    background: "rgba(200,134,10,0.06)",
                    border: "1px solid rgba(200,134,10,0.12)",
                    color: "#bbb",
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(200,134,10,0.15)";
                    e.currentTarget.style.color = "#C8860A";
                    e.currentTarget.style.borderColor = "rgba(200,134,10,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(200,134,10,0.06)";
                    e.currentTarget.style.color = "#bbb";
                    e.currentTarget.style.borderColor = "rgba(200,134,10,0.12)";
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .project-card {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;