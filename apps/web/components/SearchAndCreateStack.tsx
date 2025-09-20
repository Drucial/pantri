"use client";
import { Separator } from "@workspace/ui/components/separator";
import { RollingText } from "@workspace/ui/components/ui/shadcn-io/rolling-text/index";
import { motion } from "motion/react";
import { GlobalSearch } from "./global-search";
import { RecipeIntakeOptions } from "./recipes/recipe-intake-options";

export function SearchAndCreateStack() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
          },
        },
      }}
      className="flex flex-col items-center justify-center gap-4 w-full"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          delay: 0.2,
        }}
        className="w-full max-w-sm"
      >
        <GlobalSearch className="w-full max-w-sm" />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          delay: 0.33,
        }}
        className="flex items-center gap-2 flex-1 justify-center text-muted-foreground text-sm"
      >
        <Separator />
        <RollingText className="text-sm flex" text="or create" />
        <Separator />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <RecipeIntakeOptions />
      </motion.div>
    </motion.div>
  );
}
