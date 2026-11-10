// import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import ConpletedProjets from "@/components/CompletedProjects";
import Contact from "@/components/Contact";
export default function Home() {
  return (
   <>
    <HeroSection />
    <About />   
    <TechStack />
    <ConpletedProjets />
    <Contact />
   </>
  );
}
