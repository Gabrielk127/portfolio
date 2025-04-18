"use client";

import type React from "react";
import { useState } from "react";
import { MapPin, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Job {
  title: string;
  company: string;
  period: string;
  location?: string;
  email?: string;
  description?: string;
  technologies?: string[];
  logo?: string;
}

const jobs: Job[] = [
  {
    title: "Estágio de Desenvolvimento",
    company: "Instituto Federal do Paraná",
    period: "2024 - atual",
    location: "Londrina, Paraná",
    // email: "saimonglobal.com",
    description:
      "Atuando no desenvolvimento de tecnologias e softwares usando Inteligência Artificial e serviços de Cloud para a Agência Espacial.",
    technologies: ["Typescript", "Python", "React", "NextJS", "IA", "Cloud"],
    logo: "/Experience/aeb.svg",
  },
  {
    title: "Desenvolvedor Web",
    company: "Armangni Imóveis",
    period: "2024",
    location: "Londrina, Paraná",
    description:
      "Atuando no desenvolvimento de landing pages, sites e softwares destinados a área imobiliária.",
    technologies: ["Typescript", "Python", "React", "NextJS", "Wordpress"],
    logo: "/Experience/armangni.png",
  },
  {
    title: "Desenvolvedor Web",
    company: "AX Negócios, Créditos e Investimentos",
    period: "2024",
    location: "Londrina, Paraná",
    description:
      "Atuando no desenvolvimento de landing pages, sites e softwares destinados a área Financeira.",
    technologies: ["Typescript", "Python", "React", "NextJS", "Wordpress"],
    logo: "/Experience/ax.svg",
  },
  {
    title: "TI",
    company: "Eidee Design",
    period: "2022-2023",
    location: "Londrina, Paraná",
    description:
      "Atuei no suporte de Ti, prototipagem e manutenção dos equipamentos do escritório.",
    technologies: ["Typescript", "Python", "React", "NextJS", "Wordpress"],
    logo: "/Experience/eidee.png",
  },
];

const JobEntry: React.FC<{
  job: Job;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ job, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[var(--background)]  backdrop-blur-lg shadow-lg py-4 px-6 rounded-2xl text-white border  border-zinc-100 dark:border-zinc-800 my-2"
    >
      <div
        className="flex justify-between items-center cursor-pointer gap-6"
        onClick={onToggle}
      >
        <div>
          <h3 className="text-[var(--foreground)] text-base sm:text-lg font-semibold">
            {job.title} - {job.company}
          </h3>
        </div>
        <div className="flex items-center">
          <span className="text-[var(--foreground)] mr-2 text-sm text-nowrap">
            {job.period}
          </span>
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="text-[var(--foreground)] w-5 h-5" />
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-[var(--text-foreground)]">
              <div className="col-span-2">
                {job.location && (
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center mb-2"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </motion.p>
                )}
                {job.email && (
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center mb-2"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {job.email}
                  </motion.p>
                )}
                {job.description && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-4"
                  >
                    {job.description}
                  </motion.p>
                )}
                {job.technologies && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-2"
                  >
                    {job.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                        className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </div>
              {job.logo && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center items-center"
                >
                  <Image
                    src={job.logo || "/placeholder.svg"}
                    alt={`${job.company} logo`}
                    width={100}
                    height={100}
                    className=""
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SectionExperience: React.FC = () => {
  const [openJobIndex, setOpenJobIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="experiencia"
      className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto md:mt-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center md:text-start text-3xl text-[var(--foreground)] font-bold mb-12"
      >
        Experiência Profissional
      </motion.h1>
      {jobs.map((job, index) => (
        <JobEntry
          key={index}
          job={job}
          isOpen={index === openJobIndex}
          onToggle={() => setOpenJobIndex(index === openJobIndex ? -1 : index)}
        />
      ))}
    </motion.div>
  );
};

export default SectionExperience;
