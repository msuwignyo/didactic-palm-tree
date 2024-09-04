"use client";

import React from "react";
import Sidebar from "./sidebar";
import {
  Bell,
  MessageSquare,
  User,
  LucideIcon,
  Award,
  Cable,
  BookA,
  PencilRuler,
} from "lucide-react";
import { Badge } from "./badge";

interface NavItemType {
  href: string;
  icon: LucideIcon | (() => React.JSX.Element);
  label: string;
}

interface RightSidebarProps {
  additionalItems?: NavItemType[];
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  additionalItems = [],
}) => {
  const defaultItems: NavItemType[] = [
    {
      href: "/",
      icon: () => (
        <Badge className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
          6.5
        </Badge>
      ),
      label: "Overall Score 6.5",
    },
    { href: "/", icon: Award, label: "Task Achievement" },
    { href: "/", icon: Cable, label: "Coherence and Cohesion" },
    { href: "/", icon: BookA, label: "Lexical Resource" },
    { href: "/", icon: PencilRuler, label: "Grammatical Range and Accuracy" },
  ];

  const navItems = [...defaultItems, ...additionalItems];

  return <Sidebar position="right" navItems={navItems} bottomNavItems={[]} />;
};

export default RightSidebar;
