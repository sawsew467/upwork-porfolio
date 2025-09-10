import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, Button, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionHeader } from "../components/ui/section-header";
import { blogPosts } from "../data/blog-posts";

export function Blog() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="Blog"
          subtitle="Thoughts, insights, and tutorials on web development and technology."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-hover h-full">
                <Image
                  removeWrapper
                  alt={post.title}
                  className="w-full object-cover h-48"
                  src={post.coverImage}
                />
                <CardBody className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon icon="lucide:calendar" className="text-foreground-400" width={16} height={16} />
                    <span className="text-sm text-foreground-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-foreground-500 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs bg-content3 text-foreground-500 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardBody>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    as={Link}
                    to={`/blog/${post.slug}`}
                    color="primary"
                    variant="flat"
                    endContent={<Icon icon="lucide:arrow-right" width={16} height={16} />}
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}