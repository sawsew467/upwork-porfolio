import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Services } from "./pages/services";
import { Work } from "./pages/work";
import { WorkDetail } from "./pages/work-detail";
import { Blog } from "./pages/blog";
import { BlogPost } from "./pages/blog-post";
import { Contact } from "./pages/contact";
import { ThemeProvider } from "./components/theme/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}