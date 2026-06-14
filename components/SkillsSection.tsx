"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Kotlin", "JavaScript", "TypeScript", "C++", "C#", "HTML", "CSS"],
  },
  {
    title: "AI / GenAI",
    skills: ["LLM APIs", "Claude API", "Gemini API", "OpenAI API", "RAG Pipelines", "Prompt Engineering"],
  },
  {
    title: "ML / NLP",
    skills: ["TF-IDF", "KeyBERT", "Cosine Similarity", "Semantic Matching", "Voice Analysis", "Sentiment Analysis", "Scikit-learn"],
  },
  {
    title: "Vector & Search",
    skills: ["FAISS", "ChromaDB", "Sentence Transformers", "Azure AI Search", "Semantic Ranking"],
  },
  {
    title: "Mobile Dev",
    skills: ["Android Studio", "Jetpack Compose", "Firebase Auth", "Firestore", "TensorFlow Lite"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "PostgreSQL", "MongoDB", "SQLAlchemy", "Motor (async)", "REST APIs", "SMTP"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Chart.js", "GSAP", "Three.js"],
  },
  {
    title: "IoT / Hardware",
    skills: ["ESP32", "MAX30102", "DHT11", "GSR", "AD8232", "MPU6050"],
  },
  {
    title: "Integrations",
    skills: ["Slack API", "Vercel", "Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "Research & Data",
    skills: ["SPSS", "NVivo", "Academic Writing", "Kaggle Datasets", "Data Analysis"],
  },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-heading",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".skill-category",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        padding: "6rem 2rem",
        background: "linear-gradient(to bottom, #0A0A0A, #080810)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        className="skills-heading"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "#F5EFE6",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Technical <span style={{ color: "#C8860A" }}>Skills</span>
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
        Technologies & tools I work with
      </p>

      <div
        className="skills-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="skill-category"
            style={{
              background: "rgba(255,255,255,0.015)",
              border: "1px solid rgba(200,134,10,0.08)",
              borderRadius: "16px",
              padding: "1.5rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(200,134,10,0.25)";
              e.currentTarget.style.background = "rgba(200,134,10,0.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(200,134,10,0.08)";
              e.currentTarget.style.background = "rgba(255,255,255,0.015)";
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "#C8860A",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {category.title}
            </h3>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "0.35rem 0.8rem",
                    borderRadius: "50px",
                    background: "rgba(200,134,10,0.06)",
                    border: "1px solid rgba(200,134,10,0.1)",
                    color: "#bbb",
                    fontSize: "0.75rem",
                    fontWeight: 400,
                    whiteSpace: "nowrap",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(200,134,10,0.15)";
                    e.currentTarget.style.color = "#C8860A";
                    e.currentTarget.style.borderColor = "rgba(200,134,10,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(200,134,10,0.06)";
                    e.currentTarget.style.color = "#bbb";
                    e.currentTarget.style.borderColor = "rgba(200,134,10,0.1)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .skill-category {
            padding: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;