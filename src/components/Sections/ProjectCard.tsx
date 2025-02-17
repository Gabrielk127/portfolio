"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Github, Globe } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Site Alavancagem Patrimonial",
    description:
      "Página moderna e responsiva para apresentar estratégias de alavancagem financeira.",
    image: "/Projects/alavancagem2.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ReactJs"],
    liveUrl: "http://alavancagem.axnegocioscreditoseinvestimentos.com",
    githubUrl: "https://github.com/Gabrielk127/landing-page-alavancagem",
  },
  {
    id: 2,
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
    id: 3,
    title: "Landing Page Consultoria Financeira",
    description:
      "Site institucional para consultoria financeira, destacando serviços de crédito e investimentos, com design profissional.",
    image: "/Projects/consultoria.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ReactJs"],
    liveUrl: "https://consultoria.axnegocioscreditoseinvestimentos.com",
    githubUrl:
      "https://github.com/Gabrielk127/landing-page-consultoria-gratuita-armangni",
  },
  {
    id: 4,
    title: "Landing Page Financeira",
    description:
      "Página moderna e responsiva para apresentar estratégias de alavancagem financeira, com gráficos interativos e chamadas para ação eficientes.",
    image: "/Projects/alavancagem.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ReactJs"],
    githubUrl: "https://github.com/Gabrielk127/landing-page-alavancagem",
  },
  {
    id: 5,
    title: "App de Controle Financeiro",
    description:
      "Aplicativo Mobile multiplataforma de controle financeiro em desenvolvimento.",
    image: "/Projects/appfinan.png",
    technologies: ["Expo", "TypeScript", "Tailwind CSS", "React Native"],
    githubUrl: "https://github.com/Gabrielk127/AppFi",
  },
  {
    id: 6,
    title: "App Breath",
    description:
      "Aplicativo Mobile multiplataforma contendo informações sobre plantas, atualmente em desenvolvimento",
    image: "/Projects/Breath.png",
    technologies: ["Expo", "TypeScript", "Tailwind CSS", "React Native"],
    githubUrl: "https://github.com/Gabrielk127/Plants",
  },
  {
    id: 7,
    title: "Landing Page Construções",
    description:
      "Uma landing page moderna e responsiva para o setor de construções, projetada para oferecer uma experiência fluida e atraente aos usuários.",
    image: "/Projects/malls.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ReactJs"],
    liveUrl: "https://malls.axnegocioscreditoseinvestimentos.com",
    githubUrl: "https://github.com/Gabrielk127/landing-page-cds-malls-armangni",
  },
  {
    id: 8,
    title: "Gerador de Currículos",
    description:
      "Um gerador de currículos eficiente e intuitivo, projetado para facilitar a criação e gerenciamento de currículos de forma prática e organizada.",
    image: "/Projects/curriculum.png",
    technologies: ["Python", "HTML", "CSS", "MongoDB"],
    githubUrl: "https://github.com/Gabrielk127/curriculum-manager",
  },
  {
    id: 9,
    title: "Landing Page Consórcio de autos ",
    description:
      "Landing page totalmente responsiva e com design interativo desenvolvida para captação de clientes por meio de formulário",
    image: "/Projects/autos.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ReactJs"],
    liveUrl: "https://autos.axnegocioscreditoseinvestimentos.com",
    githubUrl: "https://github.com/Gabrielk127/landing-page-autos-armangni",
  },
];

export function ResponsiveCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const touchStartHandler = (e: React.TouchEvent) => {
    const touchStartPosition = e.touches[0].clientX;
    setTouchStart(touchStartPosition);
  };

  const touchMoveHandler = (e: React.TouchEvent) => {
    const touchMovePosition = e.touches[0].clientX;
    setTouchEnd(touchMovePosition);
  };

  const touchEndHandler = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide(); // Deslizar para a direita
    }

    if (touchEnd - touchStart > 50) {
      prevSlide(); // Deslizar para a esquerda
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div
      className="relative w-full max-w-3xl mx-auto"
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchEndHandler}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-full flex-shrink-0 px-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-[-10px] flex items-center">
        <div
          className="rounded-full bg-black bg-opacity-30 backdrop-blur-lg shadow-lg p-2"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </div>
      </div>
      <div className="absolute inset-y-0 right-[-10px] flex items-center">
        <div
          className="rounded-full bg-black bg-opacity-30 backdrop-blur-lg shadow-lg p-2"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </div>
      </div>
      <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full bg-opacity-30 backdrop-blur-lg shadow-lg ${
              currentIndex === index
                ? "bg-purple-600 bg-opacity-100"
                : "bg-black"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectGrid() {
  return (
    <div className="min-h-screen text-white p-4 md:p-6 lg:p-8 max-w-7xl mx-auto md:mt-12">
      <h2 className="text-center md:text-start text-3xl text-white font-bold mb-12">
        Meus Projetos
      </h2>

      {/* Grid para telas grandes */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* Carrossel para telas pequenas */}
      <div className="md:hidden">
        <ResponsiveCarousel />
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: Project) {
  return (
    <div className="group overflow-hidden bg-zinc-900 border border-zinc-800 rounded-3xl">
      <div className="relative">
        <div className="relative h-[250px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 line-clamp-3">{description}</p>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-500 uppercase">
            Tecnologias
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition"
            >
              <Globe className="w-4 h-4 mr-2" />
              Ver Projeto
            </a>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-zinc-700 hover:bg-zinc-800 text-gray-300 px-4 py-2 rounded text-sm transition"
          >
            <Github className="w-4 h-4 mr-2" />
            Código Fonte
          </a>
        </div>
      </div>
    </div>
  );
}
