import { Clock, Code, Lightbulb, Rocket } from "lucide-react";

export default function SectionFreelance() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: "Desenvolvimento Web",
      description:
        "Criação de sites responsivos e aplicações web modernas com as últimas tecnologias.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-500" />,
      title: "Consultoria Técnica",
      description:
        "Orientação especializada para seu projeto digital, desde a concepção até a implementação.",
      skills: ["Arquitetura", "Performance", "SEO", "Boas Práticas"],
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-500" />,
      title: "Otimização & Performance",
      description:
        "Melhoria de desempenho e otimização de aplicações web existentes.",
      skills: ["Web Vitals", "Otimização", "Cache", "CDN"],
    },
  ];

  return (
    <section
      id="freelance"
      className="w-full bg-[var(--PrimaryBackground)] text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[var(--foreground)] text-3xl font-bold mb-4">
            Serviços Freelance
          </h2>
          <p className="text-[var(--text-foreground)] max-w-2xl mx-auto">
            Transformando ideias em soluções digitais com expertise técnica e
            comprometimento com qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[var(--background)] border border-zinc-100 shadow-lg dark:border-zinc-800 p-6 rounded-3xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-[var(--foreground)] text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--text-foreground)] mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-purple-500/10 text-purple-400 py-1 px-2 rounded-xl"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Clock className="w-5 h-5 text-purple-500" />

            <span className="text-[var(--text-foreground)]">
              Disponível para novos projetos
            </span>
          </div>
          <a
            href="https://wa.me/5543998377239?text=Olá,%20gostaria%20de%20tirar%20minhas%20dúvidas%20sobre%20o%20freelance!

"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-xl hover:font-bold hover:cursor-pointer max-w-xl mx-auto">
              Iniciar Projeto
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
