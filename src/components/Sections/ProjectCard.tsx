"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, Globe } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Site Aurora Floral Floricultura",
    description: "Site moderno desenvolvido para uma floricultura.",
    image: "/Projects/AuroraFloral.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ReactJs"],
    liveUrl: "https://aurora-floral-floricultura.vercel.app/",
    githubUrl: "https://github.com/Gabrielk127/aurora-floral-floricultura",
  },
  {
    id: 2,
    title: "Site Toldos Londrina",
    description:
      "Site desenvolvido para alavancar a presença online de um comércio de toldos",
    image: "/Projects/ToldosLondrina.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ReactJs"],
    liveUrl: "https://toldos.vercel.app",
  },
  {
    id: 3,
    title: "Site para barbearia",
    description:
      "Site desenvolvido para uma barbearia aumentar seu público na internet.",
    image: "/Projects/BarberShop.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ReactJs"],
    liveUrl: "https://barber-shop-six-delta.vercel.app/",
    githubUrl: "https://github.com/Gabrielk127/BarberShop",
  },
  {
    id: 4,
    title: "Site Alavancagem Patrimonial",
    description:
      "Página moderna e responsiva para apresentar estratégias de alavancagem financeira.",
    image: "/Projects/alavancagem2.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ReactJs"],
    liveUrl: "http://alavancagem.axnegocioscreditoseinvestimentos.com",
    githubUrl: "https://github.com/Gabrielk127/landing-page-alavancagem",
  },
  {
    id: 5,
    title: "Landing Page Método Superbi",
    description:
      "Combinando design moderno e tecnologia de ponta para oferecer uma experiência fluida e envolvente.",
    image: "/Projects/metodosuperbi.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ReactJs"],
    liveUrl:
      "https://curso-superbi-k65th1ibk-gabrielfsilva09-gmailcoms-projects.vercel.app",
    githubUrl: "https://github.com/Gabrielk127/Curso-Superbi",
  },
  {
    id: 6,
    title: "Landing Page Consultoria Financeira",
    description:
      "Site institucional para consultoria financeira, destacando serviços de crédito.",
    image: "/Projects/consultoria.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ReactJs"],
    liveUrl: "https://consultoria.axnegocioscreditoseinvestimentos.com",
    githubUrl:
      "https://github.com/Gabrielk127/landing-page-consultoria-gratuita-armangni",
  },
  {
    id: 7,
    title: "Landing Page Financeira",
    description:
      "Página moderna e responsiva para apresentar estratégias de alavancagem financeira, com gráficos interativos e chamadas para ação eficientes.",
    image: "/Projects/alavancagem.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ReactJs"],
    githubUrl: "https://github.com/Gabrielk127/landing-page-alavancagem",
  },
  {
    id: 8,
    title: "App de Controle Financeiro",
    description:
      "Aplicativo Mobile multiplataforma de controle financeiro em desenvolvimento.",
    image: "/Projects/appfinan.png",
    technologies: ["Expo", "TypeScript", "Tailwind CSS", "React Native"],
    githubUrl: "https://github.com/Gabrielk127/AppFi",
  },
  {
    id: 9,
    title: "App Breath",
    description:
      "Aplicativo Mobile multiplataforma contendo informações sobre plantas, atualmente em desenvolvimento",
    image: "/Projects/Breath.png",
    technologies: ["Expo", "TypeScript", "Tailwind CSS", "React Native"],
    githubUrl: "https://github.com/Gabrielk127/Plants",
  },
  {
    id: 10,
    title: "Landing Page Construções",
    description:
      "Uma landing page moderna e responsiva para o setor de construções, projetada para oferecer uma experiência fluida e atraente aos usuários.",
    image: "/Projects/malls.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ReactJs"],
    liveUrl: "https://malls.axnegocioscreditoseinvestimentos.com",
    githubUrl: "https://github.com/Gabrielk127/landing-page-cds-malls-armangni",
  },
  {
    id: 11,
    title: "Gerador de Currículos",
    description:
      "Um gerador de currículos eficiente e intuitivo, projetado para facilitar a criação e gerenciamento de currículos de forma prática e organizada.",
    image: "/Projects/curriculum.png",
    technologies: ["Python", "HTML", "CSS", "MongoDB"],
    githubUrl: "https://github.com/Gabrielk127/curriculum-manager",
  },
  {
    id: 12,
    title: "Landing Page Consórcio de autos ",
    description:
      "Landing page totalmente responsiva e com design interativo desenvolvida para captação de clientes por meio de formulário",
    image: "/Projects/autos.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ReactJs"],
    liveUrl: "https://autos.axnegocioscreditoseinvestimentos.com",
    githubUrl: "https://github.com/Gabrielk127/landing-page-autos-armangni",
  },
];

