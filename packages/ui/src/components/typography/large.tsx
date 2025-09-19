import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@workspace/ui/lib/utils";

const Large = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      ref={ref}
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
});
Large.displayName = "Large";

export { Large };