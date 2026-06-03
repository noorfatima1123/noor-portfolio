"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Hire Me", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Entrance animation
    gsap.fromTo(
      ".navbar",
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="navbar"
      style={{
        position: "fixed",
        top: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "900px",
        padding: "0.9rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        borderRadius: "50px",
        background: scrolled
          ? "rgba(10, 10, 10, 0.95)"
          : "rgba(10, 10, 10, 0.5)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: scrolled
          ? "1px solid rgba(200, 134, 10, 0.2)"
          : "1px solid rgba(200, 134, 10, 0.08)",
        transition: "all 0.4s ease",
        boxShadow: scrolled
          ? "0 8px 32px rgba(0, 0, 0, 0.5)"
          : "none",
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontSize: "1.3rem",
          fontWeight: 700,
          color: "#F5EFE6",
          letterSpacing: "0.05em",
        }}
      >
        NOOR<span style={{ color: "#C8860A" }}>.</span>
      </span>

      {/* Desktop Links */}
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
        className="desktop-links"
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                color: "#999",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C8860A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0.5rem",
        }}
        className="hamburger"
      >
        <div
          style={{
            width: "22px",
            height: "2px",
            backgroundColor: "#F5EFE6",
            margin: "5px 0",
            transition: "all 0.3s ease",
          }}
        />
        <div
          style={{
            width: "22px",
            height: "2px",
            backgroundColor: "#F5EFE6",
            margin: "5px 0",
          }}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: "0",
            width: "100%",
            background: "rgba(10, 10, 10, 0.98)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            border: "1px solid rgba(200,134,10,0.15)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                color: "#F5EFE6",
                textDecoration: "none",
                fontSize: "1rem",
                padding: "0.5rem 0",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C8860A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#F5EFE6")}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-links {
            display: none !important;
          }
          .hamburger {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;