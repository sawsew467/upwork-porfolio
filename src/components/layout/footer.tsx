import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", icon: "logos:github-icon", url: "https://github.com" },
    { name: "LinkedIn", icon: "logos:linkedin-icon", url: "https://linkedin.com" },
    { name: "Twitter", icon: "logos:twitter", url: "https://twitter.com" },
    { name: "Upwork", icon: "logos:upwork", url: "https://upwork.com" },
  ];

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-content2 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:code" className="text-primary" width={24} height={24} />
              <span className="font-bold text-lg">DevPortfolio</span>
            </Link>
            <p className="text-body-sm text-foreground-500 mb-4">
              Full-Stack Developer specializing in Next.js, Tailwind CSS, and NestJS.
              Building pixel-perfect, high-performance web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-foreground-500 hover:text-primary transition-colors"
                >
                  <Icon icon={link.icon} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-foreground-500 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/services" className="text-foreground-500 hover:text-primary transition-colors">SaaS Development</a></li>
                <li><a href="/services" className="text-foreground-500 hover:text-primary transition-colors">E-commerce</a></li>
                <li><a href="/services" className="text-foreground-500 hover:text-primary transition-colors">Admin Dashboards</a></li>
                <li><a href="/services" className="text-foreground-500 hover:text-primary transition-colors">Debugging</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon icon="lucide:mail" className="text-foreground-500" width={16} height={16} />
                  <a href="mailto:hello@devportfolio.com" className="text-foreground-500 hover:text-primary transition-colors">
                    hello@devportfolio.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon icon="lucide:map-pin" className="text-foreground-500" width={16} height={16} />
                  <span className="text-foreground-500">Ho Chi Minh City, Vietnam</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-divider mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-foreground-500 text-sm">
            &copy; {currentYear} DevPortfolio. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 text-sm text-foreground-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}