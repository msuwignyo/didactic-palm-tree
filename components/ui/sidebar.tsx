"use client";

import React from "react";
import {
  Home,
  Settings,
  HelpCircle,
  Menu,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users2,
  LucideIcon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import Link from "next/link";

interface NavItem {
  href: string;
  icon: LucideIcon | (() => React.JSX.Element);
  label: string;
}

interface SidebarProps {
  position: "left" | "right";
  navItems: NavItem[];
  bottomNavItems: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({
  position,
  navItems,
  bottomNavItems,
}) => {
  const sideClass = position === "left" ? "left-0" : "right-0";
  const tooltipSide = position === "left" ? "right" : "left";

  const renderNavItem = (item: NavItem) => (
    <Tooltip key={item.href}>
      <TooltipTrigger asChild>
        <Link
          href={item.href}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          <item.icon className="h-5 w-5" />
          <span className="sr-only">{item.label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side={tooltipSide}>{item.label}</TooltipContent>
    </Tooltip>
  );

  return (
    <TooltipProvider>
      <aside
        className={`fixed inset-y-0 ${sideClass} z-10 hidden w-14 flex-col border-r bg-background sm:flex`}
      >
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          {navItems.map(renderNavItem)}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          {bottomNavItems.map(renderNavItem)}
        </nav>
      </aside>
    </TooltipProvider>
  );
};

export default Sidebar;
