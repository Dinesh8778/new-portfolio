"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Star, Code2, Globe, Sparkles, Loader2 } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { portfolioData } from "@/lib/portfolio-data";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/types";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  updated: string;
}

export function ProjectsSection() {
  const { projects } = portfolioData;

  // Local state
  const [selectedTech, setSelectedTech] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState<boolean>(true);
  const [errorRepos, setErrorRepos] = useState<string | null>(null);

  // Fetch live GitHub repos
  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) {
          throw new Error("Failed to fetch Github data");
        }
        const data = await response.json();
        setGithubRepos(data.repos || []);
      } catch (err: any) {
        console.error("Failed to load GitHub repos:", err);
        setErrorRepos(err.message || "Failed to load live projects");
      } finally {
        setLoadingRepos(false);
      }
    }
    fetchRepos();
  }, []);

  // Extract all unique technologies from static projects for filters
  const allTechnologies = useMemo(() => {
    const list = new Set<string>();
    projects.forEach((proj) => {
      proj.technologies.forEach((tech) => list.add(tech));
    });
    return ["All", ...Array.from(list).sort()];
  }, [projects]);

  // Filter static projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTech =
        selectedTech === "All" || project.technologies.includes(selectedTech);
      const matchesQuery =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesTech && matchesQuery;
    });
  }, [projects, selectedTech, searchQuery]);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-zinc-50"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-1.5 bg-primary mx-auto rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base font-normal leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Exploring full-stack applications, utilities, and live-updated open source activity.
          </motion.p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="space-y-6 mb-16">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:max-w-sm">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search projects by tech or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-slate-800 rounded-xl bg-gray-50/50 dark:bg-slate-900/50 text-sm text-gray-900 dark:text-white placeholder-gray-450 focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition duration-300"
              />
            </div>

            {/* Filters count */}
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Showing {filteredProjects.length} hand-picked
            </span>
          </div>

          {/* Technology badges scrolling bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin select-none">
            <span className="text-xs font-bold text-gray-405 uppercase tracking-wider flex items-center gap-1.5 shrink-0 pr-2">
              <Filter size={13} className="text-primary" />
              Filter Tech:
            </span>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`text-xs font-bold px-4 py-2 rounded-xl border transition-all duration-300 cursor-pointer shrink-0 ${
                  selectedTech === tech
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-gray-50/50 hover:bg-gray-150 dark:bg-slate-900/40 dark:hover:bg-slate-800/80 text-gray-600 dark:text-gray-300 border-gray-100 dark:border-slate-850"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Hand-picked Projects Grid */}
        <div className="space-y-16">
          {/* Featured Cards */}
          {featuredProjects.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-6 flex items-center gap-1.5">
                <Sparkles size={14} className="text-primary fill-primary" />
                Highlight Applications
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* Other projects Grid */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-6">
                Utilities & Desktop Tools
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* Empty search results fallback */}
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-16 bg-gray-50/50 dark:bg-slate-900/20 border border-gray-100 dark:border-slate-850 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold">No hand-picked projects match your search keywords.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedTech("All"); }}
                className="mt-3 text-xs font-bold text-primary hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>

        {/* Dynamic GitHub repositories live list */}
        <div className="mt-24 pt-16 border-t border-gray-100 dark:border-slate-900">
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 dark:text-zinc-50 flex items-center gap-2">
                <GithubIcon size={20} />
                GitHub Activity
              </h3>
              <p className="text-xs text-gray-450 dark:text-slate-500 mt-1 font-normal">
                Direct dynamic repositories sorted by star count from dinesh8778 profiles.
              </p>
            </div>
          </div>

          {loadingRepos ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <Loader2 className="animate-spin text-primary" size={24} />
              <span className="text-xs text-gray-400 dark:text-slate-500 font-bold uppercase tracking-wider">Syncing repository logs...</span>
            </div>
          ) : errorRepos && githubRepos.length === 0 ? (
            <div className="text-center py-8 text-xs text-gray-400 dark:text-slate-500 italic">
              Unable to sync live repository list. Browse repos directly at{" "}
              <a href="https://github.com/Dinesh8778" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                github.com/Dinesh8778
              </a>.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubRepos.slice(0, 6).map((repo) => (
                <motion.div
                  key={repo.id}
                  className="group relative flex flex-col justify-between h-full bg-gray-50/50 hover:bg-white dark:bg-slate-900/40 dark:hover:bg-slate-900 border border-gray-100 dark:border-slate-850 hover:border-primary/20 dark:hover:border-primary/20 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <div>
                    <div className="flex justify-between items-start gap-3 mb-3">
                      <span className="text-xs text-primary font-bold tracking-wide uppercase px-2 py-0.5 roundedbg-primary/10 bg-primary/10 border border-primary/15">
                        {repo.language}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-slate-500 font-semibold">
                        <Star size={12} className="text-amber-500 fill-amber-500" />
                        <span>{repo.stars}</span>
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-gray-900 dark:text-zinc-50 group-hover:text-primary transition duration-300 mb-2 truncate">
                      {repo.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-normal mb-5 line-clamp-3 text-pretty">
                      {repo.description}
                    </p>
                  </div>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition duration-305 mt-auto"
                  >
                    <Code2 size={13} />
                    View Repository
                  </a>
                </motion.div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
