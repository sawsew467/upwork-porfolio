import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      isIconOnly
      variant="light"
      aria-label="Toggle theme"
      onPress={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Icon icon="lucide:moon" width={20} height={20} />
      ) : (
        <Icon icon="lucide:sun" width={20} height={20} />
      )}
    </Button>
  );
}