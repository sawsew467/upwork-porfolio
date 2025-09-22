import { Metadata } from "next";
import AboutModule from "@/components/wrappers/AboutModule";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about my background, experience, and passion for creating exceptional web applications.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Professional Portfolio",
    description:
      "Learn more about my background, experience, and passion for creating exceptional web applications.",
    url: "/about",
  },
  twitter: {
    title: "About | Professional Portfolio",
    description:
      "Learn more about my background, experience, and passion for creating exceptional web applications.",
  },
};

export default function AboutPage() {
  return <AboutModule />;
}
