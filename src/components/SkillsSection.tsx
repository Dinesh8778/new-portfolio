"use client";

import { SkillCard } from "./SkillCard";
import { motion } from "framer-motion";
import {
  SiPython,
  SiOpenjdk,
  SiSharp,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiDjango,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiGithub,
  SiGithubcopilot,
} from "react-icons/si";
import { VscVscode, VscOpenai } from "react-icons/vsc";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Java", customIconSrc: "/icons/java.svg" },
      { name: "C#", Icon: SiSharp, color: "#178600", learning: true },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Django", Icon: SiDjango, color: "#092E20" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    category: "Tools & AI Helpers",
    skills: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#181717" },
      { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
      { name: "ChatGPT", Icon: VscOpenai, color: "#412991" },
      { name: "Copilot", Icon: SiGithubcopilot, color: "#000000" },
      { name: "Claude", customIconSrc: "/icons/claude.svg" },
      { name: "Antigravity", customIconSrc: "/icons/antigravity.svg" },
      { name: "Kiro", customIconSrc: "/icons/kiro-color.svg" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-14">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-bold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
