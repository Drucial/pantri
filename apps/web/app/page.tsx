import { AppleHelloEnglishEffect } from "@workspace/ui/components/ui/shadcn-io/apple-hello-effect";
import { SearchAndCreateStack } from "../components/SearchAndCreateStack";
import { AnimatedFullHeightSection } from "../components/wrappers/animated-full-height-section";

export default function Page() {
  return (
    <AnimatedFullHeightSection>
      <AppleHelloEnglishEffect speed={0.65} className="mb-18" delay={1} />
      <SearchAndCreateStack />
    </AnimatedFullHeightSection>
  );
}
