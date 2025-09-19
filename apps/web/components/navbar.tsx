"use client";

import { Navbar06 } from "@workspace/ui/components/ui/shadcn-io/navbar-06";
import { useThemeTransition } from "@workspace/ui/components/ui/shadcn-io/theme-toggle-button";
import type { Theme } from "@workspace/ui/components/ui/shadcn-io/theme-toggle-button";
import { useTheme } from "next-themes";

export function Navbar() {
  const { startTransition } = useThemeTransition();
  const { theme, setTheme } = useTheme();

  return (
    <Navbar06
      currentTheme={theme as Theme}
      onThemeChange={(theme) => startTransition(() => setTheme(theme))}
    />
  );
}
