import React from "react";
import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionHeader } from "../ui/section-header";

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

function SkillCard({ icon, title, description, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="card-hover">
        <CardBody className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <Icon icon={icon} width={32} height={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-foreground-500">{description}</p>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export function SkillsSection() {
  const skills = [
    {
      icon: "lucide:layout",
      title: "Frontend Development",
      description: "Creating responsive, accessible, and performant user interfaces with React, Next.js, and Tailwind CSS."
    },
    {
      icon: "lucide:server",
      title: "Backend Development",
      description: "Building robust APIs and server-side applications with Node.js, NestJS, and database technologies."
    },
    {
      icon: "lucide:database",
      title: "Database Design",
      description: "Designing efficient database schemas and implementing data access layers with SQL and NoSQL databases."
    },
    {
      icon: "lucide:git-branch",
      title: "DevOps",
      description: "Setting up CI/CD pipelines, containerization with Docker, and deployment to cloud platforms."
    }
  ];

  return (
    <section className="section-padding bg-content2">
      <div className="container-custom">
        <SectionHeader
          title="My Skills"
          subtitle="Specialized in modern web technologies to deliver high-quality, scalable applications."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}