import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones de menu e X

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Função para remover acentos
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD") // Divide caracteres acentuados em partes
      .replace(/[\u0300-\u036f]/g, ""); // Remove marcas de acentuação
  };

  const handleNavigation = (id: string) => {
    const normalizedId = normalizeText(id);
    const section = document.getElementById(normalizedId);
    if (section) {
      // Scroll para a seção correspondente
      section.scrollIntoView({ behavior: "smooth" });

      // Aguardar até que o scroll tenha terminado
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsOpen(false);
            observer.disconnect(); // Desativa o observer após a navegação
          }
        },
        { threshold: 0.7 } // Ativa quando 70% da seção estiver visível
      );

      observer.observe(section); // Inicia a observação
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    }),
  };

  return (
    <div className="relative">
      {/* Header fixo com o ícone do menu */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-lg shadow-lg py-4 max-w-[1200px] rounded-3xl mt-4 mx-4 flex justify-between items-center px-6">
        <div className="text-white text-xl font-bold">
          <a href="#inicio" className="text-white">
            Gabriel <span className="text-principal">Fernandes</span>
          </a>
        </div>
        <button onClick={toggleMenu} className="z-50">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <FiX className="h-8 w-8 text-white" />
            ) : (
              <FiMenu className="h-10 w-10 text-white" />
            )}
          </motion.div>
        </button>
      </header>

      {/* Menu de navegação */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-x-0 z-40 flex flex-col items-center justify-start h-full bg-black bg-opacity-30 backdrop-blur-lg shadow-lg text-white py-16 px-8 mx-4 mt-20 rounded-3xl rounded-b-xl"
          >
            <motion.ul className="space-y-8 text-center">
              {[
                "Início",
                "Projetos",
                "Experiência",
                "Depoimentos",
                "Freelance",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className="text-xl hover:text-principal cursor-pointer transition duration-300"
                  onClick={() => handleNavigation(item)}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
              className="mt-8"
            >
              <button className="bg-principal text-white px-6 py-3 rounded-xl hover:bg-principal transition duration-300">
                Entre em contato
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
