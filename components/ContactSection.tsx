"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { label: "Email", value: "noorfatima23rd@gmail.com", href: "mailto:noorfatima23rd@gmail.com" },
  { label: "Phone", value: "+92 305-4691948", href: "tel:+923054691948" },
  { label: "Location", value: "Multan, Pakistan", href: null },
  { label: "LinkedIn", value: "linkedin.com/in/noorfatima", href: "https://linkedin.com" },
  { label: "GitHub", value: "github.com/noorfatima", href: "https://github.com" },
];

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-heading",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".contact-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-card",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".contact-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-items",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        padding: "6rem 2rem",
        background: "linear-gradient(to bottom, #080810, #0A0A0A)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Heading */}
      <h2
        className="contact-heading"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "#F5EFE6",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Let's <span style={{ color: "#C8860A" }}>Connect</span>
      </h2>

      <p
        style={{
          color: "#777",
          fontSize: "1rem",
          marginBottom: "3rem",
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        Open to opportunities in AI Engineering & Software Development
      </p>

      {/* Contact Card */}
      <div
        className="contact-card"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(200,134,10,0.15)",
          borderRadius: "20px",
          padding: "3rem",
          maxWidth: "600px",
          width: "100%",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 40px rgba(200,134,10,0.04)",
        }}
      >
        <div
          className="contact-items"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="contact-item"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "1rem",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <span
                style={{
                  color: "#C8860A",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    color: "#bbb",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C8860A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#bbb")}
                >
                  {item.value}
                </a>
              ) : (
                <span style={{ color: "#bbb", fontSize: "0.95rem" }}>
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="mailto:noorfatima23rd@gmail.com"
          style={{
            display: "inline-block",
            marginTop: "2.5rem",
            padding: "0.9rem 2.5rem",
            fontSize: "0.9rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#0A0A0A",
            background: "#C8860A",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            textDecoration: "none",
            textAlign: "center",
            transition: "all 0.3s ease",
            boxShadow: "0 0 30px rgba(200,134,10,0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 50px rgba(200,134,10,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 30px rgba(200,134,10,0.2)";
          }}
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default ContactSection;