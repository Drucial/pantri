"use client";
import { FileTextIcon, HomeIcon, LayersIcon, UsersIcon } from "lucide-react";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@workspace/ui/components/button";
import { HamburgerIcon } from "@workspace/ui/components/hamburger-icon";
import { Logo } from "@workspace/ui/components/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import { ThemeToggle } from "@workspace/ui/components/theme-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import type { Theme } from "@workspace/ui/components/ui/shadcn-io/theme-toggle-button";
import { UserMenu } from "@workspace/ui/components/user-menu";
import { cn } from "@workspace/ui/lib/utils";

const MobileNavigation = ({
  navigationLinks,
  onNavItemClick,
}: {
  navigationLinks: Navbar06NavItem[];
  onNavItemClick?: (href: string) => void;
}) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        className="group h-8 w-8 hover:bg-accent hover:text-accent-foreground"
        variant="ghost"
        size="icon"
      >
        <HamburgerIcon />
      </Button>
    </PopoverTrigger>
    <PopoverContent align="start" className="w-64 p-1">
      <NavigationMenu className="max-w-none">
        <NavigationMenuList className="flex-col items-start gap-0">
          {navigationLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <NavigationMenuItem key={index} className="w-full">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavItemClick && link.href) onNavItemClick(link.href);
                  }}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline",
                    link.active && "bg-accent text-accent-foreground"
                  )}
                >
                  <Icon
                    size={16}
                    className="text-muted-foreground"
                    aria-hidden
                  />
                  <span>{link.label}</span>
                </button>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </PopoverContent>
  </Popover>
);

// Desktop Navigation Component
const DesktopNavigation = ({
  navigationLinks,
  onNavItemClick,
}: {
  navigationLinks: Navbar06NavItem[];
  onNavItemClick?: (href: string) => void;
}) => (
  <NavigationMenu className="flex">
    <NavigationMenuList className="gap-2">
      <TooltipProvider>
        {navigationLinks.map((link) => {
          const Icon = link.icon;
          return (
            <NavigationMenuItem key={link.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <NavigationMenuLink
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavItemClick && link.href)
                        onNavItemClick(link.href);
                    }}
                    className={cn(
                      "flex size-8 items-center justify-center p-1.5 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer",
                      link.active && "bg-accent text-accent-foreground"
                    )}
                  >
                    <Icon size={20} aria-hidden />
                    <span className="sr-only">{link.label}</span>
                  </NavigationMenuLink>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="px-2 py-1 text-xs">
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            </NavigationMenuItem>
          );
        })}
      </TooltipProvider>
    </NavigationMenuList>
  </NavigationMenu>
);

export const NAVBAR_HEIGHT = 64;

export type Navbar06NavItem = {
  href?: string;
  label: string;
  icon: React.ComponentType<{
    size?: number;
    className?: string;
    "aria-hidden"?: boolean;
  }>;
  active?: boolean;
};

export type Navbar06Props = {
  logoHref?: string;
  navigationLinks?: Navbar06NavItem[];
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onNavItemClick?: (href: string) => void;
  onLanguageChange?: (language: string) => void;
  onThemeChange?: (theme: Theme) => void;
  currentTheme?: Theme;
  onUserItemClick?: (item: string) => void;
} & React.HTMLAttributes<HTMLElement>;

// Default navigation links with icons
const defaultNavigationLinks: Navbar06NavItem[] = [
  { href: "#", label: "Dashboard", icon: HomeIcon, active: true },
  { href: "#", label: "Projects", icon: LayersIcon },
  { href: "#", label: "Documentation", icon: FileTextIcon },
  { href: "#", label: "Team", icon: UsersIcon },
];

export const Navbar06 = React.forwardRef<HTMLElement, Navbar06Props>(
  (
    {
      className,
      navigationLinks = defaultNavigationLinks,
      userName = "John Doe",
      userEmail = "john@example.com",
      userAvatar,
      onNavItemClick,
      onThemeChange,
      onUserItemClick,
      currentTheme,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };

      checkWidth();

      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    // Combine refs
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    return (
      <header
        ref={combinedRef}
        className={cn(
          "sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-8 [&_*]:no-underline h-16",
          className
        )}
        {...props}
      >
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex flex-1 items-center gap-2">
            {/* Mobile menu trigger */}
            {isMobile && (
              <MobileNavigation
                navigationLinks={navigationLinks}
                onNavItemClick={onNavItemClick}
              />
            )}
            <div className="flex items-center gap-6">
              {/* Logo */}
              {/* <NavbarLogo logo={logo} /> */}
              <Logo height={32} />
              {/* Desktop navigation - icon only */}
              {!isMobile && (
                <DesktopNavigation
                  navigationLinks={navigationLinks}
                  onNavItemClick={onNavItemClick}
                />
              )}
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <ThemeToggle
              onThemeChange={onThemeChange}
              currentTheme={currentTheme}
            />
            {/* User menu */}
            <UserMenu
              userName={userName}
              userEmail={userEmail}
              userAvatar={userAvatar}
              onItemClick={onUserItemClick}
            />
          </div>
        </div>
      </header>
    );
  }
);

Navbar06.displayName = "Navbar06";

export {
  DesktopNavigation,
  HamburgerIcon,
  Logo,
  MobileNavigation,
  ThemeToggle,
};
