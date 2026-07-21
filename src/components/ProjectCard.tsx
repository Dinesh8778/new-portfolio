"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, technologies, github, liveDemo, featured, status, features } = project;

  return (
    <motion.div
      className={`relative group flex flex-col justify-between h-full rounded-2xl border transition-all duration-300 p-6 md:p-8 bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800 hover:border-primary/30 dark:hover:border-primary/30 shadow-sm hover:shadow-xl ${
        featured ? "lg:col-span-2 ring-1 ring-primary/20 bg-gradient-to-br from-white to-gray-50/30 dark:from-slate-900 dark:to-slate-950/20" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <div>
        {/* Banner/Badge Header */}
        <div className="flex flex-wrap justify-between items-center gap-2 mb-5">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
              status === "completed"
                ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/50 dark:border-emerald-800/30"
                : "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200/50 dark:border-amber-800/30"
            }`}>
              {status === "completed" ? "✓ Completed" : "⚡ In Development"}
            </span>

            {featured && (
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border bg-primary/10 dark:bg-primary/20 text-primary border-primary/20">
                ★ Featured
              </span>
            )}
          </div>
          <span className="text-gray-400 dark:text-slate-600">
            <Code2 size={18} />
          </span>
        </div>

        {/* Project Info */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-zinc-50 group-hover:text-primary transition-colors duration-300 mb-3">
          {name}
        </h3>
        
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          {description}
        </p>

        {/* Dynamic Key Features list in featured component */}
        {featured && features && features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500 mb-2.5">
              Key Capabilities
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▪</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-auto">
        {/* Technologies Grid */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
          {technologies.map((tech: string) => (
            <span
              key={tech}
              className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-slate-800/80 transition group-hover:border-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions bar */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-slate-850">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-650 dark:text-gray-305 hover:text-primary dark:hover:text-primary transition duration-300"
          >
            <GithubIcon size={16} />
            Code
          </a>
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-650 dark:text-gray-305 hover:text-primary dark:hover:text-primary transition duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
