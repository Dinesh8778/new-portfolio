"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the element is near/above the viewport top, mark it as active
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-800/50 py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="#home"
            className="group flex items-center gap-1.5 focus:outline-none"
          >
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-zinc-50 group-hover:text-primary transition">
              Dinesh Kumar
            </span>
            <span className="text-xl font-bold text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-zinc-50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            <div className="ml-3 pl-3 border-l border-gray-200 dark:border-slate-800 flex items-center">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800/80 transition focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-gray-200 dark:border-slate-800/90 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md w-full absolute top-[100%] left-0 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1 sm:px-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-slate-900"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                    {!isActive && <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 text-gray-400" />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
