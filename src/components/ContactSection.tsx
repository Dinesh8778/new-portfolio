"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { ContactForm } from "./ContactForm";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function ContactSection() {
  const { profile } = portfolioData;

  const contactOptions = [
    {
      icon: Mail,
      title: "Write an email",
      value: profile.email,
      description: "dineshkumarselvaraj31@gmail.com",
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      title: "WhatsApp message",
      value: profile.phone,
      description: "Active response within 24 hours",
      href: `tel:${profile.phone.replace(/[^0-9+]/g, '')}`,
    },
    {
      icon: MapPin,
      title: "Current Location",
      value: profile.location,
      description: `${profile.zipCode}, TN, India`,
      href: "https://maps.google.com/?q=Tirunelveli,TamilNadu,India",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-slate-900/40 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />

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
            Get In <span className="text-primary">Touch</span>
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
            Have a project idea, coding questions, or recruitment opportunities? Drop a message!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Details Column */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 dark:text-zinc-50">
              Let's connect and <span className="text-primary">collaborate</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-650 dark:text-gray-450 leading-relaxed font-normal">
              I love engineering practical tools and coding solutions. Feel free to contact me directly using any of these communication points or filling out the message system form.
            </p>

            <div className="space-y-4 pt-2">
              {contactOptions.map((opt, i) => {
                const Icon = opt.icon;
                return (
                  <a
                    key={i}
                    href={opt.href}
                    target={opt.icon === MapPin ? "_blank" : "_self"}
                    rel={opt.icon === MapPin ? "noopener noreferrer" : ""}
                    className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-850 hover:border-primary/20 dark:hover:border-primary/20 shadow-sm hover:shadow-md transition duration-300"
                  >
                    <div className="p-3 bg-primary/10 dark:bg-primary/20 text-primary rounded-xl shrink-0 h-fit self-center">
                      <Icon size={18} className="stroke-[2.25]" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500">
                        {opt.title}
                      </span>
                      <span className="block text-sm sm:text-base font-bold text-gray-800 dark:text-zinc-200 mt-0.5">
                        {opt.value}
                      </span>
                      <span className="block text-xs text-gray-400 dark:text-slate-500 font-medium">
                        {opt.description}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Direct profile channels */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="https://linkedin.com/in/dinesh-kumar-s-it"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-primary transition duration-300 py-1.5 px-3 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-850 rounded-xl"
              >
                <LinkedinIcon size={15} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Dinesh8778"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-primary transition duration-300 py-1.5 px-3 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-850 rounded-xl"
              >
                <GithubIcon size={15} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Form System Column */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
