"use client";

import React from "react";
import { Card, CardBody, Avatar, Divider } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionHeader } from "../ui/section-header";
import { SkillBadge } from "../ui/skill-badge";
import { Layout } from "../layout/layout";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: string;
  delay: number;
}

function TimelineItem({
  year,
  title,
  description,
  icon,
  delay,
}: TimelineItemProps) {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <Icon icon={icon} className="text-white" width={24} height={24} />
        </div>
        <div className="w-0.5 bg-primary-200 flex-grow mt-2"></div>
      </div>
      <div className="pb-10">
        <span className="text-sm font-medium text-primary">{year}</span>
        <h3 className="text-xl font-semibold mt-1">{title}</h3>
        <p className="text-foreground-500 mt-2">{description}</p>
      </div>
    </motion.div>
  );
}

export default function AboutModule() {
  const timeline = [
    {
      year: "2021",
      title: "Started Freelancing",
      description:
        "Began freelancing on Upwork, focusing on React and Next.js projects for small businesses.",
      icon: "lucide:briefcase",
    },
    {
      year: "2022",
      title: "Expanded to Full-Stack Development",
      description:
        "Added backend development with NestJS and database design to my service offerings.",
      icon: "lucide:layers",
    },
    {
      year: "2023",
      title: "Top Rated on Upwork",
      description:
        "Achieved Top Rated status on Upwork with 100% job success score and excellent client feedback.",
      icon: "lucide:award",
    },
    {
      year: "2024",
      title: "Specialized in SaaS Development",
      description:
        "Focused on building custom SaaS applications and MVPs for startups and established businesses.",
      icon: "lucide:rocket",
    },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Redux",
        "React Query",
      ],
    },
    {
      title: "Backend",
      skills: [
        "NestJS",
        "Node.js",
        "Express",
        "GraphQL",
        "REST API",
        "WebSockets",
        "Microservices",
      ],
    },
    {
      title: "Database",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Firebase",
        "Redis",
        "Prisma",
        "TypeORM",
      ],
    },
    {
      title: "DevOps",
      skills: [
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "AWS",
        "Vercel",
        "Netlify",
        "Digital Ocean",
      ],
    },
    {
      title: "Tools",
      skills: ["Git", "Figma", "Postman", "VS Code", "Jira", "Notion", "Slack"],
    },
  ];

  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading-lg mb-6">About Me</h1>
              <p className="text-body mb-4">
                I'm a Full-Stack Developer with 3 years of experience
                specializing in building modern web applications with Next.js,
                Tailwind CSS, and NestJS.
              </p>
              <p className="text-body mb-4">
                My focus is on creating pixel-perfect UIs and robust backend
                systems that deliver exceptional user experiences. I work
                closely with clients to understand their business needs and
                translate them into technical solutions.
              </p>
              <p className="text-body mb-4">
                Whether you need a complete web application, an e-commerce
                platform, or a custom admin dashboard, I can help you bring your
                vision to life.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Avatar
                src="https://img.heroui.chat/image/avatar?w=400&h=400&u=1"
                className="w-64 h-64 object-cover"
                radius="lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-content2">
        <div className="container-custom">
          <SectionHeader
            title="My Journey"
            subtitle="Key milestones in my professional development as a full-stack developer."
          />

          <div className="mt-12">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                icon={item.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Skills & Expertise"
            subtitle="Technologies and tools I use to bring projects to life."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {skillGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardBody className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap">
                      {group.skills.map((skill) => (
                        <SkillBadge key={skill} name={skill} />
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
