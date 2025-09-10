import React from "react";
import { HeroSection } from "../components/home/hero-section";
import { SkillsSection } from "../components/home/skills-section";
import { WorkPreviewSection } from "../components/home/work-preview-section";
import { TestimonialsSection } from "../components/home/testimonials-section";
import { ContactCTA } from "../components/home/contact-cta";

export function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <WorkPreviewSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}