"use client";

import {
  type HTMLMotionProps,
  type Transition,
  type Variant,
  motion,
} from "motion/react";
import * as React from "react";

import { buttonVariants } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

type FlipDirection = "top" | "bottom" | "left" | "right";

type FlipButtonProps = HTMLMotionProps<"button"> & {
  icon: LucideIcon;
  backText: string | React.ReactNode;
  transition?: Transition;
  frontClassName?: string;
  backClassName?: string;
  from?: FlipDirection;
  initialVariant?: VariantProps<typeof buttonVariants>["variant"];
  finalVariant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  // Legacy prop for backward compatibility
  variant?: VariantProps<typeof buttonVariants>["variant"];
};

function FlipButton({
  icon,
  backText,
  transition = { type: "spring", stiffness: 200, damping: 30, duration: 0.6 },
  className,
  frontClassName,
  backClassName,
  from = "top",
  initialVariant = "default",
  finalVariant = "default",
  size: _size = "default",
  variant, // Legacy prop
  ...props
}: FlipButtonProps) {
  const Icon = icon;
  const [isHovered, setIsHovered] = React.useState(false);

  // Use legacy variant prop if provided, otherwise use initialVariant
  const effectiveInitialVariant = variant || initialVariant;

  const isVertical = from === "top" || from === "bottom";
  const rotateAxis = isVertical ? "rotateX" : "rotateY";

  const frontOffset = from === "top" || from === "left" ? "50%" : "-50%";
  const backOffset = from === "top" || from === "left" ? "-50%" : "50%";

  const buildVariant = (
    opacity: number,
    rotation: number,
    offset: string | null = null
  ): Variant => ({
    opacity,
    [rotateAxis]: rotation,
    ...(isVertical && offset !== null ? { y: offset } : {}),
    ...(!isVertical && offset !== null ? { x: offset } : {}),
  });

  const frontVariants = {
    initial: buildVariant(1, 0, "0%"),
    hover: buildVariant(0, 90, frontOffset),
  };

  const backVariants = {
    initial: buildVariant(0, 90, backOffset),
    hover: {
      ...buildVariant(1, 0, "0%"),
      transition: { delay: 0.2, ...transition },
    },
  };

  const currentVariant = isHovered ? finalVariant : effectiveInitialVariant;

  const iconButtonStyles = buttonVariants({
    variant: currentVariant,
    size: "icon",
  });

  const layoutTransition = {};

  return (
    <motion.button
      data-slot="flip-button"
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      layout
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{
        layout: layoutTransition,
        default: transition,
      }}
      className={cn(
        "relative perspective-[1000px] overflow-hidden w-10 h-10 hover:w-auto hover:px-4 transition-colors duration-300",
        iconButtonStyles,
        className
      )}
      {...props}
    >
      <motion.span
        data-slot="flip-button-front"
        variants={frontVariants}
        transition={transition}
        className={cn(
          "absolute inset-0 flex items-center justify-center",
          frontClassName
        )}
      >
        <Icon />
      </motion.span>
      <motion.span
        data-slot="flip-button-back"
        variants={backVariants}
        transition={transition}
        className={cn(
          "flex items-center justify-center whitespace-nowrap py-2",
          backClassName
        )}
      >
        {backText}
      </motion.span>
    </motion.button>
  );
}

export { FlipButton, type FlipButtonProps, type FlipDirection };
