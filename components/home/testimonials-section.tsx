import React from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionHeader } from "../ui/section-header";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  delay: number;
}

function Testimonial({ quote, author, role, avatar, delay }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full">
        <CardBody className="p-6">
          <Icon icon="lucide:quote" className="text-primary mb-4" width={32} height={32} />
          <p className="text-foreground-500 mb-6">{quote}</p>
          <div className="flex items-center gap-4">
            <Avatar src={avatar} size="md" />
            <div>
              <p className="font-semibold">{author}</p>
              <p className="text-sm text-foreground-500">{role}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Quick, communicative, and delivered exactly what I needed. I'll definitely work with them again on future projects.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2"
    },
    {
      quote: "True professional who understands both design and development. The end result exceeded our expectations.",
      author: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=3"
    },
    {
      quote: "Excellent communication throughout the project. Delivered high-quality code on time and was very responsive to feedback.",
      author: "Emily Rodriguez",
      role: "Founder, CreativeFlow",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=4"
    }
  ];

  return (
    <section className="section-padding bg-content2">
      <div className="container-custom">
        <SectionHeader
          title="Client Testimonials"
          subtitle="What my clients say about working with me."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}