import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@workspace/ui/lib/utils";

const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    asChild?: boolean;
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "h3";
  return (
    <Comp
      ref={ref}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
});
H3.displayName = "H3";

export { H3 };