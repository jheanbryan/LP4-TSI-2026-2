// src/data/menuData.ts
export interface ProductPrice {
  size: string;
  price: string;
  fromTag?: string;
}

export interface Product {
  name: string;
  description?: string;
  prices: ProductPrice[];
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  products: Product[];
}

export interface ExtraItem {
  name: string;
  price: string;
}

export interface ExtrasSection {
  title: string;
  items: ExtraItem[];
}

export const categories: Category[] = [
  {
    id: "acai",
    title: "Açaí",
    icon: "fa-bowl-rice",
    products: [
      {
        name: "Açaí no Copo",
        description: "Açaí puro e cremoso, batido na hora.",
        prices: [
          { size: "300ml", price: "R$ 12,00" },
          { size: "500ml", price: "R$ 18,00" },
          { size: "700ml", price: "R$ 21,00" }
        ]
      },
      {
        name: "Açaí no Pote",
        description: "Pote de 1 litro, ideal para compartilhar. Já vem com 3 adicionais inclusos.",
        prices: [
          { size: "1L", price: "R$ 25,00" }
        ]
      }
    ]
  },
  {
    id: "fruitmix",
    title: "Fruit Mix",
    icon: "fa-lemon",
    products: [
      {
        name: "Fruit Mix",
        description: "Mix de frutas com açaí e iogurte, refrescante e cheio de sabor.",
        prices: [
          { size: "200ml", price: "R$ 12,00", fromTag: "a partir de" },
          { size: "330ml", price: "R$ 18,00", fromTag: "a partir de" }
        ]
      }
    ]
  },
  {
    id: "casquinha",
    title: "Casquinha",
    icon: "fa-ice-cream",
    products: [
      {
        name: "Casquinha de Açaí Simples",
        description: "Casquinha crocante recheada com açaí cremoso.",
        prices: [
          { size: "Única", price: "R$ 8,00" }
        ]
      },
      {
        name: "Casquinha de Açaí Dupla",
        description: "Duas bolas de açaí em casquinha crocante.",
        prices: [
          { size: "Única", price: "R$ 12,00" }
        ]
      }
    ]
  },
  {
    id: "sundae",
    title: "Sundae / Top Sundae",
    icon: "fa-cookie",
    products: [
      {
        name: "Sundae de Açaí",
        description: "Açaí cremoso com calda e cobertura.",
        prices: [
          { size: "Único", price: "R$ 15,00" }
        ]
      },
      {
        name: "Top Sundae",
        description: "Versão completa: açaí, granola e leite ninho por cima.",
        prices: [
          { size: "Único", price: "R$ 18,00" }
        ]
      }
    ]
  },
  {
    id: "milkshake",
    title: "Milk Shake",
    icon: "fa-blender",
    products: [
      {
        name: "Milk Shake de Açaí",
        description: "Bem cremoso, batido com sorvete e açaí puro.",
        prices: [
          { size: "400ml", price: "R$ 14,00" }
        ]
      },
      {
        name: "Milk Shake de Morango",
        description: "Sorvete batido com morangos selecionados.",
        prices: [
          { size: "400ml", price: "R$ 14,00" }
        ]
      }
    ]
  },
  {
    id: "bebidas",
    title: "Bebidas",
    icon: "fa-bottle-water",
    products: [
      {
        name: "Água com Gás",
        prices: [{ size: "500ml", price: "R$ 5,00" }]
      },
      {
        name: "Água sem Gás",
        prices: [{ size: "500ml", price: "R$ 3,00" }]
      },
      {
        name: "Refrigerante Lata",
        prices: [{ size: "350ml", price: "R$ 6,00" }]
      },
      {
        name: "Suco Natural",
        prices: [{ size: "400ml", price: "R$ 8,00" }]
      }
    ]
  },
  {
    id: "cremes",
    title: "Cremes Especiais",
    icon: "fa-mug-hot",
    products: [
      {
        name: "Creme de Cacau",
        prices: [{ size: "400ml", price: "R$ 16,00" }]
      },
      {
        name: "Creme de Arroz",
        prices: [{ size: "400ml", price: "R$ 16,00" }]
      },
      {
        name: "Creme de Milho",
        prices: [{ size: "400ml", price: "R$ 16,00" }]
      },
      {
        name: "Creme de Arroz e Milho",
        prices: [{ size: "400ml", price: "R$ 17,00" }]
      }
    ]
  },
  {
    id: "tigelas",
    title: "Tigelas Prontas",
    icon: "fa-utensils",
    products: [
      {
        name: "Tradicional",
        description: "Açaí, banana e granola no ponto certo.",
        prices: [
          { size: "20g", price: "R$ 14,00" },
          { size: "30g", price: "R$ 18,00" },
          { size: "40g", price: "R$ 22,00" }
        ]
      },
      {
        name: "Turbinado",
        description: "Reforçada com leite condensado e paçoca.",
        prices: [
          { size: "20g", price: "R$ 16,00" },
          { size: "30g", price: "R$ 20,00" },
          { size: "40g", price: "R$ 24,00" }
        ]
      },
      {
        name: "Fit Açaí",
        description: "Versão leve, com frutas frescas e granola.",
        prices: [
          { size: "20g", price: "R$ 15,00" },
          { size: "30g", price: "R$ 19,00" },
          { size: "40g", price: "R$ 23,00" }
        ]
      },
      {
        name: "Brasiliano",
        description: "Nossa combinação mais completa de coberturas.",
        prices: [
          { size: "20g", price: "R$ 17,00" },
          { size: "30g", price: "R$ 21,00" },
          { size: "40g", price: "R$ 25,00" }
        ]
      }
    ]
  },
  {
    id: "barcas",
    title: "Barcas",
    icon: "fa-ship",
    products: [
      {
        name: "Barca 1 Pessoa",
        prices: [{ size: "Individual", price: "R$ 35,00" }]
      },
      {
        name: "Barca 2 Pessoas",
        prices: [{ size: "Para 2", price: "R$ 60,00" }]
      },
      {
        name: "Barca 3 Pessoas",
        prices: [{ size: "Para 3", price: "R$ 85,00" }]
      }
    ]
  }
];

export const extrasSections: ExtrasSection[] = [
  {
    title: "Coberturas",
    items: [
      { name: "Leite em pó", price: "R$ 3,00" },
      { name: "Leite condensado", price: "R$ 3,00" },
      { name: "Granola", price: "R$ 3,00" },
      { name: "Confete", price: "R$ 3,00" },
      { name: "Granulado", price: "R$ 3,50" },
      { name: "Creme de avelã", price: "R$ 4,00" },
      { name: "Paçoca", price: "R$ 2,50" },
      { name: "Musse de maracujá", price: "R$ 3,00" },
      { name: "Musse de morango", price: "R$ 3,00" }
    ]
  },
  {
    title: "Frutas",
    items: [
      { name: "Banana", price: "R$ 2,00" },
      { name: "Kiwi", price: "R$ 3,00" },
      { name: "Morango", price: "R$ 3,00" }
    ]
  }
];