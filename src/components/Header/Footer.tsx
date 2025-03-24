import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Projetos", href: "#projetos" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Freelance", href: "#freelance" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white py-8">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.div className="flex flex-row gap-2">
              <a
                href="https://www.linkedin.com/in/gabriel-fernandes-920421204/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-principal"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="https://www.instagram.com/gabrielk127/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-principal"
              >
                <Instagram size={32} />
              </a>
              <a
                href="https://wa.me/+5543998377239?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!
"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-principal"
              >
                <Phone size={32} />
              </a>
            </motion.div>
          </div>
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end gap-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white hover:text-principal transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Gabriel Fernandes. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
