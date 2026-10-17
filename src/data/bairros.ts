export interface Bairro {
  nome: string;
  slug: string;
  zona: 'Zona Norte' | 'Zona Sul' | 'Zona Sudoeste';
  zonaSlug: 'zona-norte' | 'zona-sul' | 'zona-sudoeste';
  preposicao: 'em' | 'no' | 'na' | 'nos' | 'nas';
  descricao: string;
  desafios: string[];
  dicasEntrega: string[];
  precoRelativo: 'padrão' | '10-15% acima' | '20-30% acima' | '5-10% abaixo';
  precoJustificativa: string;
  landmarks: string[];
  servicosPopulares: string[];
  tiposObraComuns: string[];
  observacoesEspecificas: string;
}

export const zonas = [
  {
    nome: 'Zona Norte',
    slug: 'zona-norte',
    cor: 'from-green-500 to-emerald-600',
    resumo:
      'A Zona Norte do Rio é a região com melhor acesso viário para operações de caçamba, maior densidade de pátios de locadoras e os preços mais competitivos. Atendemos todos os bairros com entrega em até 24h.',
    caracteristicas: [
      'Ruas largas e melhor fluidez de trânsito',
      'Proximidade com corredores de carga e BR-116',
      'Menor custo de frete para a maioria dos bairros',
      'Alta demanda por reformas residenciais e comerciais',
    ],
  },
  {
    nome: 'Zona Sul',
    slug: 'zona-sul',
    cor: 'from-blue-500 to-indigo-600',
    resumo:
      'A Zona Sul exige logística especializada: ruas estreitas, trânsito intenso, condomínios rigorosos e restrições de carga e descarga. Usamos caçambas compactas e horários estratégicos para atender com eficiência.',
    caracteristicas: [
      'Ruas estreitas e pouco espaço para manobra',
      'Condomínios com autorização prévia necessária',
      'Restrições de horário para carga e descarga',
      'Demanda constante por reformas e demolições pequenas',
    ],
  },
  {
    nome: 'Zona Sudoeste',
    slug: 'zona-sudoeste',
    cor: 'from-amber-500 to-orange-600',
    resumo:
      'A Zona Sudoeste reúne bairros como Barra da Tijuca, Recreio, Jacarepaguá e região. É uma área de grande crescimento, com obras residenciais, comerciais e condomínios fechados. Atendemos com frota dedicada e pacotes para obras longas.',
    caracteristicas: [
      'Grandes obras residenciais e comerciais',
      'Condomínios fechados com controle de acesso rigoroso',
      'Distância maior que pode elevar o frete',
      'Alta demanda por caçambas de 5m³ e 7m³',
    ],
  },
] as const;

const preposicoesExcecoes: Record<string, 'em' | 'no' | 'na' | 'nos' | 'nas'> = {
  // Grande Tijuca
  'Alto da Boa Vista': 'no',
  'Andaraí': 'em',
  'Grajaú': 'em',
  'Maracanã': 'no',
  'Praça da Bandeira': 'na',
  'Tijuca': 'na',
  'Vila Isabel': 'na',

  // Zona Norte (Grande Tijuca + Zona Norte propriamente dita)
  'Abolição': 'na',
  'Acari': 'em',
  'Água Santa': 'na',
  'Anchieta': 'em',
  'Argentino': 'no',
  'Barros Filho': 'em',
  'Bento Ribeiro': 'em',
  'Bonsucesso': 'em',
  'Brás de Pina': 'em',
  'Cachambi': 'em',
  'Campinho': 'no',
  'Cascadura': 'em',
  'Cavalcanti': 'no',
  'Coelho Neto': 'em',
  'Colégio': 'no',
  'Complexo do Alemão': 'no',
  'Cordovil': 'em',
  'Costa Barros': 'em',
  'Del Castilho': 'em',
  'Encantado': 'no',
  'Engenheiro Leal': 'em',
  'Engenho da Rainha': 'no',
  'Engenho de Dentro': 'no',
  'Engenho Novo': 'no',
  'Guadalupe': 'em',
  'Higienópolis': 'em',
  'Honório Gurgel': 'em',
  'Inhaúma': 'em',
  'Irajá': 'em',
  'Jacaré': 'no',
  'Jacarezinho': 'em',
  'Jardim América': 'no',
  'Lins de Vasconcelos': 'em',
  'Madureira': 'no',
  'Manguinhos': 'em',
  'Maré': 'na',
  'Marechal Hermes': 'em',
  'Maria da Graça': 'em',
  'Méier': 'no',
  'Olaria': 'na',
  'Oswaldo Cruz': 'em',
  'Parada de Lucas': 'na',
  'Parque Anchieta': 'no',
  'Parque Colúmbia': 'no',
  'Pavuna': 'na',
  'Penha': 'na',
  'Penha Circular': 'na',
  'Piedade': 'no',
  'Pilares': 'em',
  'Quintino Bocaiuva': 'em',
  'Ramos': 'no',
  'Riachuelo': 'no',
  'Ricardo de Albuquerque': 'em',
  'Rocha': 'na',
  'Rocha Miranda': 'em',
  'Sampaio': 'em',
  'São Cristóvão': 'em',
  'São Francisco Xavier': 'em',
  'Todos os Santos': 'em',
  'Tomás Coelho': 'em',
  'Turiaçu': 'em',
  'Vaz Lobo': 'em',
  'Vicente de Carvalho': 'em',
  'Vigário Geral': 'em',
  'Vila da Penha': 'na',
  'Vila Kosmos': 'na',
  'Vista Alegre': 'em',

  // Ilhas (exceto Paquetá)
  'Bancários': 'nos',
  'Cacuia': 'na',
  'Cidade Universitária': 'na',
  'Cocotá': 'em',
  'Freguesia (Ilha do Governador)': 'na',
  'Galeão': 'no',
  'Jardim Carioca': 'no',
  'Jardim Guanabara': 'no',
  'Moneró': 'em',
  'Pitangueiras': 'em',
  'Portuguesa': 'em',
  'Praia da Bandeira': 'na',
  'Ribeira': 'na',
  'Tauá': 'em',
  'Zumbi': 'no',

  // Zona Sul
  'Botafogo': 'em',
  'Catete': 'em',
  'Copacabana': 'em',
  'Cosme Velho': 'em',
  'Flamengo': 'em',
  'Gávea': 'em',
  'Humaitá': 'em',
  'Ipanema': 'em',
  'Jardim Botânico': 'no',
  'Lagoa': 'na',
  'Laranjeiras': 'em',
  'Leblon': 'no',
  'Leme': 'no',
  'Rocinha': 'na',
  'São Conrado': 'em',
  'Urca': 'na',
  'Vidigal': 'no',

  // Zona Sudoeste (Lei 2025)
  'Anil': 'no',
  'Barra da Tijuca': 'na',
  'Barra Olímpica': 'na',
  'Camorim': 'no',
  'Cidade de Deus': 'na',
  'Curicica': 'na',
  'Freguesia': 'na',
  'Gardênia Azul': 'no',
  'Grumari': 'no',
  'Itanhangá': 'em',
  'Jacarepaguá': 'em',
  'Joá': 'no',
  'Pechincha': 'na',
  'Praça Seca': 'na',
  'Recreio dos Bandeirantes': 'no',
  'Rio das Pedras': 'no',
  'Tanque': 'no',
  'Taquara': 'na',
  'Vargem Grande': 'em',
  'Vargem Pequena': 'em',
  'Vila Valqueire': 'na',
};

