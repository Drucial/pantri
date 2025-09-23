import { AppleMiseEnPlaceEffect } from "@workspace/ui/components/ui/shadcn-io/apple-hello-effect/index";
import { SearchAndCreateStack } from "../components/SearchAndCreateStack";
import { AnimatedFullHeightSection } from "../components/wrappers/animated-full-height-section";

export default function Page() {
  return (
    <AnimatedFullHeightSection>
      <AppleMiseEnPlaceEffect speed={0.65} className="mb-8" delay={1} />
      <SearchAndCreateStack />
    </AnimatedFullHeightSection>
  );
}
