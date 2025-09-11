"use client";
import React from "react";
import { Avatar, Button, Divider } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useParams } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPostModule({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-lg mb-6">Post Not Found</h1>
          <p className="text-body mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Button
            as={Link}
            href="/blog"
            color="primary"
            startContent={
              <Icon icon="lucide:arrow-left" width={20} height={20} />
            }
          >
            Back to Blog
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
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground-500 hover:text-primary mb-6"
          >
            <Icon icon="lucide:arrow-left" width={16} height={16} />
            <span>Back to Blog</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-lg mb-6">{post.title}</h1>

            <div className="flex items-center gap-4 mb-8">
              <Avatar src={post.author.avatar} size="sm" />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-foreground-500">{post.date}</p>
              </div>
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
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full rounded-xl object-cover h-[400px]"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              <div className="blog-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h1: ({ node, ...props }) => (
                      <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 className="text-xl font-bold mt-6 mb-3" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                      <p className="mb-4 text-foreground-600" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="list-disc pl-6 mb-4" {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol className="list-decimal pl-6 mb-4" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="mb-1" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a className="text-primary hover:underline" {...props} />
                    ),
                    blockquote: ({ node, ...props }) => (
                      <blockquote
                        className="border-l-4 border-primary pl-4 italic my-4"
                        {...props}
                      />
                    ),
                    code: ({ node, inline, ...props }: any) =>
                      inline ? (
                        <code
                          className="bg-content2 px-1 py-0.5 rounded text-sm"
                          {...props}
                        />
                      ) : (
                        <pre className="bg-content2 p-4 rounded-md overflow-x-auto mb-4">
                          <code className="text-sm" {...props} />
                        </pre>
                      ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </motion.div>

            <Divider className="my-8" />

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-content3 text-foreground-500 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <Button
                as={Link}
                href="/blog"
                variant="flat"
                startContent={
                  <Icon icon="lucide:arrow-left" width={16} height={16} />
                }
              >
                Back to Blog
              </Button>

              <div className="flex gap-2">
                <Button isIconOnly variant="flat" aria-label="Share on Twitter">
                  <Icon icon="lucide:twitter" width={20} height={20} />
                </Button>
                <Button
                  isIconOnly
                  variant="flat"
                  aria-label="Share on LinkedIn"
                >
                  <Icon icon="lucide:linkedin" width={20} height={20} />
                </Button>
                <Button
                  isIconOnly
                  variant="flat"
                  aria-label="Share on Facebook"
                >
                  <Icon icon="lucide:facebook" width={20} height={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
