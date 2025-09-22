"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  );
}
