const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const burgers = [
    {
      name: "Clássico Smash",
      description:
        "Hambúrguer de carne bovina prensada, queijo cheddar, alface, tomate, picles, e maionese especial no pão brioche.",
      price: "24,90",
      imageUrl:
        "https://utfs.io/f/378311e4-a539-473a-959e-162a51f6d015-jkizrt.jpeg",
    },
    {
      name: "BBQ Bacon Delight",
      description:
        "Hambúrguer de carne bovina, queijo cheddar, bacon crocante, cebola caramelizada, alface, tomate, e molho barbecue no pão australiano.",
      price: "28,90",
      imageUrl:
        "https://utfs.io/f/fe9c73c1-fbfc-4e7c-a21c-227a68e05101-2gpiqf.jpeg",
    },
    {
      name: "Cheese Lovers",
      description:
        "Hambúrguer duplo de carne bovina, queijo cheddar, queijo prato, molho de queijo, picles, e cebola roxa no pão de batata.",
      price: "26,90",
      imageUrl:
        "https://utfs.io/f/8849c15e-3a9f-4c2e-8983-10163ab6b03f-sl7sf0.jpeg",
    },
    {
      name: "Picanha Prime",
      description:
        "Hambúrguer de picanha grelhada, queijo muçarela, bacon, rúcula, tomate seco, e maionese de alho no pão rústico.",
      price: "34,90",
      imageUrl:
        "https://utfs.io/f/271a7fe9-875a-49a7-b256-a885392d9caf-183czz.jpeg",
    },
    {
      name: "Truffle Burger",
      description:
        "Hambúrguer de carne bovina, queijo gruyère, cogumelos salteados, rúcula, e maionese de trufas no pão brioche.",
      price: "39,90",
      imageUrl:
        "https://utfs.io/f/99ecea49-fd7b-4d79-8d85-f57625b7d547-7w8qxx.jpeg",
    },
    {
      name: "Spicy Jalapeño",
      description:
        "Hambúrguer de carne bovina, queijo pepper jack, jalapeños, alface, cebola roxa, e molho picante no pão com gergelim.",
      price: "27,90",
      imageUrl:
        "https://utfs.io/f/38db4742-1619-482a-9ea1-7497aa5973ad-8vbef1.jpeg",
    },
    {
      name: "Frango Crocante",
      description:
        "Hambúrguer de frango empanado, queijo prato, alface, tomate, picles, e maionese de limão siciliano no pão brioche.",
      price: "22,90",
      imageUrl:
        "https://utfs.io/f/7e4ef4bb-7f4f-46dd-8e1b-523357c6aeb3-lglla8.jpeg",
    },
    {
      name: "Veggie Supreme",
      description:
        "Hambúrguer de grão-de-bico e quinoa, queijo vegan, alface, tomate, pepino, e molho tahine no pão integral.",
      price: "25,90",
      imageUrl:
        "https://utfs.io/f/c85198d3-9be2-4bca-86cd-ee771f6c7816-rkko7w.jpeg",
    },
    {
      name: "X-Tudo Especial",
      description:
        "Hambúrguer de carne bovina, queijo cheddar, ovo frito, presunto, bacon, alface, tomate, e maionese no pão com gergelim.",
      price: "31,90",
      imageUrl:
        "https://utfs.io/f/0b4bac8d-c9ae-484f-93dd-647a4dfd2041-ybkegd.jpeg",
    },
    {
      name: "Cordeiro Gourmet",
      description:
        "Hambúrguer de cordeiro, queijo feta, rúcula, tomate, cebola roxa, e molho de hortelã no pão ciabatta.",
      price: "37,90",
      imageUrl:
        "https://utfs.io/f/f207c29b-d415-47e0-8823-d2cb8388713d-okvyqe.jpeg",
    },
    {
      name: "Cheddar Ranch",
      description:
        "Hambúrguer de carne bovina, queijo cheddar derretido, bacon, alface, tomate, cebola crocante, e molho ranch no pão brioche.",
      price: "29,90",
      imageUrl:
        "https://utfs.io/f/215156ef-ef1a-48f0-9af7-29fc47cb95e8-fgudcb.jpeg",
    },
    {
      name: "Pulled Pork BBQ",
      description:
        "Hambúrguer de carne de porco desfiada com molho barbecue, queijo cheddar, coleslaw, e picles no pão brioche.",
      price: "32,90",
      imageUrl:
        "https://utfs.io/f/bbcf7685-076a-451e-bfdf-acb676497d1e-48u2cl.jpeg",
    },
  ];

  const appetizers = [
    {
      name: "Batata Frita Tradicional",
      description:
        "Batatas fritas crocantes, servidas com ketchup e maionese à parte.",
      price: "12,90",
      imageUrl:
        "https://utfs.io/f/68ad5cac-bd23-4ec8-9231-5ea7e0354df9-69u523.jpeg",
    },
    {
      name: "Anéis de Cebola",
      description:
        "Cebolas empanadas e fritas até ficarem douradas, servidas com molho barbecue.",
      price: "14,90",
      imageUrl:
        "https://utfs.io/f/8708cd28-1a7e-4e74-b23b-3787c9d26703-ytyfnb.jpeg",
    },
    {
      name: "Batata Rústica",
      description:
        "Batatas cortadas em pedaços grandes, temperadas com alecrim e alho, servidas com maionese temperada.",
      price: "16,90",
      imageUrl:
        "https://utfs.io/f/852f9933-1852-41f8-8580-12f1d5f0b0d9-2a31z.jpeg",
    },
    {
      name: "Chicken Wings",
      description:
        "Asinhas de frango fritas, temperadas e servidas com molho picante ou barbecue.",
      price: "22,90",
      imageUrl:
        "https://utfs.io/f/51e9056c-1432-41a9-a95e-05c48278eb0f-g6vz1.jpeg",
    },
    {
      name: "Palitos de Queijo",
      description:
        "Queijo muçarela empanado e frito, servido com molho marinara para mergulhar.",
      price: "18,90",
      imageUrl:
        "https://utfs.io/f/7f4abea1-7da2-4ff9-b464-0ca804d9b1d9-9tk3me.jpeg",
    },
    {
      name: "Mini Hamburguinhos",
      description:
        "Seis mini-hambúrgueres de carne bovina com queijo cheddar, picles e ketchup no pão de brioche.",
      price: "29,90",
      imageUrl:
        "https://utfs.io/f/34545380-7d45-4ca6-9883-cf3912ca75ee-h1fy11.jpeg",
    },
  ];

  const drinks = [
    {
      name: "Limonada Artesanal",
      description:
        "Limonada feita com limões frescos, açúcar de cana, e um toque de hortelã. Servida bem gelada.",
      price: "8,90",
      imageUrl:
        "https://utfs.io/f/f95ac589-ba32-4bbb-9cba-0d245d96e344-sn568o.jpeg",
    },
    {
      name: "Refrigerante Clássico",
      description:
        "Escolha entre cola, guaraná, ou laranja. Servido com gelo e uma fatia de limão.",
      price: "6,50",
      imageUrl:
        "https://utfs.io/f/2018ea5f-cb54-4662-b7d8-3e624a5e14cb-9ovuln.jpeg",
    },
    {
      name: "Milkshake de Baunilha",
      description:
        "Sorvete de baunilha cremoso batido com leite e calda de baunilha. Coberto com chantilly.",
      price: "14,90",
      imageUrl:
        "https://utfs.io/f/3602a27c-ebb4-40a0-8467-67631ae4efc4-dfh8de.jpeg",
    },
    {
      name: "Chá Gelado de Pêssego",
      description:
        "Chá preto com sabor de pêssego, servido com gelo e uma rodela de limão.",
      price: "9,90",
      imageUrl:
        "https://utfs.io/f/8733063b-6109-4cd6-9557-dec05fb899e3-jkpqz2.jpeg",
    },
    {
      name: "Suco de Laranja Natural",
      description: "Suco de laranja espremido na hora, sem adição de açúcar.",
      price: "10,90",
      imageUrl:
        "https://utfs.io/f/5479f88e-f2a3-4cc7-86c3-4dc7c62e75c8-ciaw0z.jpeg",
    },
    {
      name: "Água com Gás",
      description:
        "Água mineral com gás, servida com gelo e uma rodela de limão.",
      price: "5,50",
      imageUrl:
        "https://utfs.io/f/62ba493a-a59f-416f-b2e9-6d13d88f22d4-ikaddg.jpeg",
    },
    {
      name: "Cerveja Artesanal",
      description:
        "Cerveja artesanal local, disponível em diferentes estilos: IPA, Pilsen, Stout.",
      price: "16,90",
      imageUrl:
        "https://utfs.io/f/00331de5-0d72-4b82-92f1-ec95523a6550-30hsov.jpeg",
    },
    {
      name: "Coquetel de Frutas",
      description:
        "Mistura refrescante de sucos de abacaxi, laranja, morango e hortelã. Sem álcool.",
      price: "12,90",
      imageUrl:
        "https://utfs.io/f/c75a71b3-97ca-4746-bdc0-30310e68e1d3-pytvq6.jpeg",
    },
    {
      name: "Milkshake de Chocolate",
      description:
        "Sorvete de chocolate batido com leite e calda de chocolate. Coberto com chantilly e raspas de chocolate.",
      price: "14,90",
      imageUrl:
        "https://utfs.io/f/9121703f-31fe-4f26-8557-78e86784e274-hieg7m.jpeg",
    },
    {
      name: "Suco Verde Detox",
      description:
        "Suco de couve, limão, maçã e gengibre. Energético e saudável.",
      price: "11,90",
      imageUrl:
        "https://utfs.io/f/718e274b-aabf-4276-b5d8-44c964bd6754-1xkgpa.jpeg",
    },
    {
      name: "Refrigerante Zero",
      description:
        "Versão zero açúcar dos refrigerantes clássicos: cola, guaraná, ou laranja. Servido com gelo e limão.",
      price: "6,50",
      imageUrl:
        "https://utfs.io/f/dfcb92c1-1f09-4893-8a48-52e5d91679ae-9bfrkw.jpeg",
    },
    {
      name: "Smoothie de Morango",
      description:
        "Morangos frescos batidos com iogurte natural e mel. Perfeito para quem busca uma opção mais leve.",
      price: "13,90",
      imageUrl:
        "https://utfs.io/f/d81c9d43-105a-434c-9e3a-cd55d44a279f-m5n42s.jpeg",
    },
  ];

  const desserts = [
    {
      name: "Brownie com Sorvete",
      description:
        "Brownie de chocolate quente, servido com uma bola de sorvete de creme e calda de chocolate.",
      price: "18,90",
      imageUrl:
        "https://utfs.io/f/5327cce5-08af-4921-8b07-6ab795cecae3-gjhknd.jpeg",
    },
    {
      name: "Torta de Limão",
      description:
        "Torta com base crocante, recheio cremoso de limão e merengue gratinado por cima.",
      price: "16,90",
      imageUrl:
        "https://utfs.io/f/62fad0b2-9a2c-44c0-b622-a550c8673000-e084hl.jpeg",
    },
    {
      name: "Cheesecake de Frutas Vermelhas",
      description:
        "Cheesecake clássico com cobertura de frutas vermelhas frescas e calda de morango.",
      price: "19,90",
      imageUrl:
        "https://utfs.io/f/bcd71f61-ca0d-40dc-88c6-e79c284a1892-m0icr0.jpeg",
    },
    {
      name: "Petit Gâteau",
      description:
        "Bolinho de chocolate com recheio cremoso, servido com sorvete de baunilha e calda de frutas vermelhas.",
      price: "21,90",
      imageUrl:
        "https://utfs.io/f/17d5abe7-49b5-4c12-8b87-e1d5ec581d69-a2hl4a.jpeg",
    },
    {
      name: "Pudim de Leite Condensado",
      description:
        "Pudim tradicional de leite condensado com calda de caramelo, leve e cremoso.",
      price: "12,90",
      imageUrl:
        "https://utfs.io/f/f774a176-88aa-4555-aeb1-e530491bf8ae-4row1n.jpeg",
    },
    {
      name: "Milkshake de Oreo",
      description:
        "Sorvete de baunilha batido com pedaços de biscoito Oreo, coberto com chantilly e mais Oreo por cima.",
      price: "17,90",
      imageUrl:
        "https://utfs.io/f/9b22f16d-4851-4f76-8cd2-01db09309693-kk49jd.jpeg",
    },
    {
      name: "Banana Split",
      description:
        "Banana fresca servida com três bolas de sorvete (chocolate, morango, e creme), coberta com chantilly, calda de chocolate, e cerejas.",
      price: "22,90",
      imageUrl:
        "https://utfs.io/f/d8e11d6c-a9c8-4149-a316-4c75d8f2db64-wjsvq7.jpeg",
    },
    {
      name: "Mousse de Maracujá",
      description:
        "Mousse leve e aerada de maracujá, com uma calda de maracujá fresco por cima.",
      price: "14,90",
      imageUrl:
        "https://utfs.io/f/70d46357-c2d5-4736-bc03-af035f1a6ebf-g54jx9.jpeg",
    },
    {
      name: "Tiramisu",
      description:
        "Sobremesa italiana feita com camadas de biscoito champanhe, café, mascarpone, e cacau em pó.",
      price: "24,90",
      imageUrl:
        "https://utfs.io/f/8d66c509-879d-40d4-a74b-c2a23976c325-uyupa6.jpeg",
    },
    {
      name: "Bolo de Cenoura com Chocolate",
      description:
        "Fatia de bolo de cenoura fofinho, coberta com uma generosa camada de ganache de chocolate.",
      price: "13,90",
      imageUrl:
        "https://utfs.io/f/ce9b192f-7704-41d1-bee3-93f5be4e81f9-82os33.jpeg",
    },
    {
      name: "Creme Brûlée",
      description:
        "Creme de baunilha com uma crosta de açúcar caramelizado, servido gelado.",
      price: "20,90",
      imageUrl:
        "https://utfs.io/f/09b731d3-92f6-4c4a-8eb4-228259c672ba-7xhxox.jpeg",
    },
    {
      name: "Sorvete Artesanal",
      description:
        "Duas bolas de sorvete artesanal, disponíveis nos sabores: chocolate, baunilha, morango, e pistache.",
      price: "15,90",
      imageUrl:
        "https://utfs.io/f/81e09976-c0e1-42b2-9d20-453710caf85d-xxqakh.jpeg",
    },
  ];

  await prisma.burger.createMany({
    data: burgers,
  });

  await prisma.appetizer.createMany({
    data: appetizers,
  });

  await prisma.drink.createMany({
    data: drinks,
  });

  await prisma.dessert.createMany({
    data: desserts,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
