"use client";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "2rem",
        background: "#0A0A0A",
        borderTop: "1px solid rgba(200,134,10,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <span style={{ color: "#555", fontSize: "0.85rem" }}>
        © 2026 Noor Fatima. All rights reserved.
      </span>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          background: "none",
          border: "1px solid rgba(200,134,10,0.2)",
          color: "#C8860A",
          padding: "0.5rem 1rem",
          borderRadius: "50px",
          cursor: "pointer",
          fontSize: "0.8rem",
          fontWeight: 500,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(200,134,10,0.1)";
          e.currentTarget.style.borderColor = "#C8860A";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "none";
          e.currentTarget.style.borderColor = "rgba(200,134,10,0.2)";
        }}
      >
        ↑ Back to Top
      </button>
    </footer>
  );
};

export default Footer;