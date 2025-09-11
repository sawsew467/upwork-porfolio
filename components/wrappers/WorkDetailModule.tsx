"use client";
import React from "react";
import { Button, Card, CardBody, Image, Divider } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function WorkDetailModule({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-lg mb-6">Project Not Found</h1>
          <p className="text-body mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Button
            as={Link}
            href="/work"
            color="primary"
            startContent={
              <Icon icon="lucide:arrow-left" width={20} height={20} />
            }
          >
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="pt-12 pb-6">
        <div className="container-custom">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-foreground-500 hover:text-primary mb-6"
          >
            <Icon icon="lucide:arrow-left" width={16} height={16} />
            <span>Back to Portfolio</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-lg mb-2">{project.title}</h1>
            <p className="text-xl text-foreground-500 mb-6">
              Client: {project.client}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-content3 text-foreground-500 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              removeWrapper
              alt={project.title}
              className="w-full rounded-xl object-cover h-[400px]"
              src={project.image}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="heading-md mb-6">Project Overview</h2>
                <p className="text-body mb-8">{project.description}</p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Problem</h3>
                    <p className="text-body">{project.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Solution</h3>
                    <p className="text-body">{project.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Result</h3>
                    <p className="text-body">{project.result}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <CardBody className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Project Results
                    </h3>
                    <div className="space-y-6">
                      {project.kpis.map((kpi, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                            <Icon
                              icon={kpi.icon}
                              className="text-primary"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-primary">
                              {kpi.value}
                            </p>
                            <p className="text-sm text-foreground-500">
                              {kpi.label}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Divider className="my-6" />

                    <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm bg-content3 text-foreground-500 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-content2">
        <div className="container-custom">
          <h2 className="heading-md mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  removeWrapper
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full rounded-xl object-cover h-[200px]"
                  src={image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="heading-md mb-2">
                Interested in working together?
              </h2>
              <p className="text-foreground-500">
                Let's discuss how I can help with your next project.
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                as={Link}
                href="/contact"
                color="primary"
                size="lg"
                startContent={
                  <Icon icon="lucide:message-square" width={20} height={20} />
                }
              >
                Contact Me
              </Button>
              <Button
                as="a"
                href="https://www.upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="bordered"
                size="lg"
                startContent={
                  <Icon icon="logos:upwork" width={20} height={20} />
                }
              >
                Hire on Upwork
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
