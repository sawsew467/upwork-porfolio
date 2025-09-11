import React from "react";
import Link from "next/link";
import { Card, CardBody, CardFooter, Button, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionHeader } from "../ui/section-header";
import { projects } from "../../data/projects";

export function WorkPreviewSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work for clients across different industries."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-hover h-full">
                <Image
                  removeWrapper
                  alt={project.title}
                  className="w-full object-cover h-48"
                  src={project.image}
                />
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground-500 mb-4">{project.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-content3 text-foreground-500 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardBody>
                <CardFooter className="p-6 pt-0">
                  <Button
                    as={Link}
                    href={`/work/${project.slug}`}
                    color="primary"
                    variant="flat"
                    endContent={
                      <Icon icon="lucide:arrow-right" width={16} height={16} />
                    }
                  >
                    View Case Study
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            as={Link}
            href="/work"
            color="primary"
            size="lg"
            endContent={
              <Icon icon="lucide:arrow-right" width={20} height={20} />
            }
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
