"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const HeroContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const tiltX = ((clientY - centerY) / centerY) * 6;
    const tiltY = ((clientX - centerX) / centerX) * 6;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-badge", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 });
      gsap.fromTo(".hero-name-first", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.4 });
      gsap.fromTo(".hero-name-last", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.6 });
      gsap.fromTo(".hero-tagline", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.9 });
      gsap.fromTo(".hero-scroll", { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 1.3 });
      gsap.fromTo(".hero-line", { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 1, ease: "power3.inOut", delay: 1.0 });
      gsap.fromTo(".hero-avatar-wrap", { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 1.4, ease: "power3.out", delay: 0.3 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
      }}
    >
      {/* ── AVATAR — right side, full height, with its own background ── */}
      <div
        className="hero-avatar-wrap"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "58%",
          height: "100%",
          zIndex: 1,
          transform: `perspective(1200px) rotateY(${-tilt.y * 0.3}deg)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        {/* Avatar image — fills the right half */}
        <img
          src="/avatar.jpg"
          alt="Noor Fatima"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />

        {/* Left edge fade — avatar blends into dark left side */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "45%",
          height: "100%",
          background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.6) 60%, transparent 100%)",
          pointerEvents: "none",
        }} />

        {/* Top fade */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "20%",
          background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 100%)",
          pointerEvents: "none",
        }} />

        {/* Bottom fade */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "20%",
          background: "linear-gradient(to top, #0A0A0A 0%, transparent 100%)",
          pointerEvents: "none",
        }} />

        {/* Right edge fade */}
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "20%",
          height: "100%",
          background: "linear-gradient(to left, #0A0A0A 0%, transparent 100%)",
          pointerEvents: "none",
        }} />
      </div>

      {/* ── TEXT — left side, overlaid on top ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "6rem 3rem 4rem 4rem",
          width: "50%",
          minHeight: "100vh",
        }}
      >
        {/* Badge */}
        <div
          className="hero-badge"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "2rem",
          }}
        >
          <span style={{ width: "28px", height: "1px", background: "#C8860A", display: "inline-block" }} />
          <span style={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.7rem",
            letterSpacing: "0.28em",
            color: "#C8860A",
            textTransform: "uppercase",
          }}>
            The Portfolio
          </span>
          <span style={{ width: "28px", height: "1px", background: "#C8860A", display: "inline-block" }} />
        </div>

        {/* Year */}
        <div style={{
          fontSize: "0.65rem",
          color: "rgba(200,134,10,0.45)",
          letterSpacing: "0.22em",
          marginBottom: "0.6rem",
          fontFamily: "monospace",
        }}>
          PORTFOLIO — 2025
        </div>

        {/* Big Name */}
        <h1 style={{ margin: 0, lineHeight: 0.88 }}>
          <span
            className="hero-name-first"
            style={{
              display: "block",
              fontSize: "clamp(5rem, 10vw, 9.5rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              fontFamily: "'Arial Black', 'Impact', sans-serif",
              textShadow: "0 2px 40px rgba(0,0,0,0.8), 0 0 80px rgba(200,134,10,0.1)",
            }}
          >
            NOOR
          </span>
          <span
            className="hero-name-last"
            style={{
              display: "block",
              fontSize: "clamp(5rem, 10vw, 9.5rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              fontFamily: "'Arial Black', 'Impact', sans-serif",
              textShadow: "0 2px 40px rgba(0,0,0,0.8), 0 0 80px rgba(200,134,10,0.1)",
            }}
          >
            FATIMA
          </span>
        </h1>

        {/* Gold line */}
        <div
          className="hero-line"
          style={{
            width: "100%",
            maxWidth: "380px",
            height: "1px",
            background: "linear-gradient(90deg, #C8860A 0%, rgba(200,134,10,0.08) 100%)",
            margin: "1.5rem 0",
          }}
        />

        {/* Tagline */}
        <p
          className="hero-tagline"
          style={{
            fontSize: "0.75rem",
            color: "#C8860A",
            margin: 0,
            letterSpacing: "0.18em",
            fontWeight: 500,
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span>Developer</span>
          <span style={{ opacity: 0.35, fontSize: "0.45rem" }}>◆</span>
          <span>AI Engineer</span>
          <span style={{ opacity: 0.35, fontSize: "0.45rem" }}>◆</span>
          <span>GenAI Integration</span>
        </p>

        {/* Scroll hint */}
        <div
          className="hero-scroll"
          style={{
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            opacity: 0.5,
          }}
        >
          <div style={{
            width: "20px",
            height: "30px",
            border: "1px solid rgba(200,134,10,0.5)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "4px",
          }}>
            <div style={{
              width: "3px",
              height: "6px",
              background: "#C8860A",
              borderRadius: "2px",
              animation: "scrollDot 1.8s ease-in-out infinite",
            }} />
          </div>
          <span style={{
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            color: "#C8860A",
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}>
            Scroll
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HeroContent;