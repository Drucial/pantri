"use client";

import { Navbar06 } from "@workspace/ui/components/ui/shadcn-io/navbar-06";
import type { Theme } from "@workspace/ui/components/ui/shadcn-io/theme-toggle-button";
import { useThemeTransition } from "@workspace/ui/components/ui/shadcn-io/theme-toggle-button";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

export function Navbar() {
  const { startTransition } = useThemeTransition();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
    >
      <Navbar06
        currentTheme={resolvedTheme as Theme}
        onThemeChange={(theme) => startTransition(() => setTheme(theme))}
      />
    </motion.div>
  );
}
