"use client";

import { cn } from "@workspace/ui/lib/utils";
import { motion } from "motion/react";

type AnimatedFullHeightSectionProps = {
  className?: string;
  children: React.ReactNode;
};

export function AnimatedFullHeightSection({
  children,
  className,
}: AnimatedFullHeightSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      className="px-4 md:px-8 pb-4 md:pb-8"
      style={{ height: `calc(100vh - 64px)` }}
    >
      <div
        className={cn(
          "flex flex-col items-center justify-center bg-muted h-full rounded-lg p-6",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
