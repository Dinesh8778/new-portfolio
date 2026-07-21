"use client";

import { motion } from "framer-motion";
import { User, Calendar, MapPin, Mail, Phone, Heart } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function AboutSection() {
  const { profile, about, education } = portfolioData;

  const infoItems = [
    { icon: User, label: "Title", value: profile.title },
    { icon: Calendar, label: "Born", value: "January 16, 2006" },
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "WhatsApp", value: profile.phone, href: `tel:${profile.phone.replace(/[^0-9+]/g, '')}` },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-36 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

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
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-1.5 bg-primary mx-auto rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Brand Visualizer / Profile Accent Card */}
          <motion.div 
            className="lg:col-span-4 flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-md group border-2 border-primary/20 bg-gray-50 dark:bg-slate-900/50 p-2 transition duration-300 hover:border-primary/50">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 via-primary/5 to-slate-900/20 dark:to-slate-950/40 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl sm:text-7xl">👨‍💻</span>
                {/* Floating details */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-lg font-bold text-white mb-1">{profile.name}</h3>
                  <p className="text-xs text-primary font-medium">{education.college}</p>
                </div>
              </div>
            </div>

            {/* Quote container */}
            <div className="mt-8 text-center px-4 max-w-sm">
              <span className="text-3xl text-primary font-serif">“</span>
              <p className="italic text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed -mt-3">
                {about.quote}
              </p>
              <div className="w-8 h-0.5 bg-gray-200 dark:bg-slate-800 mx-auto mt-4" />
            </div>
          </motion.div>

          {/* Details Content */}
          <motion.div 
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Bio Card */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-zinc-50">
                Hi, I'm <span className="text-primary">{profile.name}</span>
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                {about.bio}
              </p>
            </div>

            {/* Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-gray-50/50 dark:bg-slate-900/40 border border-gray-100 dark:border-slate-850 p-6 rounded-2xl">
              {about.highlights.map((highlight: string, i: number) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-zinc-300">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Personal parameters list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {infoItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-3.5 py-1.5 border-b border-gray-100 dark:border-slate-900">
                    <div className="p-2 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-850 text-primary shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-sm font-bold text-gray-800 dark:text-zinc-200 hover:text-primary dark:hover:text-primary transition duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-bold text-gray-800 dark:text-zinc-200">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hobbies / Interests */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-450 dark:text-slate-500 mb-3.5 flex items-center gap-1.5">
                <Heart size={12} className="text-primary fill-primary" />
                Interests & Hobbies
              </h4>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest: string) => (
                  <span
                    key={interest}
                    className="text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-850 border border-gray-100 dark:border-slate-850 text-gray-700 dark:text-gray-300 transition duration-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Resume CTA */}
            <div className="pt-2">
              <a 
                href="/resume.pdf"
                download="Dinesh_Kumar_Resume.pdf"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/95 text-white font-bold px-7 py-3.5 rounded-xl shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 shrink-0 text-sm active:scale-95"
              >
                Download Resume PDF
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
