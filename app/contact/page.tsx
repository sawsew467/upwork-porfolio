import { Metadata } from "next";
import ContactModule from "@/components/wrappers/ContactModule";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me for web development projects, collaborations, or any questions you might have.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Professional Portfolio",
    description:
      "Get in touch with me for web development projects, collaborations, or any questions you might have.",
    url: "/contact",
  },
  twitter: {
    title: "Contact | Professional Portfolio",
    description:
      "Get in touch with me for web development projects, collaborations, or any questions you might have.",
  },
};

export default function ContactPage() {
  return <ContactModule />;
}
