"use client";

import type React from "react";
import { useState, useEffect, useCallback, useRef } from "react";

interface Character {
  char: string;
  x: number;
  y: number;
  speed: number;
}

class TextScramble {
  el: HTMLElement;
  chars: string;
  queue: Array<{
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }>;
  frame: number;
  frameRequest: number;
  resolve: (value: void | PromiseLike<void>) => void;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#";
    this.queue = [];
    this.frame = 0;
    this.frameRequest = 0;
    this.resolve = () => {};
    this.update = this.update.bind(this);
  }

  setText(newText: string) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);

      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      const { from, to, start, end } = this.queue[i];
      let { char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}

const ScrambledTitle: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const nameScramblerRef = useRef<TextScramble | null>(null);
  const titleScramblerRef = useRef<TextScramble | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (
      nameRef.current &&
      titleRef.current &&
      !nameScramblerRef.current &&
      !titleScramblerRef.current
    ) {
      nameScramblerRef.current = new TextScramble(nameRef.current);
      titleScramblerRef.current = new TextScramble(titleRef.current);
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    if (mounted && nameScramblerRef.current && titleScramblerRef.current) {
      const namePhrase = "Gabriel Fernandes";
      const titlePhrase = "Software Developer";

      const scrambleName = () => {
        nameScramblerRef.current!.setText(namePhrase).then(() => {
          setTimeout(scrambleName, 5000);
        });
      };

      const scrambleTitle = () => {
        titleScramblerRef.current!.setText(titlePhrase).then(() => {
          setTimeout(scrambleTitle, 5000);
        });
      };

      scrambleName();
      setTimeout(scrambleTitle, 1000); // Start title scramble 1 second after name
    }
  }, [mounted]);

  return (
    <div className="flex flex-col items-center text-center">
      <h1
        ref={nameRef}
        className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight"
        style={{ fontFamily: "monospace" }}
      >
        Gabriel Fernandes
      </h1>
      <h2
        ref={titleRef}
        className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4"
        style={{ fontFamily: "monospace" }}
      >
        Software Developer
      </h2>
    </div>
  );
};

const SectionHero: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());

  const createCharacters = useCallback(() => {
    const allChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    const charCount = 300;
    const newCharacters: Character[] = [];

    for (let i = 0; i < charCount; i++) {
      newCharacters.push({
        char: allChars[Math.floor(Math.random() * allChars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.1 + Math.random() * 0.3,
      });
    }

    return newCharacters;
  }, []);

  useEffect(() => {
    setCharacters(createCharacters());
  }, [createCharacters]);

  useEffect(() => {
    const updateActiveIndices = () => {
      const newActiveIndices = new Set<number>();
      const numActive = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < numActive; i++) {
        newActiveIndices.add(Math.floor(Math.random() * characters.length));
      }
      setActiveIndices(newActiveIndices);
    };

    const flickerInterval = setInterval(updateActiveIndices, 50);
    return () => clearInterval(flickerInterval);
  }, [characters.length]);

  useEffect(() => {
    let animationFrameId: number;

    const updatePositions = () => {
      setCharacters((prevChars) =>
        prevChars.map((char) => ({
          ...char,
          y: char.y + char.speed,
          ...(char.y >= 100 && {
            y: -5,
            x: Math.random() * 100,
            char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"[
              Math.floor(
                Math.random() *
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
                    .length
              )
            ],
          }),
        }))
      );
      animationFrameId = requestAnimationFrame(updatePositions);
    };

    animationFrameId = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      id="inicio"
      className="relative w-full h-screen overflow-hidden bg-[var(--background)]"
    >
      {/* Title */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full px-4">
        <ScrambledTitle />
      </div>

      {/* Raining Characters */}
      {characters.map((char, index) => (
        <span
          key={index}
          className={`absolute text-xs transition-colors duration-100 ${
            activeIndices.has(index)
              ? "text-principal text-base scale-125 z-10 font-bold animate-pulse"
              : "text-slate-600 font-light"
          }`}
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            transform: `translate(-50%, -50%) ${
              activeIndices.has(index) ? "scale(1.25)" : "scale(1)"
            }`,
            textShadow: activeIndices.has(index)
              ? "0 0 8px rgba(255,255,255,0.8), 0 0 12px rgba(255,255,255,0.4)"
              : "none",
            opacity: activeIndices.has(index) ? 1 : 0.4,
            transition: "color 0.1s, transform 0.1s, text-shadow 0.1s",
            willChange: "transform, top",
            fontSize: "clamp(1rem, 3vw, 1rem)",
          }}
        >
          {char.char}
        </span>
      ))}

      <style jsx global>{`
        .dud {
          color: #740cdc;
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
};

export default SectionHero;
