"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const ScrollIndicator = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".scroll-line",
        { scaleY: 0.4 },
        {
          scaleY: 1,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        ".scroll-indicator",
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.8, delay: 2, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className="scroll-indicator"
      onClick={handleScroll}
      style={{
        position: "absolute",
        bottom: "3rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        cursor: "pointer",
        zIndex: 2,
      }}
    >
      <span
        style={{
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "#888",
        }}
      >
        Scroll
      </span>
      <div
        className="scroll-line"
        style={{
          width: "1px",
          height: "40px",
          backgroundColor: "#C8860A",
          transformOrigin: "top",
        }}
      />
    </div>
  );
};

export default ScrollIndicator;