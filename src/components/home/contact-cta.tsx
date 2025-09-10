import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function ContactCTA() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg mb-4">Ready to start your project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve your business goals with a custom web solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={Link}
              to="/contact"
              size="lg"
              color="default"
              variant="solid"
              startContent={<Icon icon="lucide:mail" width={20} height={20} />}
            >
              Get in Touch
            </Button>
            <Button
              as="a"
              href="https://www.upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="bordered"
              className="border-white text-white"
              startContent={<Icon icon="logos:upwork" width={20} height={20} />}
            >
              Hire me on Upwork
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}