"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button size="icon" onClick={() => toggleTheme()}>
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] " />
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] " />
      )}
    </Button>
  );
}
