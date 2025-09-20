import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@workspace/ui/lib/utils";

const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    asChild?: boolean;
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "h1";
  return (
    <Comp
      ref={ref}
      className={cn(
        "scroll-m-20 text-4xl font-bold text-primary/80 tracking-tight leading-tight lg:text-7xl",
        className
      )}
      {...props}
    />
  );
});
H1.displayName = "H1";

export { H1 };
