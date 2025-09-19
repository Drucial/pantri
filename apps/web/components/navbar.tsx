"use client";

import { Navbar06 } from "@workspace/ui/components/ui/shadcn-io/navbar-06";
import type { Theme } from "@workspace/ui/components/ui/shadcn-io/theme-toggle-button";
import { useThemeTransition } from "@workspace/ui/components/ui/shadcn-io/theme-toggle-button";
import { useTheme } from "next-themes";

export function Navbar() {
  const { startTransition } = useThemeTransition();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Navbar06
      currentTheme={resolvedTheme as Theme}
      onThemeChange={(theme) => startTransition(() => setTheme(theme))}
    />
  );
}
