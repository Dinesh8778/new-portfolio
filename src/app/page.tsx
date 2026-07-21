import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
