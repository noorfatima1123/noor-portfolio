"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const HeroContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const tiltY = ((clientX - centerX) / centerX) * 6;
    setTilt({ x: 0, y: tiltY });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(".hero-name-first",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.4 }
      );
      gsap.fromTo(".hero-name-last",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.6 }
      );
      gsap.fromTo(".hero-tagline",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.9 }
      );
      gsap.fromTo(".hero-scroll",
        { opacity: 0 },
        { opacity: 0.5, duration: 0.6, delay: 1.3 }
      );
      gsap.fromTo(".hero-line",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 1, ease: "power3.inOut", delay: 1.0 }
      );
      gsap.fromTo(".hero-avatar-wrap",
        { opacity: 0, x: isMobile ? 0 : 80 },
        { opacity: 1, x: 0, duration: 1.4, ease: "power3.out", delay: 0.3 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [isMobile]);

  return (
    <>
      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(0);    opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }

        /* ── BASE (desktop) ── */
        .hero-wrapper {
          position: relative;
          width: 100%;
          height: 100dvh;
          overflow: hidden;
        }

        /* avatar — desktop: right 62% */
        .hero-avatar-wrap {
          position: absolute;
          top: 0; right: 0;
          width: 62%;
          height: 100%;
          z-index: 1;
        }
        .hero-avatar-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        .fade-top {
          position: absolute; top: 0; left: 0; right: 0;
          height: 15%;
          background: linear-gradient(to bottom, #0A0A0A, transparent);
          pointer-events: none;
        }
        .fade-bottom {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 20%;
          background: linear-gradient(to top, #0A0A0A, transparent);
          pointer-events: none;
        }
        .fade-left {
          position: absolute; top: 0; left: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.55) 55%, transparent 100%);
          pointer-events: none;
        }
        .fade-right {
          position: absolute; top: 0; right: 0;
          width: 8%;
          height: 100%;
          background: linear-gradient(to left, #0A0A0A, transparent);
          pointer-events: none;
        }

        /* text — desktop: left 50% */
        .hero-text-area {
          position: absolute;
          top: 0; left: 0;
          width: 50%;
          height: 100%;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 6rem 3rem 4rem 4rem;
        }

        .hero-name { margin: 0; line-height: 0.88; }

        .hero-name-first,
        .hero-name-last {
          display: block;
          font-size: clamp(4rem, 9vw, 9.5rem);
          font-weight: 900;
          color: #FFFFFF;
          letter-spacing: -0.02em;
          font-family: 'Arial Black', 'Impact', sans-serif;
          text-shadow: 0 2px 40px rgba(0,0,0,0.8), 0 0 80px rgba(200,134,10,0.1);
        }

        .hero-line {
          width: 100%;
          max-width: 380px;
          height: 1px;
          background: linear-gradient(90deg, #C8860A 0%, rgba(200,134,10,0.08) 100%);
          margin: 1.5rem 0;
        }

        .hero-tagline {
          font-size: 0.75rem;
          color: #C8860A;
          margin: 0;
          letter-spacing: 0.18em;
          font-weight: 500;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: nowrap;
        }

        .hero-scroll {
          margin-top: 3rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* ── MOBILE (≤767px) ── */
        @media (max-width: 767px) {

          /* avatar: full width, top half */
          .hero-avatar-wrap {
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            height: 52% !important;
          }
          .hero-avatar-wrap img {
            object-position: center 10% !important;
          }
          .fade-left  { display: none !important; }
          .fade-bottom {
            height: 35% !important;
            background: linear-gradient(to top, #0A0A0A 40%, transparent 100%) !important;
          }

          /* text: full width, bottom half — sits over the fade */
          .hero-text-area {
            top: auto !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: auto !important;
            padding: 1.2rem 1.4rem 2rem 1.4rem !important;
            justify-content: flex-end !important;
          }

          /* hide decorative text on mobile */
          .hero-badge    { display: none !important; }
          .hero-year     { display: none !important; }

          .hero-name-first,
          .hero-name-last {
            font-size: clamp(3rem, 15vw, 4.5rem) !important;
          }

          .hero-line {
            max-width: 140px !important;
            margin: 0.7rem 0 !important;
          }

          .hero-tagline {
            font-size: 0.58rem !important;
            letter-spacing: 0.1em !important;
            gap: 6px !important;
            flex-wrap: nowrap !important;
          }

          .hero-scroll {
            margin-top: 1rem !important;
          }
        }
      `}</style>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="hero-wrapper"
      >
        {/* ── AVATAR ── */}
        <div
          className="hero-avatar-wrap"
          style={{
            transform: isMobile
              ? "none"
              : `perspective(1200px) rotateY(${-tilt.y * 0.3}deg)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <img src="/avatar.jpg" alt="Noor Fatima" />
          <div className="fade-top" />
          <div className="fade-bottom" />
          <div className="fade-left" />
          <div className="fade-right" />
        </div>

        {/* ── TEXT ── */}
        <div className="hero-text-area">

          {/* Badge — hidden mobile */}
          <div className="hero-badge" style={{
            display: "inline-flex", alignItems: "center",
            gap: "10px", marginBottom: "2rem",
          }}>
            <span style={{ width: "28px", height: "1px", background: "#C8860A", display: "inline-block" }} />
            <span style={{
              fontFamily: "'Georgia', serif", fontSize: "0.7rem",
              letterSpacing: "0.28em", color: "#C8860A", textTransform: "uppercase",
            }}>
              The Portfolio
            </span>
            <span style={{ width: "28px", height: "1px", background: "#C8860A", display: "inline-block" }} />
          </div>

          {/* Year — hidden mobile */}
          <div className="hero-year" style={{
            fontSize: "0.65rem", color: "rgba(200,134,10,0.45)",
            letterSpacing: "0.22em", marginBottom: "0.6rem", fontFamily: "monospace",
          }}>
            PORTFOLIO — 2026
          </div>

          {/* Name */}
          <h1 className="hero-name">
            <span className="hero-name-first">NOOR</span>
            <span className="hero-name-last">FATIMA</span>
          </h1>

          {/* Divider */}
          <div className="hero-line" />

          {/* Tagline */}
          <p className="hero-tagline">
            <span>Developer</span>
            <span style={{ opacity: 0.35, fontSize: "0.45rem" }}>◆</span>
            <span>AI Engineer</span>
            <span style={{ opacity: 0.35, fontSize: "0.45rem" }}>◆</span>
            <span>GenAI</span>
          </p>

          {/* Scroll hint */}
          <div className="hero-scroll">
            <div style={{
              width: "20px", height: "30px",
              border: "1px solid rgba(200,134,10,0.5)",
              borderRadius: "10px",
              display: "flex", alignItems: "flex-start",
              justifyContent: "center", padding: "4px",
            }}>
              <div style={{
                width: "3px", height: "6px",
                background: "#C8860A", borderRadius: "2px",
                animation: "scrollDot 1.8s ease-in-out infinite",
              }} />
            </div>
            <span style={{
              fontSize: "0.62rem", letterSpacing: "0.2em",
              color: "#C8860A", textTransform: "uppercase", fontFamily: "monospace",
            }}>
              Scroll
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;