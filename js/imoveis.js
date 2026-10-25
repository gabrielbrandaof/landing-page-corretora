/* =======================================================================
   IMÓVEIS — Fátima Brandão
   -----------------------------------------------------------------------
   Este arquivo é a sua "planilha" de imóveis. Para cadastrar um novo
   imóvel, copie um dos blocos { ... } abaixo, cole no final da lista
   (antes do "];") e altere os valores.

   CAMPOS:
   id         → número único (não repita). Ex: 7, 8, 9...
   tipo       → "Casa" ou "Apartamento"
   operacao   → "Venda" ou "Aluguel"
   titulo     → título curto que aparece no card e no topo da página
   bairro     → bairro do imóvel
   cidade     → cidade / região
   preco      → número puro, sem "R$" nem pontos (ex: 320000)
   quartos, banheiros, vagas → números
   area       → metragem em m² (número)
   destaque   → true para mostrar a etiqueta "Destaque" no card
   lancamento → true para mostrar a etiqueta "Lançamento" no card
   renda      → (opcional) renda familiar mínima para financiar o imóvel,
                número puro, sem "R$" nem pontos (ex: 2000). Se o imóvel
                não tiver essa exigência ou você não quiser informar,
                apague o campo ou deixe null — o bloco some sozinho da
                página de detalhes.
   descricao  → texto livre, pode ter vários parágrafos (use \n\n para
                separar parágrafos)
   capa       → caminho da foto principal (aparece no card da listagem)
   imagens    → lista de fotos da galeria (a primeira pode repetir a capa).
                Quanto mais fotos, melhor — adicione quantas quiser.

   DICA: salve as fotos dos imóveis dentro da pasta "img/" (crie
   subpastas por imóvel se preferir, ex: img/imovel-07/foto1.webp) e
   aponte o caminho aqui.
   ======================================================================= */

