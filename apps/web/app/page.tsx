import { RecipeIntakeOptions } from "@/components/recipes/recipe-intake-options";
import { GlobalSearch } from "@/components/global-search";
import { Separator } from "@workspace/ui/components/separator";
import { H1 } from "@workspace/ui/components/typography/h1";
import BlurText from "@workspace/ui/components/ui/shadcn-io/blur-text";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center">
        <H1 asChild className="mb-8">
          <BlurText text="Create. Plan. Cook." />
        </H1>
        <div className="flex flex-col items-center justify-center gap-2">
          <GlobalSearch />
          <div className="flex items-center gap-2 flex-1 justify-center text-muted-foreground text-sm">
            <Separator />
            <span>or</span>
            <Separator />
          </div>
          <RecipeIntakeOptions />
        </div>
      </div>
    </div>
  );
}
