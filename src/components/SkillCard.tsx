"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import Image from "next/image";

interface SkillCardProps {
  name: string;
  Icon?: IconType;
  customIconSrc?: string;
  color?: string;
  learning?: boolean;
}

export function SkillCard({ name, Icon, customIconSrc, color, learning }: SkillCardProps) {
  const isVeryDarkColor = color === "#000000" || color === "#181717";

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl border border-gray-100 dark:border-slate-700 transition-all cursor-pointer"
      whileHover={{ y: -4, scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {customIconSrc ? (
        <Image
          src={customIconSrc}
          alt={name}
          width={44}
          height={44}
          className="object-contain"
        />
      ) : Icon ? (
        isVeryDarkColor ? (
          <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-100 flex items-center justify-center p-2">
            <Icon size={28} style={{ color }} />
          </div>
        ) : (
          <Icon size={44} style={{ color }} />
        )
      ) : (
        <div className="w-11 h-11 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
          <span className="font-bold text-primary text-sm">
            {name.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}

      <span className="font-semibold text-gray-900 dark:text-white text-sm">
        {name}
      </span>
      {learning && (
        <span className="text-[10px] font-bold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full uppercase tracking-wide">
          Learning
        </span>
      )}
    </motion.div>
  );
}
