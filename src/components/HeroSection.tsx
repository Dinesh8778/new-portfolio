"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, Mail, Terminal } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function HeroSection() {
  const { profile } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 bg-gradient-to-b from-white via-white to-gray-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900/20 relative overflow-hidden"
    >
      {/* Aesthetic geometric grids & lighting blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse[duration:8s]" />
      <div className="absolute top-15 right-10 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Main Title Description column */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Soft indicator badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider w-fit"
            >
              <Terminal size={12} className="stroke-[2.5]" />
              <span>Dinesh's Dev Space</span>
            </motion.div>

            {/* Tagline headers */}
            <div className="space-y-3">
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg font-bold text-gray-500 dark:text-slate-400 capitalize tracking-wide"
              >
                Welcome to my interactive workspace
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-950 dark:text-zinc-50 leading-[1.08]"
              >
                Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">{profile.name}</span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 dark:text-zinc-300 leading-snug tracking-tight"
              >
                {profile.title}
              </motion.h2>
            </div>

            {/* Introductory sentence */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-normal max-w-xl"
            >
              Final-year Information Technology student building scalable web applications. Transforming ideas into responsive design canvases and clean backend services.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3.5 pt-2"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white font-bold px-7 py-3.5 rounded-xl shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-305 text-sm cursor-pointer select-none active:scale-[0.98]"
              >
                Hire Me
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition duration-300" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-800 dark:text-zinc-200 font-bold px-7 py-3.5 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm transition duration-305 text-sm select-none active:scale-[0.98]"
              >
                <Eye size={15} />
                View Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Abstract Code graphic column */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, scale: 0.8, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative group w-full bg-slate-950 rounded-2xl border border-slate-900 shadow-2xl p-6 select-none font-mono text-zinc-400 text-xs sm:text-sm leading-relaxed overflow-hidden">
              {/* Top ambient lights */}
              <div className="absolute top-0 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition" />
              {/* Window dots */}
              <div className="flex gap-1.5 mb-5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* Code lines */}
              <div className="space-y-2">
                <p className="text-zinc-650 font-normal">{"// Initializing portfolio context"}</p>
                <p>
                  <span className="text-primary font-bold">const</span> developer = {"{"}
                </p>
                <p className="pl-4">
                  name: <span className="text-emerald-400">"{profile.name}"</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-emerald-400">"Full-Stack Engineer & Software Application Developer"</span>,
                </p>
                <p className="pl-4 text-pretty">
                  skills: <span className="text-amber-300">["Java", "Python", "C#", ,"JS", "Django"]</span>,
                </p>
                <p className="pl-4">
                  interests: <span className="text-amber-300">["Scale", "AI", "ML"]</span>,
                </p>
                <p className="pl-4">
                  readyForWork: <span className="text-rose-400">true</span>
                </p>
                <p>{"};"}</p>
                <p className="text-zinc-650 pt-2 font-normal">{"// Compiling capabilities..."}</p>
                <p className="text-primary font-bold">
                  developer.<span className="text-zinc-200">buildSolutions</span>();
                </p>
                <p className="text-emerald-400/90 font-semibold pt-1">
                  {"✓ Compilation Successful [95ms]"}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
