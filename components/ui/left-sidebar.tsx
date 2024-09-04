"use client";

import React from "react";
import Sidebar from "./sidebar";
import {
  Home,
  LineChart,
  Package,
  ShoppingCart,
  Users2,
  Settings,
  HelpCircle,
  LucideIcon,
} from "lucide-react";
import { Badge } from "./badge";

interface NavItemType {
  href: string;
  icon: LucideIcon | (() => React.JSX.Element);
  label: string;
}

interface LeftSidebarProps {
  additionalItems?: NavItemType[];
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ additionalItems = [] }) => {
  const defaultItems: NavItemType[] = [
    {
      href: "/essay/1",
      icon: () => (
        <Badge className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
          1
        </Badge>
      ),
      label: "Essay 1",
    },
    {
      href: "/essay/2",
      icon: () => (
        <Badge className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
          2
        </Badge>
      ),
      label: "Essay 2",
    },
    {
      href: "/essay/3",
      icon: () => (
        <Badge className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
          3
        </Badge>
      ),
      label: "Essay 3",
    },
  ];

  const bottomItems: NavItemType[] = [
    { href: "/settings", icon: Settings, label: "Settings" },
    { href: "/help", icon: HelpCircle, label: "Help" },
  ];

  const navItems = [...defaultItems, ...additionalItems];

  return (
    <Sidebar position="left" navItems={navItems} bottomNavItems={bottomItems} />
  );
};

export default LeftSidebar;
