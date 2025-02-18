import { motion } from "framer-motion";
import CarouselImage from "../CarouselImage";

const Hero = () => {
  return (
    <main className="min-h-screen w-full flex justify-center items-center flex-col gap-10 px-8 md:pt-24">
      <p className=" bg-black bg-opacity-30 backdrop-blur-lg shadow-lg px-8 py-3 rounded-full text-white border border-zinc-800 text-sm">
        Software Developer
      </p>

      <div
        id="inicio"
        className="max-w-[1200px] mx-auto z-[-10] flex flex-col justify-center items-center"
      >
        <h1
          className="text-white font-bold text-center text-3xl
          md:text-5xl
          xl:text-5xl xl:pt-16 
        "
        >
          Transformando Ideias em Soluções Digitais
        </h1>
        <motion.div
          className="h-1 bg-principal mx-auto mt-4"
          initial={{ width: "0%" }}
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          aria-hidden="true"
        />
      </div>
      <p
        className="text-gray-400 font-bold text-center
        xl:text-2xl max-w-[1000px] xl:mx-auto
        "
      >
        Sou desenvolvedor apaixonado por tecnologia, criando apps, sites e
        softwares sob medida com foco em performance, usabilidade e design.
        Transformo ideias em soluções digitais eficientes e impactantes.
      </p>
      <div className="pt-12 max-w-xl">
        <CarouselImage />
      </div>
    </main>
  );
};

export default Hero;
