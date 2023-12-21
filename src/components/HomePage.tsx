import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ReviewSection from "./ReviewSection";
import ServicesSection from "./ServicesSection";
import WhySection from "./WhySection";
import ContactSection from "./ContactSection";

const HomePage = () => {
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
