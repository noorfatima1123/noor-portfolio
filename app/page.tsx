import CinematicParticles from "../components/CinematicParticles/CinematicParticles";
import HeroContent from "../components/HeroContent";
import ScrollIndicator from "../components/ScrollIndicator";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        background: "#0A0A0A",
      }}
    >
      <Navbar />

      {/* Hero Landing */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <CinematicParticles />
        <HeroContent />
        <ScrollIndicator />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}