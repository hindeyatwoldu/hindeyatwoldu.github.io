import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import CoreExpertise from "@/components/portfolio/CoreExpertise";
import Experience from "@/components/portfolio/Experience";
import Achievements from "@/components/portfolio/Achievements";
import Skills from "@/components/portfolio/Skills";
import Publications from "@/components/portfolio/Publications";
import Contact from "@/components/portfolio/Contact";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <CoreExpertise />
    <Experience />
    <Achievements />
    <Skills />
    <Publications />
    <Contact />
  </div>
);

export default Index;
