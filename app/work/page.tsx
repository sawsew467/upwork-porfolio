import { Metadata } from "next";
import WorkModule from "@/components/wrappers/WorkModule";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Browse through my portfolio of projects showcasing web development expertise in React, Next.js, and modern technologies.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | Professional Portfolio",
    description:
      "Browse through my portfolio of projects showcasing web development expertise in React, Next.js, and modern technologies.",
    url: "/work",
  },
  twitter: {
    title: "Work | Professional Portfolio",
    description:
      "Browse through my portfolio of projects showcasing web development expertise in React, Next.js, and modern technologies.",
  },
};

export default function WorkPage() {
  return <WorkModule />;
}
