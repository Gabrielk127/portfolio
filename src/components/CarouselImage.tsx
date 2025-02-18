"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/android.svg",
  "/github.svg",
  "/js.svg",
  "/mongodb.svg",
  "/nextjs2.svg",
  "/nodejs.svg",
  "/python.svg",
  "/reactjs.svg",
  "/shadcnui.svg",
  "/tailwindcss.svg",
  "/typescript.svg",
  "/vitejs.svg",
  "/vscode.svg",
  "/wordpress.svg",
];

export default function CarouselImage() {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Carrossel: da esquerda para a direita */}
      <div className="overflow-hidden relative w-full mb-8">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#1e1e1e] to-transparent pointer-events-none shadow-md z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#1e1e1e] to-transparent pointer-events-none shadow-md z-10" />

        <div ref={carouselRef} className="flex animate-marquee-infinite">
          {[...images, ...images].map((src, index) => (
            <div key={index} className="flex-shrink-0 p-2 md:p-4">
              <Image
                src={src}
                alt={`Carousel Image ${index + 1}`}
                width={300}
                height={200}
                unoptimized
                className="rounded-lg shadow-md object-cover w-6 h-6"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${carouselWidth}px);
          }
        }

        .animate-marquee-infinite {
          animation: marquee-infinite 100s linear infinite;
          display: flex;
        }
      `}</style>
    </div>
  );
}
