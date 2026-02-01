import { Heart, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-caramel font-inter font-semibold text-sm uppercase tracking-wider">
                Nossa História
              </span>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-chocolate mt-2 mb-6">
                Delícias da Andresiani
              </h1>
              <p className="text-mediumBrown text-lg leading-relaxed mb-6">
                Tudo começou na cozinha da minha avó, onde aprendi que fazer
                bolos é muito mais do que misturar ingredientes – é colocar amor
                em cada detalhe, é criar memórias que duram para sempre.
              </p>
              <p className="text-mediumBrown text-lg leading-relaxed mb-6">
                Há mais de 10 anos, transformei essa paixão em profissão. Cada
                bolo que sai da nossa cozinha carrega um pedacinho da nossa
                história e do carinho que temos por esse ofício.
              </p>
              <p className="text-mediumBrown text-lg leading-relaxed">
                Hoje, a Delícias da Andresiani é sinônimo de qualidade, sabor e
                momentos especiais. Seja um aniversário, casamento ou
                simplesmente um domingo em família, estamos aqui para adoçar sua
                vida.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/4f10a91e-e712-4ed6-9035-d9fecb19cabb.png"
                alt="Confeiteira trabalhando"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-caramel text-white p-6 rounded-2xl shadow-lg">
                <p className="font-playfair text-3xl font-bold">+10</p>
                <p className="font-inter text-sm">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-caramel font-inter font-semibold text-sm uppercase tracking-wider">
              Nossos Valores
            </span>
            <h2 className="font-playfair text-4xl font-bold text-chocolate mt-2">
              O Que Nos Move
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Paixão",
                description:
                  "Amamos o que fazemos e isso se reflete em cada bolo que criamos.",
              },
              {
                icon: Award,
                title: "Qualidade",
                description:
                  "Ingredientes premium e técnicas aprimoradas para resultados excepcionais.",
              },
              {
                icon: Users,
                title: "Dedicação",
                description:
                  "Cada cliente é especial e merece atenção personalizada.",
              },
              {
                icon: Clock,
                title: "Pontualidade",
                description:
                  "Compromisso com prazos para que seu evento seja perfeito.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-cream rounded-2xl hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-caramel/20 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-caramel" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-chocolate mb-2">
                  {value.title}
                </h3>
                <p className="text-mediumBrown text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-chocolate text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Bolos Entregues" },
              { number: "2000+", label: "Clientes Felizes" },
              { number: "50+", label: "Sabores Diferentes" },
              { number: "10+", label: "Anos de Experiência" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="font-playfair text-4xl md:text-5xl font-bold text-caramel">
                  {stat.number}
                </p>
                <p className="font-inter text-cream/80 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-caramel font-inter font-semibold text-sm uppercase tracking-wider">
              Nossa Missão
            </span>
            <h2 className="font-playfair text-4xl font-bold text-chocolate mt-2 mb-6">
              Transformar Momentos em Memórias Doces
            </h2>
            <p className="text-mediumBrown text-lg leading-relaxed mb-8">
              Acreditamos que cada celebração merece um bolo especial. Nossa
              missão é criar não apenas bolos deliciosos, mas experiências
              memoráveis que ficarão guardadas no coração de cada cliente.
              Trabalhamos com dedicação para que seu momento seja único e
              inesquecível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cardapio">
                <Button
                  size="lg"
                  className="bg-caramel hover:bg-chocolate text-white font-inter font-semibold px-8"
                >
                  Ver Nosso Cardápio
                </Button>
              </Link>
              <Link to="/contato">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-chocolate text-chocolate hover:bg-chocolate hover:text-white font-inter font-semibold px-8"
                >
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-caramel font-inter font-semibold text-sm uppercase tracking-wider">
              Bastidores
            </span>
            <h2 className="font-playfair text-4xl font-bold text-chocolate mt-2">
              Nossa Cozinha
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/f8d462f0-7799-4771-9f0c-f8ccedab4419.png"
              alt="Bastidores 1"
              className="rounded-xl w-full h-48 object-cover hover-lift"
            />
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/4f10a91e-e712-4ed6-9035-d9fecb19cabb.png"
              alt="Bastidores 2"
              className="rounded-xl w-full h-48 object-cover hover-lift"
            />
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/01fa7325-88c5-4e18-9774-0e9e384bdff9.png"
              alt="Bastidores 3"
              className="rounded-xl w-full h-48 object-cover hover-lift"
            />
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/05b3ee44-4f16-4c8f-8475-905a37813ebc.png"
              alt="Bastidores 4"
              className="rounded-xl w-full h-48 object-cover hover-lift"
            />
          </div>

          <div className="text-center mt-8">
            <Link to="/galeria">
              <Button
                variant="outline"
                className="border-chocolate text-chocolate hover:bg-chocolate hover:text-white font-inter font-semibold"
              >
                Ver Galeria Completa
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
