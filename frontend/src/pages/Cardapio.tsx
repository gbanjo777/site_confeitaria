import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { products, categories } from "@/data/products";

const Cardapio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <span className="text-caramel font-inter font-semibold text-sm uppercase tracking-wider">
            Nosso Cardápio
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-chocolate mt-2 mb-4">
            Delícias para Todos os Gostos
          </h1>
          <p className="text-mediumBrown max-w-2xl mx-auto mb-8">
            Explore nossa variedade de bolos artesanais. Cada sabor é uma
            experiência única, feita com ingredientes selecionados e muito
            carinho.
          </p>
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-mediumBrown text-lg">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl font-bold text-chocolate mb-4">
              Informações Importantes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-playfair text-xl font-semibold text-chocolate mb-2">
                  📅 Prazo de Encomenda
                </h3>
                <p className="text-mediumBrown text-sm">
                  Encomendas devem ser feitas com no mínimo 24 horas de
                  antecedência. Para bolos de casamento, recomendamos 2 semanas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-playfair text-xl font-semibold text-chocolate mb-2">
                  🎂 Personalização
                </h3>
                <p className="text-mediumBrown text-sm">
                  Todos os bolos podem ser personalizados! Escolha massa,
                  recheio, cobertura e decoração de acordo com seu gosto.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-playfair text-xl font-semibold text-chocolate mb-2">
                  🚗 Entrega
                </h3>
                <p className="text-mediumBrown text-sm">
                  Entregamos em toda a cidade. Taxa de entrega calculada de
                  acordo com a distância. Retirada no local também disponível.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-playfair text-xl font-semibold text-chocolate mb-2">
                  💳 Pagamento
                </h3>
                <p className="text-mediumBrown text-sm">
                  Aceitamos PIX, cartões de crédito/débito e dinheiro. Sinal de
                  50% na confirmação do pedido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cardapio;
