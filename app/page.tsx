import { Metadata } from "next";
import HomeModule from "@/components/wrappers/HomeModule";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to my professional portfolio. I'm a full-stack developer specializing in React, Next.js, and modern web technologies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Home | Professional Portfolio",
    description:
      "Welcome to my professional portfolio. I'm a full-stack developer specializing in React, Next.js, and modern web technologies.",
    url: "/",
  },
  twitter: {
    title: "Home | Professional Portfolio",
    description:
      "Welcome to my professional portfolio. I'm a full-stack developer specializing in React, Next.js, and modern web technologies.",
  },
};

export default function HomePage() {
  return <HomeModule />;
}
