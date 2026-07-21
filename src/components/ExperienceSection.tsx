"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
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
            Professional <span className="text-primary">Experience</span>
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
            A track record of internships and engineering application building.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l border-gray-150 dark:border-slate-850">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="relative mb-12 sm:mb-16 last:mb-0 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Timeline Bullet Anchor */}
              <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-slate-950 border-2 border-primary text-primary flex items-center justify-center shadow-sm transition duration-300 group-hover:bg-primary group-hover:text-white">
                <Briefcase size={12} className="sm:size-[14px]" />
              </span>

              {/* Card Container */}
              <div className="bg-gray-50/50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 border border-gray-100 dark:border-slate-850 hover:border-primary/20 dark:hover:border-primary/20 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                {/* Meta details bar */}
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-zinc-50 group-hover:text-primary transition-colors">
                      {exp.jobTitle}
                    </h3>
                    <p className="text-sm font-bold text-gray-500 dark:text-slate-400 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1.5 text-xs text-gray-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-primary shrink-0" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-primary shrink-0" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Job Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500 mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies badge cloud */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500 mb-3">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/15 transition group-hover:border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
