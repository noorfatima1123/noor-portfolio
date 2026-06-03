"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "CGPA", value: "3.39/4.0" },
  { label: "Experience", value: "2.5+ Years" },
  { label: "Projects", value: "4 Major" },
  { label: "Research Papers", value: "100+" },
];

const skills = [
  "Python", "Kotlin", "JavaScript", "TypeScript", "C++", "React",
  "FastAPI", "Firebase", "PostgreSQL", "MongoDB", "TensorFlow Lite",
  "Gemini API", "RAG Pipelines", "FAISS", "Prompt Engineering",
  "Android Studio", "Jetpack Compose", "ESP32", "Git",
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-heading",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".about-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".stat-card",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".stats-row",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".skill-pill",
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".skills-row",
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        padding: "6rem 2rem",
        background: "linear-gradient(to bottom, #000000, #0a0a14)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <h2
        className="about-heading"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        About <span style={{ color: "#FF8C42" }}>Me</span>
      </h2>

      {/* Summary */}
      <p
        className="about-text"
        style={{
          maxWidth: "800px",
          color: "#aaa",
          lineHeight: 1.8,
          fontSize: "1.05rem",
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        Fresh graduate in Computer Engineering from Bahauddin Zakariya
        University (CGPA: 3.39/4.0) with 2.5+ years of experience in
        AI-assisted development, research analysis, and software engineering.
        Specializes in building GenAI-powered applications using LLM APIs, RAG
        pipelines, and ML-driven systems. Creator of <strong style={{ color: "#fff" }}>HireFlow</strong> — an
        end-to-end AI recruitment platform — and <strong style={{ color: "#fff" }}>Zenvyra Health</strong>,
        an IoT health monitoring Android app.
      </p>

      {/* Stats Row */}
      <div
        className="stats-row"
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="stat-card"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "1.5rem 2rem",
              textAlign: "center",
              minWidth: "140px",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#FF8C42",
                marginBottom: "0.3rem",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <h3
        style={{
          color: "#fff",
          fontSize: "1.3rem",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Technical <span style={{ color: "#FF8C42" }}>Skills</span>
      </h3>

      <div
        className="skills-row"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.7rem",
          justifyContent: "center",
          maxWidth: "800px",
        }}
      >
        {skills.map((skill) => (
          <span
            key={skill}
            className="skill-pill"
            style={{
              padding: "0.5rem 1.1rem",
              borderRadius: "50px",
              background: "rgba(255,140,66,0.1)",
              border: "1px solid rgba(255,140,66,0.25)",
              color: "#FF8C42",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.03em",
              whiteSpace: "nowrap",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;