"use client";

import { useState } from "react";
import {
  Home,
  GraduationCap,
  BookOpen,
  Users,
  CreditCard,
  CalendarCheck,
  BarChart2,
  Megaphone,
  Settings,
  ChevronLeft,
  ChevronRight,
  BookMarked,
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { icon: Home, label: "Command Center", href: "#", badge: null },
  { icon: GraduationCap, label: "Student Management", href: "#", badge: "1,247" },
  { icon: BookOpen, label: "Teacher Center", href: "#", badge: "48" },
  { icon: Users, label: "Parent Monitoring", href: "#", badge: null },
  { icon: CreditCard, label: "Billing Center", href: "#", badge: "12" },
  { icon: CalendarCheck, label: "Attendance Center", href: "#", badge: null },
  { icon: BarChart2, label: "Report Center", href: "#", badge: null },
  { icon: Megaphone, label: "Announcement Center", href: "#", badge: "3" },
  { icon: Settings, label: "Settings", href: "#", badge: null },
];

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (label: string) => void;
}

export default function Sidebar({ activeItem = "Command Center", onItemClick }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        "sidebar h-screen flex flex-col bg-[#0f172a] border-r border-slate-800 relative z-20 flex-shrink-0",
        collapsed ? "w-[72px]" : "w-[260px]",
        collapsed && "sidebar-collapsed"
      )}
    >
      {/* Logo */}
      <div className="flex items-center h-16 px-4 border-b border-slate-800 flex-shrink-0">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-lg">
          <BookMarked className="w-5 h-5 text-white" />
        </div>
        <div
          className={clsx(
            "ml-3 overflow-hidden transition-all duration-300",
            collapsed ? "w-0 opacity-0" : "w-auto opacity-100"
          )}
        >
          <span className="font-bold text-white text-base tracking-tight whitespace-nowrap">
            EduManage
          </span>
          <span className="block text-[10px] text-blue-400 font-medium tracking-widest uppercase whitespace-nowrap">
            Pro Platform
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-2">
        <div className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;
            return (
              <button
                key={item.label}
                onClick={() => onItemClick?.(item.label)}
                className={clsx(
                  "nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left group relative",
                  isActive
                    ? "bg-blue-600/20 text-blue-400"
                    : "text-slate-400 hover:text-slate-200"
                )}
                title={collapsed ? item.label : undefined}
              >
                {/* Active indicator */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-blue-400 rounded-r-full" />
                )}
                <Icon
                  className={clsx(
                    "w-5 h-5 flex-shrink-0 transition-colors",
                    isActive ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300"
                  )}
                />
                <span
                  className={clsx(
                    "sidebar-label text-sm font-medium flex-1 transition-all duration-200",
                    collapsed && "opacity-0 w-0 overflow-hidden"
                  )}
                >
                  {item.label}
                </span>
                {item.badge && !collapsed && (
                  <span className="text-[10px] font-semibold bg-blue-600/30 text-blue-300 px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* School Info */}
        {!collapsed && (
          <div className="mt-6 mx-2 p-3 rounded-xl bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-800/30">
            <p className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider mb-1">
              Active School
            </p>
            <p className="text-sm font-semibold text-white">Bimba Education</p>
            <p className="text-xs text-slate-400">5 Branches · 1,247 Students</p>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-badge" />
              <span className="text-[10px] text-emerald-400 font-medium">System Online</span>
            </div>
          </div>
        )}
      </nav>

      {/* User Profile */}
      <div className="border-t border-slate-800 p-3 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
            AD
          </div>
          <div
            className={clsx(
              "flex-1 overflow-hidden transition-all duration-300",
              collapsed ? "w-0 opacity-0" : "opacity-100"
            )}
          >
            <p className="text-sm font-semibold text-white whitespace-nowrap">Admin User</p>
            <p className="text-xs text-slate-500 whitespace-nowrap">Super Administrator</p>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3.5 top-20 w-7 h-7 rounded-full bg-[#0f172a] border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all duration-200 shadow-lg z-30"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? (
          <ChevronRight className="w-3.5 h-3.5" />
        ) : (
          <ChevronLeft className="w-3.5 h-3.5" />
        )}
      </button>
    </aside>
  );
}
