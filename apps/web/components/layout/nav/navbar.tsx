import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";
import { H1 } from "@workspace/ui/components/typography";
import { MenuIcon } from "lucide-react";
export function Navbar() {
  return (
    <header className="w-full p-4 flex justify-between items-center">
      <H1 asChild>
        <div>P.</div>
      </H1>
      <nav className="flex gap-2 items-center">
        <Button size="icon">
          <MenuIcon />
        </Button>
        <Separator orientation="vertical" className="!h-8" />
        <ThemeToggle />
      </nav>
    </header>
  );
}
