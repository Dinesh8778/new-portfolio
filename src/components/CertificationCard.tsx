"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";
import { Certification } from "@/types";

interface CertificationCardProps {
  cert: Certification;
  index: number;
}

export function CertificationCard({ cert, index }: CertificationCardProps) {
  const { name, issuer, date, achievement, verified, link } = cert;

  return (
    <motion.div
      className="group relative flex flex-col justify-between h-full bg-white dark:bg-slate-950 border border-gray-150/60 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-305 hover:border-primary/20 dark:hover:border-primary/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <div>
        {/* Header Indicator */}
        <div className="flex justify-between items-start gap-4 mb-4">
          <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary transition duration-300 group-hover:scale-110">
            <Award size={20} className="stroke-[2.25]" />
          </div>
          {verified && (
            <div className="flex items-center gap-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded-full border border-emerald-250/20 dark:border-emerald-800/10">
              <CheckCircle2 size={12} className="stroke-[2.5]" />
              <span>Verified</span>
            </div>
          )}
        </div>

        {/* Content */}
        <h3 className="text-base sm:text-lg font-bold text-gray-950 dark:text-zinc-50 leading-snug group-hover:text-primary transition duration-300 mb-1">
          {name}
        </h3>
        <p className="text-xs sm:text-sm font-semibold text-gray-400 dark:text-slate-500 mb-4">
          {issuer}
        </p>

        {/* Details list */}
        <div className="space-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-450 mb-5">
          <div className="flex justify-between py-1 border-b border-gray-50 dark:border-slate-800/50">
            <span className="text-gray-400 dark:text-slate-550">Issued</span>
            <span className="font-semibold text-gray-700 dark:text-gray-300">{date}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-400 dark:text-slate-550">Grade</span>
            <span className="font-semibold text-gray-700 dark:text-gray-300">{achievement}</span>
          </div>
        </div>
      </div>

      {/* Footer link to credential */}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition"
        >
          Verify Credential
          <ExternalLink size={16} />
        </a>
      ) : (
        <span className="mt-auto text-xs text-gray-400 dark:text-slate-650 italic">
          Verification link unavailable
        </span>
      )}
    </motion.div>
  );
}
