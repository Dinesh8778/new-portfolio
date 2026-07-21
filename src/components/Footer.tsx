"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";

export function Footer() {
  const { profile } = portfolioData;

  const socialLinks = [
    {
      icon: GithubIcon,
      url: "https://github.com/Dinesh8778",
      label: "GitHub",
    },
    {
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/dinesh-kumar-s-it",
      label: "LinkedIn",
    },
    {
      icon: InstagramIcon,
      url: "https://www.instagram.com/_itz_dk_72",
      label: "Instagram",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900 overflow-hidden relative">
      {/* Aesthetic ambient lighting */}
      <div className="absolute top-0 left-12 w-64 h-64 bg-primary/2 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-12 w-64 h-64 bg-primary/2 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-900/60">
          
          {/* Brand Info Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold tracking-tight text-white">Dinesh Kumar</span>
              <span className="text-2xl font-bold text-primary">.</span>
            </div>
            <p className="text-gray-400 text-sm font-normal leading-relaxed max-w-sm">
              Aspiring full-stack web developer and application builder interested in creating responsive, reliable visual tools with clean backend services.
            </p>
            {/* Highlight line */}
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Available for Collaborations
            </div>
          </div>

          {/* Quick links Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
              Site Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
              <a href="#home" className="hover:text-primary transition duration-300 w-fit">Home</a>
              <a href="#about" className="hover:text-primary transition duration-300 w-fit">About</a>
              <a href="#skills" className="hover:text-primary transition duration-300 w-fit">Skills</a>
              <a href="#experience" className="hover:text-primary transition duration-300 w-fit">Experience</a>
              <a href="#certifications" className="hover:text-primary transition duration-300 w-fit">Certifications</a>
              <a href="#projects" className="hover:text-primary transition duration-300 w-fit">Projects</a>
              <a href="#contact" className="hover:text-primary transition duration-300 w-fit">Contact</a>
            </div>
          </div>

          {/* Direct Address / Contact Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
              Reach Dinesh
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-primary/70 shrink-0" />
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-white hover:underline transition duration-300"
                >
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-primary/70 shrink-0" />
                <a
                  href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-white hover:underline transition duration-300"
                >
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom social links and copyright */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex gap-4">
            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 bg-slate-900/60 hover:bg-slate-800/80 text-gray-400 hover:text-primary border border-slate-900 rounded-xl transition duration-300 active:scale-95"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <p className="text-xs text-gray-500 font-semibold tracking-wide text-center sm:text-right">
            &copy; {currentYear} {profile.name}. All rights reserved. | Handcrafted in Next.js
          </p>
        </div>

      </div>
    </footer>
  );
}
