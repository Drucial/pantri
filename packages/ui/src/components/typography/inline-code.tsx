import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@workspace/ui/lib/utils";

const InlineCode = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & {
    asChild?: boolean;
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "code";
  return (
    <Comp
      ref={ref}
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...props}
    />
  );
});
InlineCode.displayName = "InlineCode";

export { InlineCode };