const IMOVEIS = [

  {
    id: 1,
    tipo: "Apartamento",
    operacao: "Venda",
    titulo: "Apartamento no Village das Estrelas",
    bairro: "Ubatuba",
    cidade: "São José de Ribamar - MA",
    preco: 220000,
    quartos: 2,
    banheiros: 1,
    vagas: 1,
    area: 40.94,
    destaque: false,
    lancamento: false,
    renda: null,
    descricao: "Apartamentos inclusos no programa Minha Casa Minha Vida, com renda a partir de R$2000.00, com subsídio de ate R$55.000. \n\nCondomínio com portaria 24h, área de lazer completa e fácil acesso às principais vias da cidade.",
    capa: "img/estrelas1.webp",
    imagens: [
      "img/estrelas1.webp",
      "img/estrelas2.webp",
      "img/estrelas3.webp",
      "img/estrelas4.webp"
    ]
  },

  {
    id: 2,
    tipo: "Casa",
    operacao: "Venda",
    titulo: "Casa em condomínio Villa Terrari",
    bairro: "Vila da Maioba",
    cidade: "Paço do Lumiar - MA",
    preco: 480000,
    quartos: 3,
    banheiros: 2,
    vagas: 2,
    area: 72.23,
    destaque: false,
    lancamento: false,
    renda: null,
    descricao: "Casa grande em condomínio clube fechado, com 3 quartos sendo 2 suítes. Lazer e comodidade para toda a família, com piscinas, espaços gourmet, salão de jogos, playground e estacionamento para visitantes.\n\nAo lado da nova Avenida Metropolitana, garantindo mobilidade e acesso rápido a mais de 50 bairros e às praias da Grande Ilha.",
    capa: "img/terrari3.webp",
    imagens: [
      "img/terrari3.webp",
      "img/terrari2.webp",
      "img/terrari1.webp",
      "img/terrari4.webp"
      /* substitua estas fotos de exemplo pelas fotos reais do imóvel */
    ]
  },

  {
    id: 3,
    tipo: "Apartamento",
    operacao: "Venda",
    titulo: "Apartamento no Ilha dos Vinhais",
    bairro: "Vinhais",
    cidade: "São Luís - MA",
    preco: 260000,
    quartos: 2,
    banheiros: 1,
    vagas: 1,
    area: 43.73,
    destaque: false,
    lancamento: false,
    renda: null,
    descricao: "Viva no Residencial Ilha dos Vinhais, localizado atrás do Shopping da Ilha, em uma das regiões mais valorizadas de São Luís. Apartamentos de 2 quartos com opções de varanda, suíte e lazer completo.\n\nAproveite condições especiais para conquistar seu imóvel, com ITBI e cartório grátis, além de financiamento facilitado. O lugar ideal para morar ou investir com praticidade e segurança.",
    capa: "img/vinhais1.webp",
    imagens: [
      "img/vinhais1.webp",
      "img/vinhais2.webp",
      "img/vinhais3.webp",
      "img/vinhais4.webp",
    ]
  },

  {
    id: 4,
    tipo: "Apartamento",
    operacao: "Venda",
    titulo: "Apartamento no Ilha de Santorini",
    bairro: "Angelim",
    cidade: "São Luís - MA",
    preco: 260000,
    quartos: 2,
    banheiros: 1,
    vagas: 1,
    area: 43.73,
    destaque: false,
    lancamento: false,
    renda: null,
    descricao: "Apartamentos de 2 quartos no Angelim, com lazer completo, localização estratégica e toda a qualidade MRV para você viver com mais conforto.\n\nFinanciamento facilitado, uso do FGTS e ITBI + cartório grátis, tornando a conquista do seu imóvel ainda mais acessível.",
    capa: "img/santorini1.webp",
    imagens: [
      "img/santorini1.webp",
      "img/santorini2.webp",
      "img/santorini3.webp",
      "img/santorini4.webp"
    ]
  },

  {
    id: 5,
    tipo: "Casa",
    operacao: "Venda",
    titulo: "Casa no Condomínio Rafaella",
    bairro: "Vila Piramide",
    cidade: "São José de Ribamar - MA",
    preco: 302000,
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    area: 55.30,
    destaque: true,
    lancamento: false,
    renda: null,
    descricao: "Casa nova que garante todo conforto e segurança para voce, próxima a Av.General Arthur Carvalho\n\nCondomínio com piscina, campo de futebol, campo de areia e churrasqueira.",
    capa: "img/rafaela1.webp",
    imagens: [
      "img/rafaela1.webp",
      "img/rafaela2.webp",
      "img/rafaela3.webp",
      "img/rafaela4.webp"
    ]
  },

  {
    id: 6,
    tipo: "Apartamento",
    operacao: "Venda",
    titulo: "Apartamento no Cidade de Viena",
    bairro: "Olho D'Água",
    cidade: "São Luís - MA",
    preco: 683000,
    quartos: 3,
    banheiros: 2,
    vagas: 2,
    area: 83.58,
    destaque: true,
    lancamento: false,
    renda: null,
    descricao: "O Cidade de Viena chega como o novo empreendimento da Construtora Lua Nova, destacando-se pelo design contemporâneo, elevado padrão de construção e planejamento inteligente.\n\n Idealizado pelos arquitetos Leonardo Borges e Cláudia Albertini, o projeto reúne elegância, funcionalidade e qualidade em cada detalhe.",
    capa: "img/viena2.webp",
    imagens: [
      "img/viena1.webp",
      "img/viena2.webp",
      "img/viena3.webp",
      "img/viena4.webp",
      "img/viena5.webp",
      "img/viena6.webp",
      "img/viena7.webp",
    ]
  },

  {
    id: 7,
    tipo: "Apartamento",
    operacao: "Venda",
    titulo: "Apartamento no Village da Águas II",
    bairro: "Maiobinha",
    cidade: "São José de Ribamar - MA",
    preco: 230000,
    quartos: 2,
    banheiros: 1,
    vagas: false,
    area: 40.94,
    destaque: false,
    lancamento: true,
    renda: null,
    descricao: "Lazer completo com piscinas, playground, campo de futebol, salão de festas, salão de jogos, brinquedoteca, academia ao ar livre e muito mais.\n\n Não deixe essa oportunidade passar: invista no seu futuro e realize o sonho da casa própria em um condomínio completo!",
    capa: "img/aguas1.webp",
    imagens: [
      "img/aguas1.webp",
      "img/aguas2.webp",
      "img/aguas3.webp",
      "img/aguas4.webp"
    ]
  },

   {
    id: 8,
    tipo: "Apartamento",
    operacao: "Venda",
    titulo: "Apartamento no Plaza das Flores VI",
    bairro: "Pindaí",
    cidade: "Paço do Lumiar - MA",
    preco: 205000,
    quartos: 2,
    banheiros: 1,
    vagas: false,
    area: 46.12,
    destaque: false,
    lancamento: false,
    renda: null,
    descricao: "A área de lazer oferece piscina adulto e infantil, quadra poliesportiva, salão de festas, quiosques com churrasqueira, academia ao ar livre, playground, praças e diversos espaços para toda a família.\n\n Por participar do Programa Minha Casa Minha Vida, você terá a oportunidade de obter um desconto de até R$ 55.000 (subsídio) no valor total do imóvel",
    capa: "img/floresVI1.webp",
    imagens: [
      "img/floresVI1.webp",
      "img/floresVI2.webp",
      "img/floresVI3.webp",
      "img/floresVI4.webp"
    ]
  },

  {
    id: 9,
    tipo: "Apartamento",
    operacao: "Venda",
    titulo: "Apartamento no New Life",
    bairro: "Turu",
    cidade: "São Luís - MA",
    preco: 280000,
    quartos: 2,
    banheiros: 1,
    vagas: 1,
    area: 42.52,
    destaque: false,
    lancamento: false,
    renda: null,
    descricao: "A área de lazer do Newlife tem piscina infantil, piscina adulto e um charmoso solarium. E para comemorar os melhores momentos um delicioso salão de festas com churrasqueira faz o convite.\n\n Todas as torres contam com elevador, garantindo mais comodidade e acessibilidade para os moradores.",
    capa: "img/newlife1.webp",
    imagens: [
      "img/newlife1.webp",
      "img/newlife2.webp",
      "img/newlife3.webp",
      "img/newlife4.webp"
    ]
  },

  {
    id: 10,
    tipo: "Apartamento",
    operacao: "Venda",
    titulo: "Apartamento no Village Conect I",
    bairro: "Turu",
    cidade: "São Luís - MA",
    preco: 230000,
    quartos: 2,
    banheiros: 1,
    vagas: 1,
    area: 40.94,
    destaque: true,
    lancamento: false,
    renda: null,
    descricao: "Piscinas adulto e infantil, playground, campo de futebol, pet place, espaço fitness, salão de festas com churrasqueira, brinquedoteca, coworking e muito mais!\n\nLocalização estratégica, transporte na porta e qualidade de vida, com entradas a partir de apenas R$499,00.",
    capa: "img/conect3.webp",
    imagens: [
      "img/conect3.webp",
      "img/conect1.webp",
      "img/conect2.webp",
      "img/conect4.webp"
    ]
  },

    {
    id: 11,
    tipo: "Apartamento",
    operacao: "Venda",
    titulo: "Apartamento no Torres de Mônaco",
    bairro: "Turu",
    cidade: "São Luís - MA",
    preco: 260000,
    quartos: 2,
    banheiros: 1,
    vagas: 1,
    area: 43.74,
    destaque: true,
    lancamento: true,
    renda: null,
    descricao: "No Turu, em São Luís, próximo a shoppings, hospitais, faculdades e supermercados.\n\nApartamentos de 2 quartos, com opções de suíte e varanda, além de lazer completo para toda a família.",
    capa: "img/monaco1.webp",
    imagens: [
      "img/monaco1.webp",
      "img/monaco2.webp",
      "img/monaco3.webp",
      "img/monaco4.webp",
      "img/monaco5.webp"
    ]
  },

    {
    id: 12,
    tipo: "Apartamento",
    operacao: "Venda",
    titulo: "Apartamento no Ilhas Canárias",
    bairro: "Cohatrac",
    cidade: "São Luís - MA",
    preco: 239990,
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    area: 46.85,
    destaque: true,
    lancamento: true,
    renda: null,
    descricao: "Apartamentos de 2 quartos, com varanda e opções com suíte e giardino, em plantas de 43,66 m² a 46,85 m².\n\nCondomínio fechado com lazer completo, piscina, quadra, academia, playground, espaço gourmet e muito mais.",
    capa: "img/canarias1.webp",
    imagens: [
      "img/canarias1.webp",
      "img/canarias2.webp",
      "img/canarias3.webp",
      "img/canarias4.webp",
      "img/canarias5.webp",
      "img/canarias6.webp",
      "img/canarias7.webp",
      "img/canarias8.webp",
      "img/canarias9.webp",
      "img/canarias10.webp",
      "img/canarias11.webp",
      "img/canarias12.webp",
      "img/canarias13.webp",
      "img/canarias14.webp"
    ]
  }

];

