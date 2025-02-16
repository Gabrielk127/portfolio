import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "Khora – Urban Thinkers",
    category: "Web Development",
    image: "/mockup.png",
    aspectRatio: "portrait",
  },
  {
    id: 2,
    title: "Khora – Urban Thinkers",
    category: "Web Development",
    image: "/mockup.png",
    aspectRatio: "portrait",
  },
  {
    id: 3,
    title: "Khora – Urban Thinkers",
    category: "Web Development",
    image: "/mockup.png",
    aspectRatio: "portrait",
  },
  {
    id: 4,
    title: "Khora – Urban Thinkers",
    category: "Web Development",
    image: "/mockup.png",
    aspectRatio: "landscape",
  },
];

export default function PortfolioGrid() {
  return (
    <div className=" min-h-screen p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        {portfolioItems.map((item) => (
          <Link
            key={item.id}
            href="#"
            className={`group relative block overflow-hidden rounded-lg bg-neutral-900 ${
              item.aspectRatio === "landscape" ? "md:col-span-2" : ""
            }`}
          >
            {/* Imagem e overlay */}
            <div className="aspect-[4/3] relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Texto sobre a imagem */}
            <div className="absolute inset-0 p-4 text-white flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-purple-500 font-medium text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-white/80">{item.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
