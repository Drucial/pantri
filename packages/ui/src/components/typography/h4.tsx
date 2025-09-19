import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@workspace/ui/lib/utils";

const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    asChild?: boolean;
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "h4";
  return (
    <Comp
      ref={ref}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
});
H4.displayName = "H4";

export { H4 };