"use client";

import React from "react";
import { HeroSection } from "../home/hero-section";
import { SkillsSection } from "../home/skills-section";
import { WorkPreviewSection } from "../home/work-preview-section";
import { TestimonialsSection } from "../home/testimonials-section";
import { ContactCTA } from "../home/contact-cta";

export default function HomeModule() {
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
