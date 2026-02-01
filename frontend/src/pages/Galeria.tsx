import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/4c365be0-16c1-404f-9f54-3fdd24866edc.png",
    category: "Casamento",
    title: "Bolo de Casamento Clássico",
  },
  {
    id: 2,
    src: "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/05b3ee44-4f16-4c8f-8475-905a37813ebc.png",
    category: "Aniversário",
    title: "Bolo de Aniversário Colorido",
  },
  {
    id: 3,
    src: "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/01fa7325-88c5-4e18-9774-0e9e384bdff9.png",
    category: "Chocolate",
    title: "Bolo de Chocolate Belga",
  },
  {
    id: 4,
    src: "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/93e4142a-ec65-44b7-be2e-0b4b06b33cc3.png",
    category: "Caseiro",
    title: "Bolo Caseiro Tradicional",
  },
  {
    id: 5,
    src: "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/f8d462f0-7799-4771-9f0c-f8ccedab4419.png",
    category: "Festivo",
    title: "Mesa de Bolos Festivos",
  },
  {
    id: 6,
    src: "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/4f10a91e-e712-4ed6-9035-d9fecb19cabb.png",
    category: "Bastidores",
    title: "Confeiteira em Ação",
  },
  {
    id: 7,
    src: "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/4c365be0-16c1-404f-9f54-3fdd24866edc.png",
    category: "Casamento",
    title: "Bolo de Casamento Elegante",
  },
  {
    id: 8,
    src: "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/05b3ee44-4f16-4c8f-8475-905a37813ebc.png",
    category: "Aniversário",
    title: "Bolo Infantil Decorado",
  },
  {
    id: 9,
    src: "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/01fa7325-88c5-4e18-9774-0e9e384bdff9.png",
    category: "Chocolate",
    title: "Fatia de Bolo de Chocolate",
  },
];

const galleryCategories = [
  "Todos",
  "Casamento",
  "Aniversário",
  "Chocolate",
  "Caseiro",
  "Festivo",
  "Bastidores",
];

const Galeria = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  const filteredImages =
    activeCategory === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <span className="text-caramel font-inter font-semibold text-sm uppercase tracking-wider">
            Nossa Galeria
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-chocolate mt-2 mb-4">
            Portfólio de Trabalhos
          </h1>
          <p className="text-mediumBrown max-w-2xl mx-auto mb-8">
            Conheça alguns dos nossos trabalhos. Cada bolo conta uma história e
            representa um momento especial na vida de nossos clientes.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {galleryCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`font-inter font-medium ${
                  activeCategory === category
                    ? "bg-caramel hover:bg-chocolate text-white"
                    : "border-caramel text-chocolate hover:bg-cream"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer hover-lift"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-caramel text-sm font-inter">
                      {image.category}
                    </span>
                    <h3 className="text-white font-playfair text-xl font-semibold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-chocolate/90 to-transparent rounded-b-2xl">
                <span className="text-caramel text-sm font-inter">
                  {selectedImage.category}
                </span>
                <h3 className="text-white font-playfair text-2xl font-semibold">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-chocolate mb-4">
            Gostou do que viu?
          </h2>
          <p className="text-mediumBrown mb-6 max-w-xl mx-auto">
            Entre em contato conosco e vamos criar o bolo perfeito para o seu
            evento!
          </p>
          <a
            href="https://wa.me/5521995164449?text=Olá! Vi a galeria de vocês e gostaria de fazer uma encomenda. 🎂"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-whatsapp hover:bg-green-600 text-white font-inter font-semibold px-8"
            >
              Encomendar pelo WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Galeria;