function slugify(nome: string): string {
  return nome
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getPreposicao(nome: string): 'em' | 'no' | 'na' | 'nos' | 'nas' {
  const excecao = preposicoesExcecoes[nome];
  if (excecao) return excecao;

  const lower = nome.trim().toLowerCase();

  // Nomes que começam com artigo definido explícito
  if (lower.startsWith('os ')) return 'nos';
  if (lower.startsWith('as ')) return 'nas';
  if (lower.startsWith('o ')) return 'no';
  if (lower.startsWith('a ')) return 'na';

  // Heurística por terminação (fallback seguro)
  if (lower.endsWith('os') && lower.length > 2) return 'nos';
  if (lower.endsWith('as') && lower.length > 2) return 'nas';
  if (lower.endsWith('a') && lower.length > 1) return 'na';
  if (lower.endsWith('o') && lower.length > 1) return 'no';

  // Padrão para nomes próprios sem artigo (ex.: Copacabana, Ipanema, Jacarepaguá)
  return 'em';
}

const templates = {
  'zona-norte': {
    descricao: (nome: string) =>
      `${nome} é um bairro da Zona Norte do Rio de Janeiro com perfil predominantemente residencial e comercial. A logística de entrega de caçamba é facilitada pelo acesso viário da região, embora trechos mais estreitos possam exigir planejamento.`,
    desafios: [
      'Trânsito intenso em horários de pico nas vias principais',
      'Ruas estreitas em trechos residenciais e vilas',
      'Estacionamento disputado dificultando o posicionamento da caçamba',
    ],
    dicasEntrega: [
      'Agende entregas no início da manhã para evitar o trânsito local',
      'Para ruas estreitas, prefira caçamba de 3m³',
      'Confirme o ponto de apoio na calçada antes da entrega',
    ],
    precoRelativo: 'padrão' as const,
    precoJustificativa: (nome: string) =>
      `${nome} segue a média de preço da Zona Norte, com acesso viário razoável e boa disponibilidade de frota na região.`,
    landmarks: ['Centro comercial local', 'Avenidas principais', 'Praças do bairro'],
    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
    tiposObraComuns: ['Reformas residenciais', 'Reformas comerciais', 'Limpeza de terreno'],
    observacoesEspecificas: (nome: string) =>
      `Atendimento regular na região de ${nome}. Entregas costumam ser ágeis, com prazo médio de até 24h dependendo da disponibilidade de frota.`,
  },
  'zona-sul': {
    descricao: (nome: string) =>
      `${nome} é um bairro da Zona Sul do Rio de Janeiro, com alta densidade urbana, ruas estreitas e forte demanda por reformas. A logística de caçamba exige planejamento cuidadoso.`,
    desafios: [
      'Ruas estreitas e trânsito intenso durante o dia',
      'Estacionamento disputado nas ruas internas',
      'Condomínios com restrições de carga e descarga',
      'Fiscalização rigorosa de trânsito e estacionamento',
    ],
    dicasEntrega: [
      'Caçamba de 3m³ é a mais indicada para a maioria das ruas',
      'Agende com antecedência e confirme autorização do condomínio',
      'Prefira entregas no início da manhã',
    ],
    precoRelativo: '10-15% acima' as const,
    precoJustificativa: (nome: string) =>
      `${nome} tem custo acima da média pela dificuldade logística, restrições de trânsito e distância das bases de distribuição principais.`,
    landmarks: ['Centro comercial local', 'Praças e avenidas principais'],
    servicosPopulares: ['Caçamba 3m³', 'Retirada de entulho'],
    tiposObraComuns: ['Reformas de apartamentos', 'Demolições pequenas', 'Reformas comerciais'],
    observacoesEspecificas: (nome: string) =>
      `Atenção às restrições de carga e descarga em horários comerciais em ${nome}. Condomínios costumam exigir autorização prévia por escrito.`,
  },
  'zona-sudoeste': {
    descricao: (nome: string) =>
      `${nome} é um bairro da Zona Sudoeste do Rio de Janeiro (nova divisão da Lei 2025), com perfil residencial, comercial e áreas em expansão. A distância dos centros urbanos tradicionais pode afetar o frete.`,
    desafios: [
      'Maior distância dos pátios centrais',
      'Trânsito intenso nas vias principais em horários de pico',
      'Condomínios fechados com controle de acesso',
      'Bairros extensos com variação de prazo conforme localização',
    ],
    dicasEntrega: [
      'Agende com antecedência devido à distância',
      'Para condomínios, libere o acesso na portaria',
      'Caçambas de 5m³ são as mais solicitadas para obras residenciais',
    ],
    precoRelativo: '10-15% acima' as const,
    precoJustificativa: (nome: string) =>
      `${nome} tem frete moderado pela distância da Zona Sudoeste, com acesso viário em desenvolvimento e demanda crescente por obras.`,
    landmarks: ['Centro comercial local', 'Avenidas principais'],
    servicosPopulares: ['Caçamba 5m³', 'Caçamba 3m³'],
    tiposObraComuns: ['Reformas residenciais', 'Construção de casas', 'Demolições'],
    observacoesEspecificas: (nome: string) =>
      `A Zona Sudoeste (Lei 2025) não corresponde à antiga Zona Oeste toda. Em ${nome}, verifique a localização exata para precisar prazo e frete.`,
  },
};

function createBairro(
  nome: string,
  zonaSlug: 'zona-norte' | 'zona-sul' | 'zona-sudoeste',
  overrides?: Partial<Omit<Bairro, 'nome' | 'slug' | 'zona' | 'zonaSlug' | 'preposicao'>>
): Bairro {
  const zona =
    zonaSlug === 'zona-norte' ? 'Zona Norte' : zonaSlug === 'zona-sul' ? 'Zona Sul' : 'Zona Sudoeste';
  const t = templates[zonaSlug];

  return {
    nome,
    slug: slugify(nome),
    zona,
    zonaSlug,
    preposicao: getPreposicao(nome),
    descricao: overrides?.descricao ?? t.descricao(nome),
    desafios: overrides?.desafios ?? t.desafios,
    dicasEntrega: overrides?.dicasEntrega ?? t.dicasEntrega,
    precoRelativo: overrides?.precoRelativo ?? t.precoRelativo,
    precoJustificativa: overrides?.precoJustificativa ?? t.precoJustificativa(nome),
    landmarks: overrides?.landmarks ?? t.landmarks,
    servicosPopulares: overrides?.servicosPopulares ?? t.servicosPopulares,
    tiposObraComuns: overrides?.tiposObraComuns ?? t.tiposObraComuns,
    observacoesEspecificas: overrides?.observacoesEspecificas ?? t.observacoesEspecificas(nome),
  };
}

export const bairros: Bairro[] = [
  // ============================================================
  // ZONA NORTE — Grande Tijuca (7 bairros)
  // ============================================================
  createBairro('Alto da Boa Vista', 'zona-norte', {
    descricao:
      'O Alto da Boa Vista é um bairro de altitude na Tijuca, com acesso pela Floresta da Tijuca e ruas de serra. A entrega de caçamba exige atenção especial às vias de subida e declive.',
    desafios: [
      'Ruas em aclive e declive com curvas acentuadas',
      'Acesso restrito em dias de chuva forte',
      'Áreas de preservação ambiental próximas',
    ],
    dicasEntrega: [
      'Prefira caçambas de 3m³ para facilitar a manobra em ladeiras',
      'Agende com antecedência e confirme condições climáticas',
      'Sinalize o local de apoio para segurança do caminhão',
    ],
    precoRelativo: '10-15% acima',
    precoJustificativa:
      'O Alto da Boa Vista tem frete superior à média pela topografia acidentada e distância dos corredores principais.',
    landmarks: ['Floresta da Tijuca', 'Estrada da Cascatinha', 'Vista Chinesa'],
    observacoesEspecificas:
      'Obras próximas à Floresta da Tijuca devem observar normas ambientais e horários de acesso à unidade de conservação.',
  }),
  createBairro('Andaraí', 'zona-norte', {
    descricao:
      'Andaraí é um bairro residencial da Zona Norte, localizado entre a Tijuca e o Engenho Novo, com ruas tranquilas e forte demanda por reformas de casas e apartamentos.',
    desafios: [
      'Ruas residenciais com estacionamento nos dois lados',
      'Trechos de declive em direção à Tijuca',
      'Trânsito local nos horários de pico',
    ],
    dicasEntrega: [
      'Agende entregas no início da manhã',
      'Prefira caçambas de 3m³ e 5m³ para ruas residenciais',
      'Confirme ponto de apoio livre na calçada',
    ],
    landmarks: ['Rua São Francisco Xavier', 'Praça do Andaraí', 'Avenida 28 de Setembro'],
  }),
  createBairro('Grajaú', 'zona-norte', {
    descricao:
      'O Grajaú é um bairro residencial de classe média-alta na Zona Norte, com ruas tranquilas, muitas casas e reformas constantes. A entrega de caçamba é facilitada pelas ruas largas e baixo trânsito durante o dia.',
    desafios: [
      'Ruas residenciais com fiscalização de estacionamento',
      'Algumas áreas têm declives que exigem posicionamento cuidadoso da caçamba',
      'Movimentação de moradores exige sinalização adequada',
    ],
    dicasEntrega: [
      'Prefira entregas no início da manhã para não interromper o trânsito local',
      'Use cones ou fitas para sinalizar a caçamba na calçada',
      'Caçambas de 3m³ e 5m³ são as mais solicitadas no bairro',
    ],
    precoRelativo: 'padrão',
    precoJustificativa:
      'Grajaú tem preço dentro da média da Zona Norte, com frete baixo pela proximidade com corredores viários.',
    landmarks: ['Praça Nossa Senhora da Conceição', 'Rua Engenheiro de Sá', 'Alto do Grajaú'],
    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
    tiposObraComuns: ['Reformas residenciais', 'Construção de casas', 'Limpeza de terreno'],
    observacoesEspecificas:
      'A região do Alto do Grajaú pode exigir atenção especial na logística de subida e descida de caminhões.',
  }),
  createBairro('Maracanã', 'zona-norte', {
    descricao:
      'O Maracanã é um bairro da Zona Norte com forte vocação comercial, educacional e esportiva. A proximidade com o estádio e universidades gera grande movimentação e demanda por reformas.',
    desafios: [
      'Trânsito intenso nos dias de eventos no estádio',
      'Ruas de mão única e estacionamento disputado',
      'Restrições de trânsito em períodos de jogos e shows',
    ],
    dicasEntrega: [
      'Verifique a programação de eventos no Maracanã antes de agendar',
      'Para ruas estreitas, prefira caçamba de 3m³',
      'Agende entregas fora dos horários de pico',
    ],
    landmarks: ['Estádio do Maracanã', 'Universidade Estácio', 'Rua São Francisco Xavier'],
  }),
  createBairro('Praça da Bandeira', 'zona-norte', {
    descricao:
      'A Praça da Bandeira é um bairro compacto e residencial da Zona Norte, com fácil acesso pela radial oeste e grande proximidade com a Tijuca e o Centro.',
    desafios: [
      'Ruas estreitas e trânsito intenso nos arredores da radial',
      'Estacionamento limitado',
      'Obras em prédios antigos exigem logística cuidadosa',
    ],
    dicasEntrega: [
      'Aproveite o acesso pela radial oeste para agilizar a entrega',
      'Prefira caçambas de 3m³ em ruas residenciais',
      'Agende fora dos horários de pico',
    ],
    landmarks: ['Praça da Bandeira', 'Radial Oeste', 'Rua Mariz e Barros'],
  }),
  createBairro('Tijuca', 'zona-norte', {
    descricao:
      'A Tijuca é um dos bairros mais completos da Zona Norte do Rio, misturando áreas residenciais planas, condomínios verticais e morros adjacentes. A logística de entrega de caçamba varia bastante conforme a localização exata.',
    desafios: [
      'Ruas largas na parte plana, mas acesso complicado próximo à Floresta da Tijuca e morros',
      'Condomínios de apartamentos exigem autorização do síndico',
      'Obras em vilas e fundos de quintal podem precisar de caminhão guincho',
    ],
    dicasEntrega: [
      'Para condomínios, agende com antecedência e peça autorização por escrito',
      'Vilas e ruas estreitas: prefira caçamba de 3m³',
      'Aproveite o acesso viário da região plana para obras de maior porte',
    ],
    precoRelativo: 'padrão',
    precoJustificativa:
      'A Tijuca tem preços dentro da média da Zona Norte: boa oferta de empresas, ruas amplas na parte plana, mas trechos de acesso restrito podem elevar o frete.',
    landmarks: ['Floresta da Tijuca', 'Praça Saens Peña', 'Rua Conde de Bonfim', 'Maracanã'],
    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
    tiposObraComuns: ['Reformas residenciais', 'Troca de piso em apartamentos', 'Limpeza de terreno'],
    observacoesEspecificas:
      'Obras próximas ao Maracanã ou em dias de eventos podem enfrentar restrições de trânsito. Agende com antecedência nesses períodos.',
  }),
  createBairro('Vila Isabel', 'zona-norte', {
    descricao:
      'A Vila Isabel é um bairro residencial da Zona Norte com ruas arborizadas, casarões antigos e grande número de reformas. O acesso é relativamente fácil, com ruas que permitem manobra de caminhões médios.',
    desafios: [
      'Ruas residenciais com estacionamento nos dois lados em alguns trechos',
      'Casarões antigos podem gerar entulho pesado de demolição',
      'Árvores e postes reduzem o espaço de manobra em algumas ruas',
    ],
    dicasEntrega: [
      'Agende entregas entre 7h e 9h para evitar congestionamento',
      'Para casarões e demolições, avalie caçamba de 5m³ ou 7m³',
      'Confirme disponibilidade de ponto de apoio na calçada',
    ],
    precoRelativo: 'padrão',
    precoJustificativa:
      'Vila Isabel fica na média da Zona Norte: acesso bom, demanda estável e frota própria atendendo a região com rapidez.',
    landmarks: ['Boulevard 28 de Setembro', 'Praça Presidente Aguirre Cerda', 'Rua Barão de Mesquita'],
    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³', 'Retirada de entulho'],
    tiposObraComuns: ['Reformas de casarões', 'Troca de piso', 'Demolições pequenas'],
    observacoesEspecificas:
      'O bairro tem forte tradição residencial, então o atendimento fora do horário comercial costuma ser mais tranquilo.',
  }),

  // ============================================================
  // ZONA NORTE — bairros da divisão administrativa (66 bairros)
  // ============================================================
  createBairro('Abolição', 'zona-norte'),
  createBairro('Acari', 'zona-norte'),
  createBairro('Água Santa', 'zona-norte'),
  createBairro('Anchieta', 'zona-norte'),
  createBairro('Argentino', 'zona-norte'),
  createBairro('Barros Filho', 'zona-norte'),
  createBairro('Bento Ribeiro', 'zona-norte'),
  createBairro('Bonsucesso', 'zona-norte'),
  createBairro('Brás de Pina', 'zona-norte'),
  createBairro('Cachambi', 'zona-norte'),
  createBairro('Campinho', 'zona-norte'),
  createBairro('Cascadura', 'zona-norte', {
    descricao: "Cascadura é um bairro da Zona Norte do Rio com estação de trem e estação do BRT TransCarioca, comércio movimentado na Avenida Ernani Cardoso e ruas residenciais de casas e vilas.",
    desafios: ["Avenida Ernani Cardoso com trânsito intenso e corredor de ônibus", "Movimento de pedestres no entorno das estações de trem e BRT", "Vilas e ruas internas com pouco espaço para a caçamba"],
    dicasEntrega: ["Evite posicionar a caçamba nas vias do BRT e de ônibus", "Para vilas e ruas estreitas, a caçamba de 3m³ é a mais indicada", "Agende a entrega no início da manhã"],
    landmarks: ["Estação Cascadura (trem)", "Estação Cascadura (BRT TransCarioca)", "Avenida Ernani Cardoso"],
    tiposObraComuns: ["Reformas de casas", "Reformas comerciais", "Obras em vilas"],
    observacoesEspecificas: "Em Cascadura, endereços em vilas precisam de atenção ao posicionamento: informe se a caçamba vai ficar na rua principal ou dentro da vila.",
  }),
  createBairro('Cavalcanti', 'zona-norte'),
  createBairro('Coelho Neto', 'zona-norte'),
  createBairro('Colégio', 'zona-norte'),
  createBairro('Complexo do Alemão', 'zona-norte'),
  createBairro('Cordovil', 'zona-norte'),
  createBairro('Costa Barros', 'zona-norte'),
  createBairro('Del Castilho', 'zona-norte'),
  createBairro('Encantado', 'zona-norte'),
  createBairro('Engenheiro Leal', 'zona-norte'),
  createBairro('Engenho da Rainha', 'zona-norte'),
  createBairro('Engenho de Dentro', 'zona-norte', {
    descricao: "O Engenho de Dentro fica entre o Méier e Piedade, na Zona Norte do Rio, cortado pela linha do trem e conhecido pelo Estádio Nilton Santos. Tem muitas casas antigas e prédios residenciais, com reformas frequentes.",
    desafios: ["Trânsito e restrições no entorno do Estádio Nilton Santos em dias de jogo e eventos", "Ruas próximas à linha férrea com retornos limitados", "Casas antigas com entrada estreita para retirada do entulho"],
    dicasEntrega: ["Evite agendar entrega ou troca em dia de jogo no Nilton Santos", "Para casas antigas, a caçamba de 3m³ facilita o posicionamento na calçada", "Informe se o imóvel fica do lado da linha do trem para definir o melhor acesso"],
    landmarks: ["Estádio Nilton Santos (Engenhão)", "Estação Engenho de Dentro", "Rua Dias da Cruz"],
    tiposObraComuns: ["Reforma de casas antigas", "Troca de piso e revestimento", "Obras em prédios residenciais"],
    observacoesEspecificas: "No Engenho de Dentro, a programação do Estádio Nilton Santos pode mudar o trânsito do bairro. Vale checar a agenda antes de marcar a retirada.",
  }),
  createBairro('Engenho Novo', 'zona-norte'),
  createBairro('Guadalupe', 'zona-norte'),
  createBairro('Higienópolis', 'zona-norte'),
  createBairro('Honório Gurgel', 'zona-norte'),
  createBairro('Inhaúma', 'zona-norte'),
  createBairro('Irajá', 'zona-norte', {
    descricao: "Irajá é um dos bairros mais antigos da Zona Norte do Rio, com grande área residencial, comércio na Avenida Monsenhor Félix e acesso rápido pela Avenida Brasil. Tem estação do Metrô na Linha 2 e muitas casas em reforma.",
    desafios: ["Avenida Brasil e Avenida Monsenhor Félix com trânsito pesado", "Ruas internas residenciais com pouco espaço para manobra", "Grande extensão do bairro, com acessos diferentes conforme a área"],
    dicasEntrega: ["Informe se o imóvel fica perto da Monsenhor Félix ou da Avenida Brasil para planejar a rota", "Para casas, a caçamba de 3m³ ou 5m³ resolve a maioria das reformas", "Agende cedo para evitar o pico da Avenida Brasil"],
    landmarks: ["Avenida Monsenhor Félix", "Estação Irajá (Metrô Linha 2)", "Igreja de Nossa Senhora da Apresentação"],
    tiposObraComuns: ["Reformas de casas", "Construção e ampliação", "Limpeza de terreno"],
    observacoesEspecificas: "O acesso pela Avenida Brasil facilita a logística em Irajá, mas o horário da entrega faz diferença no prazo.",
  }),
  createBairro('Jacaré', 'zona-norte'),
  createBairro('Jacarezinho', 'zona-norte'),
  createBairro('Jardim América', 'zona-norte'),
  createBairro('Lins de Vasconcelos', 'zona-norte'),
  createBairro('Madureira', 'zona-norte', {
    descricao:
      'Madureira é um dos principais polos comerciais e residenciais da Zona Norte, com excelente acesso pela BR-116 e infraestrutura que facilita entregas de caçamba em praticamente toda a região.',
    desafios: [
      'Trânsito pesado nas avenidas principais durante o dia',
      'Comércio intenso pode dificultar a parada para carga e descarga',
      'Áreas mais populosas exigem agendamento preciso',
    ],
    dicasEntrega: [
      'Use a BR-116 e avenidas principais para acesso rápido',
      'Agende fora dos horários de pico do comércio',
      'Para demolições e obras grandes, a caçamba de 7m³ é muito solicitada',
    ],
    precoRelativo: '5-10% abaixo',
    precoJustificativa:
      'Madureira tem um dos melhores custos-benefício do Rio: acesso privilegiado pela BR-116 e proximidade com bases logísticas.',
    landmarks: ['Mercadão de Madureira', 'Estrada do Portela', 'Avenida Ministro Edgard Romero'],
    servicosPopulares: ['Caçamba 5m³', 'Caçamba 7m³'],
    tiposObraComuns: ['Reformas comerciais', 'Demolições', 'Construção civil'],
    observacoesEspecificas:
      'Madureira é ponto de referência logístico para entregas rápidas em toda a Zona Norte e parte da Zona Oeste.',
  }),
  createBairro('Manguinhos', 'zona-norte'),
  createBairro('Maré', 'zona-norte'),
  createBairro('Marechal Hermes', 'zona-norte'),
  createBairro('Maria da Graça', 'zona-norte'),
  createBairro('Méier', 'zona-norte', {
    descricao:
      'O Méier é um dos bairros com melhor custo-benefício para aluguel de caçamba no Rio. Localizado em área de transição com excelente acesso viário, é atendido com rapidez e preços competitivos.',
    desafios: [
      'Trânsito intenso nos horários de pico nas avenidas principais',
      'Comércio intenso exige atenção ao local de posicionamento da caçamba',
    ],
    dicasEntrega: [
      'Aproveite o acesso viário pelas avenidas Brasil e Dom Hélder Câmara',
      'Para comércios, agende entrega antes da abertura das lojas',
      'Caçambas de 5m³ são ideais para reformas comerciais no Méier',
    ],
    precoRelativo: '5-10% abaixo',
    precoJustificativa:
      'O Méier é um dos bairros mais competitivos do Rio: acesso fácil, proximidade de pátios e ruas que permitem manobra sem complicação.',
    landmarks: ['Avenida Dom Hélder Câmara', 'Rua Dias da Cruz', 'Rua São Francisco Xavier'],
    servicosPopulares: ['Caçamba 5m³', 'Caçamba 3m³'],
    tiposObraComuns: ['Reformas comerciais', 'Reformas residenciais', 'Construção de muros'],
    observacoesEspecificas:
      'Pela localização central, o Méier funciona como hub de distribuição para entregas rápidas em toda a Zona Norte.',
  }),
  createBairro('Olaria', 'zona-norte', {
    descricao:
      'A Olaria é um bairro tradicional da Zona Norte, com perfil predominantemente residencial e comercial. Ruas largas na parte baixa e trechos mais estreitos nas áreas de morro.',
    desafios: [
      'Acesso variável: ruas amplas na parte plana e vias estreitas em subidas',
      'Trânsito local intenso em horários comerciais',
      'Algumas áreas exigem caminhões menores',
    ],
    dicasEntrega: [
      'Para morros e subidas, prefira caçamba de 3m³',
      'Na parte plana, caçambas de 5m³ e 7m³ são viáveis',
      'Agende com margem de segurança em dias de chuva forte',
    ],
    precoRelativo: 'padrão',
    precoJustificativa:
      'A Olaria segue a média da Zona Norte: acesso razoável e demanda constante por reformas.',
    landmarks: ['Avenida Pastor Martin Luther King Jr.', 'Rua Cônego Tobias', 'Morro da Olaria'],
    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
    tiposObraComuns: ['Reformas residenciais', 'Comércios locais', 'Demolições pequenas'],
    observacoesEspecificas:
      'Chuvas fortes podem afetar ruas de declividade acentuada. Prefira entregas em dias de tempo firme.',
  }),
  createBairro('Oswaldo Cruz', 'zona-norte'),
  createBairro('Parada de Lucas', 'zona-norte'),
  createBairro('Parque Anchieta', 'zona-norte'),
  createBairro('Parque Colúmbia', 'zona-norte'),
  createBairro('Pavuna', 'zona-norte', {
    descricao: "A Pavuna fica no extremo da Zona Norte do Rio, na divisa com São João de Meriti, e é a última estação da Linha 2 do Metrô. Tem comércio movimentado perto da estação e bairros residenciais de casas no entorno.",
    desafios: ["Comércio e camelôs ocupando calçadas perto da estação", "Trânsito intenso na região central do bairro", "Ruas residenciais estreitas nas partes mais afastadas"],
    dicasEntrega: ["Evite a área central do comércio em horário de pico", "Indique um ponto de referência claro, já que o bairro faz divisa com a Baixada", "Para obras em casas, a caçamba de 3m³ é a mais prática"],
    landmarks: ["Estação Pavuna (Metrô Linha 2)", "Avenida Sargento de Milícias", "Divisa com São João de Meriti"],
    tiposObraComuns: ["Reformas residenciais", "Reformas comerciais", "Limpeza de terreno"],
    observacoesEspecificas: "Na Pavuna, confirme se o endereço fica do lado do Rio de Janeiro: imóveis na divisa com São João de Meriti podem ter regras diferentes.",
  }),
  createBairro('Penha', 'zona-norte', {
    descricao:
      'A Penha é uma região de grande movimentação na Zona Norte, com áreas residenciais, comerciais e industriais. O endereço comercial da CaçambaRápido está localizado na região, o que garante entrega rápida.',
    desafios: [
      'Trânsito intenso na Avenida Brasil e acessos próximos',
      'Mistura de áreas residenciais e industriais exige tipo de caçamba adequado',
      'Logradouros movimentados precisam de agendamento preciso',
    ],
    dicasEntrega: [
      'Como a base da empresa fica na Penha, entregas costumam ser muito rápidas',
      'Para áreas industriais, considere caçambas de 5m³ e 7m³',
      'Residências e vilas: caçamba de 3m³ é mais prática',
    ],
    precoRelativo: '5-10% abaixo',
    precoJustificativa:
      'A Penha é a região de base da CaçambaRápido, o que reduz o frete e permite entrega ágil.',
    landmarks: ['Penha Circular', 'Avenida Brasil', 'Igreja da Penha'],
    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³', 'Caçamba 7m³', 'Retirada de entulho'],
    tiposObraComuns: ['Reformas residenciais', 'Obras comerciais', 'Limpeza pós-obra'],
    observacoesEspecificas:
      'A proximidade com a base de operações torna a Penha um dos bairros com melhor prazo de entrega do Rio.',
  }),
  createBairro('Penha Circular', 'zona-norte'),
  createBairro('Piedade', 'zona-norte', {
    descricao: "Piedade fica na Zona Norte do Rio, entre o Engenho de Dentro, Encantado e Cascadura, com estação de trem e grande área residencial. O bairro abrigava o antigo campus da Universidade Gama Filho e tem muitas casas e prédios em reforma.",
    desafios: ["Ruas próximas à linha do trem com acesso limitado", "Ruas residenciais com carros estacionados dos dois lados", "Casas antigas com entrada estreita"],
    dicasEntrega: ["Informe de que lado da linha do trem fica o imóvel", "A caçamba de 3m³ resolve a maioria das reformas residenciais", "Agende cedo para facilitar o posicionamento na rua"],
    landmarks: ["Estação Piedade", "Antigo campus da Universidade Gama Filho", "Divisa com Engenho de Dentro e Cascadura"],
    tiposObraComuns: ["Reforma de casas antigas", "Obras em prédios", "Limpeza de terreno"],
    observacoesEspecificas: "Em Piedade, a linha do trem divide o bairro: com o lado certo, a rota de entrega fica mais curta.",
  }),
  createBairro('Pilares', 'zona-norte'),
  createBairro('Quintino Bocaiuva', 'zona-norte'),
  createBairro('Ramos', 'zona-norte', {
    descricao:
      'Ramos é um bairro da Zona Norte com características mistas, próximo à Baía de Guanabara e com acesso pela Avenida Brasil. Tem perfil residencial e algumas áreas comerciais.',
    desafios: [
      'Distância um pouco maior de algumas bases logísticas',
      'Ruas menores em trechos residenciais',
      'Trânsito pode ser intenso nos horários de pico',
    ],
    dicasEntrega: [
      'Avenida Brasil é o melhor acesso para entregas rápidas',
      'Para ruas estreitas, use caçamba de 3m³',
      'Comunique-se com antecedência em condomínios',
    ],
    precoRelativo: 'padrão',
    precoJustificativa:
      'Ramos tem preço dentro da média: a Avenida Brasil facilita o acesso, embora alguns trechos residenciais exijam logística extra.',
    landmarks: ['Avenida Brasil', 'Rua das Oficinas', 'Baía de Guanabara'],
    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
    tiposObraComuns: ['Reformas residenciais', 'Comércios de bairro', 'Limpeza de terreno'],
    observacoesEspecificas:
      'A proximidade com a Baía de Guanabara exige cuidado especial com descarte em áreas ambientalmente sensíveis. Use sempre empresa licenciada.',
  }),
  createBairro('Riachuelo', 'zona-norte'),
  createBairro('Ricardo de Albuquerque', 'zona-norte'),
  createBairro('Rocha', 'zona-norte'),
  createBairro('Rocha Miranda', 'zona-norte'),
  createBairro('Sampaio', 'zona-norte'),
  createBairro('São Francisco Xavier', 'zona-norte'),
  createBairro('Todos os Santos', 'zona-norte'),
  createBairro('Tomás Coelho', 'zona-norte'),
  createBairro('Turiaçu', 'zona-norte'),
  createBairro('Vaz Lobo', 'zona-norte'),
  createBairro('Vicente de Carvalho', 'zona-norte', {
    descricao: "Vicente de Carvalho fica na Zona Norte do Rio e é um ponto de integração entre o Metrô (Linha 2) e o BRT TransCarioca. A região mistura comércio forte perto da estação com ruas residenciais de casas e prédios.",
    desafios: ["Movimento intenso de ônibus e pedestres perto da estação do Metrô e do BRT", "Avenida Vicente de Carvalho com trânsito pesado", "Pouca vaga de estacionamento nas ruas próximas ao comércio"],
    dicasEntrega: ["Evite posicionar a caçamba nas vias de ônibus perto da estação", "Prefira entregas no início da manhã", "Nas ruas residenciais, a caçamba de 3m³ ou 5m³ costuma caber sem problema"],
    landmarks: ["Estação Vicente de Carvalho (Metrô e BRT)", "Avenida Vicente de Carvalho", "Carioca Shopping"],
    tiposObraComuns: ["Reformas residenciais", "Reformas de lojas", "Obras em prédios"],
    observacoesEspecificas: "Para endereços perto da estação de Vicente de Carvalho, informe a rua exata: o trânsito muda bastante de um quarteirão para outro.",
  }),
  createBairro('Vigário Geral', 'zona-norte'),
  createBairro('Vila da Penha', 'zona-norte', {
    descricao: "A Vila da Penha é um bairro residencial da Leopoldina, na Zona Norte do Rio, com muitas casas, vilas e condomínios de prédios baixos. O comércio se concentra na Avenida Brás de Pina e no entorno do Carioca Shopping, onde o movimento de carros é intenso durante o dia.",
    desafios: ["Avenida Brás de Pina e Avenida Meriti com trânsito pesado em horário comercial", "Ruas internas residenciais com carros estacionados dos dois lados", "Condomínios que exigem agendamento e autorização para a caçamba"],
    dicasEntrega: ["Para reformas de casa ou apartamento, a caçamba de 3m³ costuma caber na frente do imóvel", "Agende a entrega cedo, antes do pico de movimento no entorno do Carioca Shopping", "Combine com os vizinhos uma vaga livre na rua para posicionar a caçamba"],
    landmarks: ["Carioca Shopping", "Avenida Brás de Pina", "Avenida Meriti"],
    tiposObraComuns: ["Reformas de casas", "Obras em condomínios", "Reformas comerciais na Brás de Pina"],
    observacoesEspecificas: "Na Vila da Penha, a maior parte dos pedidos é de reforma residencial. Avise se a rua for muito estreita para escolhermos o tamanho certo.",
  }),
  createBairro('Vila Kosmos', 'zona-norte'),
  createBairro('Vista Alegre', 'zona-norte', {
    descricao: "Vista Alegre é um bairro pequeno e residencial da Zona Norte do Rio, vizinho de Irajá e da Vila da Penha, com ruas tranquilas, casas e muitas reformas de imóveis antigos.",
    desafios: ["Ruas residenciais estreitas e sem saída", "Pouco espaço na calçada em frente às casas", "Carros estacionados na rua durante todo o dia"],
    dicasEntrega: ["A caçamba de 3m³ é a mais indicada para as ruas internas do bairro", "Deixe a vaga em frente ao imóvel livre na véspera da entrega", "Em obras maiores, combine trocas programadas em vez de uma caçamba maior"],
    landmarks: ["Divisa com Irajá", "Divisa com Vila da Penha"],
    tiposObraComuns: ["Reforma de casas", "Construção de segundo pavimento", "Limpeza de quintal"],
    observacoesEspecificas: "Em Vista Alegre, a maioria das ruas é residencial e calma, o que facilita deixar a caçamba alguns dias sem atrapalhar o trânsito.",
  }),

  // ============================================================
  // ZONA NORTE — Ilhas (15 bairros, exceto Paquetá)
  // ============================================================
  createBairro('Bancários', 'zona-norte'),
  createBairro('Cacuia', 'zona-norte'),
  createBairro('Cidade Universitária', 'zona-norte'),
  createBairro('Cocotá', 'zona-norte'),
  createBairro('Freguesia (Ilha do Governador)', 'zona-norte', {
    descricao: "A Freguesia é um dos bairros da Ilha do Governador, na Zona Norte do Rio, com perfil residencial e casas próximas à orla da Baía de Guanabara. O acesso de caminhões à Ilha passa pelas pontes e pela Estrada do Galeão, o que exige planejar o horário da entrega.",
    desafios: ["Acesso à Ilha concentrado em poucas vias, com retenção nos horários de pico", "Ruas residenciais estreitas perto da orla", "Distância maior em relação aos bairros do continente"],
    dicasEntrega: ["Agende com antecedência para encaixar a entrega fora do pico da Estrada do Galeão", "Informe a rua e um ponto de referência perto da orla para o motorista", "Em casas com garagem, avalie colocar a caçamba no recuo do terreno"],
    landmarks: ["Estrada do Galeão", "Orla da Baía de Guanabara", "Ilha do Governador"],
    tiposObraComuns: ["Reformas de casas", "Limpeza de quintal e terreno", "Pequenas demolições"],
    observacoesEspecificas: "Para a Freguesia e os demais bairros da Ilha do Governador, confirme o endereço completo no pedido para evitar confusão com a Freguesia de Jacarepaguá.",
  }),
  createBairro('Galeão', 'zona-norte'),
  createBairro('Jardim Carioca', 'zona-norte'),
  createBairro('Jardim Guanabara', 'zona-norte'),
  createBairro('Moneró', 'zona-norte'),
  createBairro('Pitangueiras', 'zona-norte'),
  createBairro('Portuguesa', 'zona-norte'),
  createBairro('Praia da Bandeira', 'zona-norte', {
    descricao: "A Praia da Bandeira é um bairro residencial da Ilha do Governador, na Zona Norte do Rio, com casas próximas à orla e ruas tranquilas. A entrega de caçamba depende do acesso à Ilha pelas pontes e pela Estrada do Galeão.",
    desafios: ["Acesso à Ilha concentrado em poucas vias", "Ruas estreitas e curtas perto da orla", "Pouco espaço em frente às casas para posicionar a caçamba"],
    dicasEntrega: ["Agende com antecedência para encaixar a rota da Ilha", "Prefira a caçamba de 3m³ nas ruas mais estreitas", "Informe um ponto de referência próximo da orla"],
    landmarks: ["Ilha do Governador", "Orla da Baía de Guanabara", "Estrada do Galeão"],
    tiposObraComuns: ["Reformas de casas", "Limpeza de quintal", "Pequenas obras"],
    observacoesEspecificas: "Para a Praia da Bandeira, combinar a entrega junto com outras rotas da Ilha do Governador costuma agilizar o prazo.",
  }),
  createBairro('Ribeira', 'zona-norte'),
  createBairro('Tauá', 'zona-norte'),
  createBairro('Zumbi', 'zona-norte'),

  // ============================================================
  // ZONA SUL (17 bairros)
  // ============================================================
  createBairro('Botafogo', 'zona-sul', {
    descricao:
      'Botafogo é um bairro de transição entre a Zona Sul e o Centro, com perfil misto residencial e comercial, ruas movimentadas e grande número de reformas.',
    desafios: [
      'Trânsito intenso ao longo do dia nas avenidas principais',
      'Ruas estreitas em trechos residenciais',
      'Condomínios com regras de horário para carga e descarga',
      'Área de grande movimentação de pedestres',
    ],
    dicasEntrega: [
      'Agende entregas fora dos horários de pico',
      'Para apartamentos, prefira caçamba de 3m³',
      'Para comércios e reformas maiores, avalie caçamba de 5m³',
      'Sinalize bem a área para segurança de pedestres',
    ],
    precoRelativo: '10-15% acima',
    precoJustificativa:
      'Botafogo segue a média da Zona Sul: frete e logística mais complexos pela localização e trânsito.',
    landmarks: ['Praia de Botafogo', 'Pão de Açúcar', 'Avenida Rio Branco', 'Rua Real Grandeza'],
    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
    tiposObraComuns: ['Reformas residenciais', 'Reformas comerciais', 'Demolições pequenas'],
    observacoesEspecificas:
      'A proximidade com o Centro e avenidas principais pode facilitar o acesso, mas o trânsito exige horários estratégicos.',
  }),
  createBairro('Catete', 'zona-sul', {
    descricao: "O Catete fica na Zona Sul do Rio, entre o Flamengo e a Glória, com prédios antigos, muitos apartamentos pequenos e comércio na Rua do Catete. É um bairro de reformas constantes de apartamentos e salas comerciais.",
    desafios: ["Rua do Catete com trânsito intenso e corredor de ônibus", "Prédios antigos sem garagem e com regras de condomínio para obras", "Pouquíssimas vagas de estacionamento nas ruas transversais"],
    dicasEntrega: ["A caçamba de 3m³ é a mais indicada para as ruas do Catete", "Combine com o síndico o horário de descida do entulho", "Prefira entregas no início da manhã, antes do movimento da Rua do Catete"],
    landmarks: ["Museu da República (Palácio do Catete)", "Rua do Catete", "Estação Catete (Metrô)"],
    tiposObraComuns: ["Reforma de apartamentos", "Reforma de salas comerciais", "Troca de piso e banheiro"],
    observacoesEspecificas: "No Catete, muitas obras são em prédios antigos: informe o andar e se há elevador de serviço para planejar a retirada.",
  }),
  createBairro('Copacabana', 'zona-sul', {
    descricao:
      'Copacabana é um dos bairros mais conhecidos do Rio, com alto número de reformas em apartamentos e comércios. A logística de caçamba é desafiadora por causa das ruas estreitas, trânsito e restrições de carga e descarga.',
    desafios: [
      'Ruas estreitas e trânsito intenso durante todo o dia',
      'Pouco espaço para estacionar caçamba na calçada',
      'Condomínios rigorosos exigem autorização prévia',
      'Restrições de carga e descarga em horários comerciais',
      'Taxa de permanência em calçada pode ser cobrada pela prefeitura',
    ],
    dicasEntrega: [
      'Prefira caçambas de 3m³ — cabem em vagas de garagem e corredores estreitos',
      'Agende entrega entre 7h e 9h para evitar trânsito',
      'Comunique o síndico com antecedência e peça autorização por escrito',
      'Empresas com caminhões menores (3/4) são mais ágeis nas ruas estreitas',
    ],
    precoRelativo: '10-15% acima',
    precoJustificativa:
      'Copacabana é um dos bairros com maior custo logístico do Rio: frete elevado, restrições de horário e dificuldade de manobra.',
    landmarks: ['Avenida Atlântica', 'Copacabana Palace', 'Forte de Copacabana', 'Posto 6'],
    servicosPopulares: ['Caçamba 3m³', 'Retirada de entulho'],
    tiposObraComuns: ['Reformas de apartamentos', 'Demolições pequenas', 'Troca de piso'],
    observacoesEspecificas:
      'Muitos prédios não possuem área de descarte interna, exigindo que a caçamba fique na calçada. Verifique a necessidade de autorização da prefeitura.',
  }),
  createBairro('Cosme Velho', 'zona-sul', {
    descricao: "O Cosme Velho é um bairro residencial e tranquilo da Zona Sul do Rio, ao pé do Corcovado, com casas, vilas e ruas em aclive. É onde fica a estação do Trem do Corcovado e o Largo do Boticário.",
    desafios: ["Ruas em aclive e com curvas", "Movimento de turistas perto da estação do Trem do Corcovado", "Casas com acesso estreito e pouco espaço na frente"],
    dicasEntrega: ["Prefira a caçamba de 3m³ nas ruas mais íngremes", "Evite o horário de maior movimento de turistas na Rua Cosme Velho", "Sinalize bem a caçamba em trechos de curva"],
    landmarks: ["Estação do Trem do Corcovado", "Largo do Boticário", "Rua Cosme Velho"],
    tiposObraComuns: ["Reforma de casas", "Reforma de casarões antigos", "Limpeza de quintal"],
    observacoesEspecificas: "No Cosme Velho, informe se o imóvel fica em ladeira para escolhermos a melhor forma de posicionar a caçamba.",
  }),
  createBairro('Flamengo', 'zona-sul', {
    descricao:
      'Flamengo é um bairro residencial tradicional da Zona Sul, com avenidas largas na orla e ruas mais estreitas no interior. Tem forte demanda por reformas e retrofit de apartamentos antigos.',
    desafios: [
      'Ruas estreitas em trechos residenciais',
      'Estacionamento disputado nas ruas internas',
      'Condomínios antigos com acesso de serviço limitado',
      'Trânsito intenso nas avenidas próximas à praia',
    ],
    dicasEntrega: [
      'Para prédios antigos, verifique acesso de serviço e dimensões do elevador de carga',
      'Caçamba de 3m³ é a mais prática para a maioria das reformas',
      'Agende pela manhã para evitar congestionamento',
    ],
    precoRelativo: '10-15% acima',
    precoJustificativa:
      'Flamengo tem custo dentro da faixa da Zona Sul: frete elevado pela distância, mas com acesso viário relativamente organizado.',
    landmarks: ['Aterro do Flamengo', 'Praia do Flamengo', 'Rua Marquês de Abrantes', 'Largo do Machado'],
    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
    tiposObraComuns: ['Retrofit de apartamentos', 'Reformas residenciais', 'Demolições pequenas'],
    observacoesEspecificas:
      'Prédios antigos podem não ter área de descarte adequada. Avalie a possibilidade de retirada de entulho como alternativa.',
  }),
  createBairro('Gávea', 'zona-sul', {
    descricao: "A Gávea é um bairro da Zona Sul do Rio entre o Jardim Botânico, a Lagoa e o Leblon, com a PUC-Rio, o Planetário e o Jockey Club. Tem prédios residenciais de alto padrão, casas e muito movimento de estudantes.",
    desafios: ["Trânsito intenso na Rua Marquês de São Vicente", "Condomínios com regras rígidas para obras e caçambas", "Pouca vaga nas ruas próximas à PUC-Rio"],
    dicasEntrega: ["Agende com o condomínio e confirme a autorização por escrito", "Prefira entregas cedo, antes do movimento da PUC", "A caçamba de 3m³ costuma ser a mais aceita pelos condomínios"],
    landmarks: ["PUC-Rio", "Planetário da Gávea", "Jockey Club (Hipódromo da Gávea)"],
    tiposObraComuns: ["Reforma de apartamentos", "Reforma de casas", "Obras comerciais"],
    observacoesEspecificas: "Na Gávea, a maioria dos condomínios pede agendamento prévio: avise com antecedência para não atrasar a obra.",
  }),
  createBairro('Humaitá', 'zona-sul', {
    descricao: "O Humaitá fica na Zona Sul do Rio, entre Botafogo, a Lagoa e o Jardim Botânico, com prédios residenciais, vilas e restaurantes. A Cobal do Humaitá é um dos pontos de referência do bairro.",
    desafios: ["Rua Humaitá com trânsito pesado ligando Botafogo à Lagoa", "Vilas e ruas internas estreitas", "Vagas disputadas por causa do comércio e dos restaurantes"],
    dicasEntrega: ["Para vilas, combine a caçamba na rua principal", "A caçamba de 3m³ é a mais indicada", "Agende fora do horário de pico da Rua Humaitá"],
    landmarks: ["Cobal do Humaitá", "Rua Humaitá", "Divisa com Botafogo e Lagoa"],
    tiposObraComuns: ["Reforma de apartamentos", "Reforma de casas de vila", "Reforma de restaurantes"],
    observacoesEspecificas: "No Humaitá, imóveis dentro de vilas precisam de atenção ao ponto de apoio da caçamba: mande a localização no WhatsApp.",
  }),
  createBairro('Ipanema', 'zona-sul', {
    descricao:
      'Ipanema é um bairro nobre da Zona Sul com grande densidade de apartamentos, comércios de luxo e reformas constantes. O espaço para caçamba é limitado e a fiscalização é rigorosa.',
    desafios: [
      'Ruas estreitas e estacionamento disputado',
      'Condomínios de alto padrão com regras rigorosas',
      'Restrições de carga e descarga em horários específicos',
      'Trânsito de pedestres intenso exige segurança reforçada',
    ],
    dicasEntrega: [
      'Caçamba de 3m³ é praticamente obrigatória em Ipanema',
      'Agende com pelo menos 48h de antecedência para liberar condomínio',
      'Use sinalização com cones e fitas zebradas',
      'Prefira entregas no início da manhã',
    ],
    precoRelativo: '10-15% acima',
    precoJustificativa:
      'Ipanema tem custo logístico elevado: acesso complicado, condomínios exigentes e alta demanda por reformas de apartamentos.',
    landmarks: ['Praia de Ipanema', 'Lagoa Rodrigo de Freitas', 'Rua Farme de Amoedo', 'Garota de Ipanema'],
    servicosPopulares: ['Caçamba 3m³', 'Retirada de entulho'],
    tiposObraComuns: ['Reformas de apartamentos', 'Comércios de luxo', 'Demolições pequenas'],
    observacoesEspecificas:
      'A proximidade com a Lagoa e áreas de proteção ambiental exige atenção redobrada com o descarte. Empresa licenciada é essencial.',
  }),
  createBairro('Jardim Botânico', 'zona-sul', {
    descricao: "O Jardim Botânico é um bairro residencial da Zona Sul do Rio, ao lado da Lagoa Rodrigo de Freitas, com casas, vilas e prédios baixos. Leva o nome do Jardim Botânico do Rio e abriga o Parque Lage.",
    desafios: ["Rua Jardim Botânico com trânsito intenso nos dois sentidos", "Ruas internas estreitas e arborizadas", "Condomínios e vilas com regras para obras"],
    dicasEntrega: ["Evite posicionar a caçamba na Rua Jardim Botânico; prefira as transversais", "A caçamba de 3m³ facilita a manobra nas ruas arborizadas", "Agende com antecedência com o condomínio"],
    landmarks: ["Jardim Botânico do Rio de Janeiro", "Parque Lage", "Rua Jardim Botânico"],
    tiposObraComuns: ["Reforma de casas", "Reforma de apartamentos", "Limpeza de jardim e quintal"],
    observacoesEspecificas: "No Jardim Botânico, galhos e restos de poda também podem ir na caçamba: avise o tipo de resíduo no pedido.",
  }),
  createBairro('Lagoa', 'zona-sul', {
    descricao: "A Lagoa é um bairro de alto padrão da Zona Sul do Rio, em volta da Lagoa Rodrigo de Freitas, com prédios residenciais e condomínios exigentes. As obras costumam ser reformas completas de apartamentos.",
    desafios: ["Avenida Epitácio Pessoa com trânsito intenso e pouco espaço para parar", "Condomínios com regras rígidas de horário e local da caçamba", "Fiscalização frequente de trânsito e estacionamento"],
    dicasEntrega: ["Confirme com a administração do prédio onde a caçamba pode ficar", "Agende entregas e trocas no início da manhã", "A caçamba de 3m³ é a mais aceita pelos condomínios"],
    landmarks: ["Lagoa Rodrigo de Freitas", "Avenida Epitácio Pessoa", "Parque do Cantagalo"],
    tiposObraComuns: ["Reforma completa de apartamentos", "Troca de piso e revestimento", "Demolição de paredes internas"],
    observacoesEspecificas: "Na Lagoa, a autorização do condomínio é o que mais define o prazo: envie o contato da administração junto com o pedido.",
  }),
  createBairro('Laranjeiras', 'zona-sul', {
    descricao:
      'Laranjeiras é um bairro residencial nobre e tranquilo da Zona Sul, com ruas arborizadas, casarões e prédios históricos. As reformas são frequentes, mas a logística exige cuidado com o espaço.',
    desafios: [
      'Ruas residenciais estreitas e arborizadas',
      'Ladeiras e declives em vários trechos',
      'Fiscalização de estacionamento rigorosa',
      'Preservação de imóveis históricos exige cuidado',
    ],
    dicasEntrega: [
      'Caçamba de 3m³ é a mais indicada para ruas estreitas',
      'Em ladeiras, posicione a caçamba em local plano e firme',
      'Agende com antecedência para evitar conflitos com estacionamento rotativo',
    ],
    precoRelativo: '10-15% acima',
    precoJustificativa:
      'Laranjeiras tem custo típico da Zona Sul: ruas estreitas e declives aumentam a complexidade da entrega.',
    landmarks: ['Rua Ipiranga', 'Largo da Segunda-Feira', 'Palácio Guanabara', 'Praça São Salvador'],
    servicosPopulares: ['Caçamba 3m³', 'Retirada de entulho'],
    tiposObraComuns: ['Reformas de casarões', 'Retrofit de apartamentos', 'Demolições pequenas'],
    observacoesEspecificas:
      'A preservação de imóveis históricos exige cuidado na remoção de entulho pesado e na manobra de veículos.',
  }),
  createBairro('Leblon', 'zona-sul', {
    descricao:
      'Leblon é um dos bairros mais valorizados do Rio, com edifícios residenciais de alto padrão, comércios sofisticados e reformas frequentes. A logística de caçamba exige discrição e pontualidade.',
    desafios: [
      'Ruas estreitas e trânsito intenso',
      'Condomínios com regras rigorosas de acesso',
      'Exigência de horários específicos para carga e descarga',
      'Alta visibilidade — qualquer problema de logística é notado',
    ],
    dicasEntrega: [
      'Use caçamba de 3m³ para caber em áreas de descarte internas',
      'Agende com antecedência e confirme autorização do condomínio',
      'Mantenha a área limpa e sinalizada durante a permanência',
      'Prefira caminhões menores para manobra nas ruas do bairro',
    ],
    precoRelativo: '10-15% acima',
    precoJustificativa:
      'Leblon tem preço acima da média pela dificuldade logística, distância das bases da Zona Norte e alta exigência dos condomínios.',
    landmarks: ['Praia do Leblon', 'Shopping Leblon', 'Rua Dias Ferreira', 'Lagoa Rodrigo de Freitas'],
    servicosPopulares: ['Caçamba 3m³', 'Retirada de entulho'],
    tiposObraComuns: ['Reformas de apartamentos de luxo', 'Comércios sofisticados', 'Demolições pequenas'],
    observacoesEspecificas:
      'Edifícios de alto padrão costumam exigir seguro de responsabilidade civil e comprovação de licença ambiental.',
  }),
  createBairro('Leme', 'zona-sul', {
    descricao: "O Leme é um bairro pequeno da Zona Sul do Rio, no início da orla de Copacabana, entre a Avenida Princesa Isabel e a Pedra do Leme. Tem prédios residenciais, hotéis e ruas curtas.",
    desafios: ["Avenida Atlântica e Avenida Princesa Isabel com trânsito intenso", "Ruas curtas e com poucas vagas", "Prédios sem garagem e com regras de condomínio"],
    dicasEntrega: ["A caçamba de 3m³ é a mais indicada para as ruas do Leme", "Evite a orla em fins de semana e feriados", "Combine com o síndico o horário de retirada do entulho"],
    landmarks: ["Pedra do Leme", "Forte Duque de Caxias", "Avenida Princesa Isabel"],
    tiposObraComuns: ["Reforma de apartamentos", "Reforma de hotéis e pousadas", "Troca de piso e banheiro"],
    observacoesEspecificas: "No Leme, o espaço é curto: avise se o prédio tem área de carga e descarga própria.",
  }),
  createBairro('Rocinha', 'zona-sul', {
    descricao: "A Rocinha fica entre a Gávea e São Conrado, na Zona Sul do Rio, e é cortada pela Estrada da Gávea. A maior parte das casas fica em becos e vielas onde o caminhão não entra.",
    desafios: ["Becos e vielas sem acesso para caminhão", "Estrada da Gávea com trânsito intenso e curvas", "Pouco espaço para deixar a caçamba na via principal"],
    dicasEntrega: ["A caçamba precisa ficar em ponto com acesso pela Estrada da Gávea", "Planeje o transporte do entulho até a caçamba", "Prefira a caçamba de 3m³"],
    landmarks: ["Estrada da Gávea", "Divisa com Gávea e São Conrado", "Autoestrada Lagoa-Barra"],
    tiposObraComuns: ["Reforma de casas", "Construção de lajes", "Pequenas demolições"],
    observacoesEspecificas: "Na Rocinha, mande a localização exata pelo WhatsApp para combinarmos um ponto de entrega acessível ao caminhão.",
  }),
  createBairro('São Conrado', 'zona-sul', {
    descricao: "São Conrado fica na Zona Sul do Rio, entre o Vidigal e a Barra, com condomínios de alto padrão, casas e a praia onde pousam as asas-deltas que saem da Pedra Bonita. O acesso é pela Autoestrada Lagoa-Barra e pela Avenida Niemeyer.",
    desafios: ["Condomínios com controle de acesso e regras para caminhões", "Autoestrada Lagoa-Barra com trânsito pesado no pico", "Casas em encosta com acesso íngreme"],
    dicasEntrega: ["Libere o acesso na portaria antes da entrega", "Para casas grandes, avalie a caçamba de 5m³", "Agende fora do pico da Lagoa-Barra"],
    landmarks: ["Pedra Bonita (rampa de voo livre)", "Fashion Mall", "Autoestrada Lagoa-Barra"],
    tiposObraComuns: ["Reforma de casas", "Reforma de apartamentos", "Obras em condomínios"],
    observacoesEspecificas: "Em São Conrado, informe o nome do condomínio e o contato da portaria no pedido para agilizar a entrada do caminhão.",
  }),
  createBairro('Urca', 'zona-sul', {
    descricao: "A Urca é um bairro residencial e tranquilo da Zona Sul do Rio, aos pés do Pão de Açúcar, com casas, prédios baixos e áreas militares. As ruas são estreitas e o bairro tem uma única entrada pela Avenida Pasteur.",
    desafios: ["Ruas estreitas e com muitas casas coladas", "Acesso ao bairro concentrado pela Avenida Pasteur", "Movimento de turistas perto do bondinho do Pão de Açúcar"],
    dicasEntrega: ["A caçamba de 3m³ é a mais indicada para as ruas da Urca", "Evite o horário de maior movimento de turistas na Praia Vermelha", "Combine com vizinhos uma vaga livre na rua"],
    landmarks: ["Pão de Açúcar", "Praia Vermelha", "Avenida Pasteur"],
    tiposObraComuns: ["Reforma de casas", "Reforma de apartamentos", "Pequenas obras"],
    observacoesEspecificas: "Na Urca, as ruas são estreitas: informe a largura aproximada da rua para definirmos o melhor posicionamento.",
  }),
  createBairro('Vidigal', 'zona-sul', {
    descricao: "O Vidigal fica na Zona Sul do Rio, entre o Leblon e São Conrado, na encosta do Morro Dois Irmãos. O acesso principal é pela Avenida Niemeyer e as ruas sobem o morro com curvas fechadas e pouca largura.",
    desafios: ["Ladeiras íngremes e ruas estreitas na subida do morro", "Avenida Niemeyer com trânsito intenso e pouco espaço para parar", "Pontos onde o caminhão não consegue subir"],
    dicasEntrega: ["Confirme antes se o caminhão chega até o endereço", "Nas partes altas, a caçamba de 3m³ é a única opção viável", "Planeje o transporte do entulho até um ponto de acesso do caminhão"],
    landmarks: ["Avenida Niemeyer", "Morro Dois Irmãos", "Divisa com Leblon e São Conrado"],
    tiposObraComuns: ["Reformas de casas", "Pequenas demolições", "Reformas de pousadas e comércios"],
    observacoesEspecificas: "No Vidigal, mande a localização exata pelo WhatsApp para avaliarmos o acesso antes de confirmar a entrega.",
  }),

  // ============================================================
  // ZONA SUDOESTE — Lei 2025 (21 bairros)
  // ============================================================
  createBairro('Anil', 'zona-sudoeste', {
    descricao: "O Anil fica em Jacarepaguá, na Zona Sudoeste do Rio, entre a Freguesia e a Gardênia Azul, com casas, condomínios e prédios novos. A Estrada de Jacarepaguá é o principal eixo do bairro.",
    desafios: ["Estrada de Jacarepaguá com trânsito pesado no pico", "Condomínios com controle de acesso", "Ruas internas sem saída e estreitas"],
    dicasEntrega: ["Libere a entrada do caminhão na portaria do condomínio", "Para casas, a caçamba de 3m³ ou 5m³ costuma bastar", "Agende fora do pico da Estrada de Jacarepaguá"],
    landmarks: ["Estrada de Jacarepaguá", "Divisa com Freguesia", "Divisa com Gardênia Azul"],
    tiposObraComuns: ["Reforma de casas", "Obras em condomínios", "Construção e ampliação"],
    observacoesEspecificas: "No Anil, informe se o imóvel fica em condomínio fechado e o nome da rua interna.",
  }),
  createBairro('Barra da Tijuca', 'zona-sudoeste', {
    descricao:
      'A Barra da Tijuca é a região com maior volume de obras da Zona Sudoeste do Rio. Ruas largas, condomínios fechados e muitas demolições e construções fazem da caçamba de 5m³ e 7m³ as mais solicitadas.',
    desafios: [
      'Distância maior dos pátios centrais, o que eleva o frete',
      'Trânsito pesado na Avenida das Américas em horários de pico',
      'Condomínios fechados com controle de acesso rigoroso',
      'Obras grandes exigem logística de múltiplas caçambas',
    ],
    dicasEntrega: [
      'Contrate empresas que atendam a Barra com frequência para reduzir frete',
      'Para condomínios, libere acesso na portaria com antecedência',
      'Obras grandes podem negociar pacotes de múltiplas caçambas com desconto',
      'Caçambas de 5m³ e 7m³ são as mais comuns na região',
    ],
    precoRelativo: '10-15% acima',
    precoJustificativa:
      'A Barra tem frete elevado pela distância, mas a alta concorrência e o volume de obras compensam parcialmente o custo.',
    landmarks: ['Avenida das Américas', 'Praia da Barra', 'Shopping Barra', 'Cidade das Artes'],
    servicosPopulares: ['Caçamba 5m³', 'Caçamba 7m³', 'Retirada de entulho'],
    tiposObraComuns: ['Construção de casas', 'Demolições', 'Reformas de condomínios'],
    observacoesEspecificas:
      'A Barra é o bairro com maior demanda por caçambas de grande porte no Rio. Para obras longas, pacotes mensais costumam ser mais vantajosos.',
  }),
  createBairro('Barra Olímpica', 'zona-sudoeste', {
    descricao: "A Barra Olímpica é um bairro novo da Zona Sudoeste do Rio, criado em torno do Parque Olímpico e da Avenida Abelardo Bueno. Tem grandes condomínios de prédios e muitas obras de acabamento em apartamentos novos.",
    desafios: ["Condomínios grandes com regras de horário e área de carga", "Avenida Abelardo Bueno com trânsito intenso em dias de evento", "Distância entre a portaria e as torres em alguns condomínios"],
    dicasEntrega: ["Confirme com a administração o local da caçamba dentro do condomínio", "Evite dias de evento no Parque Olímpico", "A caçamba de 3m³ atende a maioria das reformas de apartamento"],
    landmarks: ["Parque Olímpico", "Avenida Abelardo Bueno"],
    tiposObraComuns: ["Acabamento de apartamentos novos", "Reforma de apartamentos", "Troca de piso e revestimento"],
    observacoesEspecificas: "Na Barra Olímpica, quase todas as entregas são em condomínio: envie o contato da administração junto com o pedido.",
  }),
  createBairro('Camorim', 'zona-sudoeste', {
    descricao: "O Camorim fica na Zona Sudoeste do Rio, junto ao Parque Estadual da Pedra Branca, com casas, sítios e condomínios em expansão. Abriga a capela histórica de São Gonçalo do Amarante.",
    desafios: ["Ruas sem asfalto ou estreitas nas áreas mais afastadas", "Proximidade de área de proteção ambiental", "Distância maior em relação aos pátios centrais"],
    dicasEntrega: ["Informe se a rua é asfaltada para avaliarmos o acesso", "Para terrenos grandes, avalie a caçamba de 5m³ ou 7m³", "Agende com antecedência por causa da distância"],
    landmarks: ["Parque Estadual da Pedra Branca", "Igreja de São Gonçalo do Amarante", "Estrada do Camorim"],
    tiposObraComuns: ["Construção de casas", "Limpeza de terreno", "Obras em sítios"],
    observacoesEspecificas: "No Camorim, entulho de obra e restos de vegetação devem ser separados: avise o tipo de resíduo no pedido.",
  }),
  createBairro('Cidade de Deus', 'zona-sudoeste', {
    descricao: "A Cidade de Deus fica em Jacarepaguá, na Zona Sudoeste do Rio, próxima à Linha Amarela, com casas e prédios de conjunto habitacional e muitas obras de ampliação.",
    desafios: ["Ruas internas estreitas e muito ocupadas", "Pouco espaço na frente das casas", "Trânsito intenso nas vias de acesso"],
    dicasEntrega: ["A caçamba de 3m³ é a mais indicada", "Combine um ponto de entrega numa rua mais larga", "Agende no início da manhã"],
    landmarks: ["Linha Amarela", "Divisa com Freguesia e Taquara"],
    tiposObraComuns: ["Ampliação de casas", "Construção de lajes", "Reformas residenciais"],
    observacoesEspecificas: "Na Cidade de Deus, mande a localização pelo WhatsApp para combinarmos o melhor ponto de entrega.",
  }),
  createBairro('Curicica', 'zona-sudoeste', {
    descricao: "Curicica fica em Jacarepaguá, na Zona Sudoeste do Rio, cortada pela Estrada dos Bandeirantes e pelo BRT TransOlímpica. É onde ficam os Estúdios Globo e mistura condomínios, casas e áreas em expansão.",
    desafios: ["Estrada dos Bandeirantes com trânsito pesado em horário de pico", "Condomínios com controle de acesso para caminhões", "Obras de construção e ampliação gerando muito volume de entulho"],
    dicasEntrega: ["Libere o acesso na portaria do condomínio antes da entrega", "Para construção e ampliação, avalie a caçamba de 5m³ ou 7m³", "Agende fora do pico da Estrada dos Bandeirantes"],
    landmarks: ["Estúdios Globo", "Estrada dos Bandeirantes", "BRT TransOlímpica"],
    tiposObraComuns: ["Construção de casas", "Obras em condomínios", "Limpeza de terreno"],
    observacoesEspecificas: "Em Curicica, muitos endereços ficam dentro de condomínios: informe o nome do condomínio e o número do lote no pedido.",
  }),
  createBairro('Freguesia', 'zona-sudoeste', {
    descricao:
      'A Freguesia (Jacarepaguá) é uma região residencial e comercial em expansão na Zona Sudoeste, com ruas largas, condomínios e muitas reformas. É um dos pontos mais acessíveis da região.',
    desafios: [
      'Crescimento rápido pode gerar obras simultâneas e concorrência por caçambas',
      'Condomínios fechados exigem liberação prévia na portaria',
      'Algumas ruas ainda em urbanização podem dificultar acesso',
    ],
    dicasEntrega: [
      'A Freguesia é uma das regiões de melhor acesso na Zona Sudoeste',
      'Para reformas residenciais, caçamba de 5m³ é o mais solicitado',
      'Para condomínios, agende com a portaria com antecedência',
    ],
    precoRelativo: 'padrão',
    precoJustificativa:
      'A Freguesia tem preço competitivo para a Zona Sudoeste: boa infraestrutura, acesso viário em desenvolvimento e alta demanda.',
    landmarks: ['Avenida Geremário Dantas', 'Rua Cândido Benício', 'Estrada dos Bandeirantes'],
    servicosPopulares: ['Caçamba 5m³', 'Caçamba 3m³'],
    tiposObraComuns: ['Reformas residenciais', 'Comércios locais', 'Construção de casas'],
    observacoesEspecificas:
      'A região está em forte expansão. Reservar caçamba com antecedência garante disponibilidade em períodos de pico.',
  }),
  createBairro('Gardênia Azul', 'zona-sudoeste', {
    descricao: "A Gardênia Azul é um bairro residencial de Jacarepaguá, na Zona Sudoeste do Rio, entre o Anil e Rio das Pedras, perto da Linha Amarela. Tem casas, pequenos prédios e muitas reformas.",
    desafios: ["Ruas residenciais estreitas", "Trânsito intenso nas saídas para a Linha Amarela", "Pouca vaga em frente às casas"],
    dicasEntrega: ["A caçamba de 3m³ resolve a maioria das obras", "Deixe a vaga livre na véspera da entrega", "Agende fora do horário de pico"],
    landmarks: ["Linha Amarela", "Divisa com Anil", "Divisa com Rio das Pedras"],
    tiposObraComuns: ["Reforma de casas", "Ampliação e construção", "Limpeza de quintal"],
    observacoesEspecificas: "Na Gardênia Azul, informe um ponto de referência próximo para o motorista localizar a rua com facilidade.",
  }),
  createBairro('Grumari', 'zona-sudoeste', {
    descricao: "Grumari é uma área de proteção ambiental na Zona Sudoeste do Rio, com praias, poucas casas e acesso pela Estrada do Grumari. Obras na região têm regras ambientais mais rígidas.",
    desafios: ["Área de proteção ambiental com regras para obras", "Estrada estreita e com curvas", "Distância grande dos pátios"],
    dicasEntrega: ["Confirme se a obra tem autorização para a área", "Agende com bastante antecedência", "Prefira a caçamba de 3m³ pelo acesso estreito"],
    landmarks: ["Praia de Grumari", "Estrada do Grumari"],
    tiposObraComuns: ["Pequenas reformas", "Manutenção de casas e quiosques", "Limpeza de terreno"],
    observacoesEspecificas: "Em Grumari, o descarte correto com destinação documentada é ainda mais importante por ser área de proteção ambiental.",
  }),
  createBairro('Itanhangá', 'zona-sudoeste', {
    descricao: "O Itanhangá fica na Zona Sudoeste do Rio, entre a Barra e São Conrado, com casas grandes, condomínios e o Itanhangá Golf Club. O acesso principal é pela Estrada da Barra da Tijuca.",
    desafios: ["Estrada da Barra da Tijuca com trânsito pesado", "Condomínios fechados com controle de acesso", "Casas em encosta com acesso íngreme"],
    dicasEntrega: ["Libere o acesso na portaria antes da entrega", "Para casas grandes, avalie a caçamba de 5m³", "Agende fora do pico"],
    landmarks: ["Itanhangá Golf Club", "Estrada da Barra da Tijuca"],
    tiposObraComuns: ["Reforma de casas", "Construção", "Obras em condomínios"],
    observacoesEspecificas: "No Itanhangá, informe o nome do condomínio e se a rua é em subida para planejarmos o acesso do caminhão.",
  }),
  createBairro('Jacarepaguá', 'zona-sudoeste', {
    descricao:
      'Jacarepaguá é uma região extensa e em crescimento na Zona Sudoeste, misturando áreas residenciais, comerciais e industriais. Tem acesso facilitado pela Avenida Nelson Cardoso e pela Transolímpica.',
    desafios: [
      'Bairro grande e fragmentado — prazo pode variar conforme o sub-bairro',
      'Áreas industriais exigem caçambas maiores',
      'Condomínios fechados são comuns em vários trechos',
    ],
    dicasEntrega: [
      'Informe o sub-bairro exato (Pechincha, Tanque, Freguesia, Cidade de Deus etc.)',
      'Para áreas industriais, use caçamba de 7m³',
      'Para condomínios e ruas residenciais, 3m³ e 5m³ são mais práticas',
    ],
    precoRelativo: 'padrão',
    precoJustificativa:
      'Jacarepaguá tem preço competitivo para a Zona Sudoeste: boa infraestrutura viária e proximidade com outras bases logísticas.',
    landmarks: ['Avenida Nelson Cardoso', 'Transolímpica', 'Pechincha', 'Tanque', 'Cidade de Deus'],
    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³', 'Caçamba 7m³'],
    tiposObraComuns: ['Reformas residenciais', 'Obras comerciais', 'Demolições'],
    observacoesEspecificas:
      'A região é muito extensa. Informar o sub-bairro exato ajuda a calcular o prazo e o frete com precisão.',
  }),
  createBairro('Joá', 'zona-sudoeste', {
    descricao: "O Joá é um bairro pequeno e exclusivo da Zona Sudoeste do Rio, com casas em encosta voltadas para o mar, entre São Conrado e a Barra, acessado pela Estrada do Joá.",
    desafios: ["Ruas em encosta, estreitas e com curvas fechadas", "Pouco espaço para parar o caminhão", "Casas com acesso por escadas ou rampas"],
    dicasEntrega: ["A caçamba de 3m³ é a mais viável nas ruas do Joá", "Confirme antes o ponto exato de apoio", "Planeje o transporte do entulho até a rua"],
    landmarks: ["Estrada do Joá", "Pedra da Joatinga", "Elevado do Joá"],
    tiposObraComuns: ["Reforma de casas", "Reforma de áreas externas", "Pequenas demolições"],
    observacoesEspecificas: "No Joá, mande fotos da rua pelo WhatsApp para avaliarmos o acesso antes da entrega.",
  }),
  createBairro('Pechincha', 'zona-sudoeste', {
    descricao: "O Pechincha fica em Jacarepaguá, na Zona Sudoeste do Rio, entre a Freguesia, a Taquara e o Tanque, com muitos prédios, condomínios e comércio de bairro.",
    desafios: ["Trânsito intenso nas vias principais de Jacarepaguá", "Condomínios com regras de horário para obras", "Ruas residenciais com carros estacionados"],
    dicasEntrega: ["Combine com o condomínio o local da caçamba", "A caçamba de 3m³ costuma ser suficiente para apartamentos", "Agende no início da manhã"],
    landmarks: ["Divisa com Freguesia", "Divisa com Taquara", "Divisa com Tanque"],
    tiposObraComuns: ["Reforma de apartamentos", "Reforma de casas", "Obras em condomínios"],
    observacoesEspecificas: "No Pechincha, a maior parte das obras é em condomínio: confirme a autorização antes de agendar.",
  }),
  createBairro('Praça Seca', 'zona-sudoeste', {
    descricao: "A Praça Seca fica em Jacarepaguá, na Zona Sudoeste do Rio, cortada pela Rua Cândido Benício e pelo BRT TransCarioca. Tem casas antigas, vilas e comércio em volta da Praça Barão da Taquara.",
    desafios: ["Rua Cândido Benício com corredor do BRT e trânsito intenso", "Vilas e ruas internas estreitas", "Comércio movimentado em volta da praça"],
    dicasEntrega: ["Não posicione a caçamba no corredor do BRT", "Para vilas, combine a caçamba na rua principal", "A caçamba de 3m³ é a mais indicada"],
    landmarks: ["Praça Barão da Taquara", "Rua Cândido Benício", "BRT TransCarioca"],
    tiposObraComuns: ["Reforma de casas antigas", "Obras em vilas", "Reformas comerciais"],
    observacoesEspecificas: "Na Praça Seca, informe se o imóvel fica perto da Cândido Benício para planejarmos a rota sem atrapalhar o BRT.",
  }),
  createBairro('Recreio dos Bandeirantes', 'zona-sudoeste', {
    descricao:
      'O Recreio dos Bandeirantes é uma região em expansão na Zona Sudoeste, com obras residenciais, condomínios e comércios em crescimento. A distância é maior, mas o acesso viário é bom.',
    desafios: [
      'Grande distância dos pátios centrais aumenta o frete',
      'Condomínios fechados exigem agendamento prévio',
      'Áreas mais afastadas podem ter prazo de entrega maior',
      'Obras residenciais de médio porte são predominantes',
    ],
    dicasEntrega: [
      'Agende com pelo menos 24h de antecedência',
      'Para condomínios, confirme horário de acesso com a portaria',
      'Caçamba de 5m³ é o tamanho mais solicitado',
      'Considere pacotes de múltiplas caçambas para obras maiores',
    ],
    precoRelativo: '20-30% acima',
    precoJustificativa:
      'O Recreio é um dos bairros com maior frete do Rio pela distância, mas o volume de obras mantém a demanda aquecida.',
    landmarks: ['Praia do Recreio', 'Avenida das Américas', 'Parque Chico Mendes', 'Praia da Macumba'],
    servicosPopulares: ['Caçamba 5m³', 'Caçamba 7m³'],
    tiposObraComuns: ['Construção de casas', 'Reformas residenciais', 'Demolições médias'],
    observacoesEspecificas:
      'A distância torna o planejamento essencial. Obras urgentes devem ser agendadas com margem de segurança.',
  }),
  createBairro('Rio das Pedras', 'zona-sudoeste', {
    descricao: "Rio das Pedras fica em Jacarepaguá, na Zona Sudoeste do Rio, entre o Itanhangá e a Gardênia Azul, com construções densas, ruas estreitas e muitas obras de ampliação.",
    desafios: ["Ruas muito estreitas e movimentadas", "Construções coladas, sem recuo", "Trânsito intenso na Estrada de Jacarepaguá"],
    dicasEntrega: ["A caçamba de 3m³ é a única opção na maioria das ruas", "Combine um ponto de entrega em via mais larga", "Agende cedo"],
    landmarks: ["Estrada de Jacarepaguá", "Divisa com Itanhangá", "Divisa com Gardênia Azul"],
    tiposObraComuns: ["Ampliação de imóveis", "Construção de lajes", "Reformas"],
    observacoesEspecificas: "Em Rio das Pedras, mande a localização pelo WhatsApp para combinarmos o ponto de entrega com acesso ao caminhão.",
  }),
  createBairro('Tanque', 'zona-sudoeste', {
    descricao: "O Tanque fica em Jacarepaguá, na Zona Sudoeste do Rio, entre a Praça Seca, a Taquara e o Pechincha, com estação do BRT TransCarioca, casas e prédios residenciais.",
    desafios: ["Corredor do BRT TransCarioca com trânsito intenso", "Ruas residenciais estreitas", "Morros e ladeiras em parte do bairro"],
    dicasEntrega: ["Evite posicionar a caçamba no corredor do BRT", "A caçamba de 3m³ facilita nas ladeiras", "Agende no início da manhã"],
    landmarks: ["BRT TransCarioca", "Divisa com Praça Seca", "Divisa com Taquara"],
    tiposObraComuns: ["Reforma de casas", "Reforma de apartamentos", "Ampliação"],
    observacoesEspecificas: "No Tanque, informe se a rua é em subida para escolhermos o melhor tamanho de caçamba.",
  }),
  createBairro('Taquara', 'zona-sudoeste', {
    descricao:
      'A Taquara é um bairro residencial da Zona Sudoeste com perfil familiar, ruas mais tranquilas e reformas residenciais frequentes. A entrega de caçamba é facilitada pelas vias de acesso.',
    desafios: [
      'Ruas residenciais podem ter estacionamento nos dois lados',
      'Trechos mais afastados exigem planejamento de rota',
      'Demanda crescente pode afetar disponibilidade em picos',
    ],
    dicasEntrega: [
      'Agende com antecedência em fins de semana e feriados',
      'Caçamba de 3m³ e 5m³ atendem a maioria das reformas',
      'Para terrenos e construções, avalie caçamba de 7m³',
    ],
    precoRelativo: '10-15% acima',
    precoJustificativa:
      'Taquara tem frete moderado pela distância da Zona Sudoeste, com acesso razoável e demanda em crescimento.',
    landmarks: ['Estrada dos Bandeirantes', 'Praça da Taquara', 'Rua Cândido Benício'],
    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
    tiposObraComuns: ['Reformas residenciais', 'Construção de casas', 'Limpeza de terreno'],
    observacoesEspecificas:
      'A proximidade com Jacarepaguá e Freguesia facilita a logística, mas a distância ainda impacta o frete.',
  }),
  createBairro('Vargem Grande', 'zona-sudoeste', {
    descricao: "Vargem Grande é um bairro da Zona Sudoeste do Rio com sítios, chácaras, condomínios e um polo gastronômico, cortado pela Estrada dos Bandeirantes e cercado pelo Maciço da Pedra Branca.",
    desafios: ["Ruas sem asfalto e estradas de terra em algumas áreas", "Alagamentos em dias de chuva forte", "Distância maior dos pátios centrais"],
    dicasEntrega: ["Informe se o acesso é de terra para avaliarmos o caminhão", "Para terrenos e construções, avalie a caçamba de 5m³ ou 7m³", "Evite agendar em dias de chuva forte"],
    landmarks: ["Estrada dos Bandeirantes", "Maciço da Pedra Branca", "Polo gastronômico de Vargem Grande"],
    tiposObraComuns: ["Construção de casas", "Limpeza de terreno", "Obras em sítios e chácaras"],
    observacoesEspecificas: "Em Vargem Grande, o tipo de acesso ao terreno define o tamanho da caçamba: mande fotos do local se puder.",
  }),
  createBairro('Vargem Pequena', 'zona-sudoeste', {
    descricao: "Vargem Pequena fica na Zona Sudoeste do Rio, entre o Recreio e Vargem Grande, com condomínios em expansão, casas e terrenos. A Estrada dos Bandeirantes é o principal acesso.",
    desafios: ["Área de baixada sujeita a alagamentos", "Condomínios novos com regras de acesso", "Estrada dos Bandeirantes com trânsito no pico"],
    dicasEntrega: ["Libere o acesso na portaria do condomínio", "Para construção, avalie a caçamba de 5m³ ou 7m³", "Evite dias de chuva forte"],
    landmarks: ["Estrada dos Bandeirantes", "Divisa com Recreio", "Divisa com Vargem Grande"],
    tiposObraComuns: ["Construção de casas", "Acabamento em condomínios novos", "Limpeza de terreno"],
    observacoesEspecificas: "Em Vargem Pequena, muitas obras são de construção do zero: combine trocas programadas da caçamba conforme o avanço da obra.",
  }),
  createBairro('Vila Valqueire', 'zona-sudoeste', {
    descricao: "Vila Valqueire é um bairro residencial da Zona Sudoeste do Rio, vizinho da Praça Seca e de Jardim Sulacap, com casas grandes, ruas arborizadas e o Valqueire Tênis Clube.",
    desafios: ["Ruas residenciais com carros estacionados", "Trânsito nas vias de ligação com a Zona Norte", "Casas com muro e portão estreito"],
    dicasEntrega: ["Para casas com quintal, avalie posicionar a caçamba no recuo", "A caçamba de 3m³ ou 5m³ atende a maioria das reformas", "Agende no início da manhã"],
    landmarks: ["Valqueire Tênis Clube", "Divisa com Praça Seca", "Divisa com Jardim Sulacap"],
    tiposObraComuns: ["Reforma de casas", "Construção e ampliação", "Limpeza de quintal"],
    observacoesEspecificas: "Em Vila Valqueire, as ruas são tranquilas e a caçamba pode ficar alguns dias sem atrapalhar o trânsito.",
  }),
];

export const bairrosPorZona = (zonaSlug: string) =>
  bairros.filter((b) => b.zonaSlug === zonaSlug);

export const bairroPorSlug = (slug: string) => bairros.find((b) => b.slug === slug);
