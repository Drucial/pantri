"use client";

import { Input } from "@workspace/ui/components/input";
import { cn } from "@workspace/ui/lib/utils";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

interface GlobalSearchProps {
  placeholder?: string;
  onSearchChange?: (value: string) => void;
  className?: string;
}

export const GlobalSearch = ({
  placeholder = "Search for recipes...",
  onSearchChange,
  className,
}: GlobalSearchProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange?.(value);
  };

  return (
    <div className={cn("relative flex-1", className)}>
      <Input
        className="peer w-full max-w-md ps-8 pe-2"
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
      <div id="search-description" className="sr-only">
        Search through recipes and content
      </div>
    </div>
  );
};
