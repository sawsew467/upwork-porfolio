import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { Layout } from "@/components/layout/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Professional Portfolio - Full Stack Developer",
    template: "%s | Professional Portfolio",
  },
  description:
    "Full-stack developer specializing in React, Next.js, and modern web technologies. View my projects, services, and blog posts about web development.",
  keywords: [
    "web developer",
    "full stack",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
    "freelancer",
  ],
  authors: [{ name: "Portfolio Owner" }],
  creator: "Portfolio Owner",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  metadataBase: new URL("https://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Professional Portfolio - Full Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Professional Portfolio",
    images: [
      {
        url: "https://img.heroui.chat/image/avatar?w=400&h=400&u=1",
        width: 1200,
        height: 630,
        alt: "Professional Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Portfolio - Full Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and modern web technologies.",
    images: ["https://img.heroui.chat/image/avatar?w=400&h=400&u=1"],
    creator: "@portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "",
  //   yandex: "",
  //   yahoo: "",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
