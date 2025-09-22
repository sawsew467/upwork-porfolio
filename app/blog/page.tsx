import { Metadata } from "next";
import BlogModule from "@/components/wrappers/BlogModule";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my latest articles about web development, programming tutorials, and insights into modern technologies.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Professional Portfolio",
    description:
      "Read my latest articles about web development, programming tutorials, and insights into modern technologies.",
    url: "/blog",
  },
  twitter: {
    title: "Blog | Professional Portfolio",
    description:
      "Read my latest articles about web development, programming tutorials, and insights into modern technologies.",
  },
};

export default function BlogPage() {
  return <BlogModule />;
}