export default function ProjectGrid() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  // const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)")
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoplay || !isMobile) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, isMobile]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const renderProject = (project: Project) => (
    <div
      className="h-full group relative overflow-hidden bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-purple-500/10 hover:border-purple-500/30"
      onMouseEnter={() => setHoveredId(project.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <div className="relative">
        <div className="relative h-[220px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Image
            src={project.image || "/placeholder.svg?height=220&width=400"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
          {project.description}
        </p>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Tecnologias
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full border border-purple-500/20 transition-colors duration-300 group-hover:bg-purple-500/20 group-hover:border-purple-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-purple-500/20"
            >
              <Globe className="w-4 h-4 mr-2" />
              Ver Projeto
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border border-zinc-700 hover:border-purple-500/50 bg-zinc-800/50 hover:bg-zinc-800 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            >
              <Github className="w-4 h-4 mr-2" />
              Código
            </a>
          )}
        </div>
      </div>

      {/* Hover effect - glowing border */}
      <div
        className={`absolute inset-0 border-2 border-purple-500/50 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none ${
          hoveredId === project.id ? "opacity-100" : ""
        }`}
      />
    </div>
  );

  return (
    <div className="min-h-screen text-white p-4 md:p-6 lg:p-8 max-w-7xl mx-auto md:mt-12">
      <div className="flex flex-col items-center mb-12">
        <Badge className="mb-3 bg-purple-500/30 text-purple-300 hover:bg-purple-500/40 px-4 py-1 text-sm font-medium tracking-wider">
          Portfolio
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
          Meus Projetos
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl text-gray-400">
          Conheça alguns dos projetos que desenvolvi utilizando as mais recentes
          tecnologias web.
        </p>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: (project.id * 0.1) % 0.9, // Staggered animation
            }}
            className="h-full"
          >
            {renderProject(project)}
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden relative" ref={carouselRef}>
        <div className="overflow-hidden px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="pb-4"
            >
              {renderProject(projects[current])}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="absolute left-0 top-1/3 transform -translate-y-1/2 bg-zinc-800/90 text-purple-400 rounded-full p-2.5 z-10 shadow-lg border border-purple-500/30 hover:bg-zinc-800 transition-colors duration-300"
          onClick={prev}
          aria-label="Projeto anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          className="absolute right-0 top-1/3 transform -translate-y-1/2 bg-zinc-800/90 text-purple-400 rounded-full p-2.5 z-10 shadow-lg border border-purple-500/30 hover:bg-zinc-800 transition-colors duration-300"
          onClick={next}
          aria-label="Próximo projeto"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false);
                setCurrent(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-purple-600 w-8"
                  : "bg-zinc-700 w-2 hover:bg-purple-500/50"
              }`}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* <div className="flex justify-center mt-16">
        <Button
          variant="outline"
          className="border-purple-600 text-purple-300 hover:bg-purple-900/20 hover:text-white cursor-pointer group px-6 py-6 text-base font-medium transition-all duration-300 shadow-md hover:shadow-purple-500/20"
        >
          Ver Todos os Projetos
          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div> */}
    </div>
  );
}
