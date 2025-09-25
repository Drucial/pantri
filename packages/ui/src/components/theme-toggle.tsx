import { ThemeToggleButton } from "./ui/shadcn-io/theme-toggle-button";

type ThemeToggleProps = {
  onThemeChange?: (theme: "light" | "dark") => void;
  currentTheme?: "light" | "dark";
};

export function ThemeToggle({ onThemeChange, currentTheme }: ThemeToggleProps) {
  const newTheme = currentTheme === "light" ? "dark" : "light";

  return (
    <ThemeToggleButton
      theme={currentTheme ?? "light"}
      onClick={() => onThemeChange?.(newTheme)}
      variant="circle-blur"
      start="top-right"
    />
  );
}
