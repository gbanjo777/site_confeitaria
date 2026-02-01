import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Award, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { products, testimonials } from "@/data/products";

const Index = () => {
  const featuredProducts = products.slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/f8d462f0-7799-4771-9f0c-f8ccedab4419.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-chocolate/90 via-chocolate/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white animate-fade-in">
            <span className="inline-block bg-caramel/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-inter mb-6">
              ✨ Bolos Artesanais Feitos com Amor
            </span>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Delícias da
              <span className="block text-caramel">Andresiani</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/90 mb-8 leading-relaxed">
              Transformamos seus momentos especiais em memórias doces e
              inesquecíveis. Bolos artesanais feitos com ingredientes
              selecionados e muito carinho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cardapio">
                <Button
                  size="lg"
                  className="bg-caramel hover:bg-white hover:text-chocolate text-white font-inter font-semibold px-8 py-6 text-lg group"
                >
                  Ver Cardápio
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href="https://wa.me/5521995164449?text=Olá! Gostaria de fazer uma encomenda de bolo. 🎂"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-chocolate font-inter font-semibold px-8 py-6 text-lg"
                >
                  Encomendar pelo WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Ingredientes Premium",
                description: "Utilizamos apenas ingredientes de alta qualidade",
              },
              {
                icon: Heart,
                title: "Feito com Amor",
                description: "Cada bolo é preparado com carinho e dedicação",
              },
              {
                icon: Award,
                title: "Qualidade Garantida",
                description: "Satisfação dos clientes é nossa prioridade",
              },
              {
                icon: Truck,
                title: "Entrega Cuidadosa",
                description: "Entregamos seu bolo com todo cuidado",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-sm hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-caramel/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-caramel" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-chocolate mb-2">
                  {feature.title}
                </h3>
                <p className="text-mediumBrown text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-caramel font-inter font-semibold text-sm uppercase tracking-wider">
              Nossos Destaques
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-chocolate mt-2 mb-4">
              Bolos Mais Pedidos
            </h2>
            <p className="text-mediumBrown max-w-2xl mx-auto">
              Conheça os favoritos dos nossos clientes. Cada bolo é uma obra de
              arte comestível, feita para tornar seu momento ainda mais
              especial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/cardapio">
              <Button
                size="lg"
                className="bg-chocolate hover:bg-caramel text-white font-inter font-semibold px-8"
              >
                Ver Cardápio Completo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Options Banner */}
      <section className="py-20 bg-gradient-to-r from-chocolate to-caramel text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-inter mb-4">
                🌿 Opções Especiais
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                Bolos para Todos os Gostos
              </h2>
              <p className="text-cream/90 text-lg mb-6">
                Oferecemos opções sem glúten, sem lactose e veganas. Porque todo
                mundo merece saborear um bolo delicioso!
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-inter">
                  Sem Glúten
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-inter">
                  Sem Lactose
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-inter">
                  Vegano
                </span>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Link to="/cardapio">
                <Button
                  size="lg"
                  className="bg-white text-chocolate hover:bg-cream font-inter font-semibold px-8 py-6 text-lg"
                >
                  Ver Opções Especiais
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-caramel font-inter font-semibold text-sm uppercase tracking-wider">
              Depoimentos
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-chocolate mt-2 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-mediumBrown max-w-2xl mx-auto">
              A satisfação dos nossos clientes é o nosso maior orgulho. Veja o
              que eles têm a dizer sobre nossas delícias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-chocolate rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-caramel rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-caramel rounded-full translate-x-1/2 translate-y-1/2" />
            </div>
            <div className="relative z-10">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                Pronto para Encomendar?
              </h2>
              <p className="text-cream/90 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato conosco pelo WhatsApp ou preencha nosso
                formulário de encomenda. Vamos criar o bolo perfeito para você!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5521995164449?text=Olá! Gostaria de fazer uma encomenda de bolo. 🎂"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-whatsapp hover:bg-green-600 text-white font-inter font-semibold px-8 py-6 text-lg"
                  >
                    Chamar no WhatsApp
                  </Button>
                </a>
                <Link to="/personalizar">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-chocolate font-inter font-semibold px-8 py-6 text-lg"
                  >
                    Personalizar Bolo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
