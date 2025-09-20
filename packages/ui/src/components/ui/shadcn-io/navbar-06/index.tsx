"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { H3 } from "@workspace/ui/components/typography/h3";
import type { Theme } from "@workspace/ui/components/ui/shadcn-io/theme-toggle-button";
import { ThemeToggleButton } from "@workspace/ui/components/ui/shadcn-io/theme-toggle-button";
import { cn } from "@workspace/ui/lib/utils";
import {
  ChefHatIcon,
  ChevronDownIcon,
  FileTextIcon,
  HomeIcon,
  LayersIcon,
  UsersIcon,
} from "lucide-react";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

// Hamburger icon component
const HamburgerIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn("pointer-events-none", className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

// Theme Toggle Component
const ThemeToggle = ({
  onThemeChange,
  currentTheme,
}: {
  onThemeChange?: (theme: "light" | "dark") => void;
  currentTheme?: "light" | "dark";
}) => {
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    onThemeChange?.(newTheme);
  };

  return (
    <ThemeToggleButton
      theme={currentTheme ?? "light"}
      onClick={toggleTheme}
      variant="circle-blur"
      start="top-right"
    />
  );
};

// Mobile Navigation Component
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

// Logo Component
const NavbarLogo = ({
  logo,
  onClick,
}: {
  logo: React.ReactNode;
  onClick?: () => void;
}) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      onClick?.();
    }}
    className="flex items-center space-x-1 text-primary hover:text-primary/90 transition-colors cursor-pointer"
  >
    <div className="text-2xl">{logo}</div>
    <H3 className="leading-none mb-1">
      <span>pantri</span>
    </H3>
  </button>
);

// User Menu Component
const UserMenu = ({
  userName = "John Doe",
  userEmail = "john@example.com",
  userAvatar,
  onItemClick,
}: {
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onItemClick?: (item: string) => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        className="h-8 px-2 py-0 hover:bg-accent hover:text-accent-foreground"
      >
        <Avatar className="h-6 w-6">
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback className="text-xs">
            {userName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <ChevronDownIcon className="h-3 w-3 ml-1" />
        <span className="sr-only">User menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">{userName}</p>
          <p className="text-xs leading-none text-muted-foreground">
            {userEmail}
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.("profile")}>
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.("settings")}>
        Settings
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.("billing")}>
        Billing
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.("logout")}>
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const NAVBAR_HEIGHT = 64;

// Types
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

export type Navbar06Language = {
  value: string;
  label: string;
};

export type Navbar06Props = {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar06NavItem[];
  languages?: Navbar06Language[];
  defaultLanguage?: string;
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
      logo = <ChefHatIcon />,
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
          "sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 [&_*]:no-underline h-16",
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
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
              <NavbarLogo logo={logo} />
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
  NavbarLogo,
  ThemeToggle,
  UserMenu,
};
