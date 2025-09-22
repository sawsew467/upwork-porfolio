import { Metadata } from "next";
import BlogPostModule from "@/components/wrappers/BlogPostModule";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: slug.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    description: `Read my article about ${slug.replace(
      "-",
      " "
    )} and gain insights into web development best practices.`,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${slug
        .replace("-", " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())} | Professional Portfolio`,
      description: `Read my article about ${slug.replace(
        "-",
        " "
      )} and gain insights into web development best practices.`,
      url: `/blog/${slug}`,
    },
    twitter: {
      title: `${slug
        .replace("-", " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())} | Professional Portfolio`,
      description: `Read my article about ${slug.replace(
        "-",
        " "
      )} and gain insights into web development best practices.`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return <BlogPostModule slug={slug} />;
}
