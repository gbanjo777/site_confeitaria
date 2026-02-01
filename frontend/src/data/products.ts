export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  category: string;
  isSpecial?: boolean;
  specialType?: string;
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Bolo de Chocolate Belga",
    description:
      "Massa fofinha de chocolate com recheio de ganache e cobertura de chocolate belga derretido.",
    price: "R$ 89,90",
    priceValue: 89.9,
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/01fa7325-88c5-4e18-9774-0e9e384bdff9.png",
    category: "Bolos Festivos",
    sizes: ["P (1kg)", "M (2kg)", "G (3kg)"],
  },
  {
    id: 2,
    name: "Bolo de Aniversário Colorido",
    description:
      "Bolo decorado com flores de açúcar, perfeito para festas de aniversário inesquecíveis.",
    price: "R$ 120,00",
    priceValue: 120,
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/05b3ee44-4f16-4c8f-8475-905a37813ebc.png",
    category: "Bolos Festivos",
    sizes: ["P (1kg)", "M (2kg)", "G (3kg)"],
  },
  {
    id: 3,
    name: "Bolo de Casamento Elegante",
    description:
      "Bolo branco sofisticado com detalhes dourados e flores naturais. Perfeito para o grande dia.",
    price: "R$ 350,00",
    priceValue: 350,
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/4c365be0-16c1-404f-9f54-3fdd24866edc.png",
    category: "Bolos de Casamento",
    sizes: ["M (3kg)", "G (5kg)", "GG (8kg)"],
  },
  {
    id: 4,
    name: "Bolo Caseiro de Laranja",
    description:
      "Receita tradicional de família, massa úmida com raspas de laranja e cobertura de açúcar.",
    price: "R$ 45,00",
    priceValue: 45,
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/93e4142a-ec65-44b7-be2e-0b4b06b33cc3.png",
    category: "Bolos Caseiros",
    sizes: ["Único (800g)"],
  },
  {
    id: 5,
    name: "Bolo de Cenoura com Chocolate",
    description:
      "Clássico bolo de cenoura fofinho com cobertura generosa de brigadeiro.",
    price: "R$ 55,00",
    priceValue: 55,
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/93e4142a-ec65-44b7-be2e-0b4b06b33cc3.png",
    category: "Bolos Caseiros",
    sizes: ["Único (1kg)"],
  },
  {
    id: 6,
    name: "Bolo Sem Glúten de Amêndoas",
    description:
      "Delicioso bolo feito com farinha de amêndoas, perfeito para celíacos.",
    price: "R$ 75,00",
    priceValue: 75,
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/93e4142a-ec65-44b7-be2e-0b4b06b33cc3.png",
    category: "Opções Especiais",
    isSpecial: true,
    specialType: "Sem Glúten",
    sizes: ["Único (800g)"],
  },
  {
    id: 7,
    name: "Bolo Vegano de Cacau",
    description:
      "100% vegano, feito com cacau puro e ingredientes naturais. Sem ovos, sem leite.",
    price: "R$ 85,00",
    priceValue: 85,
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/01fa7325-88c5-4e18-9774-0e9e384bdff9.png",
    category: "Opções Especiais",
    isSpecial: true,
    specialType: "Vegano",
    sizes: ["Único (1kg)"],
  },
  {
    id: 8,
    name: "Torta de Morango",
    description:
      "Base crocante, creme de confeiteiro e morangos frescos. Uma explosão de sabor!",
    price: "R$ 95,00",
    priceValue: 95,
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/05b3ee44-4f16-4c8f-8475-905a37813ebc.png",
    category: "Tortas",
    sizes: ["P (6 fatias)", "M (10 fatias)", "G (15 fatias)"],
  },
  {
    id: 9,
    name: "Torta de Limão",
    description:
      "Massa amanteigada, recheio cremoso de limão siciliano e merengue maçaricado.",
    price: "R$ 85,00",
    priceValue: 85,
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/93e4142a-ec65-44b7-be2e-0b4b06b33cc3.png",
    category: "Tortas",
    sizes: ["P (6 fatias)", "M (10 fatias)"],
  },
  {
    id: 10,
    name: "Bolo Red Velvet",
    description:
      "Massa vermelha aveludada com cream cheese frosting. Elegante e delicioso.",
    price: "R$ 110,00",
    priceValue: 110,
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/05b3ee44-4f16-4c8f-8475-905a37813ebc.png",
    category: "Bolos Festivos",
    sizes: ["P (1kg)", "M (2kg)", "G (3kg)"],
  },
  {
    id: 11,
    name: "Bolo Sem Lactose de Frutas",
    description:
      "Bolo leve com frutas secas, feito sem nenhum derivado de leite.",
    price: "R$ 70,00",
    priceValue: 70,
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/93e4142a-ec65-44b7-be2e-0b4b06b33cc3.png",
    category: "Opções Especiais",
    isSpecial: true,
    specialType: "Sem Lactose",
    sizes: ["Único (900g)"],
  },
  {
    id: 12,
    name: "Naked Cake Rústico",
    description:
      "Bolo sem cobertura externa, decorado com frutas frescas e flores comestíveis.",
    price: "R$ 130,00",
    priceValue: 130,
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/943044/2026-01-31/05b3ee44-4f16-4c8f-8475-905a37813ebc.png",
    category: "Bolos Festivos",
    sizes: ["M (2kg)", "G (3kg)"],
  },
];

export const categories = [
  "Todos",
  "Bolos Festivos",
  "Bolos Caseiros",
  "Bolos de Casamento",
  "Tortas",
  "Opções Especiais",
];

export const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    text: "O bolo de casamento ficou perfeito! Todos os convidados elogiaram. A Andresiani caprichou em cada detalhe.",
    rating: 5,
  },
  {
    id: 2,
    name: "João Santos",
    text: "Encomendei o bolo de aniversário da minha filha e ela amou! Lindo, gostoso e entregue no prazo.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Costa",
    text: "Sou celíaca e finalmente encontrei um bolo sem glúten que é realmente delicioso. Recomendo muito!",
    rating: 5,
  },
  {
    id: 4,
    name: "Pedro Oliveira",
    text: "O bolo de chocolate é simplesmente divino! Já virou tradição aqui em casa para os aniversários.",
    rating: 5,
  },
  {
    id: 5,
    name: "Carla Mendes",
    text: "Atendimento impecável e o bolo chegou ainda mais bonito que nas fotos. Superou todas as expectativas!",
    rating: 5,
  },
  {
    id: 6,
    name: "Lucas Ferreira",
    text: "A torta de morango é a melhor que já comi! Frutas frescas e creme na medida certa.",
    rating: 5,
  },
];
