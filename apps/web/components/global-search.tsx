"use client";

import { Input } from "@workspace/ui/components/input";
import { SearchIcon } from "lucide-react";

const content = {
  searchPlaceholder: "Search for recipes...",
  searchValue: "",
  onSearchChange: (value: string) => {
    console.log(value);
  },
};

export const GlobalSearch = () => {
  return (
    <div className="relative flex-1">
      <Input
        id="input-1"
        className="peer w-full max-w-md ps-8 pe-2"
        placeholder={content.searchPlaceholder}
        type="search"
        value={content.searchValue}
        onChange={(e) => content.onSearchChange?.(e.target.value)}
      />
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
        <SearchIcon size={16} />
      </div>
    </div>
  );
};
