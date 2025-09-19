import { Button } from "@workspace/ui/components/button";
import type { LucideIcon } from "lucide-react";
import {
  CameraIcon,
  ClipboardPasteIcon,
  LinkIcon,
  PenLineIcon,
} from "lucide-react";

export const RecipeIntakeOptions = () => {
  return (
    <div className="flex items-center">
      {options.map((option) => (
        <div key={option.value} className="group px-1">
          <Button
            key={option.value}
            variant="ghost"
            className="gap-0 group w-8 group-hover:w-28 overflow-hidden transition-all duration-300"
          >
            <option.icon size={16} />
            <span className="w-0 ml-0 opacity-0 group-hover:w-auto group-hover:ml-2 group-hover:opacity-100 transition-all duration-300">
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
