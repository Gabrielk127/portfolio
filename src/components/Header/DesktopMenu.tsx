"use client";
import { motion } from "framer-motion";

const DesktopMenu = () => {
  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Projetos", href: "#projetos" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Freelance", href: "#freelance" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-lg shadow-lg py-4 max-w-[1200px] rounded-3xl mx-auto mt-4">
      <div className="container mx-auto flex justify-between items-center px-8 gap-4">
        {/* Logo ou Nome do Site */}
        <motion.div
          className="text-white text-3xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#inicio" className="text-white">
            Gabriel <span className="text-principal">Fernandes</span>
          </a>
        </motion.div>

        {/* Menu Links */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1, duration: 0.5 },
              }}
            >
              <a
                href={item.href}
                className="text-white text-lg hover:text-principal transition text-nowrap"
              >
                {item.label}
              </a>

              {/* Barra deslizante abaixo do texto ao passar o mouse */}
              <motion.div
                className="absolute left-0 bottom-0 h-0.5 bg-principal w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                layoutId="underline"
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              />
            </motion.div>
          ))}
        </nav>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        >
          <a
            href="https://wa.me/5543998377239?text=Olá,%20gostaria%20de%20tirar%20minhas%20dúvidas%20sobre%20o%20freelance!

"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-principal text-white font-bold px-6 py-2 rounded-xl hover:bg-principal hover:text-black transition duration-300">
              Entre em contato
            </button>
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default DesktopMenu;
