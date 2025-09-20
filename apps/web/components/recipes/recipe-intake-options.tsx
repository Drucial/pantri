"use client";

import { FlipButton } from "@workspace/ui/components/ui/shadcn-io/flip-button";
import type { LucideIcon } from "lucide-react";
import {
  CameraIcon,
  ClipboardPasteIcon,
  LinkIcon,
  PenLineIcon,
} from "lucide-react";
import { motion } from "motion/react";

type RecipeIntakeOptionsProps = {
  onOptionSelect?: (value: string) => void;
};

type RecipeIntakeOption = {
  label: string;
  value: string;
  icon: LucideIcon;
};

const options: RecipeIntakeOption[] = [
  {
    label: "Write",
    value: "write",
    icon: PenLineIcon,
  },
  {
    label: "Paste",
    value: "scan",
    icon: ClipboardPasteIcon,
  },
  {
    label: "Link",
    value: "link",
    icon: LinkIcon,
  },
  {
    label: "Capture",
    value: "capture",
    icon: CameraIcon,
  },
];

export const RecipeIntakeOptions = ({
  onOptionSelect,
}: RecipeIntakeOptionsProps) => {
  const handleOptionClick = (value: string) => {
    onOptionSelect?.(value);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6,
          },
        },
      }}
      layout
      className="flex items-center gap-2"
      role="group"
      aria-label="Recipe input options"
    >
      {options.map((option) => (
        <motion.div
          key={option.value}
          className="relative group"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <FlipButton
            icon={option.icon}
            backText={option.label}
            initialVariant="ghost"
            finalVariant="default"
            from="left"
            onClick={() => handleOptionClick(option.value)}
            aria-label={`${option.label} recipe input`}
            title={option.label}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
