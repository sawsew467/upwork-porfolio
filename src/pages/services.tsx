import React from "react";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionHeader } from "../components/ui/section-header";
import { services } from "../data/services";

export function Services() {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="My Services"
            subtitle="Specialized web development services tailored to your business needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="flex gap-3 p-6">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <Icon icon={service.icon} className="text-primary" width={24} height={24} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-sm text-foreground-500">Timeframe: {service.timeframe}</p>
                    </div>
                  </CardHeader>
                  <CardBody className="p-6 pt-0">
                    <p className="text-foreground-500 mb-4">{service.description}</p>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon icon="lucide:check" className="text-primary mt-1" width={16} height={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-end">
                      <Button
                        as={Link}
                        to="/contact"
                        color="primary"
                        variant="flat"
                        endContent={<Icon icon="lucide:arrow-right" width={16} height={16} />}
                      >
                        Inquire about this service
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-content2">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-md mb-6">My Development Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Discovery & Planning</h3>
                    <p className="text-foreground-500">Understanding your business needs, defining project scope, and creating a detailed roadmap.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Design & Prototyping</h3>
                    <p className="text-foreground-500">Creating wireframes and interactive prototypes to visualize the user experience.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Development & Testing</h3>
                    <p className="text-foreground-500">Building the application with clean, maintainable code and thorough testing.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Deployment & Support</h3>
                    <p className="text-foreground-500">Launching your application and providing ongoing support and maintenance.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-content1 p-8 rounded-2xl shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">Why Work With Me?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Icon icon="lucide:check-circle" className="text-primary mt-1" width={20} height={20} />
                  <div>
                    <h4 className="font-medium">Clear Communication</h4>
                    <p className="text-foreground-500">Regular updates and transparent communication throughout the project.</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <Icon icon="lucide:check-circle" className="text-primary mt-1" width={20} height={20} />
                  <div>
                    <h4 className="font-medium">Quality Code</h4>
                    <p className="text-foreground-500">Clean, well-documented, and maintainable code following best practices.</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <Icon icon="lucide:check-circle" className="text-primary mt-1" width={20} height={20} />
                  <div>
                    <h4 className="font-medium">On-Time Delivery</h4>
                    <p className="text-foreground-500">Commitment to meeting deadlines and delivering projects on schedule.</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <Icon icon="lucide:check-circle" className="text-primary mt-1" width={20} height={20} />
                  <div>
                    <h4 className="font-medium">Post-Launch Support</h4>
                    <p className="text-foreground-500">Continued support and maintenance after project completion.</p>
                  </div>
                </li>
              </ul>
              
              <Button
                as={Link}
                to="/contact"
                color="primary"
                size="lg"
                className="mt-6 w-full"
                startContent={<Icon icon="lucide:message-square" width={20} height={20} />}
              >
                Let's Discuss Your Project
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}