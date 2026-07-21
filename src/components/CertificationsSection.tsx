"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { CertificationCard } from "./CertificationCard";

export function CertificationsSection() {
  const { certifications } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <section id="certifications" className="py-24 bg-gray-50 dark:bg-slate-900/40 relative overflow-hidden">
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
            Certifications & <span className="text-primary">Badges</span>
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
            Validated expertise through leading academic organizations and training academies.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
