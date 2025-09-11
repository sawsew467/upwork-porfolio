import React from "react";
import { Chip } from "@heroui/react";

interface SkillBadgeProps {
  name: string;
  color?: "primary" | "default" | "secondary" | "success" | "warning" | "danger";
}

export function SkillBadge({ name, color = "primary" }: SkillBadgeProps) {
  return (
    <Chip 
      color={color} 
      variant="flat" 
      radius="sm"
      className="mr-2 mb-2"
    >
      {name}
    </Chip>
  );
}