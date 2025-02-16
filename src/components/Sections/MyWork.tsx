import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const MyWork = () => {
  return (
    <main className=" text-white p-4 md:p-6 lg:p-8 max-w-7xl mx-auto md:mt-12 md:flex md:flex-row md:items-center md:gap-12">
      <div>
        <h2 className="text-white text-3xl font-bold text-center mb-2 md:text-start">
          Meu Trabalho
        </h2>
        <p
          className="text-gray-400 text-center py-4 md:text-start
        xl:text-2xl max-w-[1000px] xl:mx-auto
        "
        >
          Método Superbi é um dos projetos que desenvolvi, combinando design
          moderno e tecnologia de ponta para oferecer uma experiência fluida e
          envolvente. Cada detalhe foi pensado para entregar performance e
          usabilidade
        </p>
        <div className="hidden md:flex md:flex-col md:justify-start">
          <div className="flex flex-row items-center gap-6 py-4">
            <Image
              src="reactjs.svg"
              alt="ReactTech"
              width={100}
              height={100}
              className="w-8 "
            />
            <Image
              src="typescript.svg"
              alt="typescript"
              width={100}
              height={100}
              className="w-8"
            />

            <Image
              src="nextjs2.svg"
              alt="nextjs2"
              width={100}
              height={100}
              className="w-8"
            />

            <Image
              src="tailwindcss.svg"
              alt="tailwindcss"
              width={100}
              height={100}
              className="w-8"
            />
          </div>
          <div className="flex flex-row items-center gap-2 hover:text-principal hover:cursor-pointer bg-black bg-opacity-30 backdrop-blur-lg shadow-lg py-3 rounded-full text-white border border-zinc-800 text-sm w-full max-w-48 justify-center my-4">
            <p className="text-white hover:text-principal hover:font-bold hover:cursor-pointer">
              Acessar Projeto
            </p>
            <FiArrowRight />
          </div>
        </div>
      </div>

      <Image
        src="/mockup.png"
        alt="IphoneProjeto"
        width={1200}
        height={1000}
        quality={100}
        className="w-full h-auto mx-auto py-4 max-w-96 sm:max-w-base md:max-w-lg"
      />

      <div className="md:hidden">
        <div className="flex flex-row items-center gap-2 py-4 justify-center">
          <Image
            src="reactjs.svg"
            alt="ReactTech"
            width={100}
            height={100}
            className="w-8 "
          />
          <Image
            src="typescript.svg"
            alt="typescript"
            width={100}
            height={100}
            className="w-8"
          />

          <Image
            src="nextjs2.svg"
            alt="nextjs2"
            width={100}
            height={100}
            className="w-8"
          />

          <Image
            src="tailwindcss.svg"
            alt="tailwindcss"
            width={100}
            height={100}
            className="w-8"
          />
        </div>
        <div className="flex justify-center">
          <div className="flex flex-row items-center gap-2 bg-black bg-opacity-30 backdrop-blur-lg shadow-lg py-3 rounded-full text-white border border-zinc-800 text-sm w-full max-w-48 justify-center my-4">
            <p>Acessar Projeto</p>
            <FiArrowRight />
          </div>
        </div>{" "}
      </div>
    </main>
  );
};

export default MyWork;
