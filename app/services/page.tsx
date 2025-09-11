import { Metadata } from "next";
import ServicesModule from "@/components/wrappers/ServicesModule";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore my web development services including frontend development, backend solutions, and full-stack applications.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Professional Portfolio",
    description:
      "Explore my web development services including frontend development, backend solutions, and full-stack applications.",
    url: "/services",
  },
  twitter: {
    title: "Services | Professional Portfolio",
    description:
      "Explore my web development services including frontend development, backend solutions, and full-stack applications.",
  },
};

export default function ServicesPage() {
  return <ServicesModule />;
}
