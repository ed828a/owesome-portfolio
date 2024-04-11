import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/about-me/AboutSection";
import Navbar from "@/components/navbar/Navbar";
import ProjectsSection from "@/components/projects/ProjectSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
