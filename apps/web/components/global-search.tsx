"use client";

import { Badge } from "@workspace/ui/components/badge";
import { Input } from "@workspace/ui/components/input";
import { cn } from "@workspace/ui/lib/utils";
import { SearchIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import {
  createShortcut,
  useKeyboardShortcut,
} from "../hooks/use-keyboard-shortcut";

type GlobalSearchProps = {
  placeholder?: string;
  onSearchChange?: (value: string) => void;
  className?: string;
};

export const GlobalSearch = ({
  placeholder = "Search for recipes...",
  onSearchChange,
  className,
}: GlobalSearchProps) => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange?.(value);
  };

  // Register Cmd+K / Ctrl+K shortcut to focus search
  useKeyboardShortcut(createShortcut.search(), () => inputRef.current?.focus());

  return (
    <div className={cn("relative flex-1", className)}>
      <Input
        ref={inputRef}
        className="peer w-full max-w-lg ps-8 pe-2"
        placeholder={placeholder}
        type="search"
        value={searchValue}
        onChange={(e) => handleSearchChange(e.target.value)}
        aria-label={placeholder}
        role="searchbox"
        aria-describedby="search-description"
      />
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
        <SearchIcon size={16} aria-hidden="true" />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {!searchValue && (
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="absolute inset-y-0 end-1.5 flex items-center gap-1"
          >
            <Badge variant="outline" className="size-6 bg-muted">
              <span className="text-sm font-medium shrink-0">⌘</span>
            </Badge>
            <Badge variant="outline" className="size-6 bg-muted">
              <span className="text-sm font-medium shrink-0">K</span>
            </Badge>
          </motion.div>
        )}
      </AnimatePresence>
      <div id="search-description" className="sr-only">
        Search through recipes and content
      </div>
    </div>
  );
};
