"use client";

import { Button } from "@workspace/ui/components/button";
import type { LucideIcon } from "lucide-react";
import {
  CameraIcon,
  ClipboardPasteIcon,
  LinkIcon,
  PenLineIcon,
} from "lucide-react";

interface RecipeIntakeOptionsProps {
  onOptionSelect?: (value: string) => void;
}

export const RecipeIntakeOptions = ({ onOptionSelect }: RecipeIntakeOptionsProps) => {
  const handleOptionClick = (value: string) => {
    onOptionSelect?.(value);
  };

  return (
    <div
      className="flex items-center"
      role="group"
      aria-label="Recipe input options"
    >
      {options.map((option) => (
        <div key={option.value} className="group px-1">
          <Button
            variant="ghost"
            className="gap-0 group w-8 group-hover:w-28 overflow-hidden transition-all duration-300"
            onClick={() => handleOptionClick(option.value)}
            aria-label={`${option.label} recipe input`}
            title={option.label}
          >
            <option.icon size={16} aria-hidden="true" />
            <span
              className="w-0 ml-0 opacity-0 group-hover:w-auto group-hover:ml-2 group-hover:opacity-100 transition-all duration-300"
              aria-hidden="true"
            >
              {option.label}
            </span>
          </Button>
        </div>
      ))}
    </div>
  );
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
