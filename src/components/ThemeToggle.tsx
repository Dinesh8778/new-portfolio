"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-slate-800/50 animate-pulse border border-gray-200 dark:border-slate-800" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-800 hover:text-primary dark:hover:text-primary transition-all duration-300 shadow-sm"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={18} className="text-yellow-500 animate-spin-slow" />
      ) : (
        <Moon size={18} className="text-slate-700" />
      )}
    </button>
  );
}
