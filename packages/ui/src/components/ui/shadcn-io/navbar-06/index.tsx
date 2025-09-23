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

type LogoProps = {
  className?: string;
  height?: number;
};

const Logo = ({ className, height = 50 }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 685 170"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
      style={{ height }}
    >
      <path d="M87.0108 116.688H33.0108V127.688C33.0108 127.777 33.0462 127.861 33.1084 127.924C33.1709 127.986 33.2563 128.021 33.3448 128.021H86.6778C86.7661 128.021 86.8506 127.986 86.9131 127.924C86.9756 127.861 87.0107 127.777 87.0108 127.688V116.688ZM97.0108 127.688C97.0107 130.429 95.9223 133.057 93.9844 134.995C92.0465 136.933 89.4183 138.021 86.6778 138.021H33.3448C30.6043 138.021 27.976 136.933 26.0381 134.995C24.1003 133.057 23.0108 130.429 23.0108 127.688V99.1494C23.0108 99.1272 23.01 99.0168 22.8565 98.8066C22.6884 98.5766 22.3858 98.3058 21.9639 98.1025V98.1016C16.3731 95.4254 11.9048 90.863 9.34672 85.2168C6.78665 79.566 6.30395 73.1927 7.98344 67.2207C9.66297 61.2487 13.3972 56.0613 18.5274 52.5732C22.6719 49.7555 27.5128 48.1923 32.4737 48.0303C34.9377 43.6908 38.4023 39.98 42.5977 37.2178C47.7674 33.8141 53.8212 32.0001 60.0108 32C66.2005 32 72.255 33.814 77.4248 37.2178C81.6195 39.9795 85.083 43.6899 87.5469 48.0283C92.5104 48.1874 97.3544 49.7485 101.502 52.5664C106.636 56.0546 110.373 61.2445 112.054 67.2197C113.734 73.1949 113.249 79.5718 110.686 85.2246C108.122 90.8775 103.643 95.4437 98.0411 98.1162L98.0401 98.1152C97.6272 98.3149 97.3304 98.5813 97.1651 98.8076C97.0127 99.0163 97.0108 99.1285 97.0108 99.1553V127.688ZM33.0108 106.688H87.0108V99.1553C87.0108 94.2812 90.3166 90.7287 93.7276 89.0938L93.7354 89.0898C97.2101 87.4322 99.988 84.6008 101.578 81.0947C103.168 77.5885 103.469 73.633 102.427 69.9268C101.385 66.2206 99.0663 63.0015 95.8819 60.8379C92.6975 58.6745 88.8508 57.7053 85.0215 58.1016C82.8469 58.3265 80.7781 57.1127 79.9141 55.1045C78.2404 51.2141 75.4631 47.8993 71.9258 45.5703C68.3885 43.2414 64.2459 42 60.0108 42C55.7758 42.0001 51.6339 43.2415 48.0967 45.5703C44.5594 47.8993 41.7821 51.2141 40.1084 55.1045C39.2449 57.1117 37.1776 58.326 35.0039 58.1025C31.1762 57.709 27.3326 58.6793 24.1504 60.8428C20.9683 63.0062 18.6522 66.2236 17.6104 69.9277C16.5686 73.6319 16.8682 77.5849 18.4561 81.0898C19.9945 84.4854 22.6461 87.2497 25.9668 88.9277L26.2901 89.0859L26.6221 89.252C29.9064 90.9533 33.0107 94.43 33.0108 99.1494V106.688Z" />
      <path d="M156.171 123.792C154.379 123.365 152.715 122.512 151.179 121.232C149.729 119.867 148.662 118.331 147.979 116.624C155.062 108.091 161.505 98.96 167.307 89.232C173.11 79.4187 177.846 69.7333 181.515 60.176C182.881 60.0053 184.63 60.0053 186.763 60.176C188.897 60.3467 190.646 60.816 192.011 61.584V71.056C196.705 63.5467 202.977 59.792 210.827 59.792C217.142 59.792 222.134 62.0107 225.803 66.448C229.473 70.8 231.307 76.8587 231.307 84.624V99.6C231.307 104.293 231.905 107.664 233.099 109.712C234.379 111.76 236.385 112.784 239.115 112.784C240.31 112.784 241.206 113.296 241.803 114.32C242.486 115.344 242.827 116.709 242.827 118.416C242.827 119.781 242.443 121.019 241.675 122.128C240.993 123.237 239.841 123.792 238.219 123.792C225.846 123.792 219.659 116.197 219.659 101.008V84.624C219.659 75.408 216.289 70.8 209.547 70.8C206.561 70.8 203.83 71.952 201.355 74.256C198.881 76.56 196.918 79.632 195.467 83.472C194.102 87.2267 193.419 91.4507 193.419 96.144V169.104C192.566 169.36 191.627 169.573 190.603 169.744C189.579 169.915 188.598 170 187.659 170C185.611 170 183.649 169.701 181.771 169.104V85.648C179.894 89.4027 177.803 93.2427 175.499 97.168C173.195 101.008 170.806 104.677 168.331 108.176C165.942 111.675 163.681 114.789 161.547 117.52C159.414 120.251 157.622 122.341 156.171 123.792Z" />
      <path d="M239.133 112.784C242.035 112.784 244.851 111.376 247.581 108.56C250.397 105.659 252.744 101.776 254.621 96.912C254.536 95.7173 254.493 94.5227 254.493 93.328C254.493 86.8427 255.773 81.0827 258.333 76.048C260.893 71.0133 264.349 67.0453 268.701 64.144C273.139 61.2427 278.173 59.792 283.805 59.792C286.792 59.792 289.736 60.3893 292.637 61.584C295.539 62.6933 297.971 64.2293 299.933 66.192V60.944C300.701 60.688 301.597 60.4747 302.621 60.304C303.645 60.1333 304.712 60.048 305.821 60.048C307.869 60.048 309.789 60.3467 311.581 60.944V98.448C311.581 102.971 312.264 106.512 313.629 109.072C315.08 111.547 317.469 112.784 320.797 112.784C322.248 112.784 323.229 113.381 323.741 114.576C324.253 115.771 324.509 117.051 324.509 118.416C324.509 119.781 324.125 121.019 323.357 122.128C322.675 123.237 321.523 123.792 319.901 123.792C311.539 123.792 305.949 120.037 303.133 112.528C300.659 116.027 297.544 118.8 293.789 120.848C290.12 122.811 286.024 123.792 281.501 123.792C276.552 123.792 272.157 122.725 268.317 120.592C264.563 118.373 261.491 115.344 259.101 111.504C253.811 119.696 246.856 123.792 238.237 123.792C237.128 123.792 236.232 123.28 235.549 122.256C234.867 121.232 234.525 119.909 234.525 118.288C234.525 114.619 236.061 112.784 239.133 112.784ZM266.397 93.328C266.397 99.3867 267.763 104.165 270.493 107.664C273.309 111.077 277.149 112.784 282.013 112.784C287.389 112.784 291.699 110.949 294.941 107.28C298.269 103.611 299.933 98.7893 299.933 92.816V78.48C298.227 76.176 296.051 74.3413 293.405 72.976C290.76 71.5253 288.029 70.8 285.213 70.8C281.544 70.8 278.301 71.7813 275.485 73.744C272.669 75.7067 270.451 78.3947 268.829 81.808C267.208 85.136 266.397 88.976 266.397 93.328Z" />
      <path d="M319.862 123.792C318.753 123.792 317.857 123.28 317.174 122.256C316.492 121.232 316.15 119.909 316.15 118.288C316.15 114.619 317.686 112.784 320.758 112.784C323.489 112.784 325.921 111.419 328.054 108.688C330.273 105.872 332.193 101.221 333.814 94.736L337.654 79.76C341.238 66.448 348.065 59.792 358.134 59.792C361.974 59.792 365.217 60.944 367.862 63.248C370.508 65.4667 372.342 68.496 373.366 72.336C375.756 68.3253 378.828 65.2533 382.582 63.12C386.337 60.9013 390.518 59.792 395.126 59.792C401.782 59.792 406.902 61.968 410.486 66.32C414.156 70.672 415.99 76.7733 415.99 84.624V99.6C415.99 104.293 416.588 107.664 417.782 109.712C419.062 111.76 421.068 112.784 423.798 112.784C424.993 112.784 425.889 113.296 426.486 114.32C427.169 115.344 427.51 116.709 427.51 118.416C427.51 119.781 427.126 121.019 426.358 122.128C425.676 123.237 424.524 123.792 422.902 123.792C410.529 123.792 404.342 116.197 404.342 101.008V84.624C404.342 75.408 400.716 70.8 393.462 70.8C389.708 70.8 386.38 72.2933 383.478 75.28C380.662 78.2667 378.444 82.4053 376.822 87.696C375.286 92.9867 374.518 99.1307 374.518 106.128V122C373.665 122.256 372.726 122.469 371.702 122.64C370.678 122.811 369.697 122.896 368.758 122.896C366.71 122.896 364.79 122.597 362.998 122V81.168C362.998 77.84 362.572 75.28 361.718 73.488C360.865 71.696 359.329 70.8 357.11 70.8C355.318 70.8 353.782 71.6107 352.502 73.232C351.222 74.8533 350.113 77.456 349.174 81.04L344.438 99.472C342.22 107.92 339.148 114.107 335.222 118.032C331.297 121.872 326.177 123.792 319.862 123.792Z" />
      <path d="M423.758 112.784C425.892 112.784 428.324 112.144 431.054 110.864C433.87 109.584 436.601 107.408 439.246 104.336C441.892 101.264 444.068 97.1253 445.774 91.92C447.481 86.6293 448.334 80.016 448.334 72.08V59.792H438.862C438.265 58.4267 437.966 56.72 437.966 54.672C437.966 52.624 438.265 50.9173 438.862 49.552H448.334V26.896C449.956 26.2987 451.918 26 454.222 26C456.27 26 458.233 26.2987 460.11 26.896V49.552H479.182C479.865 50.9173 480.206 52.624 480.206 54.672C480.206 56.72 479.865 58.4267 479.182 59.792H460.11V86.288C460.11 94.8213 461.39 101.392 463.95 106C466.596 110.523 470.308 112.784 475.086 112.784C477.561 112.784 478.798 114.661 478.798 118.416C478.798 120.037 478.372 121.317 477.518 122.256C476.75 123.28 475.641 123.792 474.19 123.792C468.644 123.792 463.95 122.213 460.11 119.056C456.356 115.899 453.582 111.504 451.79 105.872C448.206 112.016 443.812 116.539 438.606 119.44C433.401 122.341 428.153 123.792 422.862 123.792C421.753 123.792 420.857 123.237 420.174 122.128C419.492 121.104 419.15 119.824 419.15 118.288C419.15 116.667 419.534 115.344 420.302 114.32C421.07 113.296 422.222 112.784 423.758 112.784Z" />
      <path d="M474.237 123.792C473.128 123.792 472.232 123.28 471.549 122.256C470.867 121.232 470.525 119.909 470.525 118.288C470.525 114.619 472.061 112.784 475.133 112.784C478.888 112.784 482.216 111.248 485.117 108.176C488.104 105.019 490.451 100.752 492.157 95.376C493.949 90 494.845 84.0267 494.845 77.456C494.845 75.92 494.76 74.512 494.589 73.232C494.419 71.952 494.205 70.8853 493.949 70.032C493.181 69.264 492.328 68.0267 491.389 66.32C490.536 64.6133 489.768 62.8213 489.085 60.944C488.488 58.9813 488.189 57.4027 488.189 56.208C489.213 54.5867 490.835 53.3493 493.053 52.496C495.357 51.5573 497.875 51.3013 500.605 51.728C502.227 54.7147 503.549 58.4693 504.573 62.992C507.133 62.9067 510.589 62.352 514.941 61.328C517.672 60.7307 519.848 60.3467 521.469 60.176C523.176 59.92 524.627 59.792 525.821 59.792C530.429 59.792 534.056 61.5413 536.701 65.04C539.347 68.4533 540.669 73.104 540.669 78.992V99.6C540.669 104.293 541.267 107.664 542.461 109.712C543.741 111.76 545.747 112.784 548.477 112.784C549.672 112.784 550.568 113.296 551.165 114.32C551.848 115.344 552.189 116.709 552.189 118.416C552.189 119.781 551.805 121.019 551.037 122.128C550.355 123.237 549.203 123.792 547.581 123.792C535.208 123.792 529.021 116.197 529.021 101.008V81.168C529.021 77.328 528.595 74.64 527.741 73.104C526.888 71.568 525.352 70.8 523.133 70.8C522.365 70.8 521.512 70.8853 520.573 71.056C519.635 71.2267 517.971 71.568 515.581 72.08C511.4 72.9333 508.243 73.4453 506.109 73.616C506.195 74.9813 506.237 76.3467 506.237 77.712C506.237 86.928 504.915 94.992 502.269 101.904C499.624 108.816 495.869 114.192 491.005 118.032C486.227 121.872 480.637 123.792 474.237 123.792Z" />
      <path d="M547.612 123.792C546.503 123.792 545.607 123.28 544.924 122.256C544.242 121.232 543.9 119.909 543.9 118.288C543.9 114.619 545.436 112.784 548.508 112.784C550.983 112.784 553.5 112.4 556.06 111.632C558.62 110.779 561.607 109.371 565.02 107.408C561.692 101.605 560.028 94.7787 560.028 86.928C560.028 81.6373 561.01 76.9867 562.972 72.976C564.935 68.88 567.666 65.68 571.164 63.376C574.663 60.9867 578.631 59.792 583.068 59.792C586.823 59.792 590.151 60.688 593.052 62.48C595.954 64.1867 598.215 66.576 599.836 69.648C601.458 72.72 602.268 76.2613 602.268 80.272C602.268 85.7333 600.647 90.7253 597.404 95.248C594.247 99.7707 588.871 104.677 581.276 109.968C584.007 111.931 587.676 112.912 592.284 112.912C593.479 112.912 594.418 113.424 595.1 114.448C595.783 115.472 596.124 116.837 596.124 118.544C596.124 120.165 595.74 121.445 594.972 122.384C594.204 123.323 593.095 123.792 591.644 123.792C587.548 123.792 583.708 123.109 580.124 121.744C576.54 120.379 573.554 118.501 571.164 116.112C562.972 121.232 555.122 123.792 547.612 123.792ZM571.164 85.904C571.164 92.6453 572.359 98.0213 574.748 102.032C580.295 98.192 584.391 94.4373 587.036 90.768C589.767 87.0987 591.132 83.6 591.132 80.272C591.132 77.2 590.364 74.8107 588.828 73.104C587.378 71.312 585.33 70.416 582.684 70.416C579.356 70.416 576.583 71.9093 574.364 74.896C572.231 77.8827 571.164 81.552 571.164 85.904Z" />
      <path d="M591.693 123.792C590.499 123.792 589.56 123.28 588.877 122.256C588.109 121.232 587.725 119.909 587.725 118.288C587.725 116.581 588.152 115.259 589.005 114.32C589.859 113.381 590.968 112.912 592.333 112.912C597.539 112.912 602.275 111.547 606.541 108.816C610.893 106 614.435 102.16 617.165 97.296C616.909 95.504 616.781 93.6267 616.781 91.664C616.781 85.52 618.104 80.0587 620.749 75.28C623.395 70.5013 626.979 66.7467 631.501 64.016C636.109 61.2 641.272 59.792 646.989 59.792C652.707 59.792 657.827 61.2 662.349 64.016C666.872 66.7467 670.413 70.5013 672.973 75.28C675.619 80.0587 676.941 85.52 676.941 91.664C676.941 97.808 675.619 103.312 672.973 108.176C670.413 113.04 666.872 116.88 662.349 119.696C657.912 122.427 652.792 123.792 646.989 123.792C641.528 123.792 636.621 122.555 632.269 120.08C627.917 117.605 624.419 114.235 621.773 109.968C618.189 114.405 613.795 117.819 608.589 120.208C603.469 122.597 597.837 123.792 591.693 123.792ZM646.861 112.784C652.323 112.784 656.675 110.864 659.917 107.024C663.245 103.184 664.909 98.064 664.909 91.664C664.909 85.4347 663.245 80.4 659.917 76.56C656.675 72.72 652.365 70.8 646.989 70.8C641.613 70.8 637.219 72.7627 633.805 76.688C630.477 80.528 628.813 85.6053 628.813 91.92C628.813 98.1493 630.435 103.184 633.677 107.024C637.005 110.864 641.4 112.784 646.861 112.784Z" />
      <path d="M604.011 40.5C606.773 40.5 609.011 42.7386 609.011 45.5C609.011 48.2614 606.773 50.5 604.011 50.5H558.011C555.25 50.5 553.011 48.2614 553.011 45.5C553.011 42.7386 555.25 40.5 558.011 40.5H604.011Z" />
    </svg>
  );
};

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
  NavbarLogo,
  ThemeToggle,
  UserMenu,
};
