import React from "react";
import Link from "next/link";
import { Button, Avatar } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-primary"></div>
              <span className="text-primary font-medium">
                Full-Stack Developer
              </span>
            </div>

            <h1 className="heading-xl mb-6 text-foreground">
              Building Modern Web Applications
            </h1>

            <p className="text-xl mb-8 text-foreground-500">
              Next.js • Tailwind • NestJS
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                as="a"
                color="primary"
                size="lg"
                href="https://www.upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                startContent={
                  <Icon icon="logos:upwork" width={20} height={20} />
                }
              >
                Hire me on Upwork
              </Button>

              <Button
                as={Link}
                href="/work"
                variant="bordered"
                size="lg"
                startContent={
                  <Icon icon="lucide:briefcase" width={20} height={20} />
                }
              >
                See case studies
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-success-100 text-success-700 px-3 py-1 rounded-full">
                <Icon icon="lucide:check-circle" width={16} height={16} />
                <span className="text-sm font-medium">Verified</span>
              </div>

              <div className="flex items-center gap-2 bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                <Icon icon="lucide:star" width={16} height={16} />
                <span className="text-sm font-medium">86% Job Success</span>
              </div>

              <div className="flex items-center gap-2 bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full">
                <Icon icon="lucide:clock" width={16} height={16} />
                <span className="text-sm font-medium">300+ hours</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30"></div>
              <Avatar
                src="https://img.heroui.chat/image/avatar?w=400&h=400&u=1"
                className="w-64 h-64 md:w-80 md:h-80 object-cover"
                radius="full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
