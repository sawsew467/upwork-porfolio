"use client";
import React from "react";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { ThemeToggle } from "../theme/theme-toggle";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <HeroNavbar
      maxWidth="xl"
      isBordered
      isBlurred
      className="bg-background/70 backdrop-blur-md"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <Icon
              icon="lucide:code"
              className="text-primary"
              width={24}
              height={24}
            />
            <p className="font-bold text-inherit">DevPortfolio</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.path} isActive={isActive(item.path)}>
            <Link
              href={item.path}
              className={`${
                isActive(item.path)
                  ? "text-primary font-medium"
                  : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button
            as="a"
            color="primary"
            href="https://www.upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            startContent={<Icon icon="logos:upwork" width={18} height={18} />}
          >
            Hire Me
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navItems.map((item) => (
          <NavbarMenuItem key={item.path}>
            <Link
              href={item.path}
              className={`w-full ${
                isActive(item.path)
                  ? "text-primary font-medium"
                  : "text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            as="a"
            color="primary"
            href="https://www.upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            startContent={<Icon icon="logos:upwork" width={18} height={18} />}
            className="mt-4 w-full"
          >
            Hire Me
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
}
