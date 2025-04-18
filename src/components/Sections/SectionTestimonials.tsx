"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Feedback {
  id: number;
  name: string;
  image: string;
  description: string;
}

const feed: Feedback[] = [
  {
    id: 1,
    name: "Alexandre, CEO da Ax",
    image: "/Experience/ax.svg",
    description:
      '"O Gabriel transformou nossa presença online! Precisávamos de um site institucional moderno e responsivo, e ele entregou muito mais do que esperávamos. Além de um design impecável, ele otimizou a performance e garantiu uma navegação intuitiva. Profissionalismo e pontualidade definem seu trabalho. Recomendo totalmente!"',
  },
  {
    id: 2,
    name: "Simone Armangni, Fundadora da Armangni Imóveis",
    image: "/Experience/armangni.png",
    description:
      '"Contratei o Gabriel para desenvolver uma plataforma personalizada para meu negócio e fiquei impressionado com a qualidade. Ele entendeu minhas necessidades desde o início e criou um sistema eficiente, seguro e fácil de usar. Comunicação excelente e suporte impecável!"',
  },
  {
    id: 3,
    name: "Ricardo Dantas, CEO Eidee Design",
    image: "/Experience/eidee.png",
    description:
      '"Eu precisava de um software específico para otimizar minha gestão de clientes, e o Gabriel criou uma solução sob medida. Ele foi ágil, atento aos detalhes e entregou uma ferramenta que superou minhas expectativas. Agora, minha produtividade aumentou significativamente!"',
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feed.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feed.length) % feed.length);
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
          {feed.map((feeds) => (
            <div key={feeds.id} className="w-full flex-shrink-0 px-4">
              <FeedCard {...feeds} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-[-10px] md:left-[-40px] flex items-center">
        <div
          className="rounded-full bg-black bg-opacity-30 backdrop-blur-lg shadow-lg p-2 hover:text-purple-800 hover:cursor-pointer"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </div>
      </div>
      <div className="absolute inset-y-0 right-[-10px] md:right-[-40px] flex items-center">
        <div
          className="rounded-full bg-black bg-opacity-30 backdrop-blur-lg shadow-lg p-2 hover:text-purple-800 hover:cursor-pointer"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </div>
      </div>
      <div className="absolute bottom-[-10px] md:bottom-[-40px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {feed.map((_, index) => (
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

function FeedCard({ name, image, description }: Feedback) {
  return (
    <main className="bg-[var(--background)] border border-zinc-100 dark:border-zinc-800 backdrop-blur-lg shadow-lg py-12 px-12 rounded-3xl my-8">
      <div className="text-[var(--foreground)] font-bold text-sm mb-6 text-center md:text-start">
        {description}
      </div>
      <div className="flex flex-row gap-2 justify-end items-center">
        <div className="">
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className="w-16"
          />
        </div>
        <div className="text-sm font-light text-gray-500">{name}</div>
      </div>
    </main>
  );
}

export default function SectionTestimonials() {
  return (
    <main
      id="depoimentos"
      className=" p-4 md:p-6 lg:p-8 max-w-7xl mx-auto mt-12 mb-32 flex flex-col justify-center items-center"
    >
      <h2 className="text-center text-3xl text-[var(--foreground)] font-bold mb-12">
        Meus Projetos
      </h2>

      <ResponsiveCarousel />
    </main>
  );
}
