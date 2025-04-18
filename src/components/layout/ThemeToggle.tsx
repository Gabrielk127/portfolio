"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

// Custom useTheme hook implementation
export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as
        | "light"
        | "dark"
        | null;
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      // Use saved theme or system preference
      const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
      setTheme(initialTheme);

      // Apply theme to document
      document.documentElement.classList.toggle(
        "dark",
        initialTheme === "dark"
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Save to localStorage and update document class
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
  };

  return { theme, toggleTheme };
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div>
      <button
        onClick={toggleTheme}
        className={`
          relative w-20 h-10 rounded-full p-1 transition-all duration-300
          ${
            isDark
              ? "bg-[var(--PrimaryBackground)] shadow-inner shadow-slate-900/50"
              : "bg-gray-200 shadow-inner shadow-gray-400/30"
          }
        `}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {/* Neumorphic track */}
        <div
          className={`
            absolute inset-0 rounded-full transition-all duration-300
            ${
              isDark
                ? "shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(70,70,90,0.2)]"
                : "shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.7)]"
            }
          `}
        />

        {/* Sliding circle with neumorphic effect */}
        <div
          className={`
            relative z-10 w-8 h-8 rounded-full transform transition-all duration-300
            flex items-center justify-center
            ${
              isDark
                ? "translate-x-10 bg-slate-[var(--PrimaryBackground)] shadow-[3px_3px_6px_rgba(0,0,0,0.5),-3px_-3px_6px_rgba(70,70,90,0.15)]"
                : "translate-x-0 bg-white shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.9)]"
            }
          `}
        >
          {isDark ? (
            <Moon className="text-yellow-300/80" size={16} />
          ) : (
            <Sun className="text-amber-500/80" size={16} />
          )}
        </div>

        {/* Static icons for visual reference */}
        <span className="sr-only">
          {isDark ? "Dark mode active" : "Light mode active"}
        </span>
        <Sun
          className={`absolute right-2.5 top-1/2 -translate-y-1/2 transition-opacity ${
            isDark ? "opacity-0" : "opacity-0"
          }`}
          size={14}
        />
        <Moon
          className={`absolute left-2.5 top-1/2 -translate-y-1/2 transition-opacity ${
            isDark ? "opacity-0" : "opacity-30"
          }`}
          size={14}
        />
      </button>
    </div>
  );
}
