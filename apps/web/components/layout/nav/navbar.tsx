import { H1 } from "@workspace/ui/components/typography";
export function Navbar() {
  return (
    <header className="w-full p-4 flex justify-between items-center">
      <H1 asChild>
        <div>P.</div>
      </H1>
    </header>
  );
}
