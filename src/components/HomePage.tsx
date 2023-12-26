import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ReviewSection from "./ReviewSection";
import ServicesSection from "./ServicesSection";
import WhySection from "./WhySection";
import ContactSection from "./ContactSection";
import Lenis from "@studio-freight/lenis";

const HomePage = () => {
  if (typeof window !== "undefined") {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ReviewSection />
      <WhySection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